import { NextRequest } from 'next/server'

// СЕКРЕТЫ только из окружения. Никаких хардкод-fallback в коде/репозитории.
// Задать в .env.local (см. .env.example). Старый токен из git-истории ОТОЗВАТЬ в @BotFather.
const BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN
const CHAT_ID = process.env.TELEGRAM_CHAT_ID

type LeadBody = {
  text?: string
  parse_mode?: 'Markdown' | 'HTML'
  // honeypot: скрытое поле формы, которое заполняют только боты
  company?: string
}

// Примитивный in-memory rate limit (на инстанс). Для нескольких инстансов — вынести в Redis/Upstash.
const WINDOW_MS = 60_000
const MAX_PER_WINDOW = 5
const hits = new Map<string, { count: number; ts: number }>()

function rateLimited(ip: string): boolean {
  const now = Date.now()
  // Периодическая очистка протухших записей — чтобы Map не рос бесконечно на долгоживущем инстансе.
  if (hits.size > 1000) {
    for (const [key, value] of hits) {
      if (now - value.ts > WINDOW_MS) hits.delete(key)
    }
  }
  const rec = hits.get(ip)
  if (!rec || now - rec.ts > WINDOW_MS) {
    hits.set(ip, { count: 1, ts: now })
    return false
  }
  rec.count += 1
  return rec.count > MAX_PER_WINDOW
}

export async function POST(request: NextRequest) {
  if (!BOT_TOKEN || !CHAT_ID) {
    console.error('TELEGRAM_BOT_TOKEN / TELEGRAM_CHAT_ID не заданы в окружении')
    return Response.json({ error: 'Server misconfigured' }, { status: 500 })
  }

  const ip =
    request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
    request.headers.get('x-real-ip') ||
    'unknown'

  if (rateLimited(ip)) {
    return Response.json({ error: 'Too many requests' }, { status: 429 })
  }

  let body: LeadBody
  try {
    body = await request.json()
  } catch {
    return Response.json({ error: 'Invalid JSON' }, { status: 400 })
  }

  // Honeypot: если скрытое поле заполнено — это спам-бот. Отвечаем 200, но ничего не шлём.
  if (body.company && body.company.trim().length > 0) {
    return Response.json({ ok: true })
  }

  const text = body.text?.trim()
  if (!text) {
    return Response.json({ error: 'Message is required' }, { status: 400 })
  }

  const telegramResponse = await fetch(
    `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: CHAT_ID,
        text: text.slice(0, 4096),
        ...(body.parse_mode ? { parse_mode: body.parse_mode } : {}),
      }),
    },
  )

  const telegramData = (await telegramResponse.json()) as { ok?: boolean }

  if (!telegramResponse.ok || !telegramData.ok) {
    console.error('Telegram sendMessage failed:', telegramData)
    return Response.json({ error: 'Telegram API error' }, { status: 502 })
  }

  return Response.json({ ok: true })
}

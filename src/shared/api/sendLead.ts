export type SendLeadOptions = {
  parse_mode?: 'Markdown' | 'HTML'
}

export async function sendLeadMessage(
  text: string,
  options?: SendLeadOptions,
): Promise<void> {
  const response = await fetch('/api/lead', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      text,
      parse_mode: options?.parse_mode,
    }),
  })

  if (!response.ok) {
    const payload = (await response.json().catch(() => ({}))) as { error?: string }
    throw new Error(payload.error ?? 'Не удалось отправить заявку')
  }
}

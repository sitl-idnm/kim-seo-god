// Безопасная оптимизация тяжёлых изображений в /public БЕЗ смены путей/расширений.
// Пережимает PNG/JPG крупнее порога: ресайз до разумного макс. размера + сильное сжатие.
// Пути файлов не меняются → ни один импорт не ломается.
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import sharp from 'sharp'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const PUBLIC_DIR = path.join(__dirname, '..', '..', 'public')

const MIN_BYTES = 300 * 1024 // трогаем только файлы > 300 КБ
const MAX_DIM = 2200 // ужимаем гигантские мастера до 2200px по длинной стороне
const exts = new Set(['.png', '.jpg', '.jpeg'])

let before = 0
let after = 0
let touched = 0
let skipped = 0

function walk(dir) {
  const out = []
  for (const name of fs.readdirSync(dir)) {
    const full = path.join(dir, name)
    const st = fs.statSync(full)
    if (st.isDirectory()) out.push(...walk(full))
    else out.push(full)
  }
  return out
}

async function processFile(file) {
  const ext = path.extname(file).toLowerCase()
  if (!exts.has(ext)) return
  const st = fs.statSync(file)
  if (st.size < MIN_BYTES) return

  const input = fs.readFileSync(file)
  let img = sharp(input, { failOn: 'none' })
  const meta = await img.metadata()

  if (meta.width && meta.height) {
    const longest = Math.max(meta.width, meta.height)
    if (longest > MAX_DIM) {
      img = img.resize({
        width: meta.width >= meta.height ? MAX_DIM : undefined,
        height: meta.height > meta.width ? MAX_DIM : undefined,
        withoutEnlargement: true
      })
    }
  }

  let outBuf
  if (ext === '.png') {
    outBuf = await img.png({ compressionLevel: 9, palette: true, quality: 82, effort: 8 }).toBuffer()
  } else {
    outBuf = await img.jpeg({ quality: 80, mozjpeg: true }).toBuffer()
  }

  // Пишем только если реально стало меньше
  if (outBuf.length < st.size) {
    const tmp = file + '.tmp'
    fs.writeFileSync(tmp, outBuf)
    fs.renameSync(tmp, file)
    before += st.size
    after += outBuf.length
    touched += 1
  } else {
    skipped += 1
  }
}

const mb = (b) => (b / 1024 / 1024).toFixed(1)

const files = walk(PUBLIC_DIR)
console.log(`Сканирую ${files.length} файлов в public, порог ${MIN_BYTES / 1024} КБ...`)
for (const f of files) {
  try {
    await processFile(f)
  } catch (e) {
    console.warn('skip (error):', path.relative(PUBLIC_DIR, f), e.message)
    skipped += 1
  }
}
console.log(`Готово. Пережато файлов: ${touched}, пропущено: ${skipped}`)
console.log(`Было: ${mb(before)} МБ → стало: ${mb(after)} МБ (экономия ${mb(before - after)} МБ)`)

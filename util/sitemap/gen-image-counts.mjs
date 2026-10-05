#!/usr/bin/env node
import fs from 'fs'
import path from 'path'

function ensureDirSync(dirPath) {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true })
  }
}

function listDirsSync(dirPath) {
  try {
    return fs
      .readdirSync(dirPath, { withFileTypes: true })
      .filter((d) => d.isDirectory())
      .map((d) => d.name)
  } catch {
    return []
  }
}

function countImagesSync(dirPath) {
  const IMAGE_RE = /\.(png|jpe?g|webp|gif|svg)$/i
  try {
    return fs
      .readdirSync(dirPath, { withFileTypes: true })
      .filter((f) => f.isFile() && IMAGE_RE.test(f.name)).length
  } catch {
    return 0
  }
}

function main() {
  const root = process.cwd()
  const casesPagesDir = path.join(root, 'src', 'app', 'cases')
  const casesImageRoot = path.join(root, 'public', 'images', 'cases')
  const outDir = path.join(root, 'src', 'shared', 'generated')
  const outFile = path.join(outDir, 'sitemap-image-counts.json')

  const caseSlugs = listDirsSync(casesPagesDir).filter((name) => !name.startsWith('['))

  const cases = {}
  for (const slug of caseSlugs) {
    const imageDir = slug.replace(/-/g, '')
    const dirPath = path.join(casesImageRoot, imageDir)
    cases[slug] = countImagesSync(dirPath)
  }

  ensureDirSync(outDir)
  const payload = {
    generatedAt: new Date().toISOString(),
    cases,
  }
  fs.writeFileSync(outFile, JSON.stringify(payload, null, 2))
  console.log(`[sitemap] Wrote image counts to ${path.relative(root, outFile)}`)
}

main()

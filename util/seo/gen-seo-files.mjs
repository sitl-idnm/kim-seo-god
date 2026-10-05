#!/usr/bin/env node
import fs from 'fs'
import path from 'path'

function getBaseUrl() {
  return 'https://kim-agency.ru'
}

function ensureDirSync(dirPath) {
  if (!fs.existsSync(dirPath)) fs.mkdirSync(dirPath, { recursive: true })
}

function escapeXml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;')
}

function safeReadJson(filePath, fallback) {
  try {
    const raw = fs.readFileSync(filePath, 'utf-8')
    return JSON.parse(raw)
  } catch {
    return fallback
  }
}

function readBlogEntries(root) {
  const dataPath = path.join(root, 'src', 'shared', 'dataBlogs', 'blogs.json')
  const json = safeReadJson(dataPath, { blogs: [] })
  const blogs = Array.isArray(json.blogs) ? json.blogs : []
  return blogs
    .map((b) => ({
      slug: b?.slug ? String(b.slug) : '',
      title: b?.title ? String(b.title) : '',
      description: b?.description ? String(b.description) : '',
      date: b?.date ? String(b.date) : ''
    }))
    .filter((b) => Boolean(b.slug))
}

function getCaseSlugs(root) {
  const casesDir = path.join(root, 'src', 'app', 'cases')
  try {
    return fs
      .readdirSync(casesDir, { withFileTypes: true })
      .filter((d) => d.isDirectory())
      .map((d) => d.name)
      .filter((name) => !name.startsWith('['))
  } catch {
    return []
  }
}

function collectStaticAppRoutes(root) {
  const appDir = path.join(root, 'src', 'app')
  const routes = []

  function walk(dir, baseRoute) {
    const entries = fs.readdirSync(dir, { withFileTypes: true })
    const hasPage = entries.some((e) => e.isFile() && e.name === 'page.tsx')
    const hasRoute = entries.some((e) => e.isFile() && e.name === 'route.ts')

    if (hasPage || hasRoute) routes.push(baseRoute || '/')

    for (const entry of entries) {
      if (!entry.isDirectory()) continue
      const name = entry.name
      if (
        name.startsWith('(') ||
        name.startsWith('_') ||
        name.startsWith('[') ||
        name === 'api' ||
        (baseRoute === '/' && (name === 'sitemap.xml' || name === 'schema.json'))
      ) {
        continue
      }
      const childDir = path.join(dir, name)
      const childRoute = baseRoute === '/' ? `/${name}` : `${baseRoute}/${name}`
      walk(childDir, childRoute)
    }
  }

  walk(appDir, '/')
  return Array.from(new Set(routes)).sort()
}

function readImageCounts(root) {
  const filePath = path.join(root, 'src', 'shared', 'generated', 'sitemap-image-counts.json')
  return safeReadJson(filePath, { cases: {} })
}

function titleFromSlug(slug) {
  return String(slug)
    .split('/')
    .pop()
    .replace(/[-_]+/g, ' ')
    .trim()
    .replace(/\b\p{L}/gu, (m) => m.toUpperCase())
}

function buildSitemapXml({ baseUrl, routes, caseImageCounts }) {
  const today = new Date().toISOString().split('T')[0]

  const urlEntries = routes
    .map((routePath) => {
      const loc = `${baseUrl}${routePath === '/' ? '' : routePath}`
      const imageCount = routePath.startsWith('/cases/')
        ? caseImageCounts[(routePath.split('/').pop() || '').toString()] || 0
        : 0
      const imageCountXml = imageCount ? `\n    <image_count>${imageCount}</image_count>` : ''
      return (
        `  <url>\n` +
        `    <loc>${escapeXml(loc)}</loc>\n` +
        `    <lastmod>${today}</lastmod>\n` +
        `    <changefreq>daily</changefreq>\n` +
        `    <priority>${routePath === '/' ? '1.0' : '0.7'}</priority>\n` +
        (imageCountXml ? imageCountXml + '\n' : '') +
        `  </url>`
      )
    })
    .join('\n')

  return (
    `<?xml version="1.0" encoding="UTF-8"?>\n` +
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">\n` +
    `${urlEntries}\n` +
    `</urlset>`
  )
}

function buildSchemaJson({ baseUrl, routes, blogs, services, cases }) {
  const orgId = `${baseUrl}/#organization`
  const siteId = `${baseUrl}/#website`

  const graph = [
    {
      '@type': 'Organization',
      '@id': orgId,
      name: 'KIM Agency',
      url: baseUrl
    },
    {
      '@type': 'WebSite',
      '@id': siteId,
      url: baseUrl,
      name: 'KIM Agency',
      publisher: { '@id': orgId }
    }
  ]

  for (const routePath of routes) {
    const url = `${baseUrl}${routePath === '/' ? '' : routePath}`

    let name = routePath === '/' ? 'Главная' : titleFromSlug(routePath)
    let description = undefined

    if (routePath.startsWith('/services/')) {
      const slug = (routePath.split('/').pop() || '').toString()
      const svc = services[slug]
      if (svc?.title) name = String(svc.title)
      if (svc?.description) description = String(svc.description)
    } else if (routePath.startsWith('/blogs/')) {
      const slug = (routePath.split('/').pop() || '').toString()
      const blog = blogs.find((b) => b.slug === slug)
      if (blog?.title) name = blog.title
      if (blog?.description) description = blog.description
    } else if (routePath.startsWith('/cases/')) {
      const slug = (routePath.split('/').pop() || '').toString()
      if (cases.includes(slug)) name = `Кейс: ${titleFromSlug(slug)}`
    }

    graph.push({
      '@type': 'WebPage',
      '@id': `${url}#webpage`,
      url,
      name,
      ...(description ? { description } : {}),
      isPartOf: { '@id': siteId },
      about: { '@id': orgId }
    })
  }

  // Optional: add BlogPosting entries for better richness
  for (const b of blogs) {
    const url = `${baseUrl}/blogs/${b.slug}`
    graph.push({
      '@type': 'BlogPosting',
      '@id': `${url}#blogposting`,
      mainEntityOfPage: { '@id': `${url}#webpage` },
      headline: b.title || titleFromSlug(b.slug),
      ...(b.description ? { description: b.description } : {}),
      ...(b.date ? { datePublished: b.date } : {}),
      author: { '@id': orgId },
      publisher: { '@id': orgId }
    })
  }

  return {
    '@context': 'https://schema.org',
    '@graph': graph
  }
}

function readServicesData(root) {
  // Services data is TS; simplest reliable way is to parse slugs from folder structure.
  // Titles/descriptions are optional enrichment; we keep a small map by reading compiled JSON if exists in future.
  const servicesDir = path.join(root, 'src', 'app', 'services')
  const out = {}
  try {
    const dirs = fs
      .readdirSync(servicesDir, { withFileTypes: true })
      .filter((d) => d.isDirectory())
      .map((d) => d.name)
      .filter((name) => !name.startsWith('['))

    for (const slug of dirs) {
      const dataTs = path.join(servicesDir, slug, 'data.ts')
      if (!fs.existsSync(dataTs)) {
        out[slug] = { slug }
        continue
      }
      // Best-effort: extract title/description from TS source via regex (keeps script dependency-free).
      const src = fs.readFileSync(dataTs, 'utf-8')
      const titleMatch = src.match(/title:\s*'([^']+)'|title:\s*"([^"]+)"/)
      const descMatch = src.match(/description:\s*'([^']+)'|description:\s*"([^"]+)"/)
      out[slug] = {
        slug,
        title: (titleMatch?.[1] || titleMatch?.[2] || '').trim(),
        description: (descMatch?.[1] || descMatch?.[2] || '').trim()
      }
    }
  } catch {
    return out
  }
  return out
}

function main() {
  const root = process.cwd()
  const baseUrl = getBaseUrl()

  const staticRoutes = collectStaticAppRoutes(root)
  const blogs = readBlogEntries(root)
  const cases = getCaseSlugs(root)
  const services = readServicesData(root)

  const blogRoutes = blogs.map((b) => `/blogs/${b.slug}`)
  const caseRoutes = cases.map((slug) => `/cases/${slug}`)

  const allRoutes = Array.from(new Set([...staticRoutes, ...blogRoutes, ...caseRoutes]))
    .filter((r) => r !== '/sitemap.xml' && r !== '/schema.json')
    .sort()

  const { cases: caseCounts = {} } = readImageCounts(root)

  const schemaJson = buildSchemaJson({ baseUrl, routes: allRoutes, blogs, services, cases })

  const publicDir = path.join(root, 'public')
  ensureDirSync(publicDir)

  const schemaOut = path.join(publicDir, 'schema.json')

  fs.writeFileSync(schemaOut, JSON.stringify(schemaJson, null, 2))

  console.log(`[seo] Wrote ${path.relative(root, schemaOut)} (@graph: ${schemaJson['@graph'].length})`)
}

main()

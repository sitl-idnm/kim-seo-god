import path from 'path'
import fs from 'fs'

export const revalidate = 86400 // regenerate once per day

function getBaseUrl(): string {
	return 'https://kim-agency.ru'
}

// Дубли и технические страницы — НЕ включаем в карту (канонические версии остаются).
// Верхнеуровневые /ux-ui, /lidogeneraciya, /blog, /blogpage 301-редиректятся (см. next.config.mjs).
const EXCLUDE = new Set<string>([
	'/sitemap.xml',
	'/ux-ui',
	'/lidogeneraciya',
	'/blog',
	'/blogpage',
	'/approve',
	'/privacy-policy',
	'/vacancies',
])

function readBlogSlugs(): string[] {
	try {
		const dataPath = path.join(process.cwd(), 'src', 'shared', 'dataBlogs', 'blogs.json')
		const file = fs.readFileSync(dataPath, 'utf-8')
		const json = JSON.parse(file) as { blogs?: { slug: string }[] }
		return (json.blogs || []).map((b) => b.slug).filter(Boolean)
	} catch {
		return []
	}
}

function collectStaticAppRoutes(): string[] {
	const appDir = path.join(process.cwd(), 'src', 'app')
	const routes: string[] = []

	function walk(dir: string, baseRoute: string) {
		const entries = fs.readdirSync(dir, { withFileTypes: true })
		const hasPage = entries.some((e) => e.isFile() && e.name === 'page.tsx')
		const hasRoute = entries.some((e) => e.isFile() && e.name === 'route.ts')

		if (hasPage || hasRoute) {
			routes.push(baseRoute || '/')
		}

		for (const entry of entries) {
			if (entry.isDirectory()) {
				const name = entry.name
				if (
					name.startsWith('(') ||
					name.startsWith('_') ||
					name.startsWith('[') ||
					name === 'api' ||
					(baseRoute === '/' && name === 'sitemap.xml')
				) {
					continue
				}
				const childDir = path.join(dir, name)
				const childRoute = baseRoute === '/' ? `/${name}` : `${baseRoute}/${name}`
				walk(childDir, childRoute)
			}
		}
	}

	walk(appDir, '/')

	return Array.from(new Set(routes)).sort()
}

function getCaseSlugs(): string[] {
	const casesDir = path.join(process.cwd(), 'src', 'app', 'cases')
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

function readImageCounts() {
	try {
		const filePath = path.join(process.cwd(), 'src', 'shared', 'generated', 'sitemap-image-counts.json')
		const file = fs.readFileSync(filePath, 'utf-8')
		return JSON.parse(file) as { cases?: Record<string, number> }
	} catch {
		return { cases: {} as Record<string, number> }
	}
}

// Осмысленные priority / changefreq по типу страницы (вместо «всё 0.7 / daily»).
function routeMeta(routePath: string): { priority: string; changefreq: string } {
	if (routePath === '/') return { priority: '1.0', changefreq: 'weekly' }
	if (routePath === '/services/vnedrenie-ii') return { priority: '0.9', changefreq: 'monthly' }
	if (routePath.startsWith('/services/')) return { priority: '0.8', changefreq: 'monthly' }
	if (routePath === '/services') return { priority: '0.8', changefreq: 'monthly' }
	if (routePath.startsWith('/blogs/')) return { priority: '0.6', changefreq: 'monthly' }
	if (routePath === '/blogs') return { priority: '0.6', changefreq: 'weekly' }
	if (routePath.startsWith('/cases/')) return { priority: '0.6', changefreq: 'yearly' }
	if (routePath === '/cases') return { priority: '0.7', changefreq: 'monthly' }
	if (routePath === '/company' || routePath === '/contacts' || routePath === '/reviews')
		return { priority: '0.6', changefreq: 'monthly' }
	return { priority: '0.5', changefreq: 'monthly' }
}

function escapeXml(value: string): string {
	return value
		.replace(/&/g, '&amp;')
		.replace(/</g, '&lt;')
		.replace(/>/g, '&gt;')
		.replace(/"/g, '&quot;')
		.replace(/'/g, '&apos;')
}

export async function GET() {
	const baseUrl = getBaseUrl()
	const today = new Date().toISOString().split('T')[0]

	const staticRoutes = collectStaticAppRoutes()
	const blogSlugs = readBlogSlugs()
	const caseSlugs = getCaseSlugs()

	const blogRoutes = blogSlugs.map((slug) => `/blogs/${slug}`)
	const caseRoutes = caseSlugs.map((slug) => `/cases/${slug}`)

	const allRoutes = Array.from(
		new Set([...staticRoutes, ...blogRoutes, ...caseRoutes])
	)
		.filter((r) => !EXCLUDE.has(r))
		.sort()

	const { cases: caseCounts = {} } = readImageCounts()

	const urlEntries = allRoutes
		.map((routePath) => {
			const loc = `${baseUrl}${routePath === '/' ? '' : routePath}`
			const { priority, changefreq } = routeMeta(routePath)

			const imageCount = routePath.startsWith('/cases/')
				? caseCounts[(routePath.split('/').pop() as string) || ''] || 0
				: 0
			const imageCountXml = imageCount ? `\n    <image_count>${imageCount}</image_count>` : ''

			return (
				`  <url>\n` +
				`    <loc>${escapeXml(loc)}</loc>\n` +
				`    <lastmod>${today}</lastmod>\n` +
				`    <changefreq>${changefreq}</changefreq>\n` +
				`    <priority>${priority}</priority>\n` +
				(imageCountXml ? imageCountXml + '\n' : '') +
				`  </url>`
			)
		})
		.join('\n')

	const xml = `<?xml version="1.0" encoding="UTF-8"?>\n` +
		`<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">\n` +
		`${urlEntries}\n` +
		`</urlset>`

	return new Response(xml, {
		status: 200,
		headers: {
			'Content-Type': 'application/xml; charset=utf-8',
			'Cache-Control': 'public, s-maxage=86400, stale-while-revalidate=43200',
		},
	})
}

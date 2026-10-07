import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const stylesPath = path.join(__dirname, 'src/shared/styles')

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  sassOptions: {
    includePaths: [stylesPath],
  },
  async redirects() {
    return [
      // Консолидация дублей на канонические URL (устраняем каннибализацию)
      { source: '/blogpage', destination: '/blogs', permanent: true },
      { source: '/blog', destination: '/blogs', permanent: true },
      { source: '/blog/:slug', destination: '/blogs/:slug', permanent: true },
      { source: '/ux-ui', destination: '/services/ux-ui', permanent: true },
      { source: '/lidogeneraciya', destination: '/services/lidogeneraciya', permanent: true },
    ]
  },
  async headers() {
    // Пермиссивный CSP: сознательно широкий, чтобы НЕ сломать сайт.
    // script: 'unsafe-inline'/'unsafe-eval' нужны для инлайн-сниппета Я.Метрики и dev-рантайма Next.
    // Я.Метрика/Вебвизор: mc.yandex.ru, mc.webvisor.com. Лиды уходят через same-origin /api/lead,
    // api.telegram.org оставлен в connect/img/script как задел. *.kim.agency — поддомены (spb).
    const csp = [
      "default-src 'self'",
      "base-uri 'self'",
      "object-src 'none'",
      "frame-ancestors 'self'",
      "form-action 'self'",
      `script-src 'self' 'unsafe-inline'${process.env.NODE_ENV !== 'production' ? " 'unsafe-eval'" : ''} https://mc.yandex.ru https://mc.webvisor.com https://api.telegram.org https://*.kim.agency`,
      "style-src 'self' 'unsafe-inline'",
      "img-src 'self' data: blob: https://mc.yandex.ru https://mc.webvisor.com https://api.telegram.org https://*.kim.agency",
      "font-src 'self' data:",
      "connect-src 'self' https://mc.yandex.ru https://mc.webvisor.com https://api.telegram.org https://*.kim.agency",
      "frame-src 'self' https://mc.yandex.ru https://mc.webvisor.com",
      "media-src 'self' data: blob:",
      "worker-src 'self' blob:"
    ].join('; ')

    const securityHeaders = [
      { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
      { key: 'X-Content-Type-Options', value: 'nosniff' },
      { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
      { key: 'Content-Security-Policy', value: csp }
    ]

    return [
      {
        source: '/:path*',
        headers: securityHeaders
      },
      {
        source: '/sitemap.xml',
        headers: [
          { key: 'Content-Type', value: 'application/xml; charset=utf-8' },
          { key: 'Cache-Control', value: 'public, max-age=0, s-maxage=86400, stale-while-revalidate=43200' }
        ]
      },
      {
        source: '/schema.json',
        headers: [
          { key: 'Content-Type', value: 'application/ld+json; charset=utf-8' },
          { key: 'Cache-Control', value: 'public, max-age=0, s-maxage=86400, stale-while-revalidate=43200' }
        ]
      }
    ]
  },
  webpack(config) {
    config.resolve.alias['@'] = path.join(__dirname, 'src')
    config.resolve.alias['@styles'] = stylesPath
    config.resolve.alias['@views'] = path.join(__dirname, 'src/views')
    config.resolve.alias['@components'] = path.join(__dirname, 'src/components')
    config.resolve.alias['@modules'] = path.join(__dirname, 'src/modules')
    config.resolve.alias['@atoms'] = path.join(__dirname, 'src/shared/atoms')
    config.resolve.alias['@icons'] = path.join(__dirname, 'src/shared/assets/icons')

    const fileLoaderRule = config.module.rules.find((rule) =>
      rule.test?.test?.('.svg'),
    )

    config.module.rules.push(
      {
        ...fileLoaderRule,
        test: /\.svg$/i,
        resourceQuery: /url/, // *.svg?url
      },
      {
        test: /\.svg$/i,
        issuer: fileLoaderRule.issuer,
        resourceQuery: { not: [...fileLoaderRule.resourceQuery.not, /url/] },
        use: [{ loader: '@svgr/webpack', options: { icon: true } }]
      },
    )
    fileLoaderRule.exclude = /\.svg$/i

    return config
  },
  images: {
    unoptimized: false,
    formats: ['image/avif', 'image/webp'],
  }
};

export default nextConfig;

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
    return [
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
  }
};

export default nextConfig;

/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { ReactNode } from 'react'
import type { Metadata } from 'next'
import { Footer } from '@modules/footer'
import { Header } from '@modules/header'

import '@styles/global.scss'

import localFont from 'next/font/local'
import { Provider } from '@service/provider'
import { CookieBanner } from '@/modules/cookieBanner'
import NewModalContainer from '@/components/newModalContainer/newModalContainer'
import Script from 'next/script'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://kim-agency.ru'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default:
      'KIM.agency — внедрение AI, автоматизация и интернет-маркетинг для бизнеса'
  },
  description:
    'Внедряем ИИ и автоматизацию там, где это приносит деньги: лидогенерация, чат-боты и ИИ-агенты, маркетинг как система. Окупается изменение процесса, а не технология. Лауреат премии «Золотой Меркурий».',
  applicationName: 'KIM.agency',
  // ВРЕМЕННО (staging): сайт на согласовании — закрыт от индексации.
  // Для запуска вернуть index: true / follow: true и googleBot ниже.
  robots: {
    index: false,
    follow: false,
    googleBot: { index: false, follow: false }
  },
  openGraph: {
    type: 'website',
    locale: 'ru_RU',
    siteName: 'KIM.agency',
    url: SITE_URL,
    title: 'KIM.agency — внедрение AI и интернет-маркетинг, который приносит заявки',
    description:
      'ИИ-агенты, чат-боты, лидогенерация и маркетинг как система. Внедряем то, что даёт измеримый бизнес-результат.'
    // TODO(ТЗ): добавить OG-картинку 1200×630 в /public/og-image.jpg и указать images: ['/og-image.jpg']
  },
  twitter: {
    card: 'summary_large_image',
    title: 'KIM.agency — внедрение AI и интернет-маркетинг',
    description:
      'ИИ-агенты, чат-боты, лидогенерация и маркетинг как система для роста заявок.'
  }
}

// JSON-LD: граф сущностей сайта (Organization + WebSite + Person-основатель).
// Связывает сайт с личным брендом Константина Кима — усиливает E-E-A-T и цитируемость в ИИ-ответах.
const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': `${SITE_URL}/#organization`,
      name: 'KIM.agency',
      legalName: 'ИП Ким Константин Валерьевич',
      url: SITE_URL,
      logo: `${SITE_URL}/icons/logo.svg`,
      email: 'info@kim.agency',
      telephone: '+7-495-476-61-62',
      description:
        'Агентство комплексного интернет-маркетинга и внедрения ИИ. Бизнес-юниты: маркетинг, IT-разработка, AI-решения.',
      // TODO(ТЗ): уточнить точный адрес и добавить streetAddress/postalCode
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Москва',
        addressCountry: 'RU'
      },
      founder: { '@id': `${SITE_URL}/#konstantin-kim` },
      award:
        'Национальная премия «Золотой Меркурий» (Московская ТПП) — лучшее предприятие МСБ в сфере услуг',
      sameAs: [
        'https://t.me/kimkonstantinv',
        'https://t.me/kimagency',
        'https://vk.com/kkimagency'
      ]
    },
    {
      '@type': 'Person',
      '@id': `${SITE_URL}/#konstantin-kim`,
      name: 'Константин Ким',
      jobTitle: 'Основатель KIM.agency',
      worksFor: { '@id': `${SITE_URL}/#organization` },
      description:
        'Предприниматель, 10+ лет в маркетинге и IT, 200+ проектов. Эксперт по внедрению ИИ и автоматизации бизнес-процессов.',
      sameAs: ['https://t.me/kimkonstantinv']
    },
    {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      url: SITE_URL,
      name: 'KIM.agency',
      inLanguage: 'ru-RU',
      publisher: { '@id': `${SITE_URL}/#organization` }
    }
  ]
}

const inter = localFont({
  src: [
    {
      path: './fonts/InterTight-Regular.woff2',
      weight: '400',
      style: 'normal'
    },
    {
      path: './fonts/InterTight-Medium.woff2',
      weight: '500',
      style: 'normal'
    },
    {
      path: './fonts/InterTight-SemiBold.woff2',
      weight: '600',
      style: 'normal'
    }
  ],
  variable: '--font-inter',
  display: 'swap'
})
const manrope = localFont({
  src: [
    {
      path: './fonts/Manrope-Regular.woff2',
      weight: '400',
      style: 'normal'
    },
    {
      path: './fonts/Manrope-Medium.woff2',
      weight: '500',
      style: 'normal'
    },
    {
      path: './fonts/Manrope-SemiBold.woff2',
      weight: '600',
      style: 'normal'
    }
  ],
  variable: '--font-manrope',
  display: 'swap',
  preload: false
})

export default function RootLayout({
  children
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <html lang="ru">
      <body className={`${inter.variable} ${manrope.variable}`}>
        <Script
          id="organization-jsonld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <Provider>
          <div id="root">
            <Header />
            {children}
            <CookieBanner />
            <Footer />
          </div>

          <div id="modal-root" />
          {/* Единое глобальное монтирование модалок — работают на ВСЕХ маршрутах */}
          <NewModalContainer />
        </Provider>

        <Script
          id="ym-loader"
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: `(function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0];k.async=1;k.src=r;a.parentNode.insertBefore(k,a)})(window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");ym(105250589, "init", { ssr:true, webvisor:true, clickmap:true, ecommerce:"dataLayer", accurateTrackBounce:true, trackLinks:true });`
          }}
        />
        <noscript>
          <div>
            <img src="https://mc.yandex.ru/watch/105250589" style={{ position: 'absolute', left: '-9999px' }} alt="" />
          </div>
        </noscript>
      </body>
    </html>
  )
}

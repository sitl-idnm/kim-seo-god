import { getServiceData } from '@/shared/dataServices'
import type { Metadata } from 'next'
import Script from 'next/script'
import { LidogeneraciyaPageView } from '@/views/lidogeneraciyaPage'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://kim-agency.ru'
const PAGE_URL = `${SITE_URL}/services/lidogeneraciya`

// JSON-LD как у остальных услуг (Service + Offer + BreadcrumbList) — закрываем SEO-пробел.
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      '@id': `${PAGE_URL}#service`,
      name: 'Лидогенерация',
      serviceType: 'Генерация B2B-лидов и привлечение заявок',
      description:
        'Лидогенерация под задачу бизнеса: живые целевые лиды без переплаты за клики, гарантия эксклюзива, дозвон до 85%. Первые диалоги через 3–5 дней.',
      provider: { '@id': `${SITE_URL}/#organization` },
      areaServed: 'Россия',
      offers: {
        '@type': 'Offer',
        price: '100000',
        priceCurrency: 'RUB',
        description: 'Лидогенерация под ключ, от 100 000 ₽'
      }
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Главная', item: SITE_URL },
        { '@type': 'ListItem', position: 2, name: 'Услуги', item: `${SITE_URL}/services` },
        { '@type': 'ListItem', position: 3, name: 'Лидогенерация', item: PAGE_URL }
      ]
    }
  ]
}

export async function generateMetadata(): Promise<Metadata> {
  const serviceData = getServiceData('lidogeneraciya')
  return {
    title: 'Лидогенерация — лиды без переплаты за клики | K.KIM',
    description:
      serviceData?.description ||
      'Живые лиды без переплаты за клики. Гарантия эксклюзива. Дозвон до 85%.',
    keywords: ['лидогенерация', 'лиды', 'B2B', 'холодные звонки', 'K.KIM'].filter(Boolean),
    alternates: { canonical: '/services/lidogeneraciya' }
  }
}

export default function LidogeneraciyaPage() {
  const serviceData = getServiceData('lidogeneraciya')

  if (!serviceData) {
    return null
  }

  return (
    <>
      <Script
        id="lidogeneraciya-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <LidogeneraciyaPageView />
    </>
  )
}

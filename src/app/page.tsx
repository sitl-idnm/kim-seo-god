import type { Metadata } from 'next'
import { HomeView } from '@views/home'

export const metadata: Metadata = {
  title: 'Интернет-маркетинг в Москве — K.KIM Agency',
  description: 'K.KIM — агентство комплексного интернет-маркетинга. Разработка сайтов, SEO, SMM, performance-кампании. 150+ проектов, 10000+ лидов. Получите консультацию.',
  alternates: { canonical: '/' }
}

export default function Home() {
  return <HomeView />
}

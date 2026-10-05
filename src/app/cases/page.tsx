import CasesPage from '@views/casesPage'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Кейсы и портфолио — K.KIM Agency',
  description: 'Реальные кейсы K.KIM: разработка сайтов, SEO, контент-маркетинг. SweetCorp, Best Wave, ClientPulse, Magiya Vkusa, Rovnaya Spina. Изучите портфолио.',
  alternates: { canonical: '/cases' }
}

export default function Home() {
  return <CasesPage />
}

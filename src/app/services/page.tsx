import type { Metadata } from 'next'
import ServicePage from '@views/servicePage'

export const metadata: Metadata = {
  title: 'Услуги интернет-маркетинга — SEO, SMM, дизайн | K.KIM',
  description: 'SEO, веб-дизайн, SMM, SERM, чат-боты. Комплексные digital-решения для бизнеса в Москве и России. Закажите консультацию у K.KIM.',
  alternates: { canonical: '/services' }
}

export default function Home() {
  return <ServicePage />
}

import WorkUsPage from '@views/workUsPage'
import type { Metadata } from 'next'


export const metadata: Metadata = {
  title: 'Заказать услуги интернет-маркетинга — K.KIM',
  description: 'Закажите интернет-маркетинг, разработку сайта или SEO у K.KIM. Бесплатная консультация. Работаем по всей России.',
  alternates: { canonical: '/work' }
}

export default function Home() {
  return <WorkUsPage />
}

import Company from '@views/company'
import type { Metadata } from 'next'


export const metadata: Metadata = {
  title: 'О маркетинговом агентстве K.KIM',
  description: 'История K.KIM: 15 сотрудников, 5 отделов, 150+ проектов. Digital-решения для бизнеса с 2023 года. Запишитесь на консультацию.',
  alternates: { canonical: '/company' }
}

export default function Home() {
  return <Company />
}

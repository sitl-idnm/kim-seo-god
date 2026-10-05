import { getServiceData } from '@/shared/dataServices'
import type { Metadata } from 'next'
import { LidogeneraciyaPageView } from '@/views/lidogeneraciyaPage'

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

  return <LidogeneraciyaPageView />
}

import type { Metadata } from 'next'
import { LidogeneraciyaPageView } from '@/views/lidogeneraciyaPage'

export const metadata: Metadata = {
  title: 'Лидогенерация — лиды без переплаты за клики | K.KIM',
  description: 'Живые лиды без переплаты за клики. Гарантия эксклюзива. Дозвон до 85%.',
  keywords: ['лидогенерация', 'лиды', 'B2B', 'холодные звонки', 'K.KIM']
}

export default function LidogeneraciyaDuplicatePage() {
  return <LidogeneraciyaPageView />
}

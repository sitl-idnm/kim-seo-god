import SweetCorpPage from '@views/casesPage/cases/sweetCorpPage'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Кейс: сайт Sweet Corp с конверсией 4,3% | K.KIM',
  description: 'Сайт для производителя новогодних подарков. B2B и B2C сегменты, высокий процент конверсии. Кейс K.KIM.',
  alternates: { canonical: '/cases/sweetcorp' }
}

export default function Home() {
  return <SweetCorpPage />
}

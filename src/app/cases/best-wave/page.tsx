import BestWavePage from '@views/casesPage/cases/bestWavePage'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Кейс: лендинг Best Wave для серф-клуба | K.KIM',
  description: 'Разработка одностраничного сайта для серф-клуба Best Wave в Москве. Аренда вейксерфов и электродосок на Тильде. Кейс K.KIM.',
  alternates: { canonical: '/cases/best-wave' }
}

export default function Home() {
  return <BestWavePage />
}

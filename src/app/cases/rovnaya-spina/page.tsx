import RovnayaSpinaPage from '@views/casesPage/cases/rovnayaSpinaPage'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Кейс: сайт оздоровительного центра «Ровная спина» | K.KIM',
  description: 'Многостраничный сайт на WordPress с онлайн-записью и SEO. 130+ городов, 8 стран. Кейс K.KIM.',
  alternates: { canonical: '/cases/rovnaya-spina' }
}

export default function Home() {
  return <RovnayaSpinaPage />
}

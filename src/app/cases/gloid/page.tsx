import GloidPage from '@views/casesPage/cases/gloidPage'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Кейс: англоязычный лендинг приложения Gloid | K.KIM',
  description: 'Разработка сайта для приложения двухфакторной аутентификации на Webflow. Современный дизайн, демонстрация интерфейса. Кейс K.KIM.',
  alternates: { canonical: '/cases/gloid' }
}

export default function Home() {
  return <GloidPage />
}

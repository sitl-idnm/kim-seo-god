import type { Metadata } from 'next'
import PrivacyPage from '@views/privacyPage'

export const metadata: Metadata = {
  title: 'Политика конфиденциальности — K.KIM',
  description: 'Политика обработки персональных данных на сайте K.KIM Agency. Информация о защите ваших данных.'
}

export default function Home() {
  return <PrivacyPage />
}

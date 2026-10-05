import ApprovePage from '@views/approvePage'
import type { Metadata } from 'next'


export const metadata: Metadata = {
  title: 'Подтверждение — K.KIM',
  description: 'Подтверждение подписки или заявки на сайте K.KIM Agency.'
}

export default function Home() {
  return <ApprovePage />
}

import ContactsPage from '@views/contactsPage'
import type { Metadata } from 'next'


export const metadata: Metadata = {
  title: 'Контакты — K.KIM Agency',
  description: 'Свяжитесь с маркетинговым агентством K.KIM в Москве. Форма обратной связи, контакты основателей. Ответим в ближайшее время.',
  alternates: { canonical: '/contacts' }
}

export default function Home() {
	return <ContactsPage />
}

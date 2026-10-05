import Vacancies from '@views/vacancies'
import type { Metadata } from 'next'


export const metadata: Metadata = {
  title: 'Вакансии в K.KIM Agency',
  description: 'Работа в маркетинговом агентстве: удалённый формат, молодая команда. Дизайн, разработка, маркетинг. Оставьте заявку.'
}

export default function Home() {
	return <Vacancies />
}

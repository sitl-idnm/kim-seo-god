import { getServiceData } from '@/shared/dataServices'
import type { Metadata } from 'next'
import { UxUiPageView } from '@/views/uxUiPage'

export async function generateMetadata(): Promise<Metadata> {
  const serviceData = getServiceData('ux-ui')
  return {
    title: 'UI & UX дизайн от K.KIM — заказать проектирование интерфейса',
    description:
      serviceData?.description ||
      'Создаем интерфейсы, которые упрощают путь пользователя и повышают конверсию. UI/UX дизайн под бизнес-задачи.',
    keywords: ['ui ux дизайн', 'дизайн интерфейсов', 'ux ui', 'проектирование интерфейса', 'K.KIM'].filter(Boolean),
    alternates: { canonical: '/services/ux-ui' }
  }
}

export default function UxUiServicePage() {
  const serviceData = getServiceData('ux-ui')

  if (!serviceData) {
    return null
  }

  return <UxUiPageView />
}

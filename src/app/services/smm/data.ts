import { ServiceData } from '@/shared/types/services'

export type { ServiceData }

export const smmData: ServiceData = {
  id: 'smm-promotion',
  slug: 'smm',
  title: 'SMM продвижение',
  description:
    'Продвижение бренда в социальных сетях под задачу бизнеса: контент-стратегия, упаковка сообществ, таргетированная реклама и аналитика. Выстраиваем системное ведение соцсетей, которое приводит подписчиков, заявки и продажи.',
  price: 'от 40 000 ₽',
  categoryId: 'marketing',
  features: [
    'Анализ целевой аудитории и конкурентов',
    'Разработка контент-стратегии и контент-плана',
    'Упаковка и оформление сообществ',
    'Регулярное ведение социальных сетей',
    'Таргетированная реклама и работа с бюджетом',
    'Работа с сообществом и блогерами',
    'Аналитика и отчётность по результатам'
  ],
  technologies: [
    'ВКонтакте',
    'Telegram',
    'VK Реклама',
    'Яндекс Директ',
    'Senler',
    'Системы аналитики'
  ],
  uiConfig: {
    accent: '#FF7A1A',
    accentSoft: '#FFF1E6',
    heroVariant: 'bold',
    heroEyebrow: 'Соцсети под заявки',
    // Соцсети — про аудиторию и сообщество: клиенты и отзывы выше, кейсы ближе к концу.
    order: [
      'intro',
      'about',
      'solutions',
      'includes',
      'consult',
      'process',
      'clients',
      'stats',
      'pricing',
      'cases',
      'reviews',
      'faq',
      'finalForm'
    ]
  }
}

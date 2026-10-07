import { ServiceData } from '@/shared/types/services'

export const sermData: ServiceData = {
  id: 'serm-management',
  slug: 'serm',
  title: 'SERM',
  description:
    'Управляем репутацией бренда в поиске: отслеживаем упоминания, работаем с негативом и формируем позитивную выдачу по брендовым запросам, чтобы клиент видел объективную картину о компании',
  price: 'от 60 000 ₽',
  categoryId: 'marketing',
  features: [
    'Мониторинг упоминаний бренда в реальном времени',
    'Работа с негативом и отработка отзывов',
    'Вытеснение негатива из топа выдачи',
    'Формирование позитивного контента и отзывов',
    'Работа с отзовиками, картами и агрегаторами',
    'Прозрачная аналитика и отчётность по тональности'
  ],
  technologies: [
    'Brand Analytics',
    'YouScan',
    'Яндекс.Карты / Google Карты',
    'Отзовики (Яндекс Отзывы, Otzovik, Flamp, 2ГИС)',
    'Поисковая выдача Яндекс и Google'
  ],
  uiConfig: {
    accent: '#00A2B8',
    accentSoft: '#E6F6F9',
    heroVariant: 'minimal',
    heroEyebrow: 'Репутация бренда',
    // Репутация — про доверие: FAQ и объяснение процесса выше, сдержанный минималистичный герой.
    order: [
      'intro',
      'about',
      'process',
      'solutions',
      'includes',
      'pricing',
      'stats',
      'consult',
      'faq',
      'cases',
      'clients',
      'reviews',
      'finalForm'
    ]
  }
}

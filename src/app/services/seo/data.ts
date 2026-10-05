import { ServiceData } from '@/shared/types/services'

export const seoData: ServiceData = {
  id: 'seo-optimization',
  slug: 'seo',
  title: 'SEO оптимизация',
  description:
    'Комплексное продвижение сайта в Яндексе и Google: технический аудит, семантика, on-page оптимизация и контент. Работаем на рост органического трафика и заявок, а не на разовый всплеск позиций.',
  price: 'от 50 000 ₽',
  categoryId: 'traffic',
  features: [
    'Технический аудит и устранение ошибок индексации',
    'Сбор и кластеризация семантического ядра',
    'On-page оптимизация: мета-теги, заголовки, структура',
    'Внутренняя перелинковка и архитектура URL',
    'Создание и оптимизация контента под запросы',
    'Наращивание ссылочной массы и улучшение Core Web Vitals'
  ],
  technologies: [
    'Яндекс.Вебмастер',
    'Google Search Console',
    'Яндекс.Метрика',
    'Google Analytics',
    'Screaming Frog',
    'Ahrefs',
    'Key Collector'
  ]
}

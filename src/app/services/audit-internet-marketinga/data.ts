import { ServiceData } from '@/shared/types/services'

export const auditInternetMarketingData: ServiceData = {
  id: 'audit-internet-marketing',
  slug: 'audit-internet-marketinga',
  title: 'Аудит интернет-маркетинга',
  description: 'Комплексный аудит каналов продвижения, сайта, аналитики и воронки продаж',
  price: 'от 30 000 ₽',
  categoryId: 'marketing',
  features: [
    'Проверка рекламных каналов и эффективности трафика',
    'Аудит SEO-стратегии и структуры сайта',
    'Анализ аналитики и воронки продаж',
    'Выявление точек роста и слабых мест',
    'Подробный отчет с приоритетным планом действий'
  ],
  technologies: [
    'Яндекс.Метрика',
    'Google Analytics',
    'Google Search Console',
    'Looker Studio'
  ]
}

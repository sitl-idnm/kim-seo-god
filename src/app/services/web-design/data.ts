import { ServiceData } from '@/shared/types/services'

export const webdesignData: ServiceData = {
  id: 'web-design',
  slug: 'web-design',
  title: 'Веб-дизайн',
  description:
    'Проектируем дизайн сайтов под задачи бизнеса: UX-исследование, прототип, UI-макеты и адаптив под все устройства. Делаем сайт, который понятен пользователю и приводит заявки',
  price: 'от 80 000 ₽',
  categoryId: 'design',
  features: [
    'UX-исследование и аналитика',
    'Прототипирование и структура',
    'UI-дизайн интерфейса',
    'Адаптив под мобильные и десктоп',
    'Дизайн-система и UI-kit',
    'Редизайн существующего сайта'
  ],
  technologies: [
    'Figma',
    'FigJam',
    'Adobe Photoshop',
    'Adobe Illustrator',
    'Tilda',
    'Framer'
  ]
}

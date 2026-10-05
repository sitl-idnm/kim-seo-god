import { ServiceData } from '@/shared/types/services'

export const uxUiData: ServiceData = {
  id: 'ux-ui',
  slug: 'ux-ui',
  title: 'UI/UX дизайн',
  description:
    'Проектируем интерфейсы, которые помогают пользователям быстрее принимать решения и повышают конверсию бизнеса.',
  price: 'от 40 000 ₽',
  categoryId: 'design',
  features: [
    'Исследование поведения пользователей и ключевых сценариев',
    'Прототипирование структуры страниц и экранов',
    'Создание визуальной концепции и design-системы',
    'Адаптация под мобильные и десктопные устройства',
    'Подготовка макетов к передаче в разработку'
  ],
  technologies: ['Figma', 'Tilda', 'Freepik']
}

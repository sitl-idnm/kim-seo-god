import { ServiceData } from '@/shared/types/services'
import { WhyItemData } from '@/modules/why/why.types'

export const razrabotkaMobilnogoPrilozheniyaData: ServiceData = {
  id: 'razrabotka-mobilnogo-prilozheniya',
  slug: 'razrabotka-mobilnogo-prilozheniya',
  title: 'Разработка мобильного приложения',
  description:
    'KIM Agency помогает бизнесу сделать удобное приложение без разработки с нуля. Если нужно создать мобильное приложение для сайта, мы оцениваем задачи, аудиторию, интеграции и подбираем формат: нативная разработка, PWA или конструктор.',
  price: 'от 400 000 ₽',
  categoryId: 'development',
  features: [
    'Старт с MVP без лишних трат',
    'Единая архитектура с сайтом',
    'Полный цикл под ключ',
    'Работа с платформами и технологиями',
    'Опыт 150+ проектов',
    'Прозрачный процесс'
  ],
  technologies: [
    'Flutter',
    'React Native',
    'Swift',
    'Kotlin',
    'FastAPI',
    'Node.js',
    'PostgreSQL',
    'Firebase',
    'REST API',
    'Figma',
    'Метрика',
    'Roistat'
  ]
}

export const faqData = [
  {
    title: 'Сколько времени занимает разработка?',
    content:
      'Срок зависит от объёма проекта. В среднем на реализацию уходит от 14 дней. В работу обычно входят аналитика, прототип, дизайн, разработка, тестирование и публикация. После оценки задачи мы формируем понятный план и сроки.'
  },
  {
    title: 'Можно ли сначала сделать MVP?',
    content:
      'Да. Мы запускаем базовую версию, собираем данные, дорабатываем только то, что работает, не затрачивая лишний бюджет.'
  },
  {
    title: 'Вы разрабатываете приложения для iOS и Android?',
    content: 'Да, мы создаём приложения для iOS и Android.'
  }
]

export const stagesItems: Omit<WhyItemData, 'icon'>[] = [
  { title: '1. Брифинг и оценка идеи', description: '' },
  { title: '2. UX-прототип и дизайн', description: '' },
  { title: '3. Разработка, тестирование, релиз', description: '' },
  { title: '4. Поддержка и развитие', description: '' }
]

export const advantagesItems: Omit<WhyItemData, 'icon'>[] = [
  {
    title:
      'Старт с MVP без лишних трат — запускаем базовую версию под iOS и Android, собираем данные и дорабатываем только то, что реально нужно пользователям.',
    description: ''
  },
  {
    title:
      'Единая архитектура с сайтом — если приложение нужно связать с уже работающим сайтом, мы заранее продумываем обмен данными, чтобы не переделывать интеграции потом.',
    description: ''
  },
  {
    title:
      'Полный цикл под ключ — от аналитики и прототипа до публикации в App Store и Google Play и пост-релизной поддержки.',
    description: ''
  },
  {
    title:
      'Работа с платформами и технологиями — Swift, Kotlin, Flutter, React Native, Node.js, Firebase, REST API и другие современные инструменты.',
    description: ''
  },
  {
    title:
      'Опыт 150+ проектов — среди клиентов есть интернет-магазины, сервисы, медицинские центры и производственные компании.',
    description: ''
  },
  {
    title:
      'Прозрачный процесс — фиксируем этапы, сроки и бюджет, чтобы вы понимали, за что платите.',
    description: ''
  }
]

export const whatsIncludedText =
  'В разработку входит аналитика, прототип, дизайн, backend, интеграции, публикация в iOS (App Store) и Android (Google Play) и поддержка после релиза. Если нужно связать приложение и сайт, мы заранее продумываем архитектуру и обмен данными. Создание продукта может включать оплату, уведомления, CRM, аналитику и помощь менеджера. Также можем создавать дополнительные модули под задачи бизнеса.'

export const technologiesText =
  'Flutter, React Native, Swift, Kotlin, FastAPI, Node.js, PostgreSQL, Firebase, REST API, Figma, Метрика, Roistat.'

export const pricingText =
  'Стоимость услуги начинается от 400 000 ₽ и зависит от сложности проекта.'

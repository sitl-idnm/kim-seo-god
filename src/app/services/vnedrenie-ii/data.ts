export interface ServiceData {
  slug: string
  title: string
  description: string
  price: string
  features?: string[]
  technologies?: string[]
}

export const vnedrenieIiData: ServiceData = {
  slug: 'vnedrenie-ii',
  title: 'Внедрение ИИ и ИИ-агентов в бизнес',
  description:
    'Внедряем искусственный интеллект там, где он приносит деньги: автоматизируем повторяющиеся процессы, собираем ИИ-агентов под задачу и считаем эффект до старта',
  price: 'от 150 000 ₽',
  features: [
    'Диагностика процесса до старта',
    'Пилот за 2–4 недели с замером эффекта',
    'ИИ-агенты под конкретную задачу',
    'Человек остаётся в контуре проверки',
    'Интеграция с CRM и мессенджерами'
  ],
  technologies: [
    'LLM и компактные SLM-модели',
    'Telegram / MAX / ВКонтакте',
    'CRM (Bitrix24, amoCRM)',
    'REST API, вебхуки',
    'Сценарии автоматизации (n8n)'
  ]
}

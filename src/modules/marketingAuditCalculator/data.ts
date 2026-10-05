import { MarketingAuditCalculatorStep } from './marketingAuditCalculator.types'

export const MARKETING_AUDIT_CALCULATOR_TITLE = 'Калькулятор стоимости'

export const MARKETING_AUDIT_CALCULATOR_SUBTITLE =
  'Вы можете предварительно рассчитать стоимость, ответив на несколько вопросов.'

export const marketingAuditCalculatorSteps: MarketingAuditCalculatorStep[] = [
  {
    id: 1,
    question: 'Тип проекта',
    options: ['Корпоративный сайт', 'Интернет-магазин', 'Сервис или онлайн-платформа']
  },
  {
    id: 2,
    question: 'Количество рекламных каналов',
    options: ['1-2', '3-5', 'более 5']
  },
  {
    id: 3,
    question: 'Глубина анализа',
    options: ['Базовый', 'Расширенный', 'Комплексный']
  },
  {
    id: 4,
    type: 'form',
    question: 'Оставить заявку',
    description:
      'Если вы хотите понять, как работает ваш маркетинг и какие изменения помогут увеличить поток клиентов, оставьте заявку на проведение аудита. Наши специалисты изучат все каналы и текущую стратегию продвижения. Затем вы получите подробный отчет с рекомендациями по улучшению эффективности.'
  }
]

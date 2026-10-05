export interface CaseLeadgenItem {
  /** Основной заголовок кейса (без локации/сегмента) */
  title: string
  /** Шильдик: город, сегмент или тип (визуально отделённая метка) */
  badge: string
  task: string
  approach: string
  result: string
  imageSrc?: string
}

export interface CaseLeadgenProps {
  className?: string
  /** id для якорной ссылки (например #cases) */
  id?: string
  /** Заголовок блока */
  title?: string
  /** Подзаголовок */
  subtitle?: string
  /** Строка категорий (например через слэш) */
  categories?: string
  /** Кейсы */
  items?: CaseLeadgenItem[]
  /** Текст кнопки CTA */
  actionButtonText?: string
  /** Ссылка кнопки (якорь на форму) */
  actionButtonHref?: string
}

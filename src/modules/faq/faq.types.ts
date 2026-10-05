export interface FaqItem {
  title: string
  content: string
  /** Пункты списка (отображаются в плашках после content) */
  listItems?: string[]
  /** Текст после списка */
  contentAfter?: string
}

export interface FaqProps {
  className?: string
  faqData: FaqItem[]
  title?: string
}

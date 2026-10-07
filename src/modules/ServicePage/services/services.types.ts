export type ServiceCategoryId = 'marketing' | 'design' | 'traffic' | 'development' | 'ai'

export interface ServicesProps {
  className?: string
  hasCost?: boolean
  showDescription?: boolean
  showSubtitle?: boolean
  descriptionText?: string
  categoryId?: ServiceCategoryId
  isTab?: boolean
  title?: string
  excludeCurrentPage?: boolean
  // Показать панель фильтра по категориям (Все + категории)
  filterable?: boolean
}

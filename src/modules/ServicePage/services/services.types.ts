export interface ServicesProps {
  className?: string
  hasCost?: boolean
  showDescription?: boolean
  showSubtitle?: boolean
  descriptionText?: string
  categoryId?: 'marketing' | 'design' | 'traffic' | 'development'
  isTab?: boolean
  title?: string
  excludeCurrentPage?: boolean
}

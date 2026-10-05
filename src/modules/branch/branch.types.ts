import { ReactNode } from "react"

export interface BranchItemData {
  title: string
  backgroundColor: string
  textColor: string
  linkText: string
  linkColor: string
  list?: string[]
  imageSrc?: string
  /** Сноска внутри карточки (другой фон). Опционально. */
  footer?: string[]
  footerTitle?: string
}

export interface BranchProps {
  title?: string | ReactNode
  className?: string
  branchData?: BranchItemData[]
  showTitle?: boolean
  itemsPerRow?: 2 | 3 | 4
  listJustifyContent?: 'flex-start' | 'center' | 'flex-end'
  listAlignItems?: 'flex-start' | 'center' | 'flex-end'
  listFlexDirection?: 'row' | 'column'
  isTitleLeft?: boolean
  /** Кнопка под блоком (например, переход к форме или открытие модалки). Опционально. */
  actionButton?: { label: string; href: string } | ReactNode
}

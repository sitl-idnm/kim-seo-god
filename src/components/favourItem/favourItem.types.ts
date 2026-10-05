import type { ReactNode } from 'react'

export interface FavourItemProps {
  className?: string
  /** Заголовок карточки (строка или JSX, например с <br />) */
  title: ReactNode
  /** Имя модалки для открытия по клику (если не задано и title — строка, используется title) */
  modalName?: string
  text?: string
  linkText: string
  linkColor: string
  backgroundColor: string
  textColor: string
  imageSrc?: string
  list?: string[]
  isTitleLeft?: boolean
  justifyContent?: 'flex-start' | 'center' | 'flex-end'
  alignItems?: 'flex-start' | 'center' | 'flex-end'
  flexDirection?: 'row' | 'column'
  /** Сноска внутри карточки (другой фон). Опционально. */
  footer?: string[]
  footerTitle?: string
}

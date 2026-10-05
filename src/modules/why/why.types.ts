import { ReactNode } from 'react'

export interface WhyItemData {
  icon: ReactNode
  title: string | ReactNode
  description?: string | ReactNode
}

type FlexDirection = 'row' | 'column'
type FlexAlignment = 'start' | 'center' | 'end'
type CardsPerRow = 2 | 3 | 4

export interface WhyProps {
  className?: string
  counter?: boolean
  direction?: FlexDirection
  titleJustify?: FlexAlignment
  titleAlign?: FlexAlignment
  itemsData?: WhyItemData[]
  cardsPerRow?: CardsPerRow
  title?: string
  showTitle?: boolean
  titleTextAlign?: 'left' | 'center' | 'right'
  /** Опциональный блок под карточками (например кнопка), только на нужных страницах */
  action?: ReactNode
}

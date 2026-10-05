import type { ReactNode } from 'react'

export interface FavourItemData {
  title: ReactNode
  text?: string
  linkText: string
  linkColor: string
  backgroundColor: string
  textColor: string
  imageSrc?: string
  /** Имя модалки при клике (нужно, если title — JSX) */
  modalName?: string
  imageTitle?: string
}

export interface FavourProps {
  className?: string
  itemsData?: FavourItemData[]
}

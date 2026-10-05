import { ReactNode } from 'react'

export interface CardListItemProps {
  className?: string
  icon?: ReactNode
  title?: string
  description?: string
  items?: {
    title: string
    description: string
  }[]
}

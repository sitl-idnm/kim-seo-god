import { ReactNode } from 'react'

export interface TextFormProps {
  className?: string
  title?: ReactNode
  paragraph?: ReactNode
  /** Пункты списка (отображаются под paragraph в плашках) */
  listItems?: string[]
  /** Текст после списка (например «Свяжемся с вами в течение 1 часа.») */
  listClosing?: string
}

import { ReactNode } from 'react'

export interface StandartTextProps {
  className?: string
  title?: string
  texts: Array<string | ReactNode>
  footerTexts?: Array<string | ReactNode>
  listTitle?: string
  listItems?: string[]
  marginBottom?: boolean
  marginTop?: boolean
}

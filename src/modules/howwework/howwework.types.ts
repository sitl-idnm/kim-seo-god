import { ReactNode } from 'react'

export interface Step {
  number: number
  title: ReactNode
  description?: string
}

export interface HowWeWorkProps {
  className?: string
  steps?: Step[]
  title?: string
  hasTopPadding?: boolean
  hasBottomPadding?: boolean
}

import { ReactNode } from 'react'

export interface IntroduceProps {
  className?: string
  title: ReactNode
  hasTypingSpan?: boolean
  wordsArray?: string[]
  typingInterval?: number
  titleVariant?: 'large' | 'medium'
  buttonText?: string
  hasButton?: boolean
  buttonPosition?: 'left' | 'center' | 'right'
  titleTag?: 'h1' | 'h2' | 'h3'
  description?: string
  margin?: 'auto' | 'none'
  descriptionAlign?: 'left' | 'center' | 'right'
}

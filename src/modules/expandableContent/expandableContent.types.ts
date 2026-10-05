import { ReactNode } from 'react'

export type ExpandableSection = {
  heading: string
  paragraphs?: string[]
}

export type ExpandableContentProps = {
  className?: string
  title: string
  intro: string
  first: ExpandableSection
  second: ExpandableSection
  firstCards?: ReactNode
  secondCards?: ReactNode
}

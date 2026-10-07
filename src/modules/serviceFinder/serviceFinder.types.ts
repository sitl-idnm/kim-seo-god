export interface ServiceFinderProps {
  className?: string
}

export type FinderStepId = 'business' | 'goal' | 'budget'

export interface FinderOption {
  id: string
  label: string
}

export interface FinderStep {
  id: FinderStepId
  question: string
  options: FinderOption[]
}

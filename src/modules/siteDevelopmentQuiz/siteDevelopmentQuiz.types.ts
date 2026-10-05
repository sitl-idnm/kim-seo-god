export interface SiteDevelopmentQuizStep {
  id: number
  question: string
  options?: string[]
  type?: 'form'
}

export interface SiteDevelopmentQuizProps {
  className?: string
}

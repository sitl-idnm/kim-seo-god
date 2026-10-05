export interface MarketingAuditCalculatorStep {
  id: number
  question: string
  options?: string[]
  type?: 'form'
  description?: string
}

export interface MarketingAuditCalculatorProps {
  className?: string
}

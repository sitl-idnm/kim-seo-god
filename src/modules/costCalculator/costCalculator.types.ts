export interface CostCalculatorCard {
  title: string
  items: string[]
}

export interface CostCalculatorProps {
  className?: string
  title?: string
  text?: string
  cards: CostCalculatorCard[]
}

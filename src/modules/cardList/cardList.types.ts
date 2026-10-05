interface CardItem {
  title: string
  description: string
}

export interface CardListProps {
  className?: string
  title?: string
  subtitle?: string
  problem?: {
    title: string
    description: string
  }
  solution?: {
    title: string
    description: string
    items: CardItem[]
  }
  result?: {
    title: string
    description: string
  }
}

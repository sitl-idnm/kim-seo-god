export type ServiceCategory = {
  id: string
  name: string
  slug: string
  title: string
  description?: string
}

export type ServiceData = {
  id: string
  slug: string
  title: string
  description: string
  price: string
  categoryId: 'marketing' | 'design' | 'traffic' | 'development'
  features?: string[]
  technologies?: string[]
}

export type ServicesData = {
  categories: ServiceCategory[]
  services: ServiceData[]
}

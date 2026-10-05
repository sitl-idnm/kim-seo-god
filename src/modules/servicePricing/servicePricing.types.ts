export interface ServicePricingBadge {
  label: string
  value: string
}

export interface ServicePricingProps {
  className?: string
  title?: string
  text?: string
  badges: ServicePricingBadge[]
  buttonText?: string
  buttonHref?: string
  buttonModalKey?: string
}

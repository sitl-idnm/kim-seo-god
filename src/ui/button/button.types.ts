import { ComponentProps, ElementType, ReactNode } from 'react'

type ButtonOwnProps<E extends ElementType = ElementType> = {
  as?: E
  tag?: E
  isRouteLink?: boolean
  size?: string
  className?: string
  children?: string | ReactNode
  onClick?: () => void
  maxWidth?: string
  href?: string
}

export type ButtonProps<E extends ElementType> = ButtonOwnProps<E> &
  Omit<ComponentProps<E>, keyof ButtonOwnProps>

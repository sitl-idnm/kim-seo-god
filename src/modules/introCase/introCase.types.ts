import { ReactNode } from 'react'

export interface IntroCaseProps {
  className?: string
  backgroundImage: string
  title: string
  text: string | ReactNode | ReactNode[]
  buttonLink: string
  description: string
  tilda: boolean
  webflow: boolean
  wordpress?: boolean
  adaptiveBackgroundImage: string
}

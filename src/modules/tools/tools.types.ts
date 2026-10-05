import { FC, SVGProps } from 'react'

export interface ToolsProps {
  className?: string
  title?: string
}

export interface Tool {
  id: string
  name: string
  Icon: FC<SVGProps<SVGSVGElement>>
}

import { ReactNode } from 'react'

export interface NewModalProps {
	isOpen: boolean
	onClose: () => void
	children: ReactNode
	className?: string
}

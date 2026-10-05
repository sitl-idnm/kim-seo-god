'use client'

import { useSetAtom } from 'jotai/react'

import { openModalContent } from '@/shared/atoms/openModal'
import { Button } from '@/ui'

type PricingModalButtonProps = {
  children: string
  modalKey: string
  maxWidth?: string
  className?: string
}

export function PricingModalButton({
  children,
  modalKey,
  maxWidth = '320px',
  className
}: PricingModalButtonProps) {
  const setModalContent = useSetAtom(openModalContent)

  return (
    <Button
      tag="button"
      maxWidth={maxWidth}
      className={className}
      onClick={() => setModalContent(modalKey)}
    >
      {children}
    </Button>
  )
}

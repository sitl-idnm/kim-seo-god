'use client'

import { useSetAtom } from 'jotai/react'
import { openModalContent } from '@/shared/atoms/openModal'
import { Button } from '@/ui'
import type { ReactNode } from 'react'
import styles from './lidogeneraciyaPage.module.scss'

type Props = {
  children: ReactNode
  /** Вариант отображения: как кнопка UI (для Why) или как ссылка под Branch */
  variant?: 'button' | 'branchLink'
  maxWidth?: string
}

export function OpenDetailsModalButton({ children, variant = 'button', maxWidth }: Props) {
  const setModalContent = useSetAtom(openModalContent)

  const openModal = () => setModalContent('детали-лидогенерация')

  if (variant === 'branchLink') {
    return (
      <button type="button" className={styles.branchModalButton} onClick={openModal}>
        {children}
      </button>
    )
  }

  return (
    <Button tag="button" maxWidth={maxWidth} onClick={openModal}>
      {children}
    </Button>
  )
}

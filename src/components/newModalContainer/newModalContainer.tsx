'use client'

import { FC, useEffect } from 'react'
import { useAtomValue } from 'jotai/react'
import { openModalContent } from '@/shared/atoms/openModal'
import { MarketingModal } from '../marketingModal'
import { DesignModal } from '../designModal'
import { DevelopModal } from '../developModal'
import { SupportModal } from '../supportModal'
import { DetailsModal } from '../detailsModal'
import { CountModal } from '../countModal'
import { StartModal } from '../startModal'

const NewModalContainer: FC = () => {
  const modalContent = useAtomValue(openModalContent)

  useEffect(() => {
    if (!modalContent) return

    // Реальная ширина скроллбара: 0 на мобильных и ОС с overlay-скроллбаром.
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth
    const prevRootOverflow = document.documentElement.style.overflow
    const prevBodyOverflow = document.body.style.overflow
    const prevBodyPadding = document.body.style.paddingRight

    document.documentElement.style.overflow = 'hidden'
    document.body.style.overflow = 'hidden'
    if (scrollbarWidth > 0) {
      document.body.style.paddingRight = `${scrollbarWidth}px`
    }

    return () => {
      document.documentElement.style.overflow = prevRootOverflow
      document.body.style.overflow = prevBodyOverflow
      document.body.style.paddingRight = prevBodyPadding
    }
  }, [modalContent])

  return (
    <>
      {modalContent === 'исследования' && <MarketingModal />}
      {modalContent === 'дизайн' && <DesignModal />}
      {modalContent === 'разработка' && <DevelopModal />}
      {modalContent === 'поддержка' && <SupportModal />}
      {(modalContent === 'детали' || modalContent === 'детали-лидогенерация') && (
        <DetailsModal variant={modalContent === 'детали-лидогенерация' ? 'lidogeneraciya' : undefined} />
      )}
      {modalContent === 'стоимость' && <CountModal />}
      {/* Сверху старые модалки */}
      {modalContent === 'Начать' && <StartModal />}
    </>
  )
}

export default NewModalContainer

'use client'

import { FC, useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import classNames from 'classnames'
import Portal from '@/service/portal/portal'
import { NewModalProps } from './newModal.types'
import styles from './newModal.module.scss'

gsap.registerPlugin(ScrollTrigger)

const NewModal: FC<NewModalProps> = ({
  isOpen,
  onClose,
  children,
  className
}) => {
  const modalRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!modalRef.current || !contentRef.current) return

    const modal = modalRef.current
    const content = contentRef.current

    // Создаем отдельный контекст для анимаций модального окна
    const ctx = gsap.context(() => {
      if (isOpen) {
        // Анимация открытия
        gsap.set(modal, {
          display: 'flex',
          clearProps: 'transform' // Очищаем transform
        })
        gsap.fromTo(modal,
          { opacity: 0 },
          {
            opacity: 1,
            duration: 0.3,
            clearProps: 'transform' // Очищаем transform
          }
        )
        gsap.fromTo(content,
          { y: -50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.3,
            clearProps: 'transform', // Очищаем transform
            onComplete: () => {
              // Обновляем ScrollTrigger после анимации
              ScrollTrigger.refresh()
            }
          }
        )
      } else {
        // Анимация закрытия
        gsap.to(content, {
          y: -50,
          opacity: 0,
          duration: 0.2,
          clearProps: 'transform' // Очищаем transform
        })
        gsap.to(modal, {
          opacity: 0,
          duration: 0.2,
          delay: 0.1,
          clearProps: 'transform', // Очищаем transform
          onComplete: () => {
            gsap.set(modal, { display: 'none' })
            // Обновляем ScrollTrigger после закрытия
            ScrollTrigger.refresh()
          }
        })
      }
    }, modalRef) // Привязываем контекст к модальному окну

    return () => {
      ctx.revert()
      // Обновляем ScrollTrigger при размонтировании
      ScrollTrigger.refresh()
    }
  }, [isOpen])

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === modalRef.current) {
      onClose()
    }
  }

  return (
    <Portal selector="body">
      <div
        ref={modalRef}
        className={classNames(styles.modal, className)}
        onClick={handleBackdropClick}
        style={{ display: 'none' }}
      >
        <div ref={contentRef} className={styles.content}>
          <button className={styles.closeButton} onClick={onClose} />
          {children}
        </div>
      </div>
    </Portal>
  )
}

export default NewModal

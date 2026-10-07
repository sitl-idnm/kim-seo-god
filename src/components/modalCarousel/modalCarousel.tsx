'use client'

import { FC, useCallback, useEffect, useMemo, useRef, useState } from 'react'
import classNames from 'classnames'
import { useSetAtom } from 'jotai/react'
import { openModalContent } from '@/shared/atoms/openModal'
import Portal from '@/service/portal/portal'
import { ModalCarouselProps } from './modalCarousel.types'
import styles from './modalCarousel.module.scss'

const FOCUSABLE =
  'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])'

const ModalCarousel: FC<ModalCarouselProps> = ({ slides, className, ariaLabel }) => {
  const setModalContent = useSetAtom(openModalContent)
  const overlayRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState(0)

  const total = slides.length
  // Стабильные ключи слайдов (не привязаны к индексу-позиции).
  const slideKeys = useMemo(
    () => slides.map((_, index) => `slide-${index}`),
    [slides]
  )

  const closeModal = useCallback(() => {
    setModalContent('')
  }, [setModalContent])

  // Переход к конкретному слайду
  const goTo = useCallback(
    (index: number) => {
      const track = trackRef.current
      if (!track) return
      const next = Math.max(0, Math.min(total - 1, index))
      const slide = track.children[next] as HTMLElement | undefined
      if (slide) {
        track.scrollTo({ left: slide.offsetLeft, behavior: 'smooth' })
      }
      setActive(next)
    },
    [total]
  )

  const handlePrev = () => goTo(active - 1)
  const handleNext = () => goTo(active + 1)

  // Синхронизация активной точки со свайпом/скроллом
  useEffect(() => {
    const track = trackRef.current
    if (!track) return

    let frame = 0
    const onScroll = () => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(() => {
        const slide = track.firstElementChild as HTMLElement | null
        if (!slide) return
        const step = slide.getBoundingClientRect().width
        if (step === 0) return
        setActive(Math.round(track.scrollLeft / step))
      })
    }

    track.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      cancelAnimationFrame(frame)
      track.removeEventListener('scroll', onScroll)
    }
  }, [total])

  // Полностью исключаем неактивные слайды из таб-порядка и доступности
  // через нативный `inert` (React 18 его не типизирует — выставляем императивно).
  useEffect(() => {
    const track = trackRef.current
    if (!track) return
    Array.from(track.children).forEach((node, index) => {
      const el = node as HTMLElement
      if (index === active) {
        el.removeAttribute('inert')
      } else {
        el.setAttribute('inert', '')
      }
    })
  }, [active, total])

  // Esc + фокус-трап.
  // Фокусируемые элементы берём ТОЛЬКО из активного слайда и из «хрома» карусели
  // (кнопки/точки), чтобы Tab не уводил фокус в скрытые по горизонтали слайды,
  // которые остаются в DOM с ненулевым offsetParent.
  useEffect(() => {
    const previousActive = document.activeElement as HTMLElement | null
    const content = contentRef.current
    content?.focus()

    const getFocusable = (): HTMLElement[] => {
      if (!content) return []
      return Array.from(content.querySelectorAll<HTMLElement>(FOCUSABLE)).filter(
        (el) => {
          if (el.offsetParent === null && el !== content) return false
          // Элементы внутри трека допускаются только если лежат в активном слайде.
          const slide = el.closest(`[data-carousel-slide]`) as HTMLElement | null
          if (slide) return slide.getAttribute('data-active') === 'true'
          return true
        }
      )
    }

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault()
        closeModal()
        return
      }
      if (e.key === 'Tab' && content) {
        const focusable = getFocusable()
        if (focusable.length === 0) {
          e.preventDefault()
          return
        }
        const first = focusable[0]
        const last = focusable[focusable.length - 1]
        const current = document.activeElement as HTMLElement | null
        // Если фокус «застрял» вне допустимого набора — вернуть его в начало.
        if (!current || !focusable.includes(current)) {
          e.preventDefault()
          ;(e.shiftKey ? last : first).focus()
          return
        }
        if (e.shiftKey && current === first) {
          e.preventDefault()
          last.focus()
        } else if (!e.shiftKey && current === last) {
          e.preventDefault()
          first.focus()
        }
      }
    }

    document.addEventListener('keydown', onKeyDown)
    return () => {
      document.removeEventListener('keydown', onKeyDown)
      previousActive?.focus?.()
    }
  }, [closeModal])

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === overlayRef.current) closeModal()
  }

  return (
    <Portal selector="#modal-root">
      <div
        ref={overlayRef}
        className={styles.overlay}
        onClick={handleBackdropClick}
      >
        <div
          ref={contentRef}
          className={classNames(styles.content, className)}
          role="dialog"
          aria-modal="true"
          aria-label={ariaLabel}
          aria-roledescription="карусель"
          tabIndex={-1}
        >
          <button
            type="button"
            className={styles.close}
            onClick={closeModal}
            aria-label="Закрыть"
          />

          <div className={styles.track} ref={trackRef}>
            {slides.map((slide, index) => {
              const isActive = index === active
              return (
                <div
                  className={styles.slide}
                  key={slideKeys[index]}
                  data-carousel-slide
                  data-active={isActive}
                  role="group"
                  aria-roledescription="слайд"
                  aria-label={`${index + 1} из ${total}`}
                >
                  <div className={styles.slide__inner}>{slide}</div>
                </div>
              )
            })}
          </div>

          {/* Озвучивание смены слайда для скринридеров */}
          <p className={styles.srOnly} aria-live="polite">
            Слайд {active + 1} из {total}
          </p>

          <div className={styles.controls}>
            <button
              type="button"
              className={styles.arrow}
              onClick={handlePrev}
              disabled={active === 0}
              aria-label="Назад"
            >
              <span className={styles.arrow__icon} data-dir="prev" />
              Назад
            </button>

            <ul className={styles.dots} aria-label="Навигация по слайдам">
              {slides.map((_, index) => (
                <li key={slideKeys[index]} className={styles.dots__item}>
                  <button
                    type="button"
                    aria-current={index === active ? 'true' : undefined}
                    aria-label={`Перейти к слайду ${index + 1} из ${total}`}
                    className={classNames(styles.dot, {
                      [styles.dot_active]: index === active
                    })}
                    onClick={() => goTo(index)}
                  />
                </li>
              ))}
            </ul>

            {active < total - 1 ? (
              <button
                type="button"
                className={classNames(styles.arrow, styles.arrow_primary)}
                onClick={handleNext}
                aria-label="Далее"
              >
                Далее
                <span className={styles.arrow__icon} data-dir="next" />
              </button>
            ) : (
              <button
                type="button"
                className={classNames(styles.arrow, styles.arrow_primary)}
                onClick={closeModal}
                aria-label="Закрыть"
              >
                Готово
              </button>
            )}
          </div>
        </div>
      </div>
    </Portal>
  )
}

export default ModalCarousel

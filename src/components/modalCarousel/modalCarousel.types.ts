import { ReactNode } from 'react'

export interface ModalCarouselProps {
  /** Слайды карусели (2–4 логических экрана) */
  slides: ReactNode[]
  /** Класс-модификатор для .content (акцент конкретной модалки) */
  className?: string
  /** Доступное имя модалки (для aria-label) */
  ariaLabel?: string
}

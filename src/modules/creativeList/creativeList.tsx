'use client'

import { FC, useRef, useLayoutEffect } from 'react'
import classNames from 'classnames'

import { CreativeListItem } from '@/components'
import styles from './creativeList.module.scss'
import { CreativeListProps } from './creativeList.types'
import { creativeListData } from './creativeList.data'
import { loadGsap } from '@/shared/lib/gsap'

const CreativeList: FC<CreativeListProps> = ({
  className
}) => {
  const rootClassName = classNames(styles.root, className)
  const containerRef = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<(HTMLDivElement | null)[]>([])

  useLayoutEffect(() => {
    if (!containerRef.current) return

    const container = containerRef.current
    let cancelled = false
    let cleanup: (() => void) | undefined

    loadGsap().then(({ gsap, ScrollTrigger }) => {
      if (cancelled) return

      const cards = cardsRef.current.filter((card): card is HTMLDivElement => card !== null)

      // Устанавливаем начальное состояние карточек
      gsap.set(cards[0], {
        yPercent: -50,
        xPercent: 0,
        opacity: 1,
        scale: 1,
        zIndex: 1 // Первая карточка имеет минимальный z-index
      })

      gsap.set(cards.slice(1), {
        yPercent: 230,
        xPercent: 60,
        opacity: 1,
        scale: 0.3,
        zIndex: (i) => i + 2 // Каждая следующая карточка имеет больший z-index
      })

      // Создаем таймлайн для синхронизации пиннинга и анимации
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          pin: true,
          start: 'top top',
          end: '+=400%',
          scrub: 1,
        }
      })

      // Анимируем только карточки после первой
      cards.slice(1).forEach((card) => {
        tl.to(card, {
          yPercent: -50,
          xPercent: 0,
          scale: 1,
          duration: 1
        }, '>-0.5')
      })

      cleanup = () => {
        tl.scrollTrigger?.kill()
        tl.kill()
        ScrollTrigger.getAll().forEach(trigger => trigger.kill())
      }
    })

    return () => {
      cancelled = true
      cleanup?.()
    }
  }, [])

  return (
    <div className={rootClassName} ref={containerRef}>
      <div className={styles.cards}>
        {creativeListData.map((card, index) => (
          <div
            key={index}
            ref={el => {
              cardsRef.current[index] = el
            }}
            className={styles.cardWrapper}
            style={{
              zIndex: index + 1 // Добавляем z-index также в разметке для надежности
            }}
          >
            <CreativeListItem
              {...card}
              className={styles.card}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default CreativeList

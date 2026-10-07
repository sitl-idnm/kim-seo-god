'use client'

import { FC, useRef, useLayoutEffect } from 'react'
import classNames from 'classnames'
import { usePathname } from 'next/navigation'
import Arrow from '@icons/cases__arrow.svg'

import styles from './case.module.scss'
import { CaseProps } from './case.types'
import { CaseItem } from '@/components'
import { loadGsap } from '@/shared/lib/gsap'
import Link from 'next/link'

const itemsData = [
  { title: 'Магия вкуса', text: 'Интернет-магазин для пекарни полного цикла', imageSrc: '/images/tablet__magic.png', link: '/cases/magiya-vkusa' },
  { title: 'ClientPulse', text: 'Многостраничный сайт для сервиса по работе с клиентскими данными ', imageSrc: '/images/clientpulse.png', link: '/cases/clientpulse' },
  { title: 'BestWave', text: 'Лендинг no-code для серф-клуба в Москве', imageSrc: '/images/bestwave.png', link: '/cases/best-wave' },
]

const Case: FC<CaseProps> = ({
  className
}) => {
  const rootClassName = classNames(styles.root, className)
  const pathname = usePathname()
  const casesRef = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    const container = containerRef.current
    const cases = casesRef.current

    if (!container || !cases) {
      return
    }

    let cleanup: (() => void) | undefined
    let cancelled = false

    loadGsap().then(({ gsap, ScrollTrigger }) => {
      if (cancelled) return

      const mm = gsap.matchMedia()

      mm.add('(min-width: 1201px)', () => {
        const getScrollDistance = () => Math.max(0, cases.scrollWidth - container.clientWidth)

        const tween = gsap.to(cases, {
          x: () => -getScrollDistance(),
          ease: 'none',
          overwrite: 'auto',
          scrollTrigger: {
            trigger: container,
            start: 'top top',
            end: () => `+=${getScrollDistance()}`,
            scrub: 1,
            pin: container,
            invalidateOnRefresh: true,
            anticipatePin: 1
          }
        })

        // Пересчитываем триггер после реальной верстки; если ширина ещё не
        // посчитана (scrollWidth<=0 / distance<=0) — повторяем на следующем кадре.
        let rafId = 0
        const refresh = () => ScrollTrigger.refresh()
        const ensureReady = () => {
          if (getScrollDistance() <= 0) {
            rafId = requestAnimationFrame(ensureReady)
            return
          }
          refresh()
        }
        ensureReady()

        // Картинки кейсов могут догрузиться позже layout — пересчитываем по мере
        // их загрузки, а также после window 'load' (все ресурсы готовы).
        const imgs = Array.from(cases.querySelectorAll('img'))
        const onImgDone = () => requestAnimationFrame(refresh)
        imgs.forEach((img) => {
          if (!img.complete) {
            img.addEventListener('load', onImgDone)
            img.addEventListener('error', onImgDone)
          }
        })

        const onWindowLoad = () => requestAnimationFrame(refresh)
        if (document.readyState === 'complete') {
          onWindowLoad()
        } else {
          window.addEventListener('load', onWindowLoad)
        }

        // Пересчёт при resize через rAF (без спама refresh на каждый пиксель).
        let resizeRaf = 0
        const onResize = () => {
          if (resizeRaf) cancelAnimationFrame(resizeRaf)
          resizeRaf = requestAnimationFrame(refresh)
        }
        window.addEventListener('resize', onResize)

        return () => {
          if (rafId) cancelAnimationFrame(rafId)
          if (resizeRaf) cancelAnimationFrame(resizeRaf)
          window.removeEventListener('resize', onResize)
          window.removeEventListener('load', onWindowLoad)
          imgs.forEach((img) => {
            img.removeEventListener('load', onImgDone)
            img.removeEventListener('error', onImgDone)
          })
          tween.scrollTrigger?.kill()
          tween.kill()
          gsap.set(cases, { x: 0 })
        }
      })

      cleanup = () => {
        mm.revert()
        gsap.set(cases, { clearProps: 'transform' })
      }
    })

    return () => {
      cancelled = true
      cleanup?.()
    }
  }, [pathname])

  return (
    <div className={rootClassName} ref={containerRef}>
      <h2 className={styles.root__title}>Уже реализовали</h2>
      <div className={styles.root__cases} ref={casesRef}>
        {itemsData.map((item, index) => (
          <CaseItem
            key={index}
            title={item.title}
            text={item.text}
            imageSrc={item.imageSrc}
            link={item.link}
          />
        ))}
        <Link href='/cases'>
          <div className={styles.view_all}>
            <h3 className={styles.view_all__title}>Смотреть все кейсы</h3>
            <div className={styles.view_all__icon}>
              <Arrow
                width={60}
                height={60}
                alt="arrow"
              />
            </div>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default Case

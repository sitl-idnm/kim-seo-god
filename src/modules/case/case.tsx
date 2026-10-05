'use client'

import { FC, useRef } from 'react'
import classNames from 'classnames'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { usePathname } from 'next/navigation'
import Arrow from '@icons/cases__arrow.svg'

import styles from './case.module.scss'
import { CaseProps } from './case.types'
import { CaseItem } from '@/components'
import { useGSAP } from '@gsap/react'
import Link from 'next/link'

gsap.registerPlugin(useGSAP, ScrollTrigger)

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

  useGSAP(() => {
    const container = containerRef.current
    const cases = casesRef.current

    if (!container || !cases) {
      return
    }

    const mm = gsap.matchMedia()

    mm.add('(min-width: 1201px)', () => {
      const getScrollDistance = () => Math.max(0, cases.scrollWidth - container.clientWidth)

      if (getScrollDistance() <= 0) {
        gsap.set(cases, { x: 0 })
        return
      }

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

      ScrollTrigger.refresh()

      return () => {
        tween.scrollTrigger?.kill()
        tween.kill()
        gsap.set(cases, { x: 0 })
      }
    })

    return () => {
      mm.revert()
      gsap.set(cases, { clearProps: 'transform' })
    }
  }, { scope: containerRef, dependencies: [pathname] })

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

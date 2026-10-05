'use client'
import { FC, useLayoutEffect, useRef } from 'react'
import classNames from 'classnames'

import styles from './stages.module.scss'
import { StagesProps } from './stages.types'

import Icon from '@icons/snowflacke.svg'
import Timeline from '@icons/timeline.svg'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Button } from '@/ui'

gsap.registerPlugin(ScrollTrigger)

const Stages: FC<StagesProps> = ({
  className,
  title,
  box1title,
  box1description,
  box2title,
  box2description,
  box3title,
  box3description,
  box4title,
  box4description,
  box5title,
  box5description,
  titleBlackBox,
  descriptionBlackBox,
}) => {
  const rootClassName = classNames(styles.root, className)
  const section = useRef<HTMLDivElement>(null)
  const extraL = useRef<HTMLDivElement>(null)
  const mainContainer = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const mainCont = mainContainer.current
      const extraLong = extraL.current

      if (!mainCont || !extraLong) return

      const extraLongWidth = extraLong.offsetWidth
      const mainContWidth = mainCont.offsetWidth
      const maxScroll = -(extraLongWidth - mainContWidth)

      const scrollTween = gsap.to(extraLong, {
        x: maxScroll,
        ease: "none",
        scrollTrigger: {
          pin: mainCont,
          trigger: mainCont,
          start: 'top 5%',
          end: `+=${extraLongWidth}`,
          scrub: 1,
          invalidateOnRefresh: true
        }
      })

      gsap.utils.toArray<HTMLElement>('.conversionType_timeline__de68M').forEach((line) => {
        gsap.to(line, {
          width: '50%',
          scrollTrigger: {
            trigger: line,
            start: 'left 30%',
            end: 'left 20%',
            scrub: 2,
            containerAnimation: scrollTween,
            invalidateOnRefresh: true,
          }
        })
      })

      const boxes = gsap.utils.toArray(`.${styles.box}`) as HTMLElement[];

      boxes.forEach((box) => {
        gsap.fromTo(box,
          { height: '5%' },
          {
            height: '100%',
            scrollTrigger: {
              trigger: box,
              start: 'left 100%',
              scrub: 1,
              containerAnimation: scrollTween,
              invalidateOnRefresh: true,
            }
          }
        )
      })

      return () => {
        scrollTween.kill()
        ScrollTrigger.getAll().forEach(st => st.kill())
      }
    }, section)

    const handleResize = () => {
      ScrollTrigger.refresh()
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
      ctx.revert()
    }
  }, [])

  return (
    <div ref={mainContainer}>
      <div className={styles.conversion} ref={extraL}>
        <div className={rootClassName}>
          <div className={styles.section} ref={section}>
            <div className={styles.container__title}>
              <div className={styles.snowflacke}>
                <Icon />
              </div>
              <h4 className={styles.title}>{title}</h4>
              <div className={styles.timeline}>
                <Timeline />
              </div>
            </div>
            <div className={styles.section__container}>
              <div className={styles.content}>
                <div className={`${styles.first__fact} ${styles.fact}`}>{box1title}<span className={styles.grey}>{box1description}</span></div>
                <div className={`${styles.second__fact} ${styles.fact}`}>{box2title}<span className={styles.grey}>{box2description}</span></div>
              </div>
              <div className={styles.content}>
                <div className={`${styles.third__fact} ${styles.fact}`}>{box3title}<span className={styles.grey}>{box3description}</span></div>
                <div className={`${styles.fourth__fact} ${styles.fact}`}>{box4title}<span className={styles.grey}>{box4description}</span></div>
              </div>
              {
                box5title ? <div className={styles.content}>
                  <div className={`${styles.fifth__fact} ${styles.fact}`}>{box5title}<span className={styles.grey}>{box5description}</span></div>
                </div> : null
              }
            </div>
          </div>
        </div>
        <div className={styles.conv1}>
          <div className={styles.conv1__title}>
            <h2>{titleBlackBox}<br /><span className={styles.grey}>{descriptionBlackBox}</span></h2>
          </div>
          <div>
            <Button
              tag='button'
              maxWidth='192px'
            >
              Заказать услугу
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Stages

'use client'
import { FC, useRef } from 'react'
import classNames from 'classnames'

import styles from './plusWork.module.scss'
import { PlusWorkProps } from './plusWork.types'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const PlusWork: FC<PlusWorkProps> = ({ className }) => {
  const rootClassName = classNames(styles.root, className)

  const secondRef = useRef<HTMLDivElement>(null)
  const thirdRef = useRef<HTMLDivElement>(null)
  const fourthRef = useRef<HTMLDivElement>(null)
  const triggerRef = useRef<HTMLDivElement>(null)
  const fiveRef = useRef<HTMLDivElement>(null)
  const sixRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    if (window.innerWidth > 1200) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: triggerRef.current,
          start: 'top 10%',
          scrub: true,
        }
      })

      tl.to(secondRef.current, {
        y: 389,
        ease: 'power1.out'
      })

      tl.to([thirdRef.current, fourthRef.current, fiveRef.current, sixRef.current], {
        y: 389,
        ease: 'power1.out'
      })
    }
  })

  return (
    <div className={rootClassName}>
      <div className={styles.firstline} ref={triggerRef}>
        <div className={styles.box} ref={fiveRef}>
          <h3 className={styles.title}>Быстрый старт и высокая скорость роста</h3>
          <div className={styles.text}>
            <p>
              <span className={styles.number}>1</span>
              Стажерам и новым сотрудникам сразу даем работать над реальными проектами, потому что знаем, практика под чутким руководством наставника дает гораздо больше, чем долгое погружение в корпоративную культуру и стандарты.
            </p>
          </div>
        </div>
        <div className={styles.box} ref={secondRef}>
          <h3 className={styles.title}>Свобода предлагать свои решения</h3>
          <div className={styles.text}>
            <p>
              <span className={styles.number}>2</span>
              Мы даем возможность предлагать идеи и решения, которые могут изменить ход проекта. Ты будешь видеть, как твои предложения воплощаются в жизнь и приносят реальные результаты.
            </p>
          </div>
        </div>
        <div className={styles.box} ref={sixRef}>
          <h3 className={styles.title}>Работа с сайтами с высокой конверсией</h3>
          <div className={styles.text}>
            <p>
              <span className={styles.number}>3</span>
              Ты будешь участвовать в создании сайтов с конверсией от 2% до 12% и научишься формировать офферы, которые реально привлекают клиентов. Эти навыки всегда востребованы на рынке.
            </p>
          </div>
        </div>
      </div>
      <div className={styles.secondline}>
        <div className={styles.box} ref={thirdRef}>
          <h3 className={styles.title}>Комфортный онбординг</h3>
          <div className={styles.text}>
            <p>
              <span className={styles.number}>4</span>
              Да, стандарты и регламенты тоже будут, но только по делу, чтобы быстро понять что к чему и начать работу.
            </p>
          </div>
        </div>
        <div className={styles.box}>
        </div>
        <div className={styles.box} ref={fourthRef}>
          <h3 className={styles.title}>Обучение и работа под руководством наставника</h3>
          <div className={styles.text}>
            <p>
              <span className={styles.number}>5</span>
              Новых сотрудников мы сопровождаем на каждом этапе, чтобы ты мог быстро учиться и улучшать свои навыки. Наставник поможет разобраться в деталях и сразу применить знания на практике.
            </p>
          </div>
        </div>
      </div>
      <div className={styles.thirdline}>
        <div className={styles.box}>
        </div>
        <div className={styles.box}>
          <h3 className={styles.title}>Дружелюбный коллектив</h3>
          <div className={styles.text}>
            <p>
              <span className={styles.number}>6</span>
              Мы верим в силу команды — здесь всегда поддержат, подскажут и помогут. Регулярные онлайн и офлайн корпоративы дают возможность наладить отношения с коллегами и повеселиться вне работы.
            </p>
          </div>
        </div>
        <div className={styles.box}>
        </div>
      </div>
    </div>
  )
}

export default PlusWork

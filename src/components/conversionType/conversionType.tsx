/* eslint-disable no-irregular-whitespace */
'use client'

import { FC, useRef, useCallback, useLayoutEffect } from 'react'
import classNames from 'classnames'
import styles from './conversionType.module.scss'
import { ConversionTypeProps } from './conversionType.types'
import Icon from '@icons/snowflacke.svg'
import Timeline from '@icons/timeline.svg'
import Accept from '@icons/accept.svg'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Button } from '@/ui'
import { openModalContent } from '@/shared/atoms/openModal'
import { useSetAtom } from 'jotai/react'

gsap.registerPlugin(ScrollTrigger, useGSAP)

const ConversionType: FC<ConversionTypeProps> = ({
  className
}) => {
  const rootClassName = classNames(styles.root, className)

  const section = useRef(null)
  const extraL = useRef<HTMLDivElement>(null)
  const mainContainer = useRef(null)

  const setModalContent = useSetAtom(openModalContent)

  const openWindows = useCallback((name: string) => {
    setTimeout(() => {
      setModalContent(name)
    }, 0)
  }, [setModalContent])

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const extraLong = extraL.current
      const mainCont = mainContainer.current
      const boxes = gsap.utils.toArray(`.${styles.box}`) as HTMLElement[];

      const scrollTween = gsap.to(extraLong, {
        xPercent: -100,
        x: () => window.innerWidth,
        ease: "none",
        scrollTrigger: {
          pin: mainCont,
          trigger: mainCont,
          start: 'top 5%',
          end: () => `+=${extraLong!.offsetWidth} bottom`,
          scrub: 1,
          invalidateOnRefresh: true,
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
              <h4 className={styles.title}>исследования</h4>
              <div className={styles.timeline}>
                <Timeline />
              </div>
            </div>
            <div className={styles.section__container}>
              <div className={styles.content}>
                <div className={`${styles.first__fact} ${styles.fact}`}>Погружаемся в проект</div>
                <div className={`${styles.second__fact} ${styles.fact}`}>Изучаем нишу</div>
              </div>
              <div className={styles.content}>
                <div className={`${styles.third__fact} ${styles.fact}`}>Анализируем конкурентов</div>
                <div className={`${styles.fourth__fact} ${styles.fact}`}>Исследуем потребности аудитории</div>
              </div>
              <div className={styles.box} style={{ background: 'var(--color-grey)', color: 'black' }}>
                <h4 className={styles.box__title}>
                  Формируем смыслы
                </h4>
                <div className={styles.box__content}>
                  <p className={styles.text}>
                    Показываем аудитории выгоды продукта, отстраиваемся от конкурентов и берем на вооружение удачные практики из ниши.
                  </p>
                  <p className={styles.text}>
                    Получаем смысловой фундамент, который позволит посетителю с 3 секунд на сайте понять «Это то, что мне нужно» и продолжить изучение.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={rootClassName}>
          <div className={styles.section} ref={section}>
            <div className={styles.container__title}>
              <div className={styles.snowflacke}>
                <Icon />
              </div>
              <h4 className={styles.title}>дизайн</h4>
              <div className={styles.timeline}>
                <Timeline />
              </div>
            </div>
            <div className={styles.section__container}>
              <div className={styles.content}>
                <div className={`${styles.first__fact} ${styles.fact}`}>Формируем логическую структуру сайта и страниц</div>
                <div className={`${styles.second__fact} ${styles.fact}`}>Пишем тексты</div>
              </div>
              <div className={styles.content}>
                <div className={`${styles.third__fact} ${styles.fact}`}>Создаем дизайн</div>
              </div>
              <div className={styles.box} style={{ background: 'var(--color-black)', color: 'white' }}>
                <h4 className={styles.box__title}>
                  Оформляем и транслируем смыслы
                </h4>
                <div className={styles.box__content}>
                  <p className={styles.text}>
                    Через тексты и дизайн демонстрируем посетителю, что с помощью продукта он решит свои задачи и приблизится к жизни мечты, актуализируем потребности, усиливаем желание.
                  </p>
                  <p className={styles.text}>
                    Получаем оформленные смыслы, которые побуждают оставить заявку.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={rootClassName}>
          <div className={styles.section} ref={section}>
            <div className={styles.container__title}>
              <div className={styles.snowflacke}>
                <Icon />
              </div>
              <h4 className={styles.title}>разработка</h4>
              <div className={styles.timeline}>
                <Timeline />
              </div>
            </div>
            <div className={styles.section__container}>
              <div className={styles.content}>
                <div className={`${styles.first__fact} ${styles.fact}`}>Верстаем</div>
                <div className={`${styles.second__fact} ${styles.fact}`}>Интегрируем CRM, оплату, аналитику</div>
              </div>
              <div className={styles.content__box}>
                <div className={styles.content}>
                  <div className={`${styles.third__fact} ${styles.fact}`}>Тестируем и запускаем</div>
                </div>
                <div className={styles.box} style={{ background: 'var(--color-red-accent)', color: 'white' }}>
                  <h4 className={styles.box__title}>
                    Превращаем дизайн в рабочий инструмент
                  </h4>
                  <div className={styles.box__content}>
                    <p className={styles.text}>
                      Преобразуем макеты в функциональный и адаптивный сайт. Каждый элемент дизайна точно воспроизводится на разных устройствах и экранах, чтобы пользовательский опыт оставался комфортным и интуитивно понятным.
                    </p>
                    <p className={styles.text}>
                      Получаем готовый к работе сайт, который не только красиво выглядит, но и эффективно функционирует.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.conv}>
              <div className={styles.conv__svg}>
                <Accept />
              </div>
              <div className={styles.conv__title}>
                <h2>Конверсионный сайт с сильными&nbsp;офферами,<br />
                  <span className={styles.grey}>основанными на&nbsp;смыслах</span></h2>
              </div>
            </div>
          </div>
        </div>
        <div className={rootClassName}>
          <div className={styles.section} ref={section}>
            <div className={styles.container__title}>
              <div className={styles.snowflacke}>
                <Icon />
              </div>
              <h4 className={styles.title}>поддержка</h4>
              <div className={styles.timeline}>
                <Timeline />
              </div>
            </div>
            <div className={styles.section__container}>
              <div className={styles.content}>
                <div className={`${styles.first__fact} ${styles.fact}`}>Учим работе с сайтом</div>
                <div className={`${styles.second__fact} ${styles.fact}`}>Анализируем эффективность и внедряем улучшения</div>
              </div>
              <div className={styles.content}>
                <div className={`${styles.third__fact} ${styles.fact}`}>Поддерживаем работу и актуальность сайта</div>
                <div className={`${styles.fourth__fact} ${styles.fact}`}>Запускаем трафик: контекст, таргет, SEO</div>
              </div>
            </div>
            <div className={styles.new__container}>
              <p className={styles.container__content}>
                Мы не оставляем вас один на один с новым сайтом после запуска, а помогаем анализировать результаты и совершенствовать его.
              </p>
            </div>
            <div className={styles.conv1}>
              <div className={styles.conv1__title}>
                <h2><span className={styles.grey}>Актуальный сайт</span><br />на протяжении всего времени использования</h2>
              </div>
              <div>
                <Button
                  tag='button'
                  maxWidth='192px'
                  onClick={() => openWindows('детали')}
                >
                  Заказать сайт
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ConversionType

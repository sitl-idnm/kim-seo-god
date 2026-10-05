'use client'

import { FC, useEffect, useRef, useState } from 'react'
import { CaseItem } from '@/components'
import classNames from 'classnames'

import styles from './cases.module.scss'
import { CasesProps } from './cases.types'

const itemsData = [
  {
    title: 'Многостраничный сайт для сервиса по работе с клиентскими данными',
    text: 'Создали новый фирменный стиль и многостраничный сайт',
    imageSrc: '/images/oneCDP_ipad.png',
    keyFilter: ['all', 'Разработка сайта', 'Дизайн', 'nocode'],
    link: '/cases/clientpulse'
  },
  {
    title: 'Интернет-магазин для пекарни полного цикла',
    text: 'Разработали сайт с возможностью оформления заказа, оплаты и доставки',
    imageSrc: '/images/magic_ipad.png',
    keyFilter: ['all', 'Разработка сайта', 'Дизайн', 'nocode'],
    link: '/cases/magiya-vkusa'
  },
  {
    title: 'Лендинг no-code для серф-клуба в Москве',
    text: 'Разработали одностраничный сайт на Тильде по нашему дизайн-макету',
    imageSrc: '/images/bw_ipad.png',
    keyFilter: ['all', 'Разработка сайта', 'Дизайн', 'nocode'],
    link: '/cases/best-wave'
  },
  {
    title:
      'Англоязычный лендинг приложения для простой двухфакторной аутентификации на любых сервисах',
    text: 'Разработали сайт и отрисовали приложение с нуля',
    imageSrc: '/images/gloid_ipad.png',
    keyFilter: ['all', 'Разработка сайта', 'Дизайн', 'nocode'],
    link: '/cases/gloid'
  },
  {
    title:
      'Сайт с конверсией 4,3% для производителя сладких новогодних подарков',
    text: 'Разработали многостраничный сайт и запустили контекстную рекламу',
    imageSrc: '/images/sweetcorp.png',
    keyFilter: ['all', 'Разработка сайта', 'Дизайн', 'nocode', 'Контекстная реклама'],
    link: '/cases/sweetcorp'
  },
  {
    title:
      'Многостраничный сайт с онлайн-записью и базовым SEO для оздоровительного центра «Ровная спина»',
    text: 'Разработали многостраничный сайт с онлайн-записью',
    imageSrc: '/images/rovnayaspina.png',
    keyFilter: ['all', 'Разработка сайта', 'Дизайн', 'nocode', 'SEO'],
    link: '/cases/rovnaya-spina'
  }
]

// 5 кнопок с передачей useState в проверку на условие для отображения контента

const Cases: FC<CasesProps> = ({ className }) => {
  const rootClassName = classNames(styles.root, className)
  const [filterVar, setFilterVar] = useState<string>('all')

  const buttonsRef = useRef<HTMLDivElement>(null)

  let startX = 0
  let scrollLeft = 0

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    startX = e.touches[0].clientX
    if (buttonsRef.current) {
      scrollLeft = buttonsRef.current.scrollLeft
    }
  }

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!buttonsRef.current) return

    const moveX = e.touches[0].clientX
    const diffX = startX - moveX

    // Прокручиваем контейнер
    buttonsRef.current.scrollLeft = scrollLeft + diffX
  }

  const filter = (name: string): void => {
    setFilterVar(name)
  }

  useEffect(() => {
    console.log(filterVar)
  })

  return (
    <div className={rootClassName}>
      <h1 className={styles.root__title}>Кейсы</h1>
      <div
        className={styles.buttons}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        ref={buttonsRef}
      >
        <button
          className={styles.buttons__filter}
          onClick={() => filter('Разработка сайта')}
        >
          Разработка сайта
        </button>
        <button
          className={styles.buttons__filter}
          onClick={() => filter('Контекстная реклама')}
        >
          Контекстная реклама
        </button>
        <button
          className={styles.buttons__filter}
          onClick={() => filter('SEO')}
        >
          SEO
        </button>
        <button
          className={styles.buttons__filter}
          onClick={() => filter('Дизайн')}
        >
          Дизайн
        </button>
        <button
          className={styles.buttons__filter}
          onClick={() => filter('nocode')}
        >
          No-code разработка
        </button>
      </div>
      <div className={styles.root__cases}>
        {itemsData.map((item, index) => {
          if (filterVar === 'all') {
            return (
              <CaseItem
                key={index}
                title={item.title}
                text={item.text}
                imageSrc={item.imageSrc}
                isCasePage
                link={item.link}
              />
            )
          } else if (item.keyFilter.includes(filterVar)) {
            return (
              <CaseItem
                key={index}
                title={item.title}
                text={item.text}
                imageSrc={item.imageSrc}
                isCasePage
                link={item.link}
              />
            )
          }
        })}
      </div>
    </div>
  )
}

export default Cases

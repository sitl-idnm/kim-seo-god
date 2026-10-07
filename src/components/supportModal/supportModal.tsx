/* eslint-disable no-empty-pattern */
'use client'
import { FC } from 'react'

import { SupportModalProps } from './supportModal.types'
import { ModalCarousel } from '../modalCarousel'
import slides from '../modalCarousel/slides.module.scss'
import { FavourItem } from '../favourItem'
import { ModalForm } from '../modalForm'
import Gear from '../../shared/assets/icons/gear.svg'

const itemsData = [
  { title: 'Обновляйте сайт без лишних усилий', backgroundColor: 'rgba(255,255,255,0.08)', textColor: 'var(--color-white-default)', imageSrc: '/images/image1_fix.png', text: 'Мы вносим изменения за вас: от новых страниц до доработки функционала' },
  { title: 'Улучшайте скорость и SEO-показатели сайта', backgroundColor: 'rgba(255,255,255,0.14)', textColor: 'var(--color-white-default)', imageSrc: '/images/image2.png', text: 'Регулярная оптимизация делает сайт удобным для пользователей и видимым для поисковиков' },
  { title: 'Снижайте количество технических ошибок', backgroundColor: 'var(--color-red-accent)', textColor: 'var(--color-white-default)', imageSrc: '/images/image4_fix.png', text: 'Постоянный контроль за сайтом предотвращает сбои и неудачные обновления' },
]

const SupportModal: FC<SupportModalProps> = ({}) => {
  return (
    <ModalCarousel
      ariaLabel="Поддержка"
      slides={[
        <div className={slides.hero} key="hero">
          <h2 className={slides.hero__title}>
            Поддержка <Gear />
          </h2>
          <p className={slides.hero__text}>
            Закажите поддержку, чтобы ваш сайт всегда был в <b>идеальном состоянии</b>
          </p>
        </div>,
        <div className={slides.favour} key="favour">
          <h2 className={slides.favour__title}>Что это вам даёт</h2>
          <ul className={slides.favour__list}>
            {itemsData.map((item, index) => (
              <FavourItem
                key={index}
                title={item.title}
                backgroundColor={item.backgroundColor}
                textColor={item.textColor}
                imageSrc={item.imageSrc}
                linkText={''}
                linkColor={''}
                text={item.text}
              />
            ))}
          </ul>
        </div>,
        <div className={slides.result} key="result">
          <h2 className={slides.result__title}>Поддержка сайта обеспечит вам:</h2>
          <ul className={slides.result__list}>
            <li className={slides.result__point}>Постоянный мониторинг и контроль за работой сайта</li>
            <li className={slides.result__point}>Быстрое исправление любых ошибок и проблем</li>
            <li className={slides.result__point}>Регулярное обновление контента и функционала</li>
            <li className={slides.result__point}>Улучшение производительности и безопасности</li>
          </ul>
        </div>,
        <ModalForm key="form" />,
      ]}
    />
  )
}

export default SupportModal

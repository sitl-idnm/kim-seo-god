/* eslint-disable no-empty-pattern */
'use client'
import { FC } from 'react'

import { DesignModalProps } from './designModal.types'
import { ModalCarousel } from '../modalCarousel'
import slides from '../modalCarousel/slides.module.scss'
import { FavourItem } from '../favourItem'
import { ModalForm } from '../modalForm'
import Brush from '../../shared/assets/icons/brush.svg'

const itemsData = [
  { title: 'Удерживайте внимание аудитории', backgroundColor: 'rgba(255,255,255,0.08)', textColor: 'var(--color-white-default)', imageSrc: '/images/image1_fix.png', text: 'Эстетичный и понятный дизайн помогает выделиться в потоке информации' },
  { title: 'Увеличивайте конверсию', backgroundColor: 'rgba(255,255,255,0.14)', textColor: 'var(--color-white-default)', imageSrc: '/images/image2.png', text: 'Используйте дизайн, который направляет клиентов к целевым действиям' },
  { title: 'Ускоряйте процесс принятия решений у клиентов', backgroundColor: 'var(--color-red-accent)', textColor: 'var(--color-white-default)', imageSrc: '/images/image4_fix.png', text: 'Дизайн, который ясно и логично показывает ценность вашего продукта, мотивирует на покупку' },
]

const DesignModal: FC<DesignModalProps> = ({}) => {
  return (
    <ModalCarousel
      ariaLabel="Дизайн"
      slides={[
        <div className={slides.hero} key="hero">
          <h2 className={slides.hero__title}>
            Дизайн <Brush />
          </h2>
          <p className={slides.hero__text}>
            Разработаем фирменный стиль, дизайн сайта, электронного письма, полиграфии, оформим социальные сети.
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
          <h2 className={slides.result__title}>По итогам работы вы получите:</h2>
          <ul className={slides.result__list}>
            <li className={slides.result__point}>Дизайн сайта</li>
            <li className={slides.result__point}>Визуальную концепцию бренда</li>
            <li className={slides.result__point}>Макеты для рассылок, соцсетей или рекламы</li>
            <li className={slides.result__point}>Фирменный стиль</li>
          </ul>
        </div>,
        <ModalForm key="form" />,
      ]}
    />
  )
}

export default DesignModal

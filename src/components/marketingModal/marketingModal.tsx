/* eslint-disable no-empty-pattern */
'use client'
import { FC } from 'react'

import { MarketingModalProps } from './marketingModal.types'
import { ModalCarousel } from '../modalCarousel'
import slides from '../modalCarousel/slides.module.scss'
import Lens from '../../shared/assets/icons/lens.svg'
import { FavourItem } from '../favourItem'
import { ModalForm } from '../modalForm'

const itemsData = [
  { title: 'Получайте больше квалифицированных заявок', backgroundColor: 'rgba(255,255,255,0.08)', textColor: 'var(--color-white-default)', imageSrc: '/images/image1_fix.png', text: 'Привлекайте клиентов, которые действительно заинтересованы в вашем продукте' },
  { title: 'Больше продавайте', backgroundColor: 'rgba(255,255,255,0.14)', textColor: 'var(--color-white-default)', imageSrc: '/images/image2.png', text: 'Адаптируйте предложение под реальные потребности аудитории.' },
  { title: 'Опережайте конкурентов', backgroundColor: 'var(--color-red-accent)', textColor: 'var(--color-white-default)', imageSrc: '/images/image4_fix.png', text: 'Предлагайте то, чего нет у других' },
]

const MarketingModal: FC<MarketingModalProps> = ({}) => {
  return (
    <ModalCarousel
      ariaLabel="Маркетинговые исследования"
      slides={[
        <div className={slides.hero} key="hero">
          <h2 className={slides.hero__title}>
            Маркетинговые <span data-accent>исследования</span>
            <Lens />
          </h2>
          <p className={slides.hero__text}>
            Закажите исследование, чтобы понять рынок, конкурентов и потребности{' '}
            <b>вашей аудитории.</b>
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
          <h2 className={slides.result__title}>По итогам исследования вы получите:</h2>
          <ul className={slides.result__list}>
            <li className={slides.result__point}>Анализ аудитории</li>
            <li className={slides.result__point}>Анализ конкурентов</li>
            <li className={slides.result__point}>Анализ продукта</li>
            <li className={slides.result__point}>Выводы и рекомендации по позиционированию и продвижению</li>
          </ul>
        </div>,
        <ModalForm key="form" />,
      ]}
    />
  )
}

export default MarketingModal

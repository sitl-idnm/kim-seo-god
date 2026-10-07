/* eslint-disable no-empty-pattern */
'use client'
import { FC } from 'react'

import { DevelopModalProps } from './developModal.types'
import { ModalCarousel } from '../modalCarousel'
import slides from '../modalCarousel/slides.module.scss'
import { FavourItem } from '../favourItem'
import { ModalForm } from '../modalForm'
import Code from '../../shared/assets/icons/code_embeed.svg'
import CodeIcon from '../../shared/assets/icons/code.svg'
import Tilda from '../../shared/assets/icons/tilda.svg'
import Wp from '../../shared/assets/icons/wp.svg'
import Webflow from '../../shared/assets/icons/webflow.svg'

const itemsData = [
  { title: 'Привлекайте клиентов из поисковых систем', backgroundColor: 'rgba(255,255,255,0.08)', textColor: 'var(--color-white-default)', imageSrc: '/images/image1_fix.png', text: 'Создадим оптимизированный сайт, который хорошо ранжируется в Google и Яндексе' },
  { title: 'Получайте больше заявок с сайта', backgroundColor: 'rgba(255,255,255,0.14)', textColor: 'var(--color-white-default)', imageSrc: '/images/image2.png', text: 'Логичная структура и удобный функционал помогают клиентам оставлять запросы быстрее' },
  { title: 'Автоматизируйте рутину', backgroundColor: 'var(--color-red-accent)', textColor: 'var(--color-white-default)', imageSrc: '/images/image4_fix.png', text: 'Интеграция сайта с CRM, платёжными системами и аналитикой снижает нагрузку на вашу команду' },
]

const DevelopModal: FC<DevelopModalProps> = ({}) => {
  return (
    <ModalCarousel
      ariaLabel="Разработка"
      slides={[
        <div className={slides.hero} key="hero">
          <h2 className={slides.hero__title}>
            Разработка <Code />
          </h2>
          <p className={slides.hero__text}>
            Закажите сайт на коде или собранный в Tilda, WordPress и на других CMS
          </p>
          <ul className={slides.hero__icons}>
            <li><Webflow /></li>
            <li><Wp /></li>
            <li><Tilda /></li>
            <li><CodeIcon /></li>
          </ul>
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
          <h2 className={slides.result__title}>По итогам разработки вы&nbsp;получите:</h2>
          <ul className={slides.result__list}>
            <li className={slides.result__point}>Конверсионный сайт, готовый к запуску рекламы и адаптированный под все устройства</li>
            <li className={slides.result__point}>Интеграцию с нужными вам сервисами: CRM, онлайн-оплаты, рассылки</li>
            <li className={slides.result__point}>Базовую или расширенную SEO-оптимизацию сайта</li>
          </ul>
        </div>,
        <ModalForm key="form" />,
      ]}
    />
  )
}

export default DevelopModal

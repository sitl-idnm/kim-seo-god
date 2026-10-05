/* eslint-disable no-empty-pattern */
'use client'
import { FC } from 'react'

import styles from './marketingModal.module.scss'
import { MarketingModalProps } from './marketingModal.types'
import Image from 'next/image'
import { useSetAtom } from 'jotai/react'
import { openModalContent } from '@/shared/atoms/openModal'
import firstline from '../../../public/images/first_backmodal.png';
import secondline from '../../../public/images/second_backmodal.png';
import Lens from '../../shared/assets/icons/lens.svg';
import { FavourItem } from '../favourItem'
import { ModalForm } from '../modalForm'

const itemsData = [
  { title: 'Получайте больше квалифицированных заявок', backgroundColor: 'var(--color-grey)', textColor: 'var(--color-black)', imageSrc: '/images/image1_fix.png', text: 'Привлекайте клиентов, которые действительно заинтересованы в вашем продукте' },
  { title: 'Больше продавайте', backgroundColor: 'var(--color-black)', textColor: 'var(--color-white-default)', imageSrc: '/images/image2.png', text: 'Адаптируйте предложение под реальные потребности аудитории.' },
  { title: 'Опережайте конкурентов', backgroundColor: 'var(--color-red-accent)', textColor: 'var(--color-white-default)', imageSrc: '/images/image4_fix.png', text: 'Предлагайте то, чего нет у других' },
]

const MarketingModal: FC<MarketingModalProps> = ({}) => {
  const setModalContent = useSetAtom(openModalContent)

  const closeModal = () => {
    setModalContent('')
  }

  return (
    <div className={styles.modal} onClick={(e) => {
      if (e.target === e.currentTarget) {
        closeModal()
      }
    }}>
      <div className={styles.modal__content} onClick={(e) => e.stopPropagation()}>
        <div className={styles.close} onClick={closeModal}></div>
        <div className={styles.content}>
          <div className={styles.content__first}>
            <h2 className={styles.title}>
              Маркетинговые <span className={styles.title__accent}>исследования
                <span className={styles.title__icon}>
                  <Lens />
                </span>
              </span>
            </h2>
            <p className={styles.text}>
              Закажите исследование, чтобы понять рынок, конкурентов и потребности <span className={styles.text__accent}>вашей аудитории.</span>
            </p>
            <div className={styles.lines}>
              <Image
                src={firstline}
                alt='first_backmodal'
                className={styles.lines__first}
              />
              <Image
                src={secondline}
                alt='second_backmodal'
                className={styles.lines__second}
              />
            </div>
          </div>
          <div className={styles.content__favour}>
            <ul className={styles.favour}>
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
          </div>
          <div className={styles.content__result}>
            <h2 className={styles.result__title}>По итогам исследования вы получите:</h2>
            <div className={styles.result__points}>
              <ul className={styles.result__list}>
                <li className={styles.list__point}>Анализ аудитории</li>
                <li className={styles.list__point}>Анализ конкурентов</li>
                <li className={styles.list__point}>Анализ продукта</li>
                <li className={styles.list__point}>Выводы и рекомендации по позиционированию и продвижения</li>
              </ul>
            </div>
          </div>
          <div>
            <ModalForm />
          </div>
        </div>
      </div>
    </div>
  )
}

export default MarketingModal

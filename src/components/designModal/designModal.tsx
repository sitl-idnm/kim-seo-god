import { FC } from 'react'

import styles from './designModal.module.scss'
import { DesignModalProps } from './designModal.types'
import Image from 'next/image'
import { FavourItem } from '../favourItem'
import { ModalForm } from '../modalForm'
import { useSetAtom } from 'jotai/react'
import { openModalContent } from '@/shared/atoms/openModal'
import Brush from '../../shared/assets/icons/brush.svg';
import ipad from '../../../public/images/design_ipad.png'

const itemsData = [
  { title: 'Удерживайте внимание аудитории', backgroundColor: 'var(--color-grey)', textColor: 'var(--color-black)', imageSrc: '/images/image1_fix.png', text: 'Эстетичный и понятный дизайн помогает выделиться в потоке информации' },
  { title: 'Увеличивайте конверсию', backgroundColor: 'var(--color-black)', textColor: 'var(--color-white-default)', imageSrc: '/images/image2.png', text: 'Используйте дизайн, который направляет клиентов к целевым действиям' },
  { title: 'Ускоряйте процесс принятия решений у клиентов', backgroundColor: 'var(--color-red-accent)', textColor: 'var(--color-white-default)', imageSrc: '/images/image4_fix.png', text: 'Дизайн, который ясно и логично показывает ценность вашего продукта, мотивирует на покупку' },
]


// eslint-disable-next-line no-empty-pattern
const DesignModal: FC<DesignModalProps> = ({}) => {
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
               Дизайн<span><Brush /></span>
            </h2>
            <p className={styles.text}>
              Разработаем фирменный стиль, дизайн сайта, электронного письма, полиграфии, оформим социальные сети.
            </p>
            <div className={styles.ipad}>
              <Image
                src={ipad}
                width={748}
                height={943}
                alt='ipads'
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
                <li className={styles.list__point}>Дизайн сайта</li>
                <li className={styles.list__point}>Визуальную концепцию бренда</li>
                <li className={styles.list__point}>Макеты для рассылок, соцсетей или рекламы</li>
                <li className={styles.list__point}>Фирменный стиль</li>
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

export default DesignModal

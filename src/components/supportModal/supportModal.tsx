/* eslint-disable @typescript-eslint/no-unused-vars */
import { FC } from 'react'
import classNames from 'classnames'

import styles from './supportModal.module.scss'
import { SupportModalProps } from './supportModal.types'
import { useSetAtom } from 'jotai/react'
import { openModalContent } from '@/shared/atoms/openModal'
import Image from 'next/image'
import { FavourItem } from '../favourItem'
import { ModalForm } from '../modalForm'
import iphone from '../../../public/images/ipad-iphone.png'
import Gear from '../../shared/assets/icons/gear.svg'

const itemsData = [
  { title: 'Обновляйте сайт без лишних усилий', backgroundColor: 'var(--color-grey)', textColor: 'var(--color-black)', imageSrc: '/images/image1_fix.png', text: 'Мы вносим изменения за вас: от новых страниц до доработки функционала' },
  { title: 'Улучшайте скорость и SEO-показатели сайта', backgroundColor: 'var(--color-black)', textColor: 'var(--color-white-default)', imageSrc: '/images/image2.png', text: 'Регулярная оптимизация делает сайт удобным для пользователей и видимым для поисковиков' },
  { title: 'Снижайте количество технических ошибок', backgroundColor: 'var(--color-red-accent)', textColor: 'var(--color-white-default)', imageSrc: '/images/image4_fix.png', text: 'Постоянный контроль за сайтом предотвращает сбои и неудачные обновления' },
]

const SupportModal: FC<SupportModalProps> = ({
  className
}) => {
  const rootClassName = classNames(styles.root, className)
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
              Поддержка <span className={styles.title__icon}><Gear /></span>
            </h2>
            <p className={styles.text}>
            Закажите поддержку, чтобы ваш сайт всегда был в <span className={styles.text__accent}>идеальном состоянии</span>
            </p>
            <div className={styles.lines}>
              <Image
                src={iphone}
                alt='ipad-iphone'
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
            <h2 className={styles.result__title}>Поддержка сайта обеспечит вам:</h2>
            <div className={styles.result__points}>
              <ul className={styles.result__list}>
                <li className={styles.list__point}>Постоянный мониторинг и контроль за работой сайта</li>
                <li className={styles.list__point}>Быстрое исправление любых ошибок и проблем</li>
                <li className={styles.list__point}>Регулярное обновление контента и функционала</li>
                <li className={styles.list__point}>Улучшение производительности и безопасности</li>
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

export default SupportModal

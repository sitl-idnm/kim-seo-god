/* eslint-disable @typescript-eslint/no-unused-vars */
import { FC } from 'react'
import classNames from 'classnames'

import styles from './developModal.module.scss'
import { DevelopModalProps } from './developModal.types'
import { useSetAtom } from 'jotai/react'
import { openModalContent } from '@/shared/atoms/openModal'
import Image from 'next/image'
import { FavourItem } from '../favourItem'
import { ModalForm } from '../modalForm'
import ipadSweet from '../../../public/images/ipad_sweetcorp.png'
import Code from '../../shared/assets/icons/code_embeed.svg'
import CodeIcon from '../../shared/assets/icons/code.svg'
import Tilda from '../../shared/assets/icons/tilda.svg'
import Wp from '../../shared/assets/icons/wp.svg'
import Webflow from '../../shared/assets/icons/webflow.svg'

const itemsData = [
  { title: 'Привлекайте клиентов из поисковых систем', backgroundColor: 'var(--color-grey)', textColor: 'var(--color-black)', imageSrc: '/images/image1_fix.png', text: 'Создадим оптимизированный сайт, который хорошо ранжируется в Google и Яндексе' },
  { title: 'Получайте больше заявок с сайта', backgroundColor: 'var(--color-black)', textColor: 'var(--color-white-default)', imageSrc: '/images/image2.png', text: 'Логичная структура и удобный функционал помогают клиентам оставлять запросы быстрее' },
  { title: 'Автоматизируйте рутину', backgroundColor: 'var(--color-red-accent)', textColor: 'var(--color-white-default)', imageSrc: '/images/image4_fix.png', text: 'Интеграция сайта с CRM, платёжными системами и аналитикой снижает нагрузку на вашу команду' },
]

const DevelopModal: FC<DevelopModalProps> = ({
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
            <div className={styles.first}>
              <h2 className={styles.title}>
                Разработка<span><Code /></span>
              </h2>
              <p className={styles.text}>
                Закажите сайт на коде или собранный в Tilda, WordPress и на других CMS
              </p>
              <ul className={styles.icons}>
                <li className={styles.icon}><Webflow /></li>
                <li className={styles.icon}><Wp /></li>
                <li className={styles.icon}><Tilda /></li>
                <li className={styles.icon}><CodeIcon /></li>
              </ul>
            </div>
            <div className={styles.lines}>
              <Image
                src={ipadSweet}
                alt='ipad'
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
            <h2 className={styles.result__title}>По итогам разработки вы&nbsp;получите:</h2>
            <div className={styles.result__points}>
              <ul className={styles.result__list}>
                <li className={styles.list__point}>Конверсионный сайт, готовый к запуску рекламы и адаптированный под все устройства</li>
                <li className={styles.list__point}>Интеграцию с нужными вам сервисами: CRM, онлайн-оплаты, рассылки</li>
                <li className={styles.list__point}>Базовую или расширенную SEO-оптимизацию сайта</li>
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

export default DevelopModal

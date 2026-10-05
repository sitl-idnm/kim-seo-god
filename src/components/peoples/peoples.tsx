import { FC } from 'react'
import classNames from 'classnames'

import styles from './peoples.module.scss'
import { PeoplesProps } from './peoples.types'
import Image from 'next/image'
import { AnimatedImage, Button } from '@/ui'

const Peoples: FC<PeoplesProps> = ({
  className
}) => {
  const rootClassName = classNames(styles.root, className)

  return (
    <div className={rootClassName}>
      <div className={styles.peoples}>
        <h2 className={styles.peoples__title}>Узнайте больше про наш подход у&nbsp;основателей агентства</h2>
        <div className={`${styles.peoples__card} ${styles.peoples__card__left}`}>
          <div className={styles.peoples__card__info}>
            <h3 className={styles.peoples__card__title}>Павел Коржуев</h3>
            <p className={styles.peoples__card__text}>@pavel_expert</p></div>
          <Button
            tag="a"
            href="https://t.me/pavel_expert"
            maxWidth='228px'
            className={styles.peoples__card__button}
          >
            Написать в Telegram
          </Button>
        </div>
        <div className={`${styles.peoples__card} ${styles.peoples__card__right}`}>
          <div className={styles.peoples__card__info}>
            <h3 className={styles.peoples__card__title}>Константин Ким</h3>
            <p className={styles.peoples__card__text}>@konstantin_v_k</p></div>
            <Button
              tag="a"
              href="https://t.me/konstantin_v_k"
              maxWidth='304px'
              className={styles.peoples__card__button_2}
            >
              Написать в Telegram
            </Button>
          </div>
        <div className={styles.peoples__image_container}>
          <Image
            src='/images/peoples.png'
            width={910}
            height={563}
            quality={100}
            alt='peoples'
            className={styles.peoples__image}
          />
          {/* <Image
            src='/images/peoples_deanon.png'
            width={910}
            height={563}
            quality={100}
            alt='peoples deanon'
            className={styles.peoples__image_absolute}
          /> */}
        </div>
        <AnimatedImage />
      </div>
    </div>
  )
}

export default Peoples

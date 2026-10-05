import { FC } from 'react'
import classNames from 'classnames'

import styles from './blackBoxLink.module.scss'
import { BlackBoxLinkProps } from './blackBoxLink.types'
import { Borders, Button } from '@/ui'
import Image from 'next/image'

const BlackBoxLink: FC<BlackBoxLinkProps> = ({
  className
}) => {
  const rootClassName = classNames(styles.root, className)

  return (
    <div className={rootClassName}>
      <div className={styles.container}>
        <Borders cornersWithCrosses={['topLeft', 'bottomRight', 'topRight', 'bottomLeft']} />
        <div className={styles.content}>
          <div className={styles.content__wrapper}>
            <h2 className={styles.title}>
              Хотите узнать эффективна ли ваша маркетинговая стратегия?
            </h2>
            <p className={styles.description}>
              Используйте наш калькулятор расчета показателей.
            </p>
          </div>
          <Button
            tag='a'
            href='#'
            maxWidth='280px'
          >Рассчитать показатели</Button>
        </div>
        <div className={styles.image}>
          <Image
            src='/images/abstract_triangle.png'
            alt='blackBoxLink'
            width={710}
            height={680}
            quality={100}
          />
        </div>
      </div>
    </div>
  )
}

export default BlackBoxLink

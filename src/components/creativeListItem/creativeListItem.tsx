import { FC } from 'react'
import classNames from 'classnames'
import Image from 'next/image'

import { Button } from '@/ui'
import styles from './creativeListItem.module.scss'
import { CreativeListItemProps } from './creativeListItem.types'

const CreativeListItem: FC<CreativeListItemProps> = ({
  className,
  title,
  subtitle,
  description,
  buttonText,
  image
}) => {
  const rootClassName = classNames(styles.root, className)

  return (
    <div className={rootClassName}>
      <div className={styles.content}>
        <h2 className={styles.title}>{title}</h2>
        <h3 className={styles.subtitle}>{subtitle}</h3>
        <p className={styles.description}>{description}</p>
        <Button className={styles.button}>
          {buttonText}
        </Button>
      </div>
      <div className={styles.imageWrapper}>
        <Image
          src={image.src}
          alt={image.alt}
          className={styles.image}
          width={500}
          height={600}
        />
      </div>
    </div>
  )
}

export default CreativeListItem

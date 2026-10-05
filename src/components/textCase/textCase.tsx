'use client'

import { FC, useState } from 'react'
import classNames from 'classnames'

import styles from './textCase.module.scss'
import { TextCaseProps } from './textCase.types'
import Image from 'next/image'

const TextCase: FC<TextCaseProps> = ({
  className,
  title,
  subTitle,
  text,
  image,
  id
}) => {
  const [isNarrow, setIsNarrow] = useState(false)
  const rootClassName = classNames(styles.root, className)

  const handleImageLoad = ({ naturalWidth, naturalHeight }: { naturalWidth: number; naturalHeight: number }) => {
    const ratio = naturalWidth / naturalHeight
    setIsNarrow(ratio < 1.2)
  }

  return (
    <div className={rootClassName} id={id}>
      <div className={styles.text}>
        <h2>{title}</h2>
        {subTitle && <h3>{subTitle}</h3>}
        <p>{text}</p>
      </div>
      <div className={classNames(styles.imageWrapper, { [styles.narrowImage]: isNarrow })}>
        {image !== '' && (
          <Image
            src={image}
            alt={title || 'Case study image'}
            quality={100}
            width={0}
            height={0}
            sizes="100vw"
            style={{
              width: '100%',
              height: 'auto',
              objectFit: isNarrow ? 'contain' : 'cover',
              maxWidth: isNarrow ? '100%' : '100%'
            }}
            priority
            onLoadingComplete={handleImageLoad}
          />
        )}
      </div>
    </div>
  )
}

export default TextCase

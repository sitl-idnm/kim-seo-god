'use client'
import { FC, useEffect, useState, useCallback } from 'react'
import classNames from 'classnames'

import styles from './introCase.module.scss'
import { IntroCaseProps } from './introCase.types'
import Image from 'next/image'
import FigmaIcon from '@icons/figmaIcon.svg'
import TildaIcon from '@icons/tilda.svg'
import WebflowIcon from '@icons/webflowIconCase.svg'
import WordpressIcon from '@icons/wordpressIcon.svg'
import { Button } from '@/ui'

const IntroCase: FC<IntroCaseProps> = ({
  className,
  backgroundImage,
  adaptiveBackgroundImage,
  title,
  text,
  buttonLink,
  description,
  tilda,
  webflow,
  wordpress
}) => {
  const rootClassName = classNames(className, styles.intro)
  const [isAdaptive, setIsAdaptive] = useState(backgroundImage)

  const handleResize = useCallback(() => {
    setIsAdaptive(window.innerWidth < 1200 ? adaptiveBackgroundImage : backgroundImage)
  }, [backgroundImage, adaptiveBackgroundImage])

  useEffect(() => {
    handleResize()
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [handleResize])

  return (
    <div className={rootClassName}>
      <div className={styles.intro__content}>
        <div className={styles.intro__content__text}>
          <div className={styles.intro__content__text__title}>
            <h1 className={styles.intro__content__text__title__title}>{title}</h1>
            <p className={styles.intro__content__text__title__text}>{text}</p>
          </div>
          <Button onClick={() => buttonLink} tag={'button'} maxWidth={'232px'} className={styles.intro__content__text__link}>Посмотреть весь дизайн</Button>
        </div>
        <div className={styles.intro__content__background}>
          <Image
            src={isAdaptive}
            alt='background'
            width={870}
            height={856}
            priority
          />
        </div>
        <div className={styles.intro__content__description}>
          <div className={styles.intro__content__description__icons}>
            <FigmaIcon />
            { tilda && <TildaIcon /> }
            { webflow && <WebflowIcon /> }
            { wordpress && <WordpressIcon /> }
          </div>
          <p className={styles.intro__content__description__text}>{description}</p>
        </div>
      </div>
    </div>
  )
}

export default IntroCase

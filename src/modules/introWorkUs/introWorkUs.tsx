import { FC } from 'react'
import Image from 'next/image'
import { Borders, Button } from '@/ui'
import abstrct from '@public/images/abstract1_work.png'
import classNames from 'classnames'

import styles from './introWorkUs.module.scss'


interface IntroWorkUsProps {
  title?: string
  text?: string
  highlightedText?: string
  className?: string
  titleClassName?: string
  image?: {
    src: string
    alt: string
    width?: number
    height?: number
  }
  buttonText?: string
  /** Ссылка для основной кнопки. Если задана, кнопка рендерится как ссылка. */
  buttonHref?: string
  /** Вторая кнопка (ссылка), например «Смотреть кейсы». */
  secondButton?: { text: string; href: string }
  /** Кастомная разметка кнопок (например, клиентский компонент с модалкой). */
  buttons?: React.ReactNode
}

const IntroWorkUs: FC<IntroWorkUsProps> = ({
  title = 'Работа в K.KIM agency',
  text = 'Создаём сайты, которые не просто существуют, а',
  highlightedText = 'конвертируют',
  className,
  titleClassName,
  image,
  buttonText = 'Заказать услугу',
  buttonHref,
  secondButton,
  buttons
}) => {
  const rootClassName = classNames(styles.root, className)
  const titleClass = classNames(styles.box__title, titleClassName)
  const hasText = text.trim().length > 0 || highlightedText.trim().length > 0

  return (
    <div className={rootClassName}>
      <div className={styles.box}>
        <Borders
          cornersWithCrosses={[
            'topLeft',
            'bottomRight',
            'topRight',
            'bottomLeft'
          ]}
        />
        <h1 className={titleClass}>{title}</h1>
        {hasText && (
          <p className={styles.box__text}>
            {text}{' '}
            <span className={styles.box__text__white}>{highlightedText}</span>
          </p>
        )}
        {buttons != null ? (
          buttons
        ) : (
          <div className={styles.box__buttons}>
            <Button
              tag={buttonHref ? 'a' : 'button'}
              href={buttonHref}
              maxWidth='192px'
            >
              {buttonText}
            </Button>
            {secondButton && (
              <Button tag="a" href={secondButton.href} maxWidth="192px">
                {secondButton.text}
              </Button>
            )}
          </div>
        )}
        <Image
          src={image?.src || abstrct}
          alt={image?.alt || 'abstrct'}
          className={styles.box__image}
          quality={100}
          width={image?.width || 100}
          height={image?.height || 100}
        />
      </div>
    </div>
  )
}

export default IntroWorkUs

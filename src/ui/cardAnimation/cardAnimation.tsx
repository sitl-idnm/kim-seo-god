import { FC } from 'react'
import classNames from 'classnames'

import styles from './cardAnimation.module.scss'
import { CardAnimationProps } from './cardAnimation.types'

const CardAnimation: FC<CardAnimationProps> = ({
  className,
  borderColor = '#E30613',
  borderWidth = 2,
  animationDuration = 3,
  children
}) => {
  const rootClassName = classNames(styles.root, className)

  const style = {
    '--border-color': borderColor,
    '--border-width': `${borderWidth}px`,
    '--animation-duration': `${animationDuration}s`
  } as React.CSSProperties

  return (
    <div className={rootClassName} style={style}>
      <div className={styles.border}>
        <span />
        <span />
        <span />
        <span />
      </div>
      <div className={styles.content}>
        {children}
      </div>
    </div>
  )
}

export default CardAnimation

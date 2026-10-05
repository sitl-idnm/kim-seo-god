import { FC } from 'react'
import classNames from 'classnames'

import styles from './yandexReviews.module.scss'
import { YandexReviewsProps } from './yandexReviews.types'

const YandexReviews: FC<YandexReviewsProps> = ({
  className
}) => {
  const rootClassName = classNames(styles.root, className)
  
  return (
    <div className={rootClassName}></div>
  )
}

export default YandexReviews

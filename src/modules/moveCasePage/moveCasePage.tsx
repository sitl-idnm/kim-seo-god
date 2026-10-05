'use client'

import { FC, useState } from 'react'
import classNames from 'classnames'

import styles from './moveCasePage.module.scss'
import { MoveCasePageProps } from './moveCasePage.types'

const MoveCasePage: FC<MoveCasePageProps> = ({
  className,
  firstAnchor,
  secondAnchor,
  thirdAnchor,
  fourthAnchor
}) => {
  const [activeItem, setActiveItem] = useState(0)
  const rootClassName = classNames(styles.root, className)

  return (
    <div className={rootClassName}>
      <h2 className={styles.root__title}>Содержание</h2>
      <div className={styles.content}>
        <div
          className={`${styles.content__item} ${activeItem === 0 ? styles.active : ''}`}
          onClick={() => setActiveItem(0)}
        >
          <a href={'#first'}>{firstAnchor}</a>
        </div>
        <div
          className={`${styles.content__item} ${activeItem === 1 ? styles.active : ''}`}
          onClick={() => setActiveItem(1)}
        >
          <a href={'#second'}>{secondAnchor}</a>
        </div>
        <div
          className={`${styles.content__item} ${activeItem === 2 ? styles.active : ''}`}
          onClick={() => setActiveItem(2)}
        >
          <a href={'#third'}>{thirdAnchor}</a>
        </div>
        {fourthAnchor && (
          <div
            className={`${styles.content__item} ${activeItem === 3 ? styles.active : ''}`}
            onClick={() => setActiveItem(3)}
          >
            <a href={'#fourth'}>{fourthAnchor}</a>
          </div>
        )}
      </div>
    </div>
  )
}

export default MoveCasePage

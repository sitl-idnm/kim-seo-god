'use client'

import { FC, useRef, useEffect } from 'react'
import classNames from 'classnames'

import styles from './cardListItem.module.scss'
import { CardListItemProps } from './cardListItem.types'

const CardListItem: FC<CardListItemProps> = ({
  className,
  icon,
  title,
  description,
  items
}) => {
  const rootClassName = classNames(styles.root, className)
  const contentRef = useRef<HTMLDivElement>(null)
  const rootRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (contentRef.current && rootRef.current) {
      const height = contentRef.current.offsetHeight
      rootRef.current.style.setProperty('--content-height', `${height}px`)
    }
  }, [title, description, items])

  return (
    <div className={rootClassName} ref={rootRef}>
      {icon && <div className={styles.icon}>{icon}</div>}
      <div className={styles.content} ref={contentRef}>
        {title && <h3 className={styles.title}>{title}</h3>}
        {description && <p className={styles.description}>{description}</p>}
        {items && items.length > 0 && (
          <div className={styles.items}>
            {items.map((item, index) => (
              <div key={index} className={styles.item}>
                <h4 className={styles.item__title}>{item.title}</h4>
                <p className={styles.item__description}>{item.description}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default CardListItem

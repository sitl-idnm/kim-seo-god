import { FC } from 'react'
import classNames from 'classnames'

import styles from '../blogPage/blogPage.module.scss'

type BlogArticleListBlocksVariant = 'dark' | 'accent'

type BlogArticleListBlocksProps = {
  items: string[]
  variant: BlogArticleListBlocksVariant
  className?: string
}

export const BlogArticleListBlocks: FC<BlogArticleListBlocksProps> = ({
  items,
  variant,
  className
}) => (
  <section
    className={classNames(
      styles.workCard,
      variant === 'dark' ? styles.workCardDark : styles.workCardAccent,
      className
    )}
  >
    <ul className={styles.list}>
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  </section>
)

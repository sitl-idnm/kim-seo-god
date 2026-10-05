import { FC } from 'react'
import Image from 'next/image'

import styles from './blogArticle.module.scss'

export type BlogArticleMetaBarProps = {
  author: string
  authorRole: string
  date: string
  readingMinutes: number
  authorImage?: string
}

const formatDate = (isoDate: string) => {
  try {
    return new Intl.DateTimeFormat('ru-RU', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    }).format(new Date(isoDate))
  } catch {
    return isoDate
  }
}

export const BlogArticleMetaBar: FC<BlogArticleMetaBarProps> = ({
  author,
  authorRole,
  date,
  readingMinutes,
  authorImage = '/images/konstantin.png'
}) => (
  <div className={styles.metaBar} aria-label="Об авторе и публикации">
    <div className={styles.metaBarCell}>
      <div className={styles.authorCard}>
        <div className={styles.authorPhoto}>
          <Image
            src={authorImage}
            alt={author}
            width={56}
            height={56}
            className={styles.authorPhotoImg}
          />
        </div>
        <div>
          <p className={styles.authorName}>{author}</p>
          <p className={styles.authorRole}>{authorRole}</p>
        </div>
      </div>
    </div>

    <div className={styles.metaBarCell}>
      <p className={styles.metaLabel}>Дата публикации:</p>
      <time className={styles.metaValue} dateTime={date}>
        {formatDate(date)}
      </time>
    </div>

    <div className={styles.metaBarCell}>
      <p className={styles.metaLabel}>Время прочтения:</p>
      <p className={styles.metaValue}>{readingMinutes} минут</p>
    </div>
  </div>
)

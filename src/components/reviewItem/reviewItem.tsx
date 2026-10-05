import { FC } from 'react'
import classNames from 'classnames'
import Image from 'next/image'
import Link from 'next/link'

import styles from './reviewItem.module.scss'
import { ReviewItemProps } from './reviewItem.types'
import { Button } from '@/ui'

const ReviewItem: FC<ReviewItemProps> = ({
  className,
  avatar,
  name,
  position,
  reviewText,
  companyLogo: CompanyLogo,
  companyUrl,
  companyLinkText = 'Ссылка на сайт компании',
  originalReviewUrl,
  buttonText = 'Посмотреть оригинал',
}) => {
  const rootClassName = classNames(styles.root, className)

  return (
    <div className={rootClassName}>
      <div className={styles.authorInfo}>
        <Image src={avatar} alt={`Avatar of ${name}`} width={80} height={80} className={styles.avatar} />
        <div className={styles.authorDetails}>
          <h4 className={styles.name}>{name}</h4>
          <p className={styles.position}>{position}</p>
        </div>
      </div>
      <p className={styles.reviewText}>{reviewText}</p>

      {CompanyLogo && companyUrl && (
        <div className={styles.companyInfo}>
          <CompanyLogo className={styles.companyLogo} />
          <Link href={companyUrl} target="_blank" rel="noopener noreferrer" className={styles.companyLink}>
            {companyLinkText}
          </Link>
        </div>
      )}

      {originalReviewUrl && (
        <Button
          tag='a'
          href={originalReviewUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.originalButton}
        >
          {buttonText}
        </Button>
      )}
    </div>
  )
}

export default ReviewItem

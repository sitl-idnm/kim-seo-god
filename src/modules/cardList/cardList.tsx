import { FC } from 'react'
import classNames from 'classnames'

import { CardListItem } from '@/components'
import ExclamationCircleIcon from '@icons/ExclamationCircleIcon.svg'
import WrenchIcon from '@icons/WrenchIcon.svg'
import CheckCircleIcon from '@icons/CheckCircleIcon.svg'

import styles from './cardList.module.scss'
import { CardListProps } from './cardList.types'
import { cardListData } from './cardList.data'

const CardList: FC<CardListProps> = ({
  className,
  title = cardListData.title,
  subtitle = cardListData.subtitle,
  problem = cardListData.problem,
  solution = cardListData.solution,
  result = cardListData.result
}) => {
  const rootClassName = classNames(styles.root, className)

  return (
    <div className={rootClassName}>
      <div className={styles.header}>
        <h2 className={styles.title}>
          {title} <span className={styles.subtitle}>{subtitle}</span>
        </h2>
      </div>

      <div className={styles.cards}>
        <CardListItem
          icon={<ExclamationCircleIcon className={styles.icon} />}
          title={problem.title}
          description={problem.description}
        />

        <CardListItem
          icon={<WrenchIcon className={styles.icon} />}
          title={solution.title}
          description={solution.description}
          items={solution.items}
        />

        <CardListItem
          icon={<CheckCircleIcon className={styles.icon} />}
          title={result.title}
          description={result.description}
        />
      </div>
    </div>
  )
}

export default CardList

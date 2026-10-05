import { FC } from 'react'
import classNames from 'classnames'

import styles from './accessSteps.module.scss'
import { AccessStepsProps } from './accessSteps.types'

const AccessSteps: FC<AccessStepsProps> = ({
  className,
  title = 'По итогам исследования вы получите:',
  points = [
    'Анализ аудитории',
    'Анализ конкурентов',
    'Анализ продукта',
    'Выводы и рекомендации по позиционированию и продвижения'
  ]
}) => {
  const rootClassName = classNames(styles.root, className)

  return (
    <div className={rootClassName}>
      <div className={styles.content__result}>
        <h2 className={styles.result__title}>{title}</h2>
        <div className={styles.result__points}>
          <ul className={styles.result__list}>
            {points.map((point, index) => (
              <li key={index} className={styles.list__point}>{point}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default AccessSteps

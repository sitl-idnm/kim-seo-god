import { FC } from 'react'
import classNames from 'classnames'

import { Heading } from '@/ui'
import styles from './costCalculator.module.scss'
import { CostCalculatorProps } from './costCalculator.types'

const defaultTitle = 'Калькулятор стоимости'
const defaultText = 'Вы можете предварительно рассчитать стоимость, ответив на несколько вопросов.'

const CostCalculator: FC<CostCalculatorProps> = ({
  className,
  title = defaultTitle,
  text = defaultText,
  cards
}) => {
  const rootClassName = classNames(styles.root, className)

  return (
    <section className={rootClassName}>
      <Heading size="md" className={styles.title}>
        {title}
      </Heading>
      {text && <p className={styles.text}>{text}</p>}

      <div className={styles.grid}>
        {cards.map((card) => (
          <div key={card.title} className={styles.card}>
            <p className={styles.cardTitle}>{card.title}</p>
            <ul className={styles.list}>
              {card.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}

export default CostCalculator

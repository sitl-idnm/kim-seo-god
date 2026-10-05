'use client'

import { FC } from 'react'
import classNames from 'classnames'
import { motion } from 'framer-motion'
import styles from './howwework.module.scss'
import { HowWeWorkProps, Step } from './howwework.types'

const defaultSteps: Step[] = [
  {
    number: 1,
    title: 'Брифинг'
  },
  {
    number: 2,
    title: <>Подготовка коммерческого<br />предложения</>
  },
  {
    number: 3,
    title: <>Согласование плана<br />работ</>
  },
  {
    number: 4,
    title: <>Работа над проектом<br />и согласование каждого этапа</>
  },
  {
    number: 5,
    title: <>Завершение проекта<br />и предоставление отчетности</>
  }
]

const HowWeWorkComponent: FC<HowWeWorkProps> = ({
  className,
  steps = defaultSteps,
  title = 'Как мы работаем?',
  hasTopPadding = false,
  hasBottomPadding = false
}) => {
  const rootClassName = classNames(
    styles.root,
    {
      [styles.root_topPadding]: hasTopPadding,
      [styles.root_bottomPadding]: hasBottomPadding
    },
    className
  )
  const stepsClassName = classNames(
    styles.steps,
    styles[`steps_${steps.length}`]
  )

  return (
    <div className={rootClassName}>
      <div className={styles.container}>
        <h2 className={styles.title}>{title}</h2>
        <div className={stepsClassName}>
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              className={styles.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h3 className={styles.stepTitle}>{step.title}</h3>
              {step.description && (
                <p className={styles.stepDescription}>{step.description}</p>
              )}
              <span className={styles.number}>{step.number}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default HowWeWorkComponent

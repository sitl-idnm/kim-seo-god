'use client'
import { FC, useState } from 'react'
import classNames from 'classnames'

import styles from './vacanciesItem.module.scss'
import { VacanciesItemProps } from './vacanciesItem.types'
import { Button } from '@/ui'
import FaqIcon from '@icons/faq.svg' // Используем ту же иконку, что и в FAQ для консистентности

const VacanciesItem: FC<VacanciesItemProps> = ({
  className,
  title,
  requirements,
  responsibilities,
}) => {
  const [isRequirementsOpen, setIsRequirementsOpen] = useState(false)
  const [isResponsibilitiesOpen, setIsResponsibilitiesOpen] = useState(false)

  const rootClassName = classNames(styles.root, className)

  const toggleRequirements = () => setIsRequirementsOpen(!isRequirementsOpen)
  const toggleResponsibilities = () => setIsResponsibilitiesOpen(!isResponsibilitiesOpen)

  return (
    <div className={rootClassName}>
      <div className={styles.header}>
        <h3 className={styles.title}>{title}</h3>
        <Button tag='button' maxWidth='160px' className={styles.applyButton}>
          Оставить заявку
        </Button>
      </div>

      <div className={styles.accordionItem}>
        <button className={styles.accordionHeader} onClick={toggleRequirements}>
          Требования к сотруднику
          <FaqIcon className={classNames(styles.icon, { [styles.iconOpen]: isRequirementsOpen })} />
        </button>
        <div className={classNames(styles.accordionContent, { [styles.contentOpen]: isRequirementsOpen })}>
          <ul>
            {requirements.map((req, index) => (
              <li key={index}>{req}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className={styles.accordionItem}>
        <button className={styles.accordionHeader} onClick={toggleResponsibilities}>
          Обязанности
          <FaqIcon className={classNames(styles.icon, { [styles.iconOpen]: isResponsibilitiesOpen })} />
        </button>
        <div className={classNames(styles.accordionContent, { [styles.contentOpen]: isResponsibilitiesOpen })}>
          <ul>
            {responsibilities.map((resp, index) => (
              <li key={index}>{resp}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default VacanciesItem

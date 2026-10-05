import { FC } from 'react'
import classNames from 'classnames'

import styles from './vacancies.module.scss'
import { VacanciesProps } from './vacancies.types'
import { VacanciesItem } from '@/components'

const VacanciesModule: FC<VacanciesProps> = ({
  className
}) => {
  const rootClassName = classNames(styles.root, className)

  return (
    <div className={rootClassName}>
      <h2 className={styles.title}>Вакансии</h2>
      <VacanciesItem
        title='Специалист по маркетингу'
        requirements={['Опыт работы в маркетинге не менее 3 лет', 'Высшее образование', 'Знание основ SEO и SMM']}
        responsibilities={['Разработка и реализация маркетинговых стратегий', 'Анализ рынка и конкурентов', 'Организация и проведение мероприятий']}
      />
    </div>
  )
}

export default VacanciesModule

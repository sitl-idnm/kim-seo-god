import { FC } from 'react'
import classNames from 'classnames'

import styles from './formWorkUs.module.scss'
import { FormWorkUsProps } from './formWorkUs.types'
import { Form } from '@/components'

const FormWorkUs: FC<FormWorkUsProps> = ({
  className
}) => {
  const rootClassName = classNames(styles.root, className)

  return (
    <div className={rootClassName}>
      <div className={styles.content}>
        <h2 className={styles.content__title}>Готов к вызову?<br/> Присоединяйся к нам!</h2>
        <p className={styles.content__text}>Оставь свои контакты и резюме, и мы свяжемся с тобой, чтобы обсудить возможности для твоего роста в KIM!</p>
      </div>
      <div className={styles.form}>
        <Form work />
      </div>
    </div>
  )
}

export default FormWorkUs

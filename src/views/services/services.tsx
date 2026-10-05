import { FC } from 'react'
import classNames from 'classnames'

import styles from './services.module.scss'
import { ServicesProps } from './services.types'

const Services: FC<ServicesProps> = ({
  className
}) => {
  const rootClassName = classNames(styles.root, className)
  
  return (
    <main className={rootClassName}></main>
  )
}

export default Services

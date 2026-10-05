import { FC } from 'react'
import classNames from 'classnames'

import styles from './defaultTextCase.module.scss'
import { DefaultTextCaseProps } from './defaultTextCase.types'

const DefaultTextCase: FC<DefaultTextCaseProps> = ({
  className,
  mainText,
  subText
}) => {
  const rootClassName = classNames(styles.root, className)

  return (
    <div className={rootClassName}>
      <p className={styles.mainText}>
        {mainText}
      </p>
      { (subText !== '' || subText !== null) &&
        <p className={styles.subText}>
          {subText}
        </p>
      }
    </div>
  )
}

export default DefaultTextCase

'use client'

import { Button } from '@/ui'
import classNames from 'classnames'
import styles from './page.module.scss'

export function IntroButtonsChatbots() {
  return (
    <div className={classNames(styles.introButtonsWrap)}>
      <Button
        tag="a"
        href="#form"
        maxWidth="192px"
        className={styles.introButtonPrimary}
      >
        Обсудить задачу
      </Button>
      <Button
        tag="a"
        href="#cases"
        maxWidth="192px"
        className={styles.introButtonSecondary}
      >
        Смотреть кейсы
      </Button>
    </div>
  )
}

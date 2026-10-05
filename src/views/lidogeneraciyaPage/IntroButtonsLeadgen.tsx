'use client'

import { useSetAtom } from 'jotai/react'
import { openModalContent } from '@/shared/atoms/openModal'
import { Button } from '@/ui'
import classNames from 'classnames'
import styles from './lidogeneraciyaPage.module.scss'

export function IntroButtonsLeadgen() {
  const setModalContent = useSetAtom(openModalContent)

  return (
    <div className={classNames(styles.introButtonsWrap)}>
      <Button
        tag="button"
        maxWidth="192px"
        onClick={() => setModalContent('детали-лидогенерация')}
        className={styles.introButtonPrimary}
      >
        Обсудить результат
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

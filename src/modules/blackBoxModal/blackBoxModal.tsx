'use client'
import { FC } from 'react'
import classNames from 'classnames'

import styles from './blackBoxModal.module.scss'
import { BlackBoxModalProps } from './blackBoxModal.types'
import { Borders, Button } from '@/ui'
import Image from 'next/image'
import { openModalContent } from '@/shared/atoms/openModal'
import { useSetAtom } from 'jotai'

const BlackBoxModal: FC<BlackBoxModalProps> = ({
  className
}) => {
  const rootClassName = classNames(styles.root, className)

  const setModalContent = useSetAtom(openModalContent)

  const handleClick = (item: string) => {
    setModalContent(item)
  }

  return (
    <div className={rootClassName}>
      <div className={styles.container}>
        <Borders cornersWithCrosses={['topLeft', 'bottomRight', 'topRight', 'bottomLeft']} />
        <div className={styles.image}>
          <Image
            src='/images/abstract_circle.png'
            alt='blackBoxModal'
            width={810}
            height={807}
          />
        </div>
        <div className={styles.content}>
          <div className={styles.content__wrapper}>
            <h2 className={styles.title}>
              Агентство интернет-маркетинга полного цикла
            </h2>
            <p className={styles.description}>
              Возьмем на себя ваш маркетинг: от глубокого анализа компании, аудитории и конкурентов до разработки продающего прототипа, дизайна и контента для онлайн-ресурса. Интегрируем CRM-систему для полной автоматизации<br/>бизнес-процессов и приведем заявки из интернета.
            </p>
          </div>
          <Button onClick={() => handleClick('Начать')} maxWidth='244px'>Начать работу</Button>
        </div>
      </div>
    </div>
  )
}

export default BlackBoxModal

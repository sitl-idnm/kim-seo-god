import { FC } from 'react'

import styles from './startModal.module.scss'
import { StartModalProps } from './startModal.types'
import { openModalContent } from '@/shared/atoms/openModal'
import { useSetAtom } from 'jotai'
import { ModalForm } from '../modalForm'

const StartModal: FC<StartModalProps> = () => {
  const setModalContent = useSetAtom(openModalContent)

  const closeModal = () => {
    setModalContent('')
  }

  return (
    <div className={styles.modal} onClick={(e) => {
      if (e.target === e.currentTarget) {
        closeModal()
      }
    }}>
      <div className={styles.modal__content} onClick={(e) => e.stopPropagation()}>
        <div className={styles.close} onClick={closeModal}></div>
        <div className={styles.content}>
          <div>
            <ModalForm start />
          </div>
        </div>
      </div>
    </div>
  )
}

export default StartModal

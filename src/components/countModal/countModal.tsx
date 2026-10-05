import { FC } from 'react'
import styles from './countModal.module.scss'
import { CountModalProps } from './countModal.types'
import { useSetAtom } from 'jotai/react'
import { openModalContent } from '@/shared/atoms/openModal'
import { ModalForm } from '../modalForm'

const CountModal: FC<CountModalProps> = () => {
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
            <ModalForm count />
          </div>
        </div>
      </div>
    </div>
  )
}

export default CountModal

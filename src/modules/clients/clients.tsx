'use client'

import { FC } from 'react'
import classNames from 'classnames'
import BestWaveIcon from '@icons/clients/bestwave.svg'
import MagicIcon from '@icons/clients/magic.svg'
import SweetCorpIcon from '@icons/clients/sweetcorp.svg'
import RovnayaIcon from '@icons/clients/rovnaya.svg'
import RivieraIcon from '@icons/clients/riviera.svg'
import ClientPulseIcon from '@icons/clients/clientpulse.svg'

import styles from './clients.module.scss'
import { ClientsProps } from './clients.types'

const clientsList = [
  { icon: BestWaveIcon, alt: 'Best Wave' },
  { icon: MagicIcon, alt: 'Магия вкуса' },
  { icon: SweetCorpIcon, alt: 'Sweet Corp' },
  { icon: RovnayaIcon, alt: 'Ровная спина' },
  { icon: RivieraIcon, alt: 'Ривьера' },
  { icon: ClientPulseIcon, alt: 'Client Pulse' }
]

const ClientsComponent: FC<ClientsProps> = ({
  className,
  title = 'Наши клиенты'
}) => {
  const rootClassName = classNames(styles.root, className)

  return (
    <div className={rootClassName}>
      <div className={styles.container}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.description}>
          За время существования нашего агентства мы реализовали<br />
          более 150 проектов и сотрудничали с крупными компаниями.
        </p>
        <div className={styles.clientsList}>
          {clientsList.map((client, index) => (
            <div key={index} className={styles.clientItem}>
              <client.icon className={styles.clientLogo} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ClientsComponent

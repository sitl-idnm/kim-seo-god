import { FC } from 'react'
import classNames from 'classnames'
import MedicalIcon from '@icons/redbox/medkit.svg'
import MarketplaceIcon from '@icons/redbox/cart.svg'
import CarIcon from '@icons/redbox/car.svg'
import HorecaIcon from '@icons/redbox/browse.svg'
import HomeIcon from '@icons/redbox/home.svg'
import RepairIcon from '@icons/redbox/brush.svg'
import ConstructionIcon from '@icons/redbox/town.svg'
import GiftIcon from '@icons/redbox/gift.svg'
import AdvertisingIcon from '@icons/redbox/voice.svg'
import OnlineIcon from '@icons/redbox/call.svg'

import styles from './redBoxWork.module.scss'
import { RedBoxWorkProps } from './redBoxWork.types'

const RedBoxWork: FC<RedBoxWorkProps> = ({
  className
}) => {
  const rootClassName = classNames(styles.root, className)

  return (
    <div className={rootClassName}>
      <div className={styles.container}>
        <h2 className={styles.title}>Опыт работы в разных сферах бизнеса</h2>
        <div className={styles.buttons}>
          <button>
            <MedicalIcon className={styles.icon} />
            Медицина
          </button>
          <button>
            <MarketplaceIcon className={styles.icon} />
            Маркетплейсы
          </button>
          <button>
            <CarIcon className={styles.icon} />
            Автомобили
          </button>
          <button>
            <OnlineIcon className={styles.icon} />
            HoReCa
          </button>
          <button>
            <ConstructionIcon className={styles.icon} />
            Недвижимость
          </button>
          <button>
            <RepairIcon className={styles.icon} />
            Ремонт квартир
          </button>
          <button>
            <HomeIcon className={styles.icon} />
            Строительство домов
          </button>
          <button>
            <GiftIcon className={styles.icon} />
            Подарки
          </button>
          <button>
            <AdvertisingIcon className={styles.icon} />
            Рекламные агентства
          </button>
          <button>
            <HorecaIcon className={styles.icon} />
            Онлайн сервисы
          </button>
        </div>
        {/* <div className={styles.buttons}>
        </div> */}
      </div>
    </div>
  )
}

export default RedBoxWork

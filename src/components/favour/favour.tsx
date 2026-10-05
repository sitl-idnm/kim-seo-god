import { FC } from 'react'
import classNames from 'classnames'

import styles from './favour.module.scss'
import { FavourProps, FavourItemData } from './favour.types'
import { FavourItem } from '../favourItem'

const defaultItemsData: FavourItemData[] = [
  { title: 'исследования', linkText: 'Подробнее', linkColor: 'var(--color-black)', backgroundColor: 'var(--color-grey)', textColor: 'var(--color-black)', imageSrc: '/images/image1.png', modalName: 'исследования' },
  { title: 'дизайн', linkText: 'Подробнее', linkColor: 'var(--color-white-default)', backgroundColor: 'var(--color-black)', textColor: 'var(--color-white-default)', imageSrc: '/images/image2.png', modalName: 'дизайн' },
  { title: <>разработка<br />и поддержка</>, linkText: 'Подробнее', linkColor: 'var(--color-black)', backgroundColor: 'var(--color-grey-light)', textColor: 'var(--color-black)', imageSrc: '/images/image3.png', modalName: 'разработка' },
  { title: 'трафик', linkText: 'Подробнее', linkColor: 'var(--color-black)', backgroundColor: 'var(--color-red-accent)', textColor: 'var(--color-white-default)', imageSrc: '/images/image4.png', modalName: 'поддержка' }
]

const Favour: FC<FavourProps> = ({
  className,
  itemsData = defaultItemsData
}) => {
  const rootClassName = classNames(styles.root, className)

  return (
    <div className={rootClassName}>
      <div className={styles.favour}>
        <ul className={styles.favour__list}>
          {itemsData.map((item, index) => (
            <FavourItem
              key={index}
              title={item.title}
              modalName={item.modalName}
              text={item.text}
              backgroundColor={item.backgroundColor}
              textColor={item.textColor}
              linkText={item.linkText}
              linkColor={item.linkColor}
              imageSrc={item.imageSrc}
              justifyContent='center'
              alignItems='center'
              flexDirection='column'
            />
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Favour

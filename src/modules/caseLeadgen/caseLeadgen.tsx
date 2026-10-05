'use client'

import { FC, useState } from 'react'
import classNames from 'classnames'
import Image from 'next/image'
import { useSetAtom } from 'jotai/react'
import { openModalContent } from '@/shared/atoms/openModal'

import styles from './caseLeadgen.module.scss'
import { CaseLeadgenProps, CaseLeadgenItem } from './caseLeadgen.types'
import { caseLeadgenDefaultItems } from './caseLeadgen.data'

const defaultTitle = 'Пока вы оцениваете, конкуренты уже получают лиды'
const defaultSubtitle = 'Реальные проекты с цифрами'
const defaultCategories =
  'B2B-услуги / Производство / Строительство / Автобизнес / Медицина / Образование / Финансы / Ритейл / HoReCa / Логистика'

const CaseLeadgen: FC<CaseLeadgenProps> = ({
  className,
  id,
  title = defaultTitle,
  subtitle = defaultSubtitle,
  categories = defaultCategories,
  items = caseLeadgenDefaultItems,
  actionButtonText = 'Получить план запуска',
  actionButtonHref = '#form'
}) => {
  const [activeIndex, setActiveIndex] = useState(0)
  const setModalContent = useSetAtom(openModalContent)
  const rootClassName = classNames(styles.root, className)
  const activeItem = items[activeIndex]
  const openDetailsModal = actionButtonHref === '#form'

  return (
    <section id={id} className={rootClassName}>
      <div className={styles.header}>
        <h2 className={styles.title}>{title}</h2>
        {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
        {categories && <p className={styles.categories}>{categories}</p>}
      </div>

      <div className={styles.wrapper}>
        <nav className={styles.nav} aria-label="Навигация по кейсам">
          <ul className={styles.navList}>
            {items.map((item, index) => (
              <li key={index}>
                <button
                  type="button"
                  className={classNames(styles.navItem, { [styles.navItemActive]: index === activeIndex })}
                  onClick={() => setActiveIndex(index)}
                >
                  {item.title}
                  {item.badge ? <span className={styles.navBadge}>{item.badge}</span> : null}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        <div className={styles.slider}>
          <div className={styles.slide}>
            {activeItem && <CaseLeadgenCard item={activeItem} />}
          </div>
        </div>
      </div>

      <div className={styles.actions}>
        {openDetailsModal ? (
          <button type="button" className={styles.ctaButton} onClick={() => setModalContent('детали-лидогенерация')}>
            {actionButtonText}
          </button>
        ) : (
          <a href={actionButtonHref} className={styles.ctaButton}>
            {actionButtonText}
          </a>
        )}
      </div>
    </section>
  )
}

interface CaseLeadgenCardProps {
  item: CaseLeadgenItem
}

const CaseLeadgenCard: FC<CaseLeadgenCardProps> = ({ item }) => (
  <article className={styles.card}>
    {item.imageSrc && (
      <div className={styles.cardImage}>
        <Image src={item.imageSrc} alt="" width={400} height={240} className={styles.cardImg} />
      </div>
    )}
    {!item.imageSrc && <div className={styles.cardImagePlaceholder}>фото</div>}
    <div className={styles.cardBody}>
      <h3 className={styles.cardTitle}>
        {item.title}
        <span className={styles.badge}>{item.badge}</span>
      </h3>
      <dl className={styles.cardMeta}>
        <div>
          <dt className={styles.cardTerm}>Задача:</dt>
          <dd className={styles.cardDesc}>{item.task}</dd>
        </div>
        <div>
          <dt className={styles.cardTerm}>Подход:</dt>
          <dd className={styles.cardDesc}>{item.approach}</dd>
        </div>
        <div>
          <dt className={styles.cardTerm}>Результат:</dt>
          <dd className={styles.cardDesc}>{item.result}</dd>
        </div>
      </dl>
    </div>
  </article>
)

export default CaseLeadgen

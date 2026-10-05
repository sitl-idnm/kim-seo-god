'use client'
import { FC, useState } from 'react'
import classNames from 'classnames'
import FaqIcon from '@icons/faq.svg'

import styles from './expandableContent.module.scss'
import { ExpandableContentProps } from './expandableContent.types'

const ExpandableContent: FC<ExpandableContentProps> = ({
  className,
  title,
  intro,
  first,
  second,
  firstCards,
  secondCards
}) => {
  const [openFirst, setOpenFirst] = useState<boolean>(true)
  const [openSecond, setOpenSecond] = useState<boolean>(false)

  const rootClassName = classNames(styles.root, className)

  return (
    <section className={rootClassName}>
      <div className={styles.container}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.intro}>{intro}</p>

        <div className={styles.section}>
          <button className={styles.header} onClick={() => setOpenFirst(!openFirst)}>
            <h3 className={styles.h3}>{first.heading}</h3>
            <div className={classNames(styles.icon, { [styles.iconOpen]: openFirst })}>
              <FaqIcon />
            </div>
          </button>
          <div className={classNames(styles.content, { [styles.contentOpen]: openFirst })}>
            <div className={styles.inner}>
              {firstCards ? <div className={styles.cards}>{firstCards}</div> : null}
              {first.paragraphs?.map((p, idx) => (
                <p className={styles.paragraph} key={idx}>{p}</p>
              ))}
            </div>
          </div>
        </div>

        <div className={styles.section}>
          <button className={styles.header} onClick={() => setOpenSecond(!openSecond)}>
            <h3 className={styles.h3}>{second.heading}</h3>
            <div className={classNames(styles.icon, { [styles.iconOpen]: openSecond })}>
              <FaqIcon />
            </div>
          </button>
          <div className={classNames(styles.content, { [styles.contentOpen]: openSecond })}>
            <div className={styles.inner}>
              {second.paragraphs?.map((p, idx) => (
                <p className={styles.paragraph} key={idx}>{p}</p>
              ))}
              {secondCards ? <div className={styles.cards}>{secondCards}</div> : null}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ExpandableContent

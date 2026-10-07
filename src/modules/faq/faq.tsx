'use client'

import { FC, useId, useState } from 'react'
import classNames from 'classnames'
import FaqIcon from '@icons/faq.svg'

import styles from './faq.module.scss'
import { FaqProps } from './faq.types'

const FaqComponent: FC<FaqProps> = ({
  className,
  faqData,
  title = 'Часто задаваемые вопросы'
}) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)
  const uid = useId()
  const rootClassName = classNames(styles.root, className)

  const toggleQuestion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  return (
    <div className={rootClassName}>
      <div className={styles.container}>
        <h2 className={styles.title}>{title}</h2>
        <div className={styles.faqList}>
          {faqData.map((item, index: number) => (
            <div
              key={item.title}
              className={classNames(styles.faqItem, {
                [styles.active]: activeIndex === index
              })}
            >
              <button
                className={styles.question}
                onClick={() => toggleQuestion(index)}
                aria-expanded={activeIndex === index}
                aria-controls={`${uid}-faq-${index}`}
              >
                {item.title}
                <div className={styles.icon}>
                  <FaqIcon />
                </div>
              </button>
              <div className={styles.answer} id={`${uid}-faq-${index}`} role="region">
                <div className={styles.answerInner}>
                  {item.content}
                  {item.listItems && item.listItems.length > 0 && (
                    <ul className={styles.answerList}>
                      {item.listItems.map((listItem) => (
                        <li key={listItem} className={styles.answerListItem}>{listItem}</li>
                      ))}
                    </ul>
                  )}
                  {item.contentAfter && <p className={styles.answerAfter}>{item.contentAfter}</p>}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default FaqComponent

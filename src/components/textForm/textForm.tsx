import { FC } from 'react'
import classNames from 'classnames'

import styles from './textForm.module.scss'
import { TextFormProps } from './textForm.types'

const TextForm: FC<TextFormProps> = ({
  className,
  title,
  paragraph,
  listItems,
  listClosing
}) => {
  const rootClassName = classNames(styles.root, styles.text, className)

  return (
    <div className={rootClassName}>
      <h2 className={styles.text__title}>{title}</h2>
      {paragraph && <p className={styles.text__paragraph}>{paragraph}</p>}
      {listItems && listItems.length > 0 && (
        <>
          <ul className={styles.text__list}>
            {listItems.map((item, i) => (
              <li key={i} className={styles.text__listItem}>{item}</li>
            ))}
          </ul>
          {listClosing && <p className={styles.text__listClosing}>{listClosing}</p>}
        </>
      )}
    </div>
  )
}

export default TextForm

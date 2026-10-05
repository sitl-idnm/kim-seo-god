import { FC } from 'react'
import classNames from 'classnames'

import styles from './formFirst.module.scss'
import { FormFirstProps } from './formFirst.types'
import { Form, TextForm } from '@/components'
import Image from 'next/image'
import { Borders } from '@/ui'

const defaultTitle = 'Тоже нужен сайт?'
const defaultParagraph = 'Оставьте заявку, и мы подготовим для вас коммерческое предложение с вариантами разработки, сроками и бюджетом.'

const FormFirst: FC<FormFirstProps> = ({
  className,
  title = defaultTitle,
  paragraph = defaultParagraph,
  listItems,
  listClosing,
  submitValue,
  project,
  projectPlaceholder
}) => {
  const rootClassName = classNames(styles.root, className)

  return (
    <div className={rootClassName}>
      <section className={styles.form}>
      <Borders cornersWithCrosses={['topLeft', 'bottomRight', 'topRight', 'bottomLeft']} />
        <div className={styles.form__circle}>
          <Image
            src='/images/circle.png'
            width={780}
            height={780}
            quality={100}
            alt='abstract__cirle'
            className={styles.image}
          />
        </div>
        <div className={styles.form__text}>
          <TextForm
            title={title}
            paragraph={paragraph}
            listItems={listItems}
            listClosing={listClosing}
          />
          <Form
            submitValue={submitValue}
            project={project}
            projectPlaceholder={projectPlaceholder}
          />
        </div>
      </section>
    </div>
  )
}

export default FormFirst

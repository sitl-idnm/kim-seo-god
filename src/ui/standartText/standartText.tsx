import { FC, ReactNode } from 'react'
import classNames from 'classnames'
import styles from './standartText.module.scss'
import { StandartTextProps } from './standartText.types'

const defaultTexts = [
  'KIM Agency – это агентство интернет маркетинга в Москве, которое специализируется на предоставлении digital-решений для вашего бизнеса. Мы предлагаем широкий спектр маркетинговых и цифровых услуг, которые помогут вам достичь новых высот в онлайн-пространстве. Наша команда профессионалов занимается разработкой и реализацией эффективных стратегий для увеличения продаж и укрепления позиций вашего бизнеса в сфере digital.',
  'KIM Agency предлагает комплекс услуг: от анализа рынка и создание performance-кампаний до разработки цифровых продуктов и продвижения бренда в интернете. Мы работаем над каждым проектом индивидуально, подбирая оптимальные стратегии для достижения максимальных результатов.',
  'Наше агентство интернет маркетинга успешно реализует проекты по всей России, предлагая нашим клиентам лучшие решения для развития бизнеса.',
  'KIM Agency – ваш надежный партнер в мире цифрового маркетинга и гарант высокого результата.'
]

const StandardText: FC<StandartTextProps> = ({
  className,
  title = '',
  texts = defaultTexts,
  footerTexts,
  listTitle,
  listItems,
  marginBottom,
  marginTop
}) => {
  const rootClassName = classNames(styles.root, className, {
    [styles['root--margin']]: marginBottom,
    [styles['root--margin-top']]: marginTop
  })

  const renderParagraph = (text: string | ReactNode, key: string | number) => (
    <p key={key} className={styles.text}>
      {text}
    </p>
  )

  return (
    <div className={rootClassName}>
      <div className={styles.container}>
        {title && <h2 className={styles.title}>{title}</h2>}
        {texts.map((text, index) => renderParagraph(text, index))}

        {listItems && listItems.length > 0 && (
          <div className={styles.listSection}>
            <div className={styles.divider} aria-hidden />
            {listTitle && <p className={styles.listTitle}>{listTitle}</p>}
            <ul className={styles.list}>
              {listItems.map((item) => (
                <li key={item} className={styles.listItem}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}

        {footerTexts?.map((text, index) => renderParagraph(text, `footer-${index}`))}
      </div>
    </div>
  )
}

export default StandardText

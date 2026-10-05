import { FC } from 'react'
import classNames from 'classnames'

import styles from './contentCaseGloid.module.scss'
import { ContentCaseGloidProps } from './contentCaseGloid.types'
import { TextCase } from '@/components'

const ContentCaseGloid: FC<ContentCaseGloidProps> = ({
  className,
}) => {
  const rootClassName = classNames(styles.root, className)

  return (
    <div className={rootClassName}>
      <TextCase
        title={'Дизайн сайта'}
        text={<>Разработали сайт для компании, которая занимается производством и продажей оборудования для промышленной маркировки.</>}
        image={'/images/cases/gloid/1.png'}
        id={''}
      />
      <TextCase
        title={''}
        text={<>Также добавили страницу с тарифами и стоимостью.</>}
        image={'/images/cases/gloid/2.png'}
        id={''}
      />
      <TextCase
        title={'Верстка сайта на Webflow и отрисовка приложения'}
        text={<>Во время верстки клиент попросил добавить анимацию работы приложения на главный экран. Выяснилось, что самого приложения еще не было.
          Мы решили самостоятельно его отрисовать и записать скринкаст с демонстрацией работы.</>}
        image={''}
        id={''}
      />
    </div>
  )
}

export default ContentCaseGloid

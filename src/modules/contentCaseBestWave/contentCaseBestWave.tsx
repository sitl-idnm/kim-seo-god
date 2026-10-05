import { FC } from 'react'
import classNames from 'classnames'

import styles from './contentCaseBestWave.module.scss'
import { ContentCaseBestWaveProps } from './contentCaseBestWave.types'
import { TextCase } from '@/components'

const ContentCaseBestWave: FC<ContentCaseBestWaveProps> = ({
  className,
}) => {
  const rootClassName = classNames(styles.root, className)

  return (
    <div className={rootClassName}>
      <TextCase
        title={'Разработка сайта'}
        text={<>Действующий сайт не устраивал заказчика по структуре и дизайну.</>}
        image={'/images/cases/bestwave/1.png'}
        id={'first'}
      />
      <TextCase
        title={''}
        text={<><span>Нам необходимо было структурировать информацию и полностью обновить оформление в соответствии с фирменным стилем серф-клуба и актуальными решениями в web-дизайне.</span><span>На макете мы разместили все блоки так, чтобы посетители сайта могли быстро найти нужную информацию и арендовать оборудование онлайн.</span></>}
        image={'/images/cases/bestwave/2.png'}
        id={''}
      />
      <TextCase
        title={''}
        text={<>Новый сайт содержит блоки, в которых пользователь может найти все, что его интересует: услуги и цены, локация, фотогалерея, ответы на вопросы, контакты и кнопку записи.</>}
        image={'/images/cases/bestwave/3.png'}
        id={''}
      />
      <TextCase
        title={''}
        text={<>Также мы подробно расписали все услуги и оборудование в наличии.</>}
        image={'/images/cases/bestwave/4.png'}
        id={''}
      />
      <TextCase
        title={''}
        text={<>Разместили подробную информацию о местонахождении серф-клуба, расписали как добраться и добавили плагин Яндекс.Карт.</>}
        image={'/images/cases/bestwave/5.png'}
        id={''}
      />
      <TextCase
        title={''}
        text={<>Добавили блок с преимуществами серф-клуба.</>}
        image={'/images/cases/bestwave/6.png'}
        id={''}
      />
      <TextCase
        title={''}
        text={<>Ответили на часто задаваемые вопросы клиентов.</>}
        image={'/images/cases/bestwave/7.png'}
        id={''}
      />
      <TextCase
        title={'Фотосессия'}
        text={<><span>Обычно мы работаем с медиа-контентом, который предоставляет клиент. Но в этот раз у заказчика не было подходящих фотоматериалов для сайта, поэтому мы организовали фотосессию.</span><span>Сняли виды, местность, инструкторов и сделали много фотографий на элетросерфах, джетсерфах и вейксерфах. Получившиеся фотографии обработали и добавили на сайт.</span></>}
        image={'/images/cases/bestwave/8.png'}
        id={'second'}
      />
      <TextCase
        title={'Результат'}
        text={<><span>Мы переработали старый сайт и структурировали его, чтобы он стал понятнее для пользователей.</span><span>Подробно описали услуги и оборудование, сделали акцент на преимуществах серф-клуба, разместили галерею с качественными фотографиями с фотосессии, добавили контактную информацию и подробности о том, как добраться.</span></>}
        image={'/images/cases/bestwave/9.png'}
        id={'third'}
      />
    </div>
  )
}

export default ContentCaseBestWave

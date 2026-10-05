import { FC } from 'react'
import classNames from 'classnames'

import styles from './contactsPage.module.scss'
import { ContactsPageProps } from './contactsPage.types'
import FormSecond from '@/modules/formSecond/formSecond'
import Clients from '@/modules/clients/clients'
import StandartText from '@/ui/standartText/standartText'
import { WeAre } from '@/modules/weAre'
import { AccessSteps } from '@/components/accessSteps'
import { FormFirst } from '@/modules/formFirst'
import { ContactsData } from '@/components/contactsData'

const ContactsPage: FC<ContactsPageProps> = ({
  className
}) => {
  const rootClassName = classNames(styles.root, className)

  return (
    <main className={rootClassName}>
      <h1 className={styles.title}>Контакты</h1>
      <ContactsData />
      <FormFirst />
      <AccessSteps
        title="Что мы предлагаем?"
        points={[
          'Разработка одностраничных и многостраничных сайтов',
          'Продвижение бизнеса через контент',
          'Обеспечение потока клиентов из социальных сетей',
          'Создание грамотной маркетинговой стратегии',
          'Оптимизация сайтов для поисковых систем',
          'Разработка логотипов, фирменного стиля, дизайна полиграфии',
          'Создание положительного мнения пользователей в поисковых системах',
          'Настройка чат-ботов, сквозной аналитики и телефонии'
        ]}
      />
      <WeAre
        title="Контакты основателей агентства"
        showText={false}
        compactImage={true}
      />
      <StandartText
        title="Как мы работаем?"
        texts={[
          'Мы создаем рекламные кампании, погружаясь в ваш бизнес.',
          'Работа строится на интерактивном взаимодействии с клиентом. Сначала мы анализируем ваш бизнес и проверяем текущие маркетинговые активности. Вместе с вами определяем цели и задачи. На этом этапе вы активно участвуете: предлагаете идеи, вносите коррективы.', 'Мы разрабатываем стратегию и обсуждаем её с вами на каждом этапе. Можно вносить правки и задавать вопросы. Все этапы работы прозрачны. Мы тестируем разные подходы и делимся результатами в отчетах.',
          'Наши клиенты могут ознакомиться с результатами в портфолио с примерами успешных кампаний. В каждом кейсе мы показываем, как наши стратегии помогают бизнесу расти и развиваться.'
        ]}
      />
      <Clients />
      <FormSecond />
    </main>
  )
}

export default ContactsPage

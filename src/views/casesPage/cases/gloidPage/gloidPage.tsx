import { FC } from 'react'
import classNames from 'classnames'

import styles from './gloidPage.module.scss'
import { GloidPageProps } from './gloidPage.types'
import { IntroCase } from '@/modules/introCase'
import { CaseForm, DefaultTextCase } from '@/components'
import { ContentCaseGloid } from '@/modules/contentCaseGloid'
import NewModalContainer from '@/components/newModalContainer/newModalContainer'
import { WidgetCase } from '@/modules/widgetCase'

const GloidPage: FC<GloidPageProps> = ({
  className
}) => {
  const rootClassName = classNames(styles.root, className)

  return (
    <main className={rootClassName}>
      <NewModalContainer />
      <WidgetCase />
      <IntroCase
        adaptiveBackgroundImage={'/images/cases/gloid/GloidCaseBackgroundAdaptive.png'}
        backgroundImage={'/images/cases/gloid/introduce.png'}
        title={'Англоязычный лендинг приложения'}
        text={<>для простой двухфакторной аутентификации на любых сервисах</>}
        buttonLink={''}
        description={'Создали современный сайт с удобной навигацией по продукции.'}
        tilda={false}
        webflow={true}
      />
      <DefaultTextCase
        mainText={<>За разработкой сайта к нам обратились разработчики приложения, которое позволяет просто и быстро авторизоваться на любых сервисах. С помощью него можно сократить расходы, защитить персональные данные и не использовать SMS-коды. По сути оно заменяет обычную аутентификацию через SMS и звонки.</>}
        subText={<><span>Приложение ориентировано на зарубежную аудиторию и для него нужно было разработать сайт на английском языке. На момент разработки самого приложения еще не было, поэтому для анимации с демонстрацией работы, мы самостоятельно отрисовали интерфейс приложения.</span><span>Как мы разрабатывали лендинг, отрисовывали приложение с нуля и записывали скринкаст рассказываем в этом кейсе.</span></>}
      />
      <ContentCaseGloid />
      <DefaultTextCase
        mainText={<>Так клиент получил готовый лендинг с демонстрацией работы приложения еще до его релиза</>}
      />
      <CaseForm image={'/images/cases/gloid/form.png'} />
    </main>
  )
}

export default GloidPage

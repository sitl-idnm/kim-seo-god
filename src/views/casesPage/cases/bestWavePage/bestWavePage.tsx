import { FC } from 'react'
import classNames from 'classnames'

import styles from './bestWavePage.module.scss'
import { BestWavePageProps } from './bestWavePage.types'
import { IntroCase } from '@/modules/introCase'
import { MoveCasePage } from '@/modules/moveCasePage'
import { CaseForm, DefaultTextCase } from '@/components'
import { ContentCaseBestWave } from '@/modules/contentCaseBestWave'
import NewModalContainer from '@/components/newModalContainer/newModalContainer'
import { WidgetCase } from '@/modules/widgetCase'

const BestWavePage: FC<BestWavePageProps> = ({
  className
}) => {
  const rootClassName = classNames(styles.root, className)

  return (
    <main className={rootClassName}>
      <NewModalContainer />
      <WidgetCase />
      <IntroCase
        adaptiveBackgroundImage={'/images/cases/bestwave/BestWaveCaseBackgroundAdaptive.png'}
        backgroundImage={'/images/cases/bestwave/introduce.png'}
        title={'Лендинг no-code'}
        text={<>для серф-клуба в Москве</>}
        buttonLink={''}
        description={'Разработали одностраничный сайт на Тильде, направленный на тех, кто хочет арендовать оборудование для серфинга в Москве.'}
        tilda={true}
        webflow={false}
      />
      <DefaultTextCase
        mainText={<><span><span style={{ fontWeight: 600 }}>Best Wave –</span> московский серф-клуб, в котором посетители могут арендовать вейксерфы, джетсерфы, электрофойлы и электросерфы.</span><span>Заказчик обратился к нам в самый сезон за быстрым, но стильным решением по разработке сайта. Поэтому мы предложили сайт на Тильде по индивидуальному дизайн-макету.</span></>}
      />
      <MoveCasePage
        firstAnchor={'Разработка сайта'}
        secondAnchor={'Фотосессия'}
        thirdAnchor={'Результат'}
      />
      <ContentCaseBestWave />
      <CaseForm image={'/images/cases/bestwave/form.png'} />
    </main>
  )
}

export default BestWavePage

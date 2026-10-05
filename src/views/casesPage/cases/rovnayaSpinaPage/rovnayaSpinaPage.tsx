/* eslint-disable no-irregular-whitespace */
import { FC } from 'react'
import classNames from 'classnames'

import styles from './rovnayaSpinaPage.module.scss'
import { RovnayaSpinaPageProps } from './rovnayaSpinaPage.types'
import { IntroCase } from '@/modules/introCase'
import { CaseForm, DefaultTextCase } from '@/components'
import { MoveCasePage } from '@/modules/moveCasePage'
import { ContentCaseRovnayaSpina } from '@/modules/contentCaseRovnayaSpina'
import NewModalContainer from '@/components/newModalContainer/newModalContainer'
import { WidgetCase } from '@/modules/widgetCase'

const RovnayaSpinaPage: FC<RovnayaSpinaPageProps> = ({
  className
}) => {
  const rootClassName = classNames(styles.root, className)

  return (
    <main className={rootClassName}>
      <NewModalContainer />
      <WidgetCase />
      <IntroCase
        adaptiveBackgroundImage={'/images/cases/rovnayaspina/RovnayaSpinaCaseBackgroundAdaptive.png'}
        backgroundImage={'/images/cases/rovnayaspina/introduce.png'}
        title={'Многостраничный сайт с онлайн-записью и базовым SEO'}
        text={<>для оздоровительного центра<br />«Ровная спина»</>}
        buttonLink={''}
        description={'Разработали сайт на WordPress с отдельными страницами под каждую услугу, онлайн-записью на процедуры в разных филиалах и информационными статьями. А также сделали базовую настройкуSEO.'}
        tilda={false}
        webflow={false}
        wordpress={true}
      />
      <DefaultTextCase
        mainText={<><span><span style={{fontWeight: 600}}>Ровная спина –</span><span> это оздоровительный центр. Специалисты компании работают по авторской методике аппаратной акупрессуры и, с помощью точечного воздействия на мышцы, помогают своим клиентам справиться с первопричиной проблем с опорно-двигательным аппаратом, внутренними органами и кровообращением.</span></span></>}
        subText={<><span>Аудитория центра – люди, которые хотят избавиться от головной боли и мигрени, боли в спине и шее, хотят исправить асимметрию лица, плоскостопие, устранить сколиоз, кифоз, косолапость, вальгус, защемления, грыжи, протрузии, снять спазмы и усталость мышц.</span><span>Ровная спина представлена в 8 странах и имеет больше 130 городов присутствия.</span><span>Аудитория приходит по рекомендации, а также из социальных сетей и каналов на видеохостингах, которые ведет центр.</span><span>У компании уже был сайт. Представители центра обратились в наше агентство за полным обновлением сайта: структуры, дизайна, контента. Как мы построили работу и что получилось – читайте в этом кейсе.</span></>}
      />
      <MoveCasePage
        firstAnchor={'Задача'}
        secondAnchor={'Разработка сайта'}
        thirdAnchor={'SEO-оптимизация'}
        fourthAnchor={'Результат и отзыв'}
      />
      <ContentCaseRovnayaSpina />
      <CaseForm image={'/images/cases/rovnayaspina/form.png'} />
    </main>
  )
}

export default RovnayaSpinaPage

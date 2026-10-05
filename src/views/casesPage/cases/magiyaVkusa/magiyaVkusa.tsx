import { FC } from 'react'
import classNames from 'classnames'

import styles from './magiyaVkusa.module.scss'
import { MagiyaVkusaProps } from './magiyaVkusa.types'
import { IntroCase } from '@/modules/introCase'
import { CaseForm, DefaultTextCase } from '@/components'
import { ContentCaseMagiyaVkusa } from '@/modules/contentCaseMagiyaVkusa'
import NewModalContainer from '@/components/newModalContainer/newModalContainer'
import { WidgetCase } from '@/modules/widgetCase'

const MagiyaVkusa: FC<MagiyaVkusaProps> = ({
  className
}) => {
  const rootClassName = classNames(styles.root, className)

  return (
    <main className={rootClassName}>
      <NewModalContainer />
      <WidgetCase />
      <IntroCase
        adaptiveBackgroundImage={'/images/cases/magiyavkusa/MagiyaVkusaCaseBackgroundAdaptive.png'}
        backgroundImage={'/images/cases/magiyavkusa/introduce.png'}
        title={'Интернет-магазин'}
        text={<>для пекарни полного цикла</>}
        buttonLink={''}
        description={'Разработали интернет-магазин, чтобы пользователи могли оформлять онлайн-заказы на пироги.'}
        tilda={false}
        webflow={true}
      />
      <DefaultTextCase
        mainText={<><span><span style={{ fontWeight: 600 }}>«Магия Вкуса» –</span> пекарня полного цикла в Москве. Владельцы компании обратились к нам за созданием сайта, на котором посетители смогут оформить доставку конкретной выпечки. Нам необходимо было сделать интернет-магазин с каталогом, карточками товаров, корзиной и системой оформления заказов.</span></>}
      />
      <ContentCaseMagiyaVkusa />
      <DefaultTextCase
        mainText={<>У нас получился простой, но информативный и интуитивно-понятный интернет-магазин, в котором жители и гости Москвы могут заказать вкусные пироги.</>}
      />
      <CaseForm image={'/images/cases/magiyavkusa/form.png'} />
    </main>
  )
}

export default MagiyaVkusa

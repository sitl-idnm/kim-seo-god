import { FC } from 'react'
import classNames from 'classnames'

import styles from './clientPulsePage.module.scss'
import { ClientPulsePageProps } from './clientPulsePage.types'
import { IntroCase } from '@/modules/introCase'
import { CaseForm, DefaultTextCase, TextCase } from '@/components'
import Image from 'next/image'
import { MoveCasePage } from '@/modules/moveCasePage'
import { ContentCaseClientPulse } from '@/modules/contentCaseClientPulse'
import NewModalContainer from '@/components/newModalContainer/newModalContainer'
import { WidgetCase } from '@/modules/widgetCase'

const ClientPulsePage: FC<ClientPulsePageProps> = ({
  className
}) => {
  const rootClassName = classNames(styles.root, className)

  return (
    <>
      <WidgetCase />
      <main className={rootClassName}>
        <NewModalContainer />
        <IntroCase
          adaptiveBackgroundImage={'/images/cases/clientpulse/ClientPulseCaseBackgroundAdaptive.png'}
          backgroundImage={'/images/cases/clientpulse/ClientPulseCaseBackground.png'}
          title={'Многостраничный сайт'}
          text={<>для сервиса по работе<br />с клиентскими данными новодних подарков</>}
          buttonLink={''}
          description={'Разработали сайт, направленный на B2B сегмент, с отдельными страницами под каждый продукт заказчика.'}
          tilda={true}
          webflow={false}
        />
        <div>
          <DefaultTextCase
            mainText={<><span><span style={{fontWeight: 600}}>ClientPulse –</span><span> это единый сервис с платформой данных заказчиков (CDP), инструментами для настройки и управления программами лояльности, рассылками, авторизацией для гостевого Wi-Fi и MAC-радаром.</span></span></>}
            subText={<><span>Проект ClientPulse развивался как цифровой сервис для авторизации посетителей общественных мест в гостевом Wi-Fi и назывался WiFly. Помимо выполнения основной функции, сервис обеспечивал бизнес инструментами для маркетинга и рекламы – в нем можно собирать базы тех, кто авторизовался в гостевом Wi-Fi, выгружать их в кабинеты онлайн-рекламы, настраивать приветственные страницы и делать рассылки.</span><span>Постепенно команда проекта внедряла новые продукты – управление данными с MAC-радара, карты лояльности на основе технологии Wallet, SMS- Email- мессенджер-маркетинг. </span><span>Вся информация о возможностях сервиса размещена на сайте компании.</span></>}
          />
          <Image
            src={'/images/cases/clientpulse/first.png'}
            alt={'intro'}
            quality={100}
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: '100%', height: 'auto' }} // optional
          />
        </div>
        <TextCase
          title={''}
          text={<><span>С разработкой новых продуктов, компания решила менять позиционирование с инструментов Wi-Fi для сбора клиентских данных на набор инструментов для маркетинга и рекламы, в основе которого – данные клиентов. То есть уходить от ниши Wi-Fi к более широкому взаимодействию с данными.</span><span>Для этого необходимо было менять название, фирменный стиль и сайт.</span><span>Представители компании придумали новое название – ClientPulse и обратились к нам за созданием фирменного стиля и сайта, которые выгодно представят их продукты целевой аудитории с учетом нового позиционирования и подсветят выгоды каждого.</span><span>Сложность работы заключалась в том, что не все продукты были на этапе релиза, какие-то были в разработке, но про них также необходимо было рассказать на сайте.</span><span>Как мы строили работу над созданием нового фирменного стиля и сайта и что у нас получилось рассказываем в этом кейсе.</span></>}
          image={''}
          id={''}
        />
        <MoveCasePage
          firstAnchor={'Задача'}
          secondAnchor={'Анализ конкурентов'}
          thirdAnchor={'Анализ аудитории'}
          fourthAnchor={'Создание сайта'}
        />
        <ContentCaseClientPulse />
        <CaseForm image={'/images/cases/clientpulse/1.png'} />
      </main>
    </>
  )
}

export default ClientPulsePage

import { getServiceData } from '@/shared/dataServices'
import styles from '../shared/servicePage.module.scss'
import accent from './accent.module.scss'
import classNames from 'classnames'
import { FC } from 'react'
import type { CSSProperties } from 'react'
import { IntroWorkUs } from '@/modules/introWorkUs'
import type { Metadata } from 'next'
import { StandartText } from '@/ui'
import { Why } from '@/modules/why'
import AcceptIcon from '@icons/accept.svg'
import AcceptIconBlack from '@icons/accept-black.svg'
import { Review } from '@/modules/review'
import { Faq } from '@/modules/faq'
import { Clients } from '@/modules/clients'
import { FormFirst } from '@/modules/formFirst'
import { Case } from '@/modules/case'
import { Services } from '@/modules/ServicePage/services'
import { WeAre } from '@/modules/weAre'
import { PricingModalButton, ServicePricing } from '@/modules/servicePricing'
import { agencyStatsItems } from '../shared/stats'
import {
  faqData,
  advantagesItems,
  stagesItems,
  whatsIncludedText,
  technologiesText,
  pricingText
} from './data'

const PAGE_URL = 'https://kim-agency.ru/services/razrabotka-mobilnogo-prilozheniya/'
const organizationName = 'K.KIM'

const formTitle = 'Станьте нашим клиентом уже сегодня'
const formParagraph = 'Заполните небольшую форму и мы свяжемся с вами в ближайшее время'
const formSubmitValue = 'Начать работу с нами!'

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Разработка мобильного приложения',
    description:
      'KIM Agency помогает бизнесу сделать удобное приложение без разработки с нуля. Если нужно создать мобильное приложение для сайта, мы оцениваем задачи, аудиторию, интеграции и подбираем формат: нативная разработка, PWA или конструктор.',
    keywords: [
      'разработка мобильного приложения',
      'создание приложения',
      'iOS',
      'Android',
      'K.KIM'
    ].filter(Boolean),
    alternates: { canonical: '/services/razrabotka-mobilnogo-prilozheniya' }
  }
}

const RazrabotkaMobilnogoPrilozheniyaPage: FC = () => {
  const serviceData = getServiceData('razrabotka-mobilnogo-prilozheniya')

  if (!serviceData) {
    return null
  }

  const rootClassName = classNames(styles.root)

  const ui = serviceData.uiConfig
  const accentStyle = ui
    ? ({ '--accent': ui.accent, '--accent-soft': ui.accentSoft ?? '#f7f7f8' } as CSSProperties)
    : undefined
  const introClassName = classNames(
    styles.introBlock,
    ui?.heroEyebrow && accent.heroWithEyebrow,
    ui?.heroVariant === 'split' && accent.heroSplit,
    ui?.heroVariant === 'spotlight' && accent.heroSpotlight,
    ui?.heroVariant === 'bold' && accent.heroBold,
    ui?.heroVariant === 'minimal' && accent.heroMinimal
  )

  return (
    <div
      itemScope
      itemType="https://schema.org/WebPage"
      style={accentStyle}
    >
      <meta itemProp="name" content={serviceData?.title ?? 'Разработка мобильного приложения'} />
      <meta itemProp="url" content={PAGE_URL} />

      <nav
        className="visually-hidden"
        itemProp="breadcrumb"
        itemScope
        itemType="https://schema.org/BreadcrumbList"
      >
        <ol>
          <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
            <meta itemProp="position" content="1" />
            <meta itemProp="name" content="Услуги" />
            <meta itemProp="item" content="https://kim-agency.ru/services/" />
          </li>
          <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
            <meta itemProp="position" content="2" />
            <meta itemProp="name" content="Разработка мобильного приложения" />
            <meta itemProp="item" content={PAGE_URL} />
          </li>
        </ol>
      </nav>

      <div className="visually-hidden" itemProp="mainEntity" itemScope itemType="https://schema.org/Service">
        <meta itemProp="name" content="Разработка мобильного приложения" />
        <meta
          itemProp="description"
          content={serviceData?.description ?? 'Разработка мобильного приложения для бизнеса'}
        />
        <div itemProp="provider" itemScope itemType="https://schema.org/Organization">
          <meta itemProp="name" content={organizationName} />
          <meta itemProp="url" content="https://kim-agency.ru/" />
        </div>
        <div itemProp="offers" itemScope itemType="https://schema.org/Offer">
          <meta itemProp="priceCurrency" content="RUB" />
          <meta itemProp="price" content="400000" />
          <meta itemProp="description" content="Цена начинается от 400 000 ₽" />
        </div>
        <span itemProp="areaServed">Москва и Россия</span>
      </div>

      <div className="visually-hidden" itemScope itemType="https://schema.org/FAQPage">
        {faqData.map((q, idx) => (
          <div key={idx} itemProp="mainEntity" itemScope itemType="https://schema.org/Question">
            <meta itemProp="name" content={q.title} />
            <div itemProp="acceptedAnswer" itemScope itemType="https://schema.org/Answer">
              <meta itemProp="text" content={q.content} />
            </div>
          </div>
        ))}
      </div>

      <main className={rootClassName}>
        <IntroWorkUs
          className={introClassName}
          title="Разработка мобильного приложения"
          text="KIM Agency помогает бизнесу сделать удобное приложение без разработки с нуля. Если нужно создать мобильное приложение для сайта, мы оцениваем задачи, аудиторию, интеграции и подбираем формат: нативная разработка, PWA или конструктор."
          highlightedText=""
          titleClassName={styles.introTitleSmall}
          buttons={(
            <div className={styles.introButtonsWrap}>
              <div className={accent.heroStack}>
                {ui?.heroEyebrow && <span className={accent.heroEyebrow}>{ui.heroEyebrow}</span>}
                <PricingModalButton
                  modalKey="Начать"
                  maxWidth="320px"
                  className={classNames(styles.introHeroButton, accent.accentHeroButton)}
                >
                  Начать работу
                </PricingModalButton>
              </div>
            </div>
          )}
        />

        <StandartText
          marginBottom
          marginTop
          title="Что входит в разработку"
          texts={[whatsIncludedText]}
        />

        <StandartText
          marginBottom
          title="Этапы разработки"
          texts={[]}
        />

        <Why
          direction="column"
          titleJustify="center"
          titleAlign="center"
          cardsPerRow={3}
          title=""
          showTitle={false}
          itemsData={stagesItems.map((item) => ({
            ...item,
            icon: <AcceptIconBlack />
          }))}
        />

        <StandartText
          marginBottom
          title="Наши преимущества"
          texts={[]}
        />

        <Why
          className={styles.thirdCardsCompact}
          direction="column"
          titleJustify="center"
          titleAlign="center"
          cardsPerRow={3}
          title=""
          showTitle={false}
          itemsData={advantagesItems.map((item) => ({
            ...item,
            icon: <AcceptIcon />
          }))}
        />

        <ServicePricing
          title="Стоимость услуги"
          text={pricingText}
          badges={[{ label: 'Стоимость услуги', value: 'от 400 000 ₽' }]}
          buttonText="Начать работу"
          buttonModalKey="Начать"
        />

        <Why
          counter
          direction="row"
          titleJustify="start"
          titleAlign="start"
          cardsPerRow={3}
          title="Немного статистики"
          itemsData={agencyStatsItems}
        />

        <StandartText
          marginBottom
          title="Наши технологии"
          texts={[technologiesText]}
        />



        <div className={styles.servicesSection}>
          <Services
            title="Услуги"
            hasCost={false}
            showSubtitle
          />
        </div>

        <Clients title="Нам доверяют" />

        <div id="cases" className={styles.casesSection}>
          <Case />
        </div>



        <Faq faqData={faqData} title="FAQ" />

        <FormFirst
          className={styles.formBlock}
          title={formTitle}
          paragraph={formParagraph}
          submitValue={formSubmitValue}
        />
      </main>
    </div>
  )
}

export default RazrabotkaMobilnogoPrilozheniyaPage

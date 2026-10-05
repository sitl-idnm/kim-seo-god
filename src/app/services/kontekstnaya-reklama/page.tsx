import { getServiceData } from '@/shared/dataServices'
import styles from '../shared/servicePage.module.scss'
import classNames from 'classnames'
import { FC } from 'react'
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
import { approachItems, faqData, stagesItems } from './data'

const PAGE_URL = 'https://kim-agency.ru/services/kontekstnaya-reklama/'
const organizationName = 'K.KIM'

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Настройка контекстной рекламы',
    description:
      'Настройка контекстной рекламы помогает получать заявки в момент, когда человек уже ищет товар или услугу. Для бизнеса это способ быстро выйти на горячий спрос, проверить оффер и понять, какие запросы реально приводят обращения.',
    keywords: ['контекстная реклама', 'настройка контекстной рекламы', 'Яндекс Директ', 'K.KIM'].filter(Boolean),
    alternates: { canonical: '/services/kontekstnaya-reklama' }
  }
}

const KontekstnayaReklamaPage: FC = () => {
  const serviceData = getServiceData('kontekstnaya-reklama')

  if (!serviceData) {
    return null
  }

  const rootClassName = classNames(styles.root)

  return (
    <div
      itemScope
      itemType="https://schema.org/WebPage"
    >
      <meta itemProp="name" content={serviceData?.title ?? 'Настройка контекстной рекламы'} />
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
            <meta itemProp="name" content="Настройка контекстной рекламы" />
            <meta itemProp="item" content={PAGE_URL} />
          </li>
        </ol>
      </nav>

      <div className="visually-hidden" itemProp="mainEntity" itemScope itemType="https://schema.org/Service">
        <meta itemProp="name" content="Настройка контекстной рекламы" />
        <meta
          itemProp="description"
          content={serviceData?.description ?? 'Настройка контекстной рекламы'}
        />
        <div itemProp="provider" itemScope itemType="https://schema.org/Organization">
          <meta itemProp="name" content={organizationName} />
          <meta itemProp="url" content="https://kim-agency.ru/" />
        </div>
        <div itemProp="offers" itemScope itemType="https://schema.org/Offer">
          <meta itemProp="priceCurrency" content="RUB" />
          <meta itemProp="price" content="50000" />
          <meta itemProp="description" content="Цена начинается от 50 000 ₽" />
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
          className={styles.introBlock}
          title="Настройка контекстной рекламы"
          text="Настройка контекстной рекламы помогает получать заявки в момент, когда человек уже ищет товар или услугу. Для бизнеса это способ быстро выйти на горячий спрос, проверить оффер и понять, какие запросы реально приводят обращения. В K.KIM мы строим работу не вокруг кликов, а вокруг экономики: считаем допустимую стоимость лида, смотрим маржинальность, готовим структуру и только потом запускаем кампании."
          highlightedText=""
          titleClassName={styles.introTitleSmall}
          buttons={(
            <div className={styles.introButtonsWrap}>
              <PricingModalButton
                modalKey="детали"
                maxWidth="320px"
                className={styles.introHeroButton}
              >
                Заказать настройку
              </PricingModalButton>
            </div>
          )}
        />

        <StandartText
          marginBottom
          marginTop
          title="Что входит в работу"
          texts={[
            'Перед стартом мы изучаем продукт, географию, спрос, конкурентов и путь клиента. Это позволяет вести кампанию осмысленно, а не по шаблону. Отдельно продумываем посадочные страницы, офферы и аналитику, чтобы заявки было видно не только в кабинете, но и в продажах. Часть решений проверяем на малом бюджете, чтобы не переплачивать за гипотезы.'
          ]}
        />

        <StandartText
          marginBottom
          title="Этапы работ:"
          texts={[]}
        />

        <Why
          direction="column"
          titleJustify="center"
          titleAlign="center"
          cardsPerRow={3}
          title=""
          showTitle={false}
          itemsData={stagesItems.map((title) => ({
            icon: <AcceptIconBlack />,
            title,
            description: ''
          }))}
        />

        <StandartText
          marginBottom
          title="Как мы ведем кампании"
          texts={[
            'Многие компании запускают рекламу по шаблону, но без системного подхода такая стратегия приводит к пустым расходам и непредсказуемой отдаче. Мы в KIM Agency строим управление кампаниями иначе — через аудит, тестирование и постоянную оптимизацию на основе реальных данных.'
          ]}
        />

        <StandartText
          marginBottom
          title="Уникальность нашего подхода"
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
          itemsData={approachItems.map((title) => ({
            icon: <AcceptIcon />,
            title,
            description: ''
          }))}
        />

        <ServicePricing
          title="Стоимость услуги"
          text="в зависимости от сложности и бюджета"
          badges={[
            {
              label: 'Минимальная цена',
              value: 'от 50 000 ₽'
            }
          ]}
          buttonText="Заказать настройку"
          buttonModalKey="детали"
        />


        <div id="cases" className={styles.casesSection}>
          <Case />
        </div>


        <Review />

        <Faq faqData={faqData} title="FAQ" />

        <FormFirst
          className={styles.formBlock}
          title="Нужно настроить контекстную рекламу прямо сейчас?"
          paragraph="Заполните форму и наш специалист свяжется с вами в ближайшее время для обсуждения проекта."
          submitValue="Отправить"
        />

        <StandartText
          marginTop
          marginBottom
          texts={[
            'Услуга контекстной рекламы подходит компаниям, которым нужна понятная настройка, прозрачная стоимость работ и сильное агентство на стороне клиента. Мы берем на себя запуск и ведение в директе, работаем с рекламным спросом, улучшаем объявления и помогаем превращать контекстный трафик в обращения. Такая реклама должна быть управляемой: не ради показов, а ради продаж.'
          ]}
        />
      </main>
    </div>
  )
}

export default KontekstnayaReklamaPage

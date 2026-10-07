import { getServiceData } from '@/shared/dataServices'
import styles from '../shared/servicePage.module.scss'
import accent from './accent.module.scss'
import classNames from 'classnames'
import { FC } from 'react'
import type { CSSProperties } from 'react'
import Link from 'next/link'
import { IntroWorkUs } from '@/modules/introWorkUs'
import type { Metadata } from 'next'
import { StandartText } from '@/ui'
import { Why } from '@/modules/why'
import AcceptIconBlack from '@icons/accept-black.svg'
import { Review } from '@/modules/review'
import { Faq } from '@/modules/faq'
import { Clients } from '@/modules/clients'
import { FormFirst } from '@/modules/formFirst'
import { Case } from '@/modules/case'
import { Services } from '@/modules/ServicePage/services'
import { WeAre } from '@/modules/weAre'
import { CostCalculator } from '@/modules/costCalculator'
import { PricingModalButton, ServicePricing } from '@/modules/servicePricing'
import { agencyStatsItems, cmsPlatformCards } from '../shared/stats'

const PAGE_URL = 'https://kim-agency.ru/services/tekhpodderzhka/'
const organizationName = 'K.KIM'

const faqData = [
  {
    title: 'Что входит в работу по техподдержке?',
    content:
      'Обычно это обновления, контроль ошибок, резервные копии, администрирование, доработки и помощь при сбоях.'
  },
  {
    title: 'Можно ли подключиться только на отдельные задачи?',
    content: 'Да, если проекту не нужен полный пакет, а требуется точечная поддержка.'
  },
  {
    title: 'Подходит ли это только для сайтов?',
    content: 'Нет, мы можем сопровождать и другой цифровой проект, если ему нужен регулярный контроль.'
  }
]

export async function generateMetadata(): Promise<Metadata> {
  const serviceData = getServiceData('tekhpodderzhka')
  return {
    title: 'Услуги технической поддержки от K.KIM',
    description:
      serviceData?.description ||
      'Услуги технической поддержки сайта: сопровождение, администрирование и развитие веб-проектов от KIM Agency.',
    keywords: ['техподдержка сайта', 'техническая поддержка', 'сопровождение сайта', 'K.KIM'].filter(Boolean),
    alternates: { canonical: '/services/tekhpodderzhka' }
  }
}

const TekhpodderzhkaPage: FC = () => {
  const serviceData = getServiceData('tekhpodderzhka')

  if (!serviceData) {
    return null
  }

  const ui = serviceData.uiConfig
  const accentStyle = ui
    ? ({ '--accent': ui.accent, '--accent-soft': ui.accentSoft ?? '#f7f7f8' } as CSSProperties)
    : undefined
  const rootClassName = classNames(styles.root)
  const introClassName = classNames(
    styles.introBlock,
    ui?.heroEyebrow && accent.heroWithEyebrow,
    ui?.heroVariant === 'split' && accent.heroSplit
  )

  return (
    <div
      itemScope
      itemType="https://schema.org/WebPage"
    >
      <meta itemProp="name" content={serviceData?.title ?? 'Услуги технической поддержки'} />
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
            <meta itemProp="name" content="Услуги технической поддержки" />
            <meta itemProp="item" content={PAGE_URL} />
          </li>
        </ol>
      </nav>

      <div className="visually-hidden" itemProp="mainEntity" itemScope itemType="https://schema.org/Service">
        <meta itemProp="name" content="Услуги технической поддержки от K.KIM" />
        <meta
          itemProp="description"
          content={serviceData?.description ?? 'Техническая поддержка и сопровождение сайтов'}
        />
        <div itemProp="provider" itemScope itemType="https://schema.org/Organization">
          <meta itemProp="name" content={organizationName} />
          <meta itemProp="url" content="https://kim-agency.ru/" />
        </div>
        <div itemProp="offers" itemScope itemType="https://schema.org/Offer">
          <meta itemProp="priceCurrency" content="RUB" />
          <meta itemProp="price" content="15000" />
          <meta itemProp="description" content="Цена начинается от 15 000 ₽" />
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

      <main className={rootClassName} style={accentStyle}>
        <IntroWorkUs
          className={introClassName}
          title="Услуги технической поддержки от K.KIM"
          text=""
          highlightedText=""
          titleClassName={styles.introTitleSmall}
          buttons={(
            <div className={styles.introButtonsWrap}>
              <div className={accent.heroStack}>
                {ui?.heroEyebrow && <span className={accent.heroEyebrow}>{ui.heroEyebrow}</span>}
                <PricingModalButton
                  modalKey="поддержка"
                  maxWidth="320px"
                  className={classNames(styles.introHeroButton, accent.accentHeroButton)}
                >
                  Подключить поддержку
                </PricingModalButton>
              </div>
            </div>
          )}
        />

        <StandartText
          marginBottom
          marginTop
          title=""
          texts={[
            'Услуги технической поддержки сайта нужны тогда, когда проект уже запущен, но его работа требует постоянного контроля. Для бизнеса это не второстепенная задача, а часть стабильной digital-инфраструктуры: если возникают проблемы, страницы открываются с ошибками, формы не отправляются, а обновления ставятся хаотично, компания теряет заявки, доверие и деньги. Именно поэтому техподдержка должна быть не разовой реакцией на сбой, а понятной системой сопровождения. KIM Agency берет на себя обслуживание, администрирование и развитие веб-проектов, чтобы интернет-ресурс работал предсказуемо, безопасно и без лишней нагрузки на клиента.'
          ]}
        />

        <StandartText
          marginBottom
          marginTop
          title="Услуги технической поддержки"
          texts={[
            'Техническое сопровождение сайта — это исправление ошибок, системная работа со скоростью, безопасностью и стабильностью всех функций. Мы подключаемся к проектам любого уровня: от корпоративных сайтов до сложных веб сервисов. Услуга подходит бизнесу, которому важен профессиональный результат без необходимости держать специалиста в штате.',
            'Поддержание сайта включает контроль доступности, обновление CMS и модулей, проверку форм, резервное копирование, устранение конфликтов после доработок и базовый мониторинг, что позволяет решать возникающие сложности до того, как они повлияют на работу ресурса.',
            'Отдельное направление — техподдержка сайта интернет-магазинов. Мы контролируем корректную работу корзины, оформления заказов, уведомлений, фильтров, оплаты и интеграций с CRM.',
            'Для других проектов обеспечиваем стабильность интерфейсов, внутренних разделов и программных модулей.'
          ]}
        />

        <StandartText
          marginBottom
          title="Почему стоит выбрать нашу компанию для технической поддержки сайта"
          texts={[
            'Мы смотрим на проект как на рабочий инструмент бизнеса. Поэтому технический подход в KIM Agency начинается с диагностики, для того, чтобы полностью погрузиться в ваш проект. Наша компания помогает выстроить удобную систему сопровождения, в которой понятно, что уже сделано, что требует внимания и какие шаги дадут лучший результат по времени и бюджету.',
            <>
              Мы работаем с проектами из разных ниш в Москве и других регионах. При необходимости можно заказывать не только сопровождение, но и смежные услуги:{' '}
              <Link href="/services/sozdanie-saytov/">разработку сайтов</Link>
              ,{' '}
              <Link href="/services/ux-ui/">UX/UI дизайн</Link>
              {' '}и{' '}
              <Link href="/services/razrabotka-chat-botov/">разработку чат-ботов</Link>
              .
            </>
          ]}
        />

        <StandartText
          marginBottom
          title="Как начать работать с нами"
          texts={[
            'Перед стартом мы уточняем текущую ситуацию, цели и состав работ, после чего предлагаем подходящий формат взаимодействия в рамках техподдержки. Обычно процесс выглядит так:'
          ]}
        />

        <Why
          direction="column"
          titleJustify="center"
          titleAlign="center"
          cardsPerRow={4}
          title=""
          showTitle={false}
          itemsData={[
            {
              icon: <AcceptIconBlack />,
              title: 'Аналитика',
              description: 'Анализируем доступы, историю изменений и слабые места.'
            },
            {
              icon: <AcceptIconBlack />,
              title: 'Определение формата',
              description:
                'Определяем, что необходимо в первую очередь: базовое сопровождение, срочная помощь или регулярная поддержка.'
            },
            {
              icon: <AcceptIconBlack />,
              title: 'Согласование',
              description: 'Согласовываем объем, сроки, цену и формат отчетности.'
            },
            {
              icon: <AcceptIconBlack />,
              title: 'Подключение',
              description: 'Подключаемся к задачам и начинаем работу по понятному плану.'
            }
          ]}
        />

        <div id="cases" className={styles.casesSection}>
          <Case />
        </div>

        <Why
          counter
          direction="row"
          titleJustify="start"
          titleAlign="start"
          cardsPerRow={3}
          title="Наши результаты в цифрах"
          itemsData={agencyStatsItems}
        />

        <CostCalculator
          title="CMS и платформы разработки"
          text="В зависимости от задач бизнеса мы используем разные платформы и технологии."
          cards={cmsPlatformCards}
        />

        <StandartText
          marginBottom
          texts={[
            'Мы подбираем платформу исходя из задач, бюджета и планов по развитию интернет-ресурса.'
          ]}
        />

        <Review />

        <ServicePricing
          title="Тарифы"
          text="Стоимость зависит от часов поддержки в месяц. Обратите внимание! SEO-продвижение всегда включает в себя техподдержку."
          badges={[{ label: 'Стоимость', value: 'от 15 000 ₽' }]}
          buttonText="Подключить поддержку"
          buttonModalKey="поддержка"
        />

        <Faq faqData={faqData} title="Ответы на популярные вопросы" />

        <div id="form">
          <FormFirst
            className={styles.formBlock}
            title="Подключите услугу по техподдержке прямо сейчас!"
            paragraph="Оставьте заявку и наш специалист свяжется с вами для проведения бесплатной консультации."
            submitValue="Отправить"
          />
        </div>

       
      </main>
    </div>
  )
}

export default TekhpodderzhkaPage

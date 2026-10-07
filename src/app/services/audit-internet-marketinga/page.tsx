import { getServiceData } from '@/shared/dataServices'
import styles from './page.module.scss'
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
import { MarketingAuditCalculator } from '@/modules/marketingAuditCalculator'
import { PricingModalButton } from '@/modules/servicePricing'

const PAGE_URL = 'https://kim-agency.ru/services/audit-internet-marketinga/'
const organizationName = 'K.KIM'

const faqData = [
  {
    title: 'Сколько времени занимает аудит?',
    content: 'В среднем исследование занимает от 3 до 10 дней в зависимости от масштаба проекта.'
  },
  {
    title: 'Можно ли провести проверку онлайн?',
    content: 'Да. Вы можете находиться в любом регионе России.'
  },
  {
    title: 'Что входит в итоговый отчет?',
    content: 'Отчет содержит анализ маркетинговой стратегии, рекомендации по улучшению сайта и план развития онлайн-продвижения.'
  }
]

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Аудит интернет маркетинга бизнеса',
    description:
      'Аудит интернет маркетинга помогает понять, как на самом деле работает продвижение в сети и какие факторы мешают получать стабильный поток клиентов.',
    keywords: ['аудит интернет маркетинга', 'digital аудит', 'аудит рекламы', 'аудит seo', 'K.KIM'].filter(Boolean),
    alternates: { canonical: '/services/audit-internet-marketinga' }
  }
}

const AuditInternetMarketingPage: FC = () => {
  const serviceData = getServiceData('audit-internet-marketinga')

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
    ui?.heroEyebrow && styles.heroWithEyebrow,
    ui?.heroVariant === 'split' && styles.heroSplit,
    ui?.heroVariant === 'spotlight' && styles.heroSpotlight,
    ui?.heroVariant === 'bold' && styles.heroBold,
    ui?.heroVariant === 'minimal' && styles.heroMinimal
  )

  return (
    <div
      itemScope
      itemType="https://schema.org/WebPage"
    >
      <meta itemProp="name" content={serviceData?.title ?? 'Аудит интернет маркетинга'} />
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
            <meta itemProp="name" content="Аудит интернет маркетинга" />
            <meta itemProp="item" content={PAGE_URL} />
          </li>
        </ol>
      </nav>

      <div className="visually-hidden" itemProp="mainEntity" itemScope itemType="https://schema.org/Service">
        <meta itemProp="name" content="Аудит интернет маркетинга бизнеса" />
        <meta
          itemProp="description"
          content={serviceData?.description ?? 'Аудит digital-системы бизнеса'}
        />
        <div itemProp="provider" itemScope itemType="https://schema.org/Organization">
          <meta itemProp="name" content={organizationName} />
          <meta itemProp="url" content="https://kim-agency.ru/" />
        </div>
        <div itemProp="offers" itemScope itemType="https://schema.org/Offer">
          <meta itemProp="priceCurrency" content="RUB" />
          <meta itemProp="price" content="30000" />
          <meta itemProp="description" content="Цена начинается от 30 000 ₽" />
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
          title="Аудит интернет маркетинга бизнеса"
          text="Аудит интернет маркетинга помогает понять, как на самом деле работает продвижение в сети и какие факторы мешают получать стабильный поток клиентов."
          highlightedText=""
          titleClassName={styles.introTitleSmall}
          buttons={(
            <div className={styles.introButtonsWrap}>
              <div className={styles.heroStack}>
                {ui?.heroEyebrow && <span className={styles.heroEyebrow}>{ui.heroEyebrow}</span>}
                <PricingModalButton
                  modalKey="детали"
                  maxWidth="320px"
                  className={classNames(styles.introHeroButton, styles.accentHeroButton)}
                >
                  Заказать аудит
                </PricingModalButton>
              </div>
            </div>
          )}
        />

        <StandartText
          marginBottom
          marginTop
          texts={[
            'По сути, это профессиональная проверка всех элементов digital-системы: рекламных каналов, аналитики, SEO, структуры воронки продаж и общей стратегии продвижения.',
            'Многие компании активно используют различные инструменты, но при этом не получают ожидаемый результат. В такой ситуации маркетинг работает не как система, а как набор отдельных действий без единого плана.',
            'Комплексный аудит позволяет увидеть полную картину интернет-продвижения. Мы анализируем, какие каналы работают эффективно, где теряется трафик и почему потенциальные клиенты не доходят до покупки. Такой анализ помогает организации понять реальные точки роста и выстроить более эффективный маркетинговый подход.'
          ]}
        />

        <StandartText
          className={styles.accentHeading}
          marginBottom
          title="Преимущества проведения аудита"
          texts={[
            'Аудит помогает определить конкретные шаги для развития. Комплексный анализ показывает, где клиент теряет бюджет и какие изменения способны значительно улучшить результат.',
            'После проверки становится понятно, какие инструменты работают эффективно, а какие требуют переработки. Благодаря этому компания получает четкое понимание дальнейшей стратегии.',
            'Основные преимущества услуги:'
          ]}
        />

        <Why
          className={styles.thirdCardsCompact}
          direction="column"
          titleJustify="center"
          titleAlign="center"
          cardsPerRow={3}
          title=""
          showTitle={false}
          itemsData={[
            { icon: <AcceptIcon />, title: 'Выявление слабых мест в маркетинговом планировании', description: '' },
            { icon: <AcceptIcon />, title: 'Анализ эффективности рекламы и каналов привлечения', description: '' },
            { icon: <AcceptIcon />, title: 'Проверка структуры веб-ресурса и пользовательского пути', description: '' },
            { icon: <AcceptIcon />, title: 'Оценка текущей SEO-стратегии', description: '' },
            { icon: <AcceptIcon />, title: 'Формирование плана дальнейшего развития', description: '' },
            { icon: <AcceptIcon />, title: 'Снижение стоимости привлечения клиентов', description: '' },
            { icon: <AcceptIcon />, title: 'Повышение эффективности онлайн-продвижения', description: '' }
          ]}
        />

        <StandartText
          marginBottom
          texts={[
            'Результатом становится подробный отчет с рекомендациями. В нем прописаны конкретные действия, которые помогут организации увеличить рост заявок и улучшить эффективность инструментов.'
          ]}
        />

        <StandartText
          marginBottom
          title="Этапы"
          texts={['Чтобы проверка была объективной, она проводится по структурированной методике:']}
        />

        <Why
          direction="column"
          titleJustify="center"
          titleAlign="center"
          cardsPerRow={3}
          title=""
          showTitle={false}
          itemsData={[
            {
              icon: <AcceptIconBlack />,
              title: '1. Сбор данных и первичное исследование',
              description: 'Изучаем веб-ресурс, источники трафика, структуру рекламных кампаний и систему аналитики.'
            },
            {
              icon: <AcceptIconBlack />,
              title: '2. Анализ каналов продвижения',
              description: 'Проверяем SEO, контекстную рекламу, таргетинг и другие инструменты.'
            },
            {
              icon: <AcceptIconBlack />,
              title: '3. Проверка сайта и воронки продаж',
              description: 'Оцениваем удобство интерфейса, структуру страниц и поведение пользователей.'
            },
            {
              icon: <AcceptIconBlack />,
              title: '4. Анализ конкурентов и рынка',
              description: 'Изучаем позиционирование организации и уровень конкурентов.'
            },
            {
              icon: <AcceptIconBlack />,
              title: '5. Подготовка рекомендаций',
              description: 'Формируем стратегию улучшения онлайн продвижения и роста его эффективности.'
            }
          ]}
        />

        <MarketingAuditCalculator className={styles.formBlock} />

        <WeAre title="Кто мы и почему нам стоит доверять?" compactImage={true} />

        <div className={styles.servicesSection}>
          <Services
            title="Услуги"
            hasCost={false}
            showSubtitle
          />
        </div>

        <div id="cases" className={styles.casesSection}>
          <Case />
        </div>
        <Clients title="Нам доверяют" />

        <StandartText
          marginBottom
          title="Видео о нас"
          texts={[]}
        />

        <Review />

        <Faq faqData={faqData} title="FAQ" />

        <FormFirst
          className={styles.formBlock}
          title="Не уверены, нужно ли заказывать аудит?"
          paragraph="Тогда запишитесь на бесплатную консультацию с нашим специалистом, который ответит на все ваши вопросы и подробнее расскажет об услуге."
          submitValue="Отправить"
        />

        <StandartText
          marginTop
          marginBottom
          texts={[
            'Аудит интернет маркетинга - это комплексная проверка digital-системы компании, которая помогает выявить слабые места в продвижении и определить точки роста. В рамках услуги проводится анализ веб-ресурса, рекламных каналов, SEO-структуры и маркетинговой стратегии.',
            'Он позволяет фирме понять, насколько эффективно используется продвижение, какие инструменты требуют доработки и какие изменения помогут увеличить рост заявок.',
            'Особенно актуален для организаций, которые хотят системно развивать маркетинг и повысить результативность онлайн-каналов. После проведения проверки формируется понятный план развития и рекомендации по улучшению эффективности digital-инструментов.',
            'Услугу можно заказать онлайн. Проверка проводится для компаний из Москвы и других регионов России. Стоимость зависит от масштаба проекта, структуры сайта и количества используемых инструментов.'
          ]}
        />
      </main>
    </div>
  )
}

export default AuditInternetMarketingPage

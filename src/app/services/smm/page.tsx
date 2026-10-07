import { getServiceData } from '@/shared/dataServices'
import styles from './page.module.scss'
import classNames from 'classnames'
import { FC, ReactNode } from 'react'
import { IntroWorkUs } from '@/modules/introWorkUs'
import { SmmPageProps } from './page.types'
import type { Metadata } from 'next'
import type { CSSProperties } from 'react'
import Script from 'next/script'
import { StandartText } from '@/ui'
import { Why } from '@/modules/why'
import { Heading } from '@/ui'
import { Button } from '@/ui'

import AcceptIcon from '@icons/accept.svg'
import AcceptIconBlack from '@icons/accept-black.svg'
import { Review } from '@/modules/review'
import { Faq } from '@/modules/faq'
import { Clients } from '@/modules/clients'
import { FormFirst } from '@/modules/formFirst'
import { Case } from '@/modules/case'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://kim-agency.ru'
const PAGE_URL = `${SITE_URL}/services/smm`

// FAQ — используется и в видимом блоке, и в JSON-LD (контент совпадает, разметка не скрытая)
const faqData = [
  {
    title: 'Сколько стоит ведение соцсетей?',
    content:
      'Стоимость начинается от 40 000 ₽ в месяц и зависит от числа площадок, частоты публикаций и объёма визуала. Отдельно считается рекламный бюджет на таргет. На консультации разбираем задачи и подбираем формат работы: от ведения одной соцсети до комплексного продвижения.'
  },
  {
    title: 'Какие соцсети подходят для моего бизнеса?',
    content:
      'Зависит от того, где находится ваша аудитория и как она принимает решение. Для большинства задач в России рабочие площадки — ВКонтакте и Telegram. Мы не ведём всё подряд: сначала смотрим, где уже есть спрос, и концентрируем усилия там, где они быстрее окупятся.'
  },
  {
    title: 'Что входит в SMM-продвижение?',
    content:
      'Анализ аудитории и конкурентов, контент-стратегия и контент-план, оформление сообществ, подготовка текстов и визуала, регулярные публикации, таргетированная реклама, работа с комментариями и сообщениями, аналитика. Состав подбираем под цель: охваты, подписчики или заявки и продажи.'
  },
  {
    title: 'Через сколько будет результат от SMM?',
    content:
      'Первые данные по охватам и реакции аудитории видны уже в первый месяц. Таргет даёт заявки быстрее — в течение нескольких недель после запуска. Устойчивый рост сообщества и стабильный поток лидов — это 2–3 месяца системной работы, потому что соцсети работают накопительно.'
  },
  {
    title: 'Нужен ли таргет, если есть органика?',
    content:
      'Органика растёт медленно и ограничена текущими охватами. Таргетированная реклама ускоряет привлечение новой аудитории и даёт предсказуемый поток заявок. Лучший результат — когда органический контент и таргет работают вместе: реклама приводит людей, а контент удерживает и прогревает их до покупки.'
  }
]

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      '@id': `${PAGE_URL}#service`,
      name: 'SMM-продвижение в соцсетях',
      serviceType: 'Продвижение бизнеса в социальных сетях (SMM)',
      description:
        'SMM-продвижение под задачу бизнеса: контент-стратегия, упаковка сообществ, таргетированная реклама, работа с сообществом и аналитика. Приводим подписчиков, заявки и продажи в ВКонтакте и Telegram.',
      provider: { '@id': `${SITE_URL}/#organization` },
      areaServed: 'Россия',
      offers: {
        '@type': 'Offer',
        price: '40000',
        priceCurrency: 'RUB',
        description: 'Ведение и продвижение в соцсетях, от 40 000 ₽ в месяц'
      }
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Главная', item: SITE_URL },
        { '@type': 'ListItem', position: 2, name: 'Услуги', item: `${SITE_URL}/services` },
        { '@type': 'ListItem', position: 3, name: 'SMM', item: PAGE_URL }
      ]
    },
    {
      '@type': 'FAQPage',
      mainEntity: faqData.map((q) => ({
        '@type': 'Question',
        name: q.title,
        acceptedAnswer: { '@type': 'Answer', text: q.content }
      }))
    }
  ]
}

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'SMM-продвижение в соцсетях — ведение и таргет | KIM.agency',
    description:
      'Продвигаем бренд в соцсетях системно: контент-стратегия, упаковка сообществ, таргетированная реклама и аналитика. Приводим подписчиков, заявки и продажи во ВКонтакте и Telegram. От 40 000 ₽.',
    keywords: ['smm', 'продвижение соцсетей', 'таргет', 'контент-стратегия', 'социальные сети'].filter(Boolean),
    alternates: { canonical: '/services/smm' },
    openGraph: {
      title: 'SMM-продвижение в соцсетях — KIM.agency',
      description:
        'Контент-стратегия, упаковка сообществ, таргет и аналитика. Приводим подписчиков, заявки и продажи во ВКонтакте и Telegram.',
      url: PAGE_URL,
      type: 'website'
    }
  }
}

const SmmPage: FC<SmmPageProps> = () => {
  const serviceData = getServiceData('smm')

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
    ui?.heroEyebrow && styles.heroWithEyebrow,
    ui?.heroVariant === 'split' && styles.heroSplit,
    ui?.heroVariant === 'spotlight' && styles.heroSpotlight,
    ui?.heroVariant === 'bold' && styles.heroBold,
    ui?.heroVariant === 'minimal' && styles.heroMinimal
  )

  const sections: Record<string, ReactNode> = {
    intro: (
      <IntroWorkUs
        key="intro"
        className={introClassName}
        title="SMM-продвижение в соцсетях"
        text={
          'SMM — это системное продвижение бизнеса в социальных сетях: контент, упаковка сообществ, таргетированная реклама и аналитика. Подходит компаниям, которым нужны не просто публикации, а подписчики, заявки и продажи. Мы начинаем не с ленты постов, а с аудитории и цели: где ваши клиенты, что их цепляет и какой контент ведёт к заявке. Дальше запускаем ведение и рекламу и считаем результат по понятным метрикам.'
        }
        highlightedText=""
        titleClassName={styles.introTitleSmall}
        buttons={(
          <div className={styles.introButtonsWrap}>
            <div className={styles.heroStack}>
              {ui?.heroEyebrow && <span className={styles.heroEyebrow}>{ui.heroEyebrow}</span>}
              <Button
                tag="a"
                href="#form"
                maxWidth="320px"
                className={classNames(styles.introHeroButton, styles.accentHeroButton)}
              >
                Обсудить проект
              </Button>
            </div>
          </div>
        )}
      />
    ),
    about: (
      <StandartText
        key="about"
        marginBottom
        marginTop
        title="Как мы делаем SMM, который приносит заявки"
        texts={[
          'Хаотичные посты не дают результата — соцсети работают, когда за ними стоит система. Поэтому начинаем с контент-стратегии: разбираем аудиторию и конкурентов, определяем, какой контент ведёт к целевому действию. Дальше — упаковка сообществ, чтобы новый подписчик сразу понимал, кто вы и чем полезны. Таргетированная реклама приводит новую аудиторию и заявки, а регулярная работа с сообществом удерживает и прогревает её. Всё решает аналитика: смотрим на охваты, подписки и стоимость заявки и корректируем связки, а не ведём ленту ради ленты.'
        ]}
      />
    ),
    includes: (
      <Why
        key="includes"
        direction="row"
        titleJustify="center"
        titleAlign="center"
        cardsPerRow={3}
        title="Что входит в SMM"
        itemsData={[
          { icon: <AcceptIcon />, title: 'Контент-стратегия и контент-план', description: '' },
          { icon: <AcceptIcon />, title: 'Дизайн и оформление сообществ', description: '' },
          { icon: <AcceptIcon />, title: 'Таргетированная реклама', description: '' },
          { icon: <AcceptIcon />, title: 'Ведение сообществ и работа с комментариями', description: '' },
          { icon: <AcceptIcon />, title: 'Работа с блогерами и посевами', description: '' },
          { icon: <AcceptIcon />, title: 'Аналитика и отчётность по результатам', description: '' }
        ]}
      />
    ),
    consult: (
      <div key="consult" id="free-consult" className={styles.freeConsultSection}>
        <FormFirst
          title="Разберём ваши соцсети на бесплатной консультации"
          paragraph="Оставьте контакт — посмотрим текущие площадки, предложим стратегию и подскажем, с чего начать продвижение."
          submitValue="Обсудить проект"
        />
      </div>
    ),
    solutions: (
      <section key="solutions" className={styles.solutions}>
        <h2 className={classNames(styles.solutionsTitle, styles.accentTitle)}>На каких площадках работаем</h2>
        <p className={styles.solutionsText}>
          Не ведём всё подряд. Выбираем площадки по тому, где находится ваша аудитория и как она
          принимает решение о покупке. Для большинства задач в России рабочие платформы — ВКонтакте
          и Telegram: именно там концентрируем усилия и бюджет.
        </p>
        <div className={styles.solutionsCards}>
          <article className={styles.solutionsCard}>
            <h3 className={styles.solutionsCardTitle}>ВКонтакте</h3>
            <ul className={styles.solutionsList}>
              <li>Упаковка и ведение сообщества, контент под аудиторию.</li>
              <li>Таргетированная реклама в VK Рекламе под заявки и подписки.</li>
              <li>Рассылки и чат-воронки для прогрева и повторных продаж.</li>
            </ul>
          </article>
          <article className={classNames(styles.solutionsCard, styles.accentCard)}>
            <h3 className={styles.solutionsCardTitle}>Telegram</h3>
            <p className={styles.solutionsCardText}>
              Ведём канал как медиа бренда: регулярный контент, прогрев и вовлечение аудитории.
              Приводим подписчиков через посевы у блогеров и рекламу, удерживаем их полезными
              постами и доводим до заявки.
            </p>
          </article>
        </div>
      </section>
    ),
    process: (
      <Why
        key="process"
        direction="row"
        titleJustify="center"
        titleAlign="center"
        cardsPerRow={3}
        title="Как мы работаем"
        counter
        itemsData={[
          { icon: '', title: '1', description: 'Анализ аудитории, конкурентов и целей бизнеса' },
          { icon: '', title: '2', description: 'Контент-стратегия и упаковка сообществ' },
          { icon: '', title: '3', description: 'Контент-план, тексты и визуал' },
          { icon: '', title: '4', description: 'Запуск таргета и работа с сообществом' },
          { icon: '', title: '5', description: 'Аналитика, отчёты и корректировка связок' }
        ]}
      />
    ),
    pricing: (
      <section key="pricing" className={styles.pricing}>
        <Heading size="md" className={styles.pricingMainTitle}>Стоимость и сроки</Heading>

        <div className={styles.pricingRow}>
          <div className={styles.pricingBadge}>
            <p className={styles.pricingBadgeLabel}>Стоимость ведения</p>
            <p className={styles.pricingBadgeValue}>{serviceData.price}</p>
          </div>
          <div className={styles.pricingBadge}>
            <p className={styles.pricingBadgeLabel}>Первые результаты</p>
            <p className={styles.pricingBadgeValue}>1–3 месяца</p>
          </div>
        </div>

        <Heading size="md" className={styles.techTitle}>
          Инструменты и площадки
        </Heading>
        <p className={styles.techText}>
          Подбираем набор инструментов под задачу — от ведения одной соцсети до комплексного
          продвижения с таргетом и рассылками.
        </p>

        <div className={styles.techGrid}>
          <div className={styles.techCard}>
            <p className={styles.techCardTitle}>Площадки</p>
            <ul className={styles.techList}>
              <li>ВКонтакте</li>
              <li>Telegram</li>
            </ul>
          </div>
          <div className={styles.techCard}>
            <p className={styles.techCardTitle}>Реклама</p>
            <ul className={styles.techList}>
              <li>VK Реклама</li>
              <li>посевы у блогеров</li>
            </ul>
          </div>
          <div className={styles.techCard}>
            <p className={styles.techCardTitle}>Воронки и аналитика</p>
            <ul className={styles.techList}>
              <li>Senler, чат-воронки</li>
              <li>системы аналитики</li>
            </ul>
          </div>
        </div>
      </section>
    ),
    form: (
      <div key="form" id="form">
        <FormFirst
          className={styles.formBlock}
          title="Запишитесь на бесплатную консультацию"
          paragraph="Разберём ваши соцсети, предложим стратегию продвижения и рассчитаем стоимость ведения."
          submitValue="Отправить"
        />
      </div>
    ),
    cases: (
      <div key="cases" id="cases" className={styles.casesSection}>
        <Case />
      </div>
    ),
    clients: <Clients key="clients" title="Наши клиенты" />,
    stats: (
      <Why
        key="stats"
        counter
        direction="row"
        titleJustify="start"
        titleAlign="start"
        cardsPerRow={3}
        title="Результаты в цифрах"
        itemsData={[
          { icon: '', title: '200+', description: 'реализованных проектов' },
          { icon: '', title: '10 000+', description: 'приведённых лидов' },
          { icon: '', title: '7 000+', description: 'пользователей наших решений' }
        ]}
      />
    ),
    faq: <Faq key="faq" faqData={faqData} title="Частые вопросы о SMM-продвижении" />,
    reviews: <Review key="reviews" />,
    finalForm: (
      <FormFirst
        key="finalForm"
        className={styles.formBlock}
        title="Готовы вывести соцсети на результат?"
        paragraph="Оставьте заявку — свяжемся и проведём бесплатную консультацию по продвижению вашего бренда."
        submitValue="Отправить"
      />
    )
  }

  const order = ui?.order ?? Object.keys(sections)

  return (
    <>
      <Script
        id="smm-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className={rootClassName} style={accentStyle}>
        {order.map((key) => sections[key] ?? null)}
      </main>
    </>
  )
}

export default SmmPage

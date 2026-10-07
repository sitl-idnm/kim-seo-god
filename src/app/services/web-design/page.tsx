import { getServiceData } from '@/shared/dataServices'
import styles from './page.module.scss'
import classNames from 'classnames'
import { FC, ReactNode } from 'react'
import { IntroWorkUs } from '@/modules/introWorkUs'
import { WebDesignPageProps } from './page.types'
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
const PAGE_URL = `${SITE_URL}/services/web-design`

// FAQ — используется и в видимом блоке, и в JSON-LD (контент совпадает, разметка не скрытая)
const faqData = [
  {
    title: 'Сколько стоит дизайн сайта?',
    content:
      'Дизайн сайта у нас стоит от 80 000 ₽. Итоговая цена зависит от типа проекта и количества экранов: лендинг дешевле корпоративного сайта или интернет-магазина. Точную стоимость называем после короткого брифа, когда понятны задачи и объём работ. Смету фиксируем до старта — без доплат по ходу.'
  },
  {
    title: 'Сколько времени занимает разработка дизайна?',
    content:
      'Лендинг занимает 2–3 недели, корпоративный сайт — 3–5 недель, интернет-магазин — от 5 недель. Срок зависит от количества страниц и скорости согласований с вашей стороны. Точные даты фиксируем в плане работ на старте и держим этапы прозрачными, чтобы вы видели прогресс.'
  },
  {
    title: 'Что входит в веб-дизайн?',
    content:
      'В работу входит UX-исследование и анализ конкурентов, прототип структуры, UI-дизайн всех экранов, адаптив под мобильные и десктоп, а также дизайн-система с компонентами. На выходе вы получаете готовые макеты в Figma, собранные так, чтобы разработчик собрал по ним сайт без вопросов.'
  },
  {
    title: 'Чем веб-дизайн отличается от UX/UI?',
    content:
      'UX отвечает за логику и удобство: как пользователь проходит путь к цели. UI — за визуал: цвета, типографику, кнопки. Веб-дизайн объединяет и то и другое в готовый сайт. Мы не рисуем «красивую картинку» ради картинки, а проектируем интерфейс под задачу бизнеса и поведение аудитории.'
  },
  {
    title: 'Делаете ли адаптив под мобильные?',
    content:
      'Да, адаптив входит в каждый проект по умолчанию. Мы проектируем макеты минимум под три разрешения: мобильный, планшет и десктоп. Больше половины трафика сегодня приходит с телефонов, поэтому мобильную версию прорабатываем так же тщательно, как десктопную, а не по остаточному принципу.'
  }
]

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      '@id': `${PAGE_URL}#service`,
      name: 'Веб-дизайн сайтов',
      serviceType: 'Дизайн сайтов, UX/UI-проектирование и редизайн',
      description:
        'Веб-дизайн сайтов под задачи бизнеса: UX-исследование, прототип, UI-дизайн, адаптив под все устройства и дизайн-система. Проектируем лендинги, корпоративные сайты и интернет-магазины, которые продают.',
      provider: { '@id': `${SITE_URL}/#organization` },
      areaServed: 'Россия',
      offers: {
        '@type': 'Offer',
        price: '80000',
        priceCurrency: 'RUB',
        description: 'Дизайн сайта, от 80 000 ₽'
      }
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Главная', item: SITE_URL },
        { '@type': 'ListItem', position: 2, name: 'Услуги', item: `${SITE_URL}/services` },
        { '@type': 'ListItem', position: 3, name: 'Веб-дизайн', item: PAGE_URL }
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
    title: 'Веб-дизайн сайтов — UX/UI, адаптив и редизайн | KIM.agency',
    description:
      'Проектируем дизайн сайтов под задачи бизнеса: UX-исследование, прототип, UI-дизайн, адаптив и дизайн-система. Лендинги, корпоративные сайты, магазины и редизайн. От 80 000 ₽.',
    keywords: [
      'веб-дизайн',
      'дизайн сайта',
      'ui ux дизайн',
      'адаптивный дизайн',
      'редизайн сайта',
      'KIM.agency'
    ],
    alternates: { canonical: '/services/web-design' },
    openGraph: {
      title: 'Веб-дизайн сайтов — UX/UI, адаптив и редизайн | KIM.agency',
      description:
        'Дизайн сайтов под задачи бизнеса: UX-исследование → прототип → UI-дизайн → адаптив. Лендинги, корпоративные сайты, магазины, редизайн.',
      url: PAGE_URL,
      type: 'website'
    }
  }
}

const WebDesignPage: FC<WebDesignPageProps> = () => {
  const serviceData = getServiceData('web-design')

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
        title="Веб-дизайн сайтов"
        text={
          'Веб-дизайн — это проектирование сайта под задачи бизнеса, а не просто красивая картинка. Мы разбираем, кто ваш клиент и какой путь он проходит, затем собираем структуру, интерфейс и адаптив. Подходит компаниям, которым нужен сайт, понятный пользователю. Результат — сайт, который удерживает внимание и превращает посетителей в заявки.'
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
                Обсудить дизайн
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
        title="Как мы проектируем дизайн сайта"
        texts={[
          'Хороший дизайн начинается не с макета, а с задачи. Сначала мы проводим UX-исследование: разбираем аудиторию, конкурентов и путь пользователя к цели. Дальше собираем прототип — структуру экранов без визуала, чтобы согласовать логику до отрисовки. Затем переходим к UI-дизайну: типографика, цвет, компоненты. Каждый экран прорабатываем в адаптиве под мобильные и десктоп. На выходе — дизайн-система, по которой разработчик соберёт сайт без расхождений.'
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
        title="Что входит в веб-дизайн"
        itemsData={[
          { icon: <AcceptIcon />, title: 'UX-исследование аудитории и конкурентов', description: '' },
          { icon: <AcceptIcon />, title: 'Прототип структуры и пользовательского пути', description: '' },
          { icon: <AcceptIcon />, title: 'UI-дизайн всех экранов сайта', description: '' },
          { icon: <AcceptIcon />, title: 'Адаптив под мобильные, планшет и десктоп', description: '' },
          { icon: <AcceptIcon />, title: 'Дизайн-система и UI-kit компонентов', description: '' },
          { icon: <AcceptIcon />, title: 'Передача макетов разработчику без потерь', description: '' }
        ]}
      />
    ),
    consult: (
      <div key="consult" id="free-consult" className={styles.freeConsultSection}>
        <FormFirst
          title="Обсудим ваш проект на бесплатной консультации"
          paragraph="Оставьте контакт — разберём задачу, подскажем формат сайта и ориентир по срокам и стоимости дизайна."
          submitValue="Обсудить дизайн"
        />
      </div>
    ),
    solutions: (
      <section key="solutions" className={styles.solutions}>
        <h2 className={classNames(styles.solutionsTitle, styles.accentTitle)}>Какие сайты мы оформляем</h2>
        <p className={styles.solutionsText}>
          Дизайн подбираем под тип проекта и его цель. Лендингу нужна концентрация на одном
          действии, корпоративному сайту — структура и доверие, магазину — удобный путь к покупке.
          Каждый формат проектируем отдельно, а не по одному шаблону.
        </p>
        <div className={styles.solutionsCards}>
          <article className={styles.solutionsCard}>
            <h3 className={styles.solutionsCardTitle}>Лендинги и корпоративные сайты</h3>
            <ul className={styles.solutionsList}>
              <li>Дизайн лендинга под одну задачу и целевое действие.</li>
              <li>Корпоративный сайт с продуманной структурой и навигацией.</li>
              <li>Единый визуальный стиль под бренд и аудиторию.</li>
            </ul>
          </article>
          <article className={classNames(styles.solutionsCard, styles.accentCard)}>
            <h3 className={styles.solutionsCardTitle}>Магазины и редизайн</h3>
            <p className={styles.solutionsCardText}>
              Проектируем интерфейс интернет-магазина с удобным путём к покупке и обновляем
              устаревшие сайты. При редизайне сохраняем узнаваемость бренда, но убираем всё, что
              мешало пользователю доходить до заявки.
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
        title="Этапы работы"
        counter
        itemsData={[
          { icon: '', title: '1', description: 'UX-исследование и анализ конкурентов' },
          { icon: '', title: '2', description: 'Прототип структуры и согласование логики' },
          { icon: '', title: '3', description: 'UI-дизайн экранов и визуального стиля' },
          { icon: '', title: '4', description: 'Адаптив под мобильные и десктоп' },
          { icon: '', title: '5', description: 'Дизайн-система и передача разработчику' }
        ]}
      />
    ),
    pricing: (
      <section key="pricing" className={styles.pricing}>
        <Heading size="md" className={styles.pricingMainTitle}>Стоимость и сроки</Heading>

        <div className={styles.pricingRow}>
          <div className={styles.pricingBadge}>
            <p className={styles.pricingBadgeLabel}>Стоимость дизайна</p>
            <p className={styles.pricingBadgeValue}>от 80 000 ₽</p>
          </div>
          <div className={styles.pricingBadge}>
            <p className={styles.pricingBadgeLabel}>Срок</p>
            <p className={styles.pricingBadgeValue}>от 2 недель</p>
          </div>
        </div>

        <Heading size="md" className={styles.techTitle}>
          Инструменты
        </Heading>
        <p className={styles.techText}>
          Работаем в проверенном стеке — макеты удобно согласовывать и передавать в разработку.
        </p>

        <div className={styles.techGrid}>
          <div className={styles.techCard}>
            <p className={styles.techCardTitle}>Дизайн и прототип</p>
            <ul className={styles.techList}>
              <li>Figma</li>
              <li>FigJam</li>
            </ul>
          </div>
          <div className={styles.techCard}>
            <p className={styles.techCardTitle}>Графика</p>
            <ul className={styles.techList}>
              <li>Adobe Photoshop</li>
              <li>Adobe Illustrator</li>
            </ul>
          </div>
          <div className={styles.techCard}>
            <p className={styles.techCardTitle}>Сборка и прототипы</p>
            <ul className={styles.techList}>
              <li>Tilda</li>
              <li>Framer</li>
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
          paragraph="Разберём задачу, подберём формат сайта и рассчитаем стоимость и сроки дизайна."
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
        title="Об агентстве в цифрах"
        itemsData={[
          { icon: '', title: '15', description: 'сотрудников в штате' },
          { icon: '', title: '5', description: 'отделов' },
          { icon: '', title: '200+', description: 'реализованных проектов' },
          { icon: '', title: '10 000+', description: 'приведённых лидов' },
          { icon: '', title: '7 000+', description: 'пользователей наших решений' },
          { icon: '', title: '4', description: 'модели ИИ помогают сотрудникам в работе' }
        ]}
      />
    ),
    faq: <Faq key="faq" faqData={faqData} title="Частые вопросы о веб-дизайне" />,
    reviews: <Review key="reviews" />,
    finalForm: (
      <FormFirst
        key="finalForm"
        className={styles.formBlock}
        title="Готовы обновить дизайн сайта?"
        paragraph="Оставьте заявку — свяжемся и проведём бесплатную консультацию по вашему проекту."
        submitValue="Отправить"
      />
    )
  }

  const order = ui?.order ?? Object.keys(sections)

  return (
    <>
      <Script
        id="web-design-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className={rootClassName} style={accentStyle}>
        {order.map((key) => sections[key] ?? null)}
      </main>
    </>
  )
}

export default WebDesignPage

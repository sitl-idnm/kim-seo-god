import { getServiceData } from '@/shared/dataServices'
import styles from './page.module.scss'
import classNames from 'classnames'
import { FC, ReactNode } from 'react'
import { IntroWorkUs } from '@/modules/introWorkUs'
import { SeoPageProps } from './page.types'
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
const PAGE_URL = `${SITE_URL}/services/seo`

// FAQ — используется и в видимом блоке, и в JSON-LD (контент совпадает, разметка не скрытая)
const faqData = [
  {
    title: 'Сколько стоит SEO-продвижение?',
    content:
      'Комплексное продвижение у нас — от 50 000 ₽ в месяц. Цена зависит от тематики, числа запросов и состояния сайта. Чем выше конкуренция в нише, тем больше работы по контенту и ссылкам. Точную смету считаем после аудита: показываем, за что именно вы платите и какой объём работ входит в тариф.'
  },
  {
    title: 'Через сколько будет результат от SEO?',
    content:
      'Первые результаты — рост трафика по низкочастотным запросам — обычно видны через 3–6 месяцев. Высокочастотные запросы и устойчивый поток заявок выходят на план к 6–12 месяцам. SEO работает накопительно: эффект нарастает со временем и остаётся после завершения активных работ.'
  },
  {
    title: 'Что входит в SEO-продвижение?',
    content:
      'Технический аудит и устранение ошибок, сбор семантического ядра, on-page оптимизация страниц, внутренняя перелинковка, создание и доработка контента, наращивание ссылочной массы и ежемесячная аналитика. Мы ведём работу по всем факторам ранжирования, а не по одному направлению.'
  },
  {
    title: 'SEO или контекстная реклама — что выбрать?',
    content:
      'Контекст даёт трафик сразу, но он прекращается, как только вы останавливаете бюджет. SEO стартует медленнее, зато трафик остаётся и дешевеет со временем. На практике связка работает лучше всего: контекст закрывает спрос сейчас, SEO строит долгосрочный поток заявок.'
  },
  {
    title: 'Даёте ли гарантию ТОП-10?',
    content:
      'Честно: гарантировать конкретные позиции в ТОП-10 не может никто — поисковые системы не раскрывают алгоритмы и постоянно их меняют. Мы фиксируем в договоре объём работ и работаем на измеримый результат: рост органического трафика, видимости и числа заявок с поиска.'
  }
]

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      '@id': `${PAGE_URL}#service`,
      name: 'SEO-продвижение сайтов',
      serviceType: 'Поисковое продвижение и оптимизация сайтов',
      description:
        'Комплексное SEO-продвижение сайтов в Яндексе и Google: технический аудит, семантическое ядро, on-page оптимизация, контент и ссылки. Работаем на рост органического трафика и заявок.',
      provider: { '@id': `${SITE_URL}/#organization` },
      areaServed: 'Россия',
      offers: {
        '@type': 'Offer',
        price: '50000',
        priceCurrency: 'RUB',
        description: 'Комплексное SEO-продвижение, от 50 000 ₽ в месяц'
      }
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Главная', item: SITE_URL },
        { '@type': 'ListItem', position: 2, name: 'Услуги', item: `${SITE_URL}/services` },
        { '@type': 'ListItem', position: 3, name: 'SEO-продвижение', item: PAGE_URL }
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
    title: 'SEO-продвижение сайтов в Москве и России — KIM.agency',
    description:
      'SEO-продвижение сайтов в Яндексе и Google: аудит, семантика, контент и ссылки. Растим органический трафик и заявки. Москва и вся Россия. От 50 000 ₽.',
    keywords: ['seo', 'продвижение сайтов', 'оптимизация', 'поисковое продвижение', 'топ выдачи'].filter(Boolean),
    alternates: { canonical: '/services/seo' },
    openGraph: {
      title: 'SEO-продвижение сайтов — KIM.agency',
      description:
        'Комплексное SEO в Яндексе и Google: технический аудит, семантика, контент и ссылки. Работаем на рост трафика и заявок.',
      url: PAGE_URL,
      type: 'website'
    }
  }
}

const SeoPage: FC<SeoPageProps> = () => {
  const serviceData = getServiceData('seo')

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

  // Все секции страницы собраны в карту: порядок задаётся uiConfig.order,
  // что делает композицию уникальной для услуги при едином каркасе.
  const sections: Record<string, ReactNode> = {
    intro: (
      <IntroWorkUs
        key="intro"
        className={introClassName}
        title="SEO-продвижение сайтов"
        text={
          'SEO-продвижение — это комплексная работа над сайтом, которая выводит его в поиск Яндекса и Google и приводит клиентов из органической выдачи. Подходит бизнесу, которому нужен стабильный поток заявок без постоянных затрат на рекламу. Мы делаем технический аудит, собираем семантику, оптимизируем страницы и наращиваем ссылки. Первые результаты обычно видны через 3–6 месяцев, а трафик остаётся надолго.'
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
                Получить SEO-аудит
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
        title="Что входит в SEO-продвижение"
        texts={[
          'SEO — это не один приём, а работа по всем факторам ранжирования сразу. Мы начинаем с технического аудита: находим ошибки индексации, дубли и проблемы скорости. Затем собираем семантическое ядро и кластеризуем запросы по страницам. Дальше идёт on-page оптимизация — мета-теги, заголовки, структура — и внутренняя перелинковка. Параллельно работаем над контентом под запросы пользователей и наращиваем ссылочную массу. Каждый месяц сверяем метрики и корректируем план.'
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
        title="Что входит в продвижение"
        itemsData={[
          { icon: <AcceptIcon />, title: 'Технический аудит и устранение ошибок индексации', description: '' },
          { icon: <AcceptIcon />, title: 'Семантическое ядро и кластеризация запросов', description: '' },
          { icon: <AcceptIcon />, title: 'On-page оптимизация: мета-теги, заголовки, структура', description: '' },
          { icon: <AcceptIcon />, title: 'Внутренняя перелинковка и архитектура URL', description: '' },
          { icon: <AcceptIcon />, title: 'Создание и оптимизация контента под запросы', description: '' },
          { icon: <AcceptIcon />, title: 'Наращивание ссылочной массы и Core Web Vitals', description: '' }
        ]}
      />
    ),
    consult: (
      <div key="consult" id="free-consult" className={styles.freeConsultSection}>
        <FormFirst
          title="Разберём ваш сайт на бесплатной консультации"
          paragraph="Оставьте контакт — проведём экспресс-аудит, покажем точки роста и оценим перспективы продвижения."
          submitValue="Получить SEO-аудит"
        />
      </div>
    ),
    solutions: (
      <section key="solutions" className={styles.solutions}>
        <h2 className={classNames(styles.solutionsTitle, styles.accentTitle)}>Наши решения по SEO</h2>
        <p className={styles.solutionsText}>
          Мы не продвигаем «вообще сайт» — мы работаем под конкретную цель: вывести категории
          интернет-магазина в ТОП, собрать трафик на услуги или усилить присутствие в своём городе.
          Подбираем стратегию под нишу и состояние сайта, а не используем один шаблон на всех.
        </p>
        <div className={styles.solutionsCards}>
          <article className={styles.solutionsCard}>
            <h3 className={styles.solutionsCardTitle}>Комплексное SEO</h3>
            <ul className={styles.solutionsList}>
              <li>Технический аудит и приведение сайта в порядок.</li>
              <li>Семантика, контент и on-page оптимизация страниц.</li>
              <li>Ссылки, аналитика и ежемесячный план работ.</li>
            </ul>
          </article>
          <article className={classNames(styles.solutionsCard, styles.accentCard)}>
            <h3 className={styles.solutionsCardTitle}>Локальное и нишевое продвижение</h3>
            <p className={styles.solutionsCardText}>
              Продвижение по геозапросам и «near me», оптимизация карточек и посадочных под услуги.
              Собираем целевой трафик там, где ваши клиенты действительно ищут решение.
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
        title="Как идёт работа"
        counter
        itemsData={[
          { icon: '', title: '1', description: 'Аудит сайта и анализ конкурентов в нише' },
          { icon: '', title: '2', description: 'Сбор семантики и построение карты страниц' },
          { icon: '', title: '3', description: 'Техническая и on-page оптимизация' },
          { icon: '', title: '4', description: 'Контент и наращивание ссылочной массы' },
          { icon: '', title: '5', description: 'Аналитика, отчёты и корректировка плана' }
        ]}
      />
    ),
    pricing: (
      <section key="pricing" className={styles.pricing}>
        <Heading size="md" className={styles.pricingMainTitle}>Стоимость и сроки</Heading>

        <div className={styles.pricingRow}>
          <div className={styles.pricingBadge}>
            <p className={styles.pricingBadgeLabel}>Стоимость</p>
            <p className={styles.pricingBadgeValue}>от 50 000 ₽</p>
          </div>
          <div className={styles.pricingBadge}>
            <p className={styles.pricingBadgeLabel}>Первые результаты</p>
            <p className={styles.pricingBadgeValue}>от 3 месяцев</p>
          </div>
        </div>

        <Heading size="md" className={styles.techTitle}>
          Инструменты и аналитика
        </Heading>
        <p className={styles.techText}>
          Работаем на официальных панелях поисковых систем и профессиональных SEO-сервисах —
          решения принимаем по данным, а не на глаз.
        </p>

        <div className={styles.techGrid}>
          <div className={styles.techCard}>
            <p className={styles.techCardTitle}>Панели вебмастера</p>
            <ul className={styles.techList}>
              <li>Яндекс.Вебмастер</li>
              <li>Google Search Console</li>
            </ul>
          </div>
          <div className={styles.techCard}>
            <p className={styles.techCardTitle}>Аналитика</p>
            <ul className={styles.techList}>
              <li>Яндекс.Метрика</li>
              <li>Google Analytics</li>
            </ul>
          </div>
          <div className={styles.techCard}>
            <p className={styles.techCardTitle}>SEO-сервисы</p>
            <ul className={styles.techList}>
              <li>Screaming Frog, Ahrefs</li>
              <li>Key Collector</li>
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
          paragraph="Проведём аудит, покажем точки роста и рассчитаем план продвижения под ваш бизнес."
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
        title="Немного статистики"
        itemsData={[
          { icon: '', title: '15', description: 'сотрудников в штате' },
          { icon: '', title: '5', description: 'отделов' },
          { icon: '', title: '200+', description: 'реализованных проектов' },
          { icon: '', title: '10 000+', description: 'приведённых лидов' },
          { icon: '', title: '7 000+', description: 'пользователей наших решений' },
          { icon: '', title: '32', description: 'платных сервиса использует команда ежемесячно' }
        ]}
      />
    ),
    faq: <Faq key="faq" faqData={faqData} title="Частые вопросы о SEO-продвижении" />,
    reviews: <Review key="reviews" />,
    finalForm: (
      <FormFirst
        key="finalForm"
        className={styles.formBlock}
        title="Готовы получать клиентов из поиска?"
        paragraph="Оставьте заявку — свяжемся и проведём бесплатный аудит вашего сайта."
        submitValue="Отправить"
      />
    )
  }

  const order = ui?.order ?? Object.keys(sections)

  return (
    <>
      <Script
        id="seo-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className={rootClassName} style={accentStyle}>
        {order.map((key) => sections[key] ?? null)}
      </main>
    </>
  )
}

export default SeoPage

import { getServiceData } from '@/shared/dataServices'
import styles from './page.module.scss'
import classNames from 'classnames'
import { FC } from 'react'
import { IntroWorkUs } from '@/modules/introWorkUs'
import { SermPageProps } from './page.types'
import type { Metadata } from 'next'
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
const PAGE_URL = `${SITE_URL}/services/serm`

// FAQ — используется и в видимом блоке, и в JSON-LD (контент совпадает, разметка не скрытая)
const faqData = [
  {
    title: 'Что такое SERM и чем отличается от SEO?',
    content:
      'SERM — управление репутацией в поисковой выдаче. SEO выводит в топ ваш сайт по целевым запросам, а SERM формирует картину по брендовым запросам: что видит клиент, когда вводит название компании. Мы влияем на отзывы, упоминания и позитивный контент, а не на продажи страниц услуг.'
  },
  {
    title: 'Сколько стоит управление репутацией?',
    content:
      'Работа по управлению репутацией — от 60 000 ₽ в месяц. Точная стоимость зависит от объёма негатива, числа площадок и целей: удержать репутацию или исправить уже сложившуюся выдачу. На старте проводим аудит упоминаний и считаем объём работ до начала проекта.'
  },
  {
    title: 'Можно ли удалить негативные отзывы?',
    content:
      'Не всегда. Удаление возможно только для отзывов, нарушающих правила площадки или закон. Чаще мы работаем иначе: публично и корректно отрабатываем негатив, помогаем решить проблему клиента и вытесняем негатив из топа объёмом достоверного позитивного контента. Честная работа надёжнее попыток всё стереть.'
  },
  {
    title: 'Через сколько виден результат?',
    content:
      'Первые изменения в тональности и реакции на негатив заметны за 1–2 месяца. Устойчивая перестройка топа выдачи по брендовым запросам занимает 3–6 месяцев: позитивный контент должен набрать вес, а отзывы — накопиться естественно. SERM — это системная работа, а не разовая акция.'
  },
  {
    title: 'Что входит в SERM?',
    content:
      'Мониторинг упоминаний бренда, отработка негатива и отзывов, формирование позитивного контента, работа с отзовиками, картами и агрегаторами, вытеснение негатива из топа и регулярная отчётность по тональности. Состав работ подбираем под текущую репутацию: удержать хорошую выдачу или исправить проблемную.'
  }
]

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      '@id': `${PAGE_URL}#service`,
      name: 'Управление репутацией (SERM)',
      serviceType: 'Управление репутацией в поисковых системах',
      description:
        'Управление репутацией бренда в поиске: мониторинг упоминаний, работа с негативом, вытеснение негатива из топа и формирование позитивной выдачи по брендовым запросам.',
      provider: { '@id': `${SITE_URL}/#organization` },
      areaServed: 'Россия',
      offers: {
        '@type': 'Offer',
        price: 60000,
        priceCurrency: 'RUB',
        description: 'Управление репутацией, от 60 000 ₽ в месяц'
      }
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Главная', item: SITE_URL },
        { '@type': 'ListItem', position: 2, name: 'Услуги', item: `${SITE_URL}/services` },
        { '@type': 'ListItem', position: 3, name: 'SERM', item: PAGE_URL }
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
    title: 'Управление репутацией (SERM) — репутация бренда | KIM.agency',
    description:
      'Управляем репутацией бренда в поиске: мониторинг упоминаний, работа с негативом, вытеснение негатива из топа и формирование позитивной выдачи. Честно, без обещаний «удалить любой негатив». От 60 000 ₽.',
    keywords: ['serm', 'репутация', 'управление репутацией', 'негатив в поиске'].filter(Boolean),
    alternates: { canonical: '/services/serm' },
    openGraph: {
      title: 'Управление репутацией (SERM) — KIM.agency',
      description:
        'Мониторинг упоминаний, работа с негативом и формирование позитивной выдачи по брендовым запросам. Системная работа с репутацией бренда.',
      url: PAGE_URL,
      type: 'website'
    }
  }
}

const SermPage: FC<SermPageProps> = () => {
  const serviceData = getServiceData('serm')

  if (!serviceData) {
    return null
  }

  const rootClassName = classNames(styles.root)

  return (
    <>
      <Script
        id="serm-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className={rootClassName}>
        <IntroWorkUs
          className={styles.introBlock}
          title="Управление репутацией (SERM)"
          text={
            'SERM — это управление репутацией бренда в поисковой выдаче. Когда клиент вводит название компании, он видит отзывы, упоминания и оценки. Мы отслеживаем эти упоминания, корректно отрабатываем негатив и формируем позитивную картину по брендовым запросам. Нужно бизнесу, которому важно доверие аудитории: клиники, застройщики, услуги, e-commerce. Результат — объективная выдача и больше заявок от тех, кто проверяет вас перед покупкой.'
          }
          highlightedText=""
          titleClassName={styles.introTitleSmall}
          buttons={(
            <div className={styles.introButtonsWrap}>
              <Button
                tag="a"
                href="#form"
                maxWidth="320px"
                className={styles.introHeroButton}
              >
                Оценить репутацию
              </Button>
            </div>
          )}
        />

        <StandartText
          marginBottom
          marginTop
          title="Как мы управляем репутацией бренда"
          texts={[
            'Начинаем с мониторинга: отслеживаем упоминания бренда в поиске, на отзовиках, картах и в соцсетях — чтобы знать, что о вас пишут прямо сейчас. Дальше работаем с негативом: отвечаем публично и по делу, помогаем закрыть проблему клиента, а не прячем её. Параллельно формируем позитив — достоверные отзывы и контент, который постепенно вытесняет негатив из топа. Удаление возможно только для отзывов, нарушающих правила площадки: мы не обещаем стереть любой негатив, но делаем так, чтобы объективная картина перевешивала.'
          ]}
        />

        <Why
          direction="row"
          titleJustify="center"
          titleAlign="center"
          cardsPerRow={3}
          title="Что входит в SERM"
          itemsData={[
            { icon: <AcceptIcon />, title: 'Мониторинг упоминаний бренда', description: '' },
            { icon: <AcceptIcon />, title: 'Отработка негатива и ответы на отзывы', description: '' },
            { icon: <AcceptIcon />, title: 'Вытеснение негатива из топа выдачи', description: '' },
            { icon: <AcceptIcon />, title: 'Формирование позитивного контента', description: '' },
            { icon: <AcceptIcon />, title: 'Работа с отзывами на площадках', description: '' },
            { icon: <AcceptIcon />, title: 'Аналитика тональности и отчётность', description: '' }
          ]}
        />

        <div id="free-consult" className={styles.freeConsultSection}>
          <FormFirst
            title="Оценим вашу репутацию на бесплатной консультации"
            paragraph="Оставьте контакт — проверим упоминания бренда в поиске и покажем, что видит клиент перед покупкой."
            submitValue="Оценить репутацию"
          />
        </div>

        <section className={styles.solutions}>
          <h2 className={styles.solutionsTitle}>На каких площадках мы работаем</h2>
          <p className={styles.solutionsText}>
            Репутация бренда складывается из многих источников: один клиент читает отзывы на картах,
            другой — ищет компанию в поиске, третий смотрит обсуждения в соцсетях. Мы закрываем все
            точки контакта, где аудитория принимает решение о доверии.
          </p>
          <div className={styles.solutionsCards}>
            <article className={styles.solutionsCard}>
              <h3 className={styles.solutionsCardTitle}>Отзовики и агрегаторы</h3>
              <ul className={styles.solutionsList}>
                <li>Отзывы на Яндекс Отзывы, Otzovik, Flamp и профильных агрегаторах.</li>
                <li>Карточки на Яндекс.Картах, Google Картах и 2ГИС.</li>
                <li>Отработка негатива и накопление достоверных отзывов.</li>
              </ul>
            </article>
            <article className={styles.solutionsCard}>
              <h3 className={styles.solutionsCardTitle}>Поиск и соцсети</h3>
              <p className={styles.solutionsCardText}>
                Работаем с топом выдачи по брендовым запросам в Яндекс и Google и отслеживаем
                упоминания в соцсетях и на форумах. Позитивный контент выходит в топ и перекрывает
                негатив там, где клиент принимает решение.
              </p>
            </article>
          </div>
        </section>

        <Why
          direction="row"
          titleJustify="center"
          titleAlign="center"
          cardsPerRow={3}
          title="Как мы работаем"
          counter
          itemsData={[
            { icon: '', title: '1', description: 'Аудит упоминаний и анализ текущей выдачи' },
            { icon: '', title: '2', description: 'Стратегия: удержать репутацию или исправить' },
            { icon: '', title: '3', description: 'Отработка негатива и работа с отзывами' },
            { icon: '', title: '4', description: 'Публикация позитивного контента и вытеснение' },
            { icon: '', title: '5', description: 'Мониторинг, отчётность и корректировка' }
          ]}
        />

        <section className={styles.pricing}>
          <Heading size="md" className={styles.pricingMainTitle}>Стоимость и сроки</Heading>

          <div className={styles.pricingRow}>
            <div className={styles.pricingBadge}>
              <p className={styles.pricingBadgeLabel}>Стоимость</p>
              <p className={styles.pricingBadgeValue}>от 60 000 ₽</p>
            </div>
            <div className={styles.pricingBadge}>
              <p className={styles.pricingBadgeLabel}>Первые результаты</p>
              <p className={styles.pricingBadgeValue}>3–6 месяцев</p>
            </div>
          </div>

          <Heading size="md" className={styles.techTitle}>
            Инструменты мониторинга
          </Heading>
          <p className={styles.techText}>
            Отслеживаем упоминания и тональность в реальном времени, чтобы реагировать на негатив
            раньше, чем он успеет набрать охват.
          </p>

          <div className={styles.techGrid}>
            <div className={styles.techCard}>
              <p className={styles.techCardTitle}>Мониторинг</p>
              <ul className={styles.techList}>
                <li>Brand Analytics</li>
                <li>YouScan</li>
              </ul>
            </div>
            <div className={styles.techCard}>
              <p className={styles.techCardTitle}>Площадки</p>
              <ul className={styles.techList}>
                <li>Яндекс.Карты, 2ГИС</li>
                <li>Отзовики, агрегаторы</li>
              </ul>
            </div>
            <div className={styles.techCard}>
              <p className={styles.techCardTitle}>Выдача</p>
              <ul className={styles.techList}>
                <li>Яндекс, Google</li>
                <li>Соцсети и форумы</li>
              </ul>
            </div>
          </div>
        </section>

        <div id="form">
          <FormFirst
            className={styles.formBlock}
            title="Запишитесь на бесплатную консультацию"
            paragraph="Проверим репутацию бренда в поиске, оценим объём работ и предложим стратегию."
            submitValue="Отправить"
          />
        </div>

        <div id="cases" className={styles.casesSection}>
          <Case />
        </div>
        <Clients title="Наши клиенты" />

        <Why
          counter
          direction="row"
          titleJustify="start"
          titleAlign="start"
          cardsPerRow={3}
          title="Результаты в цифрах"
          itemsData={[
            { icon: '', title: '200+', description: 'реализованных проектов' },
            { icon: '', title: '10 000+', description: 'приведённых лидов' },
            { icon: '', title: '7 000+', description: 'пользователей наших решений' },
            { icon: '', title: '3–6 мес', description: 'перестройка топа по брендовым запросам' },
            { icon: '', title: '24/7', description: 'мониторинг упоминаний бренда' },
            { icon: '', title: '5+', description: 'типов площадок под контролем' }
          ]}
        />

        <Faq faqData={faqData} title="Частые вопросы о SERM" />

        <Review />

        <FormFirst
          className={styles.formBlock}
          title="Готовы навести порядок в репутации?"
          paragraph="Оставьте заявку — проведём бесплатный аудит упоминаний и предложим план работ."
          submitValue="Отправить"
        />
      </main>
    </>
  )
}

export default SermPage

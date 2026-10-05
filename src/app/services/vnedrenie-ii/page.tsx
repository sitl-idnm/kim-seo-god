import { getServiceData } from '@/shared/dataServices'
import styles from './page.module.scss'
import classNames from 'classnames'
import { FC } from 'react'
import { IntroWorkUs } from '@/modules/introWorkUs'
import { VnedrenieIiPageProps } from './page.types'
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
const PAGE_URL = `${SITE_URL}/services/vnedrenie-ii`

// FAQ — используется и в видимом блоке, и в JSON-LD (контент совпадает, разметка не скрытая)
const faqData = [
  {
    title: 'Чем ИИ-агент отличается от чат-бота?',
    content:
      'Чат-бот отвечает по заранее заданным сценариям. ИИ-агент понимает контекст, работает с документами и данными, принимает решения в заданных границах и выполняет цепочки действий: например, разбирает заявку, готовит черновик ответа и заносит данные в CRM.'
  },
  {
    title: 'С чего начать внедрение ИИ?',
    content:
      'С одного процесса, а не со всего бизнеса сразу. Берём повторяющуюся задачу с понятным входом и выходом, запускаем пилот на 2–4 недели, замеряем эффект по одной метрике и только потом масштабируем.'
  },
  {
    title: 'Сколько стоит внедрение ИИ?',
    content:
      'Пилот под один процесс — от 150 000 ₽. Точная стоимость зависит от сложности процесса и интеграций. На диагностике считаем окупаемость до старта: окупается изменение процесса, а не сама технология.'
  },
  {
    title: 'Какие процессы можно отдать ИИ в первую очередь?',
    content:
      'Разбор входящих заявок, черновик первого ответа клиенту, сводку звонка или встречи, заполнение CRM по правилам, поиск ответа в базе знаний, подготовку коммерческого предложения и отчётов.'
  },
  {
    title: 'Кто отвечает за ошибки ИИ?',
    content:
      'Человек остаётся в контуре проверки. До старта определяем матрицу автономности: что ИИ делает сам, что — только после подтверждения сотрудника, а что остаётся исключительно за человеком (платежи, подпись документов, публичные заявления).'
  }
]

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      '@id': `${PAGE_URL}#service`,
      name: 'Внедрение ИИ и ИИ-агентов в бизнес',
      serviceType: 'Внедрение искусственного интеллекта и автоматизация бизнес-процессов',
      description:
        'Внедрение ИИ и ИИ-агентов под задачу бизнеса: диагностика процесса, пилот за 2–4 недели с замером эффекта, масштабирование. Автоматизация обработки заявок, документооборота, поддержки и продаж.',
      provider: { '@id': `${SITE_URL}/#organization` },
      areaServed: 'Россия',
      offers: {
        '@type': 'Offer',
        price: '150000',
        priceCurrency: 'RUB',
        description: 'Пилот под один процесс, от 150 000 ₽'
      }
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Главная', item: SITE_URL },
        { '@type': 'ListItem', position: 2, name: 'Услуги', item: `${SITE_URL}/services` },
        { '@type': 'ListItem', position: 3, name: 'Внедрение ИИ', item: PAGE_URL }
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
    title: 'Внедрение ИИ и ИИ-агентов в бизнес — автоматизация под ключ | KIM.agency',
    description:
      'Внедряем ИИ там, где он приносит деньги: ИИ-агенты, чат-боты и автоматизация процессов. Диагностика, пилот за 2–4 недели, замер эффекта. Окупается изменение процесса, а не технология. От 150 000 ₽.',
    keywords: [
      'внедрение ии',
      'ии-агенты для бизнеса',
      'автоматизация бизнес-процессов',
      'искусственный интеллект для бизнеса',
      'нейросети для бизнеса',
      'KIM.agency'
    ],
    alternates: { canonical: '/services/vnedrenie-ii' },
    openGraph: {
      title: 'Внедрение ИИ и ИИ-агентов в бизнес — KIM.agency',
      description:
        'ИИ-агенты, чат-боты и автоматизация процессов под задачу бизнеса. Диагностика → пилот за 2–4 недели → масштабирование.',
      url: PAGE_URL,
      type: 'website'
    }
  }
}

const VnedrenieIiPage: FC<VnedrenieIiPageProps> = () => {
  const serviceData = getServiceData('vnedrenie-ii')

  if (!serviceData) {
    return null
  }

  const rootClassName = classNames(styles.root)

  return (
    <>
      <Script
        id="vnedrenie-ii-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className={rootClassName}>
        <IntroWorkUs
          className={styles.introBlock}
          title="Внедрение ИИ и ИИ-агентов в бизнес"
          text={
            'Внедрение ИИ — это автоматизация конкретного бизнес-процесса, которая приносит измеримый результат: быстрее обрабатываются заявки, меньше ручной работы, заявки не теряются. Мы начинаем не с выбора нейросети, а с процесса: находим повторяющуюся задачу, запускаем пилот за 2–4 недели и считаем эффект. Окупается изменение процесса, а не сама технология.'
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
                Получить диагностику
              </Button>
            </div>
          )}
        />

        <StandartText
          marginBottom
          marginTop
          title="Когда внедрение ИИ действительно окупается"
          texts={[
            'ИИ не исправляет хаос — он ускоряет то, что уже происходит. Если автоматизировать беспорядок, получится беспорядок быстрее и дороже. Поэтому перед внедрением мы разбираем процесс: где повторяющаяся задача, понятный вход и выход, заметная потеря времени. Именно там ИИ даёт первый реальный эффект. Внедряем по шагам: диагностика → пилот на одном участке → замер по одной метрике → масштабирование. Человек всегда остаётся в контуре проверки.'
          ]}
        />

        <Why
          direction="row"
          titleJustify="center"
          titleAlign="center"
          cardsPerRow={3}
          title="Какие процессы отдаём ИИ в первую очередь"
          itemsData={[
            { icon: <AcceptIcon />, title: 'Разбор входящих заявок и сообщений', description: '' },
            { icon: <AcceptIcon />, title: 'Черновик первого ответа клиенту', description: '' },
            { icon: <AcceptIcon />, title: 'Сводка звонка, встречи или переписки', description: '' },
            { icon: <AcceptIcon />, title: 'Заполнение CRM по понятным правилам', description: '' },
            { icon: <AcceptIcon />, title: 'Поиск ответа в базе знаний и документах', description: '' },
            { icon: <AcceptIcon />, title: 'Подготовка коммерческого предложения и отчётов', description: '' }
          ]}
        />

        <div id="free-consult" className={styles.freeConsultSection}>
          <FormFirst
            title="Разберём ваш процесс на бесплатной диагностике"
            paragraph="Оставьте контакт — поможем выбрать первую точку для внедрения ИИ и посчитаем окупаемость до старта."
            submitValue="Получить диагностику"
          />
        </div>

        <section className={styles.solutions}>
          <h2 className={styles.solutionsTitle}>Наши решения на базе ИИ</h2>
          <p className={styles.solutionsText}>
            Собираем не одну большую модель, а систему специализированных агентов: один работает с
            заявками, другой — с документами, третий — с отчётностью. Каждое решение проектируется под
            конкретную задачу и встраивается в существующий процесс, а не ломает его.
          </p>
          <div className={styles.solutionsCards}>
            <article className={styles.solutionsCard}>
              <h3 className={styles.solutionsCardTitle}>ИИ-агенты и автоматизация</h3>
              <ul className={styles.solutionsList}>
                <li>Агент разбора заявок и квалификации лидов.</li>
                <li>Автоматизация документооборота и подготовки сделок.</li>
                <li>Персональный ИИ-агент (Second Brain) для эксперта или руководителя.</li>
              </ul>
            </article>
            <article className={styles.solutionsCard}>
              <h3 className={styles.solutionsCardTitle}>Чат-боты и цифровые приёмные</h3>
              <p className={styles.solutionsCardText}>
                Омниканальные боты в Telegram, MAX и ВКонтакте: приём и обработка обращений, сбор
                данных в одном месте, передача в CRM или таблицу. Заявки перестают теряться в
                переписках.
              </p>
            </article>
          </div>
        </section>

        <Why
          direction="row"
          titleJustify="center"
          titleAlign="center"
          cardsPerRow={3}
          title="Как проходит внедрение"
          counter
          itemsData={[
            { icon: '', title: '1', description: 'Диагностика процесса и выбор первой задачи' },
            { icon: '', title: '2', description: 'Фиксация базы: время, ошибки, скорость сейчас' },
            { icon: '', title: '3', description: 'Пилот: собираем ИИ-агента под один участок' },
            { icon: '', title: '4', description: 'Проверка человеком и настройка правил' },
            { icon: '', title: '5', description: 'Сравнение эффекта и масштабирование' }
          ]}
        />

        <section className={styles.pricing}>
          <Heading size="md" className={styles.pricingMainTitle}>Стоимость и сроки</Heading>

          <div className={styles.pricingRow}>
            <div className={styles.pricingBadge}>
              <p className={styles.pricingBadgeLabel}>Стоимость пилота</p>
              <p className={styles.pricingBadgeValue}>от 150 000 ₽</p>
            </div>
            <div className={styles.pricingBadge}>
              <p className={styles.pricingBadgeLabel}>Срок пилота</p>
              <p className={styles.pricingBadgeValue}>2–4 недели</p>
            </div>
          </div>

          <Heading size="md" className={styles.techTitle}>
            Технологии и интеграции
          </Heading>
          <p className={styles.techText}>
            Подбираем модель под задачу — не всегда нужен самый мощный ИИ. Для узких задач компактные
            модели дешевле и предсказуемее.
          </p>

          <div className={styles.techGrid}>
            <div className={styles.techCard}>
              <p className={styles.techCardTitle}>Модели</p>
              <ul className={styles.techList}>
                <li>LLM для сложных задач</li>
                <li>компактные SLM для узких</li>
              </ul>
            </div>
            <div className={styles.techCard}>
              <p className={styles.techCardTitle}>Каналы</p>
              <ul className={styles.techList}>
                <li>Telegram, MAX</li>
                <li>ВКонтакте, сайт</li>
              </ul>
            </div>
            <div className={styles.techCard}>
              <p className={styles.techCardTitle}>Интеграции</p>
              <ul className={styles.techList}>
                <li>CRM (Bitrix24, amoCRM)</li>
                <li>REST API, вебхуки</li>
              </ul>
            </div>
          </div>
        </section>

        <div id="form">
          <FormFirst
            className={styles.formBlock}
            title="Запишитесь на бесплатную диагностику"
            paragraph="Разберём процесс, выберем первую задачу для ИИ и рассчитаем окупаемость."
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
            { icon: '', title: '10–20 мин → 1–2 мин', description: 'обработка участника клуба после внедрения бота' },
            { icon: '', title: '×1,5–2', description: 'рост конверсии «новичок → активный клиент»' },
            { icon: '', title: '×6', description: 'рост потока обращений без роста бюджета' },
            { icon: '', title: '200+', description: 'реализованных проектов' },
            { icon: '', title: '10 000+', description: 'приведённых лидов' },
            { icon: '', title: '7 000+', description: 'пользователей наших решений' }
          ]}
        />

        <Faq faqData={faqData} title="Частые вопросы о внедрении ИИ" />

        <Review />

        <FormFirst
          className={styles.formBlock}
          title="Готовы получить измеримый эффект от ИИ?"
          paragraph="Оставьте заявку — свяжемся и проведём бесплатную диагностику вашего процесса."
          submitValue="Отправить"
        />
      </main>
    </>
  )
}

export default VnedrenieIiPage

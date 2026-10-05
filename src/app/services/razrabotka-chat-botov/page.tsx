

import { getServiceData } from '@/shared/dataServices'
import styles from './page.module.scss'
import classNames from 'classnames'
import { FC } from 'react'
import { IntroWorkUs } from '@/modules/introWorkUs'
import { RazrabotkaChatBotovPageProps } from './page.types'
import type { Metadata } from 'next'
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

const PAGE_URL = 'https://kim-agency.ru/services/razrabotka-chat-botov/'
const organizationName = 'KIM.agency'

const faqData = [
  {
    title: 'Какие задачи можно решить с помощью чат-бота для бизнеса?',
    content: 'Автоматизация продаж, поддержка, сбор лидов, сопровождение клиента.'
  },
  {
    title: 'В какие мессенджеры вы можете внедрить бота?',
    content: 'Telegram, ВКонтакте и другие платформы.'
  },
  {
    title: 'Вы оказываете поддержку после внедрения?',
    content: 'Да, техническая поддержка входит в сопровождение проекта.'
  }
]

export async function generateMetadata(): Promise<Metadata> {
  return {
    title:
      'Разработка чат-ботов внедрение - заказать в маркетинговом агентстве K.KIM в Москве и России',
    description:
      '✅ Разработка чат-ботов для бизнеса и внедрение под ключ. Заказать создание вы можете в digital-агентстве К КИМ. Мы работаем в Москве и по всей России. Создаем умные чат-боты в мессенджерах, соц сетях и сайтах для автоматизации продаж, поддержки клиентов и решения ваших задач. Внедряем эффективные сервисы.',
    keywords: ['чат-боты', 'внедрение', 'Telegram', 'ВКонтакте', 'K.KIM'].filter(Boolean),
    alternates: { canonical: '/services/razrabotka-chat-botov' }
  }
}

const RazrabotkaChatBotovPage: FC<RazrabotkaChatBotovPageProps> = () => {
  const serviceData = getServiceData('razrabotka-chat-botov')

  if (!serviceData) {
    return null
  }

  const rootClassName = classNames(styles.root)

  return (
    <div
      itemScope
      itemType="https://schema.org/WebPage"
    >
      {/* Microdata WebPage */}
      <meta itemProp="name" content={serviceData?.title ?? 'Разработка чат-ботов'} />
      <meta itemProp="url" content={PAGE_URL} />

      {/* Microdata BreadcrumbList (скрыто, не ломает верстку) */}
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
            <meta itemProp="item" content="https://kim-agency/" />
          </li>
          <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
            <meta itemProp="position" content="2" />
            <meta itemProp="name" content="Разработка чат-ботов" />
            <meta itemProp="item" content={PAGE_URL} />
          </li>
        </ol>
      </nav>

      {/* Microdata Service + Organization (скрыто) */}
      <div className="visually-hidden" itemProp="mainEntity" itemScope itemType="https://schema.org/Service">
        <meta itemProp="name" content="Разработка чат-ботов для бизнеса" />
        <meta
          itemProp="description"
          content={serviceData?.description ?? 'Разработка чат-ботов для бизнеса'}
        />
        <div itemProp="provider" itemScope itemType="https://schema.org/Organization">
          <meta itemProp="name" content={organizationName} />
          <meta itemProp="url" content="https://kim-agency/" />
        </div>
        <span itemProp="areaServed">Москва и Россия</span>
      </div>

      {/* Microdata FAQ (скрыто, но структурировано) */}
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
          title="Разработка чат-ботов для бизнеса от K.KIM"
          text={
            'Разработка чат ботов — это инструмент, который переводит чат в управляемый канал коммуникации и продаж. Мы выполняем разработку чат бота для бизнеса с учетом логики компании, интеграций и аналитики. Каждый бот создается под конкретную задачу: обработка лидов, поддержка, сопровождение продажи. Грамотная разработка позволяет внедрять чат-боты без сбоев в существующий процесс и получать измеримый результат.'
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
                Заказать разработку чат-бота
              </Button>
            </div>
          )}
        />

        <StandartText
          marginBottom
          marginTop
          title="Чат-боты для бизнеса: автоматизация, которая работает на вас"
          texts={[
            'Чат становится точкой контакта, а бот — инструментом, который помогает пользователю быстро получить решение. Разработка чат бота для бизнеса — это способ превратить диалог в управляемый канал продаж и поддержки. Мы выполняем разработку чат-ботов для сайтов, мессенджеров и внутренних сервисов. Боты работают 24/7, фиксируют обращения, передают данные в CRM и помогают масштабировать продажи без увеличения штата.'
          ]}
        />

        <Why
          direction="row"
          titleJustify="center"
          titleAlign="center"
          cardsPerRow={2}
          title="Что умеет наш чат-бот?"
          itemsData={[
            { icon: <AcceptIcon />, title: 'Автоматизация продаж и привлечение лидов через чат', description: '' },
            { icon: <AcceptIcon />, title: 'Круглосуточная поддержка и ответы на вопросы пользователя', description: '' },
            { icon: <AcceptIcon />, title: 'Интеграция с сервисом, сайтом и платформой компании', description: '' },
            { icon: <AcceptIcon />, title: 'Помощь в процессе оформления заказа и передача данных менеджеру', description: '' }
          ]}
        />

        <div id="free-consult" className={styles.freeConsultSection}>
          <FormFirst
            title="Запишитесь на бесплатную консультацию"
            paragraph="Оставьте контакт — разберем задачу и предложим сценарии внедрения чат-бота под ваш бизнес."
            submitValue="Отправить"
          />
        </div>

        <section className={styles.solutions}>
          <h2 className={styles.solutionsTitle}>Наши решения по созданию и внедрению чат-ботов</h2>
          <p className={styles.solutionsText}>
            В нашей компании доступна разработка и внедрение чат ботов под ключ для решения различных бизнес-задач.
            Возможна реализация для Telegram и ВКонтакте. Каждый бот адаптируется под формат мессенджера и особенности аудитории.
            При необходимости мы можем внедрять решение в существующий сервис или платформу.
          </p>
          <div className={styles.solutionsCards}>
            <article className={styles.solutionsCard}>
              <h3 className={styles.solutionsCardTitle}>Разработка чат-ботов</h3>
              <ul className={styles.solutionsList}>
                <li>Создание бота в Telegram для быстрой коммуникации.</li>
                <li>Чат-боты во ВКонтакте для сообществ и продаж через социальные сети.</li>
              </ul>
            </article>
            <article className={styles.solutionsCard}>
              <h3 className={styles.solutionsCardTitle}>Внедрение ботов</h3>
              <p className={styles.solutionsCardText}>
                Интегрируем бот в сайт, приложение или внутренний сервис. После внедрения чат становится частью рабочего процесса, а вы получаете управляемый инструмент коммуникации.
              </p>
            </article>
          </div>
        </section>

        <Why
          direction="row"
          titleJustify="center"
          titleAlign="center"
          cardsPerRow={3}
          title="Как проходит процесс разработки?"
          itemsData={[
            { icon: <AcceptIconBlack />, title: 'Анализ задачи и целей бизнеса.', description: '' },
            { icon: <AcceptIconBlack />, title: 'Проектирование сценариев работы бота с пользователем.', description: '' },
            { icon: <AcceptIconBlack />, title: 'Разработка и создание функционала.', description: '' },
            { icon: <AcceptIconBlack />, title: 'Тестирование и внедрение решения.', description: '' },
            { icon: <AcceptIconBlack />, title: 'Техническая поддержка и масштабирование.', description: '' }
          ]}
        />

        <Why
          direction="row"
          titleJustify="center"
          titleAlign="center"
          cardsPerRow={2}
          title="Почему заказывают разработку чат-бота у нас?"
          itemsData={[
            { icon: <AcceptIcon />, title: 'Комплексная разработка: от идеи до внедрения', description: '' },
            { icon: <AcceptIcon />, title: 'Погружение в задачи компании и аудитории', description: '' },
            { icon: <AcceptIcon />, title: 'Чат-бот проектируется под пользователя', description: '' },
            { icon: <AcceptIcon />, title: 'Создаем решения, которые помогают расти', description: '' }
          ]}
        />

        <section className={styles.pricing}>
          <Heading size="md" className={styles.pricingMainTitle}>Стоимость и сроки</Heading>

          <div className={styles.pricingRow}>
            <div className={styles.pricingBadge}>
              <p className={styles.pricingBadgeLabel}>Стоимость</p>
              <p className={styles.pricingBadgeValue}>от 15 000 ₽</p>
            </div>
            <div className={styles.pricingBadge}>
              <p className={styles.pricingBadgeLabel}>Срок разработки</p>
              <p className={styles.pricingBadgeValue}>от 7 дней</p>
            </div>
          </div>

          <Heading size="md" className={styles.techTitle}>
            Технологический стек
          </Heading>
          <p className={styles.techText}>
            Для реализации проектов мы используем современный и масштабируемый стек технологий:
          </p>

          <div className={styles.techGrid}>
            <div className={styles.techCard}>
              <p className={styles.techCardTitle}>Интеграции</p>
              <ul className={styles.techList}>
                <li>REST API</li>
                <li>CRM (Bitrix24)</li>
              </ul>
            </div>
            <div className={styles.techCard}>
              <p className={styles.techCardTitle}>Хостинг и инфраструктура</p>
              <ul className={styles.techList}>
                <li>VPS</li>
                <li>Docker</li>
                <li>облачные серверы</li>
              </ul>
            </div>
            <div className={styles.techCard}>
              <p className={styles.techCardTitle}>AI-инструменты</p>
              <ul className={styles.techList}>
                <li>модели ИИ для обработки текста</li>
              </ul>
            </div>
          </div>
          <p className={styles.techText}>
            Такой стек позволяет создавать устойчивые решения, которые легко масштабируются и интегрируются в существующую цифровую экосистему бизнеса.
          </p>
        </section>

        <div id="form">
          <FormFirst
            className={styles.formBlock}
            title="Запишитесь на бесплатную консультацию"
            paragraph="Ответим на вопросы, подберем сценарии внедрения и рассчитаем сроки проекта."
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
          title="Немного статистики"
          itemsData={[
            { icon: '', title: '15', description: 'сотрудников в штате' },
            { icon: '', title: '5', description: 'отделов' },
            { icon: '', title: '150+', description: 'реализованных проектов' },
            { icon: '', title: '10 000+', description: 'приведенных лидов' },
            { icon: '', title: '32', description: 'платных сервисов использует команда ежемесячно' },
            { icon: '', title: '4', description: 'модели ИИ помогают сотрудникам в работе' }
          ]}
        />

        <Faq faqData={faqData} title="Часто задаваемые вопросы (FAQ)" />

        <Review />

        <FormFirst
          className={styles.formBlock}
          title="Готовы к сотрудничеству?"
          paragraph="Оставьте заявку и мы свяжемся с вами для проведения бесплатной консультации."
          submitValue="Отправить"
        />
      </main>
    </div>
  )
}

export default RazrabotkaChatBotovPage

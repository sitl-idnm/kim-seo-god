'use client'

import { FC } from 'react'
import classNames from 'classnames'
import { IntroWorkUs } from '@/modules/introWorkUs'
import { StandartText } from '@/ui'
import { Why } from '@/modules/why'
import AcceptIcon from '@icons/accept.svg'
import AcceptIconBlack from '@icons/accept-black.svg'
import { FormFirst } from '@/modules/formFirst'
import { Case } from '@/modules/case'
import { Clients } from '@/modules/clients'
import { Review } from '@/modules/review'
import { Faq } from '@/modules/faq'
import { Button } from '@/ui'
import { Heading } from '@/ui'
import { ServicePricing } from '@/modules/servicePricing'
import Services from '@/modules/ServicePage/services/services'
import styles from './uxUiPage.module.scss'

const PAGE_URL = 'https://kim-agency.ru/ux-ui'
const ORGANIZATION_NAME = 'K.KIM'

const faqData = [
  {
    title: 'Сколько занимает работа?',
    content:
      'Срок зависит от состава проекта: небольшой сайт можно собрать быстрее, а сложное приложение требует исследования, прототипов и согласований.'
  },
  {
    title: 'Можно ли вносить правки?',
    content:
      'Да, правки закладываются в процесс, чтобы итоговый дизайн был согласован с бизнес-целями и ожиданиями команды.'
  },
  {
    title: 'Что получит клиент на выходе?',
    content:
      'Готовые макеты, логику экранов, правила по элементам, понятный пользовательский сценарий и материалы для передачи в разработку.'
  }
]

const normalizeText = (value: string) => value.replaceAll('\\u00A0', '\u00A0')

export const UxUiPageView: FC = () => {
  const rootClassName = classNames(styles.root)

  return (
    <div itemScope itemType="https://schema.org/WebPage">
      <meta itemProp="name" content="UI & UX дизайн от K.KIM" />
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
            <meta itemProp="name" content="Главная" />
            <meta itemProp="item" content="https://kim-agency.ru/" />
          </li>
          <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
            <meta itemProp="position" content="2" />
            <meta itemProp="name" content="UI/UX дизайн" />
            <meta itemProp="item" content={PAGE_URL} />
          </li>
        </ol>
      </nav>

      <div className="visually-hidden" itemProp="mainEntity" itemScope itemType="https://schema.org/Service">
        <meta itemProp="name" content="UI/UX дизайн" />
        <meta
          itemProp="description"
          content="Создаем интерфейсы, в которых удобно принимать решение, оставлять заявку, покупать и возвращаться снова."
        />
        <div itemProp="provider" itemScope itemType="https://schema.org/Organization">
          <meta itemProp="name" content={ORGANIZATION_NAME} />
          <meta itemProp="url" content="https://kim-agency.ru/" />
        </div>
        <div itemProp="offers" itemScope itemType="https://schema.org/Offer">
          <meta itemProp="priceCurrency" content="RUB" />
          <meta itemProp="price" content="40000" />
          <meta itemProp="description" content="Минимальная цена на услугу UI/UX дизайна" />
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
          title="UI & UX дизайн от K.KIM"
          text={normalizeText('Создаем интерфейсы, в\\u00A0которых удобно принимать решение, оставлять заявку, покупать и\\u00A0возвращаться снова. Для бизнеса это рабочий инструмент: он снижает потери на\\u00A0пути пользователя, делает продукт понятнее и\\u00A0помогает расти конверсии. Если вам важно усилить пользовательский опыт и\\u00A0удобное взаимодействие, такая услуга решает задачу системно.')}
          highlightedText=""
          titleClassName={styles.introTitleSmall}
          buttons={(
            <div className={styles.introButtonsWrap}>
              <Button
                tag="a"
                href="#order-form"
                maxWidth="320px"
                className={styles.introHeroButton}
              >
                Заказать UX/UI дизайн
              </Button>
            </div>
          )}
        />

        <StandartText
          className={styles.sectionTextBlock}
          marginBottom
          title="Что дает бизнесу сильный интерфейс"
          texts={[
            normalizeText('Хороший интерфейс помогает человеку быстрее понять ценность предложения, не теряться в\\u00A0сценариях и\\u00A0без лишних шагов доходить до\\u00A0целевого действия. Когда визуальная часть и\\u00A0логика продуманы вместе, проект выглядит цельно, а\\u00A0пользовательский путь становится предсказуемым для бизнеса. Именно поэтому заказать UI/UX дизайн стоит тогда, когда нужна понятная система, в\\u00A0которой каждая деталь работает на\\u00A0результат.')
          ]}
        />

        <StandartText
          className={styles.sectionTextBlock}
          marginBottom
          title="Что входит в работу"
          texts={[
            normalizeText('Мы начинаем с\\u00A0задачи, аудитории и\\u00A0контекста. Изучаем продукт, конкурентов, текущие барьеры и\\u00A0точки роста. Затем собираем логику экранов, проверяем сценарии и\\u00A0после этого переходим к\\u00A0визуальной части. В\\u00A0работу обычно входят:')
          ]}
        />

        <Why
          className={styles.workIncludesCards}
          direction="column"
          titleJustify="start"
          titleAlign="start"
          cardsPerRow={3}
          title=""
          showTitle={false}
          itemsData={[
            { icon: <AcceptIconBlack />, title: normalizeText('Исследование поведения user и\\u00A0ключевых сценариев'), description: '' },
            { icon: <AcceptIconBlack />, title: normalizeText('Прототипирование структуры страниц и\\u00A0экранов'), description: '' },
            { icon: <AcceptIconBlack />, title: 'Создание визуальной концепции и design-системы', description: '' },
            { icon: <AcceptIconBlack />, title: normalizeText('Адаптация под мобильный формат и\\u00A0разные устройства'), description: '' },
            { icon: <AcceptIconBlack />, title: normalizeText('Подготовка макетов для передачи в\\u00A0разработку'), description: '' }
          ]}
        />

        <StandartText
          className={styles.sectionTextBlock}
          marginBottom
          texts={[
            'Такой подход помогает не заказывать переделку после запуска и заранее видеть слабые места.'
          ]}
        />

        <StandartText
          className={styles.sectionTextBlock}
          marginBottom
          title="Как идет разработка"
          texts={[
            normalizeText('Сначала фиксируем цели бизнеса и\\u00A0метрики, затем собираем структуру, прототип, визуальный стиль и\\u00A0правила для команды. В\\u00A0проекте участвуют дизайнер, стратег и\\u00A0специалисты по\\u00A0digital-аналитике, поэтому решения опираются на\\u00A0опыт реальных запусков. Мы не\\u00A0рисуем UI ради красоты и\\u00A0не собираем UX из\\u00A0догадок: нам важно, чтобы интерфейс был понятным, масштабируемым и\\u00A0удобным в\\u00A0работе дальше.')
          ]}
        />

        <Why
          className={styles.benefitsCards}
          direction="row"
          titleJustify="center"
          titleAlign="center"
          cardsPerRow={2}
          title="Плюсы разработки такого дизайна"
          itemsData={[
            {
              icon: <AcceptIcon />,
              title: 'Понятный пользовательский путь',
              description:
                'Человек быстрее понимает продукт, меньше теряется в сценариях и чаще доходит до заявки, покупки или обращения.'
            },
            {
              icon: <AcceptIcon />,
              title: 'Ниже потери на этапе взаимодействия',
              description:
                'Убираются лишние шаги, неочевидные кнопки и перегруженные экраны, из-за которых сайт или приложение теряет конверсию.'
            },
            {
              icon: <AcceptIcon />,
              title: 'Быстрее запуск и меньше переделок',
              description:
                'Ошибки видны еще на уровне прототипа, поэтому команда не тратит бюджет на исправления после релиза.'
            },
            {
              icon: <AcceptIcon />,
              title: 'Единая система для команды',
              description:
                'Макеты, компоненты и правила собираются в общую design-систему, с которой легче работать дальше.'
            },
            {
              icon: <AcceptIcon />,
              title: 'Удобство для разных устройств',
              description:
                'Интерфейс заранее адаптируется под мобильный формат, планшеты и десктоп, без хаоса в элементах.'
            },
            {
              icon: <AcceptIcon />,
              title: 'Основа для роста продукта',
              description:
                'Такой подход упрощает развитие проекта: можно добавлять новые разделы, функции и экраны без пересборки с нуля.'
            }
          ]}
        />

        <ServicePricing
          title="Цена и стоимость UI/UX"
          text={normalizeText('Цена зависит от\\u00A0объема экранов, глубины аналитики, наличия готового контента и\\u00A0сложности продукта.')}
          badges={[{ label: 'Минимальная цена', value: 'от 40 000 ₽' }]}
        />

        <div id="order-form">
          <FormFirst
            className={classNames(styles.formBlock, styles.orderFormBlock)}
            title="Заказать UX/UI дизайн"
            paragraph=""
            submitValue="Отправить заявку"
            project
            projectPlaceholder="Краткое описание проекта"
          />
        </div>

        <StandartText
          className={classNames(styles.sectionTextBlock, styles.afterOrderFormText)}
          marginBottom
          title="Почему с K.KIM удобнее работать"
          texts={[
            normalizeText('K.KIM работает с\\u00A0клиентами в\\u00A0Москве и\\u00A0других регионах и\\u00A0помогает бизнесу смотреть на\\u00A0интерфейс как на\\u00A0часть продаж, маркетинга и\\u00A0роста. Команда экспертов реализовала более 150 проектов, поэтому мы умеем соединять эстетику, логику и\\u00A0коммерческую задачу. Клиент получает инструмент, с\\u00A0которым проще продавать, тестировать гипотезы и\\u00A0масштабировать продукт без хаоса. Это экономит время, снижает риск ошибок и\\u00A0позволяет не\\u00A0заказывать новую систему с\\u00A0нуля через несколько месяцев.')
          ]}
        />

        <section className={styles.caseBlock}>
          <Case />
        </section>

        <Clients title="Нам доверяют" />

        <section className={styles.tech}>
          <Heading size="md" className={styles.techTitle}>
            Наши технологии
          </Heading>
          <p className={styles.techText}>
            Для проектирования интерфейсов мы используем связку инструментов:
          </p>
          <div className={styles.techGrid}>
            <div className={styles.techCard}>
              <p className={styles.techCardTitle}>Инструменты</p>
              <ul className={styles.techList}>
                <li>Figma</li>
                <li>Tilda</li>
                <li>Freepik</li>
              </ul>
            </div>
          </div>
          <p className={styles.techText}>
            {normalizeText('Такой стек помогает быстрее согласовывать решения, держать единый interface продукта и\\u00A0не терять детали на\\u00A0этапе передачи в\\u00A0разработку. Команда видит, как устроен user flow, заказчик понимает будущий результат еще до\\u00A0запуска, разработчики получают аккуратную и\\u00A0понятную систему экранов, состояний и\\u00A0правил.')}
          </p>
        </section>

        <Review />

        <section className={styles.alsoServicesWrap}>
          <Services
            title="Мы также делаем"
            hasCost={false}
            showDescription={false}
            showSubtitle
            excludeCurrentPage
          />
        </section>

        <Faq className={styles.faqBlock} faqData={faqData} title="FAQ" />

        <FormFirst
          className={classNames(styles.formBlock, styles.finalFormBlock)}
          title="Обсудить проект"
          paragraph={normalizeText('Если нужен интерфейс, который продает, объясняет и\\u00A0удерживает внимание, оставьте заявку. Мы разберем задачу и\\u00A0покажем, как превратить идею в\\u00A0понятный цифровой продукт.')}
          submitValue="Обсудить проект"
        />
      </main>
    </div>
  )
}

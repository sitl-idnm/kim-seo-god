import { getServiceData } from '@/shared/dataServices'
import styles from '../shared/servicePage.module.scss'
import classNames from 'classnames'
import { FC } from 'react'
import Link from 'next/link'
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
import {
  clientResultItems,
  faqData,
  includedItems,
  processPrinciples
} from './data'

const PAGE_URL = 'https://kim-agency.ru/services/firmenniy-stil/'
const organizationName = 'K.KIM'

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Фирменный стиль и брендбук от K.KIM',
    description:
      'Фирменный стиль нужен бизнесу когда компания хочет выглядеть цельно, узнаваемо и уверенно в любой точке контакта с аудиторией. Разработка фирменного стиля и брендбука в K.KIM.',
    keywords: ['фирменный стиль', 'брендбук', 'айдентика', 'логотип', 'K.KIM'].filter(Boolean),
    alternates: { canonical: '/services/firmenniy-stil' }
  }
}

const FirmenniyStilPage: FC = () => {
  const serviceData = getServiceData('firmenniy-stil')

  if (!serviceData) {
    return null
  }

  const rootClassName = classNames(styles.root)

  return (
    <div
      itemScope
      itemType="https://schema.org/WebPage"
    >
      <meta itemProp="name" content={serviceData?.title ?? 'Фирменный стиль и брендбук'} />
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
            <meta itemProp="name" content="Фирменный стиль и брендбук" />
            <meta itemProp="item" content={PAGE_URL} />
          </li>
        </ol>
      </nav>

      <div className="visually-hidden" itemProp="mainEntity" itemScope itemType="https://schema.org/Service">
        <meta itemProp="name" content="Фирменный стиль и брендбук от K.KIM" />
        <meta
          itemProp="description"
          content={serviceData?.description ?? 'Разработка фирменного стиля и брендбука'}
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

      <main className={rootClassName}>
        <IntroWorkUs
          className={styles.introBlock}
          title="Фирменный стиль и брендбук от K.KIM"
          text=""
          highlightedText=""
          titleClassName={styles.introTitleSmall}
          buttons={(
            <div className={styles.introButtonsWrap}>
              <PricingModalButton
                modalKey="дизайн"
                maxWidth="320px"
                className={styles.introHeroButton}
              >
                Заказать разработку
              </PricingModalButton>
            </div>
          )}
        />

        <StandartText
          marginBottom
          marginTop
          texts={[
            'Фирменный стиль нужен бизнесу когда компания хочет выглядеть цельно, узнаваемо и уверенно в любой точке контакта с аудиторией. В K.KIM разработка фирменного стиля начинается не с красивых референсов, а с понимания задачи: кто ваш клиент, как устроен рынок, чем вы отличаетесь от конкурентов и какой образ должен закрепиться в памяти. Такой подход помогает собрать визуальную систему, которая работает не только в презентации, но и в реальной коммуникации. Если у вас уже есть сайт, мы учитываем его структуру и подачу, чтобы новый визуальный язык не спорил с действующей средой.'
          ]}
        />

        <StandartText
          marginBottom
          marginTop
          title="Зачем бизнесу нужен единый визуальный язык"
          texts={[
            'Когда у бренда нет общей системы, каждое новое оформление делается заново: одна визитка выглядит строго, другая слишком просто, рекламный макет не похож на коммерческое предложение, а цифровая среда собирается из случайных решений. В итоге компания теряет цельность и доверие. Фирменный подход решает эту проблему: логотип, цвет, шрифт, композиция, графический элемент и правила применения начинают работать вместе. За счет этого стиль становится понятным для команды, подрядчиков и клиента. Он помогает быстрее запускать новые материалы, удерживать качество на всех носителях и формировать уникальный бренд, который легко узнать там, где бизнес уже работает. Москва для нас так же привычна, как и проекты из других городов.'
          ]}
        />

        <StandartText
          marginBottom
          texts={[
            'Мы не делаем абстрактный дизайн ради визуального эффекта. Наша разработка строится вокруг бизнес-целей: продаж, позиционирования, роста узнаваемости и удобства дальнейшей работы. Если проекту нужна обновленная подача в вебе, мы заранее продумываем перенос системы в digital. Если ресурс только планируется, закладываем решения так, чтобы они были полезны и онлайн, и в офлайне. Поэтому создание визуальной платформы у нас всегда связано с практикой, а не только с эстетикой.'
          ]}
        />

        <StandartText
          marginBottom
          title="Что входит в фирменный стиль"
          texts={[
            'Состав проекта зависит от задачи, но в большинстве случаев в работу входят ключевые блоки, без которых система остается неполной:'
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
          itemsData={includedItems.map((title) => ({
            icon: <AcceptIcon />,
            title,
            description: ''
          }))}
        />

        <StandartText
          marginBottom
          texts={[
            'Мы всегда уточняем, какие носители реально нужны бизнесу сейчас, а какие можно подготовить на следующем этапе. Это экономит бюджет и делает услугу полезной, потому что клиент получает не лишние макеты, а рабочий комплект под свои задачи. Для одной ниши важнее деловой корпоративный набор, для другой - более живой образ для рекламы, digital и офлайн-коммуникации.'
          ]}
        />

        <StandartText
          marginBottom
          title="Как проходит работа над проектом"
          texts={[
            'Сначала мы изучаем нишу, аудиторию, конкурентов и текущие материалы бизнеса. Затем определяем, какой образ будет выглядеть уместно именно для вашего рынка: сдержанный, технологичный, премиальный, динамичный или более дружелюбный. После этого идет разработка концепции, где каждая деталь подчинена общей логике. Дальше мы переносим все на выбранный носитель: digital-платформу, презентации, документы, рекламные форматы, веб-баннеры, упаковку или деловую полиграфию. На этом этапе идет разработка макетов и брендбука.'
          ]}
        />

        <Why
          direction="column"
          titleJustify="center"
          titleAlign="center"
          cardsPerRow={3}
          title="В основе процесса несколько обязательных принципов:"
          showTitle={true}
          itemsData={processPrinciples.map((title) => ({
            icon: <AcceptIconBlack />,
            title,
            description: ''
          }))}
        />

        <StandartText
          marginBottom
          texts={[
            <>
              Если вам нужен не только визуальный блок, но и комплексная упаковка, можно дополнительно заказать наши услуги по{' '}
              <Link href="/services/sozdanie-saytov/">разработке сайта</Link>
              {' '}или{' '}
              <Link href="/services/tekhpodderzhka/">поддержке сайта</Link>
              . Так клиент получает не разрозненные решения, а единую систему продвижения.
            </>
          ]}
        />

        <StandartText
          marginBottom
          title="Что получает клиент"
          texts={[
            'На выходе вы получаете не просто исходники, а основу, на которой удобно разрабатывать новые материалы без постоянных переделок. Это сокращает время на согласования, упрощает постановку задач дизайнеру и помогает бренду выглядеть собранно в любой коммуникации. Особенно заметен эффект там, где у бизнеса уже есть реклама, отдел продаж, подрядчики и действующий ресурс: после внедрения брендбука все начинает выглядеть согласованно и убедительно. Это упрощает разработку новых материалов и снижает число переделок.',
            'Клиент получает результат, который можно применять в ежедневной работе:'
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
          itemsData={clientResultItems.map((title) => ({
            icon: <AcceptIcon />,
            title,
            description: ''
          }))}
        />

        <StandartText
          marginBottom
          title="Условия работы в цифрах"
          texts={[
            'Срок зависит от состава проекта и скорости согласований. Небольшой объем обычно занимает от 10 до 15 рабочих дней. Если требуется глубокая проработка, несколько направлений или расширенный брендбук, проект длится дольше. Стоимость мы считаем после брифа. Начальная цена – 30 000₽.'
          ]}
        />

        <ServicePricing
          title="Прайс"
          text="Итоговая цена зависит от объема, а финальная стоимость фиксируется после обсуждения задачи."
          badges={[{ label: 'Стоимость', value: 'от 30 000 ₽' }]}
          buttonText="Заказать разработку"
          buttonModalKey="дизайн"
        />

        <div id="cases" className={styles.casesSection}>
          <Case />
        </div>

        <Clients title="Наши клиенты" />

        <Review />

        <Faq faqData={faqData} title="Часто задаваемые вопросы" />

        <WeAre title="Кто мы и почему нам стоит доверять?" compactImage={true} />

        <div className={styles.servicesSection}>
          <Services
            title="Услуги"
            hasCost={false}
            showSubtitle
          />
        </div>

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

export default FirmenniyStilPage

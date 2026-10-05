import { getServiceData } from '@/shared/dataServices'
import styles from '../shared/servicePage.module.scss'
import classNames from 'classnames'
import { FC } from 'react'
import { IntroWorkUs } from '@/modules/introWorkUs'
import type { Metadata } from 'next'
import { StandartText } from '@/ui'
import { Why } from '@/modules/why'
import AcceptIcon from '@icons/accept.svg'
import AcceptIconBlack from '@icons/accept-black.svg'
import { Review } from '@/modules/review'
import { Faq } from '@/modules/faq'
import { SiteDevelopmentQuiz } from '@/modules/siteDevelopmentQuiz'
import { Case } from '@/modules/case'
import { Services } from '@/modules/ServicePage/services'
import { WeAre } from '@/modules/weAre'
import { PricingModalButton, ServicePricing } from '@/modules/servicePricing'
import { agencyStatsItems, cmsPlatformListItems } from '../shared/stats'
import {
  advantagesItems,
  faqData,
  packageItems,
  stagesItems
} from './data'

const PAGE_URL = 'https://kim-agency.ru/services/sozdanie-saytov/'
const organizationName = 'K.KIM'

const packageItemsText = packageItems.map((item) => `— ${item}`).join('; ')

export async function generateMetadata(): Promise<Metadata> {
  const serviceData = getServiceData('sozdanie-saytov')

  return {
    title: serviceData
      ? `${serviceData.title} — заказать в K.KIM`
      : 'Разработка сайтов K.KIM',
    description:
      'Разработка сайтов — это создание полноценного цифрового инструмента для бизнеса. KIM Agency создает современные веб-решения для продаж, масштабирования и эффективной работы в интернете.',
    keywords: ['разработка сайтов', 'создание сайта', 'сайт под ключ', 'веб-разработка', 'K.KIM'].filter(Boolean),
    alternates: { canonical: '/services/sozdanie-saytov' }
  }
}

const SozdanieSaytovPage: FC = () => {
  const serviceData = getServiceData('sozdanie-saytov')

  if (!serviceData) {
    return null
  }

  const rootClassName = classNames(styles.root)

  return (
    <div
      itemScope
      itemType="https://schema.org/WebPage"
    >
      <meta itemProp="name" content={serviceData?.title ?? 'Разработка сайтов'} />
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
            <meta itemProp="name" content="Разработка сайтов" />
            <meta itemProp="item" content={PAGE_URL} />
          </li>
        </ol>
      </nav>

      <div className="visually-hidden" itemProp="mainEntity" itemScope itemType="https://schema.org/Service">
        <meta itemProp="name" content="Разработка сайтов K.KIM" />
        <meta
          itemProp="description"
          content={serviceData?.description ?? 'Разработка сайтов для бизнеса'}
        />
        <div itemProp="provider" itemScope itemType="https://schema.org/Organization">
          <meta itemProp="name" content={organizationName} />
          <meta itemProp="url" content="https://kim-agency.ru/" />
        </div>
        <div itemProp="offers" itemScope itemType="https://schema.org/Offer">
          <meta itemProp="priceCurrency" content="RUB" />
          <meta itemProp="price" content="150000" />
          <meta itemProp="description" content="Цена начинается от 150 000 ₽" />
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
          title="Разработка сайтов K.KIM"
          text="Разработка сайтов — это не просто техническая работа, а создание полноценного цифрового инструмента для бизнеса. В KIM Agency мы создаем современные веб-решения, которые помогают компаниям продавать, масштабироваться и эффективно работать в интернете."
          highlightedText=""
          titleClassName={styles.introTitleSmall}
          buttons={(
            <div className={styles.introButtonsWrap}>
              <PricingModalButton
                modalKey="стоимость"
                maxWidth="320px"
                className={styles.introHeroButton}
              >
                Узнать стоимость
              </PricingModalButton>
            </div>
          )}
        />

        <StandartText
          marginBottom
          marginTop
          texts={[
            'Наш подход основан на комплексной аналитике: мы изучаем нишу, поведение аудитории и конкурентов. Благодаря этому каждый сайт становится не просто витриной компании, а рабочим инструментом.',
            'KIM Agency — это digital-студия, которая занимается разработкой и продвижением интернет-проектов для бизнеса в Москве, по всей России и для международных компаний. Мы помогаем предпринимателям запускать быстрый и эффективный веб-ресурс, который помогает продавать продукты и услуги.',
            'Мы рассматриваем сайт как ключевой элемент маркетинговой системы. Он должен не только красиво выглядеть, но и приносить реальный результат: привлекать целевой трафик, конвертировать посетителей в заявки, усиливать доверие к бренду.',
            'KIM Agency работает как стратегический партнер бизнеса. Мы сопровождаем проекты на всех этапах: от анализа рынка и проектирования сайта до запуска, продвижения и дальнейшего развития. Такой подход позволяет создавать не просто сайты, а полноценные digital-платформы, которые помогают компаниям укреплять позиции на рынке и масштабировать продажи.'
          ]}
        />

        <StandartText
          marginBottom
          title="Почему выбирают нас"
          texts={[
            'Мы работаем с предпринимателями, стартапами и крупными компаниями, которым нужен результат. Наша разработка всегда ориентирована на задачи клиента и развитие бизнеса.',
            'Основные преимущества сотрудничества с нами:'
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
          itemsData={advantagesItems.map((item) => ({
            icon: <AcceptIcon />,
            title: item.title,
            description: item.description ?? ''
          }))}
        />

        <StandartText
          marginBottom
          texts={[
            'Каждый проект проходит полный цикл работы: от идеи до запуска. Благодаря этому клиент получает готовый инструмент для продаж.'
          ]}
        />

        <Why
          counter
          direction="row"
          titleJustify="start"
          titleAlign="start"
          cardsPerRow={3}
          title="Наши результаты в цифрах"
          itemsData={agencyStatsItems}
        />

        <StandartText
          marginBottom
          title="CMS и платформы разработки"
          texts={[
            'В зависимости от целей бизнеса мы используем разные платформы и технологии. Это позволяет создавать проекты любой сложности.'
          ]}
          listTitle="Основные решения:"
          listItems={cmsPlatformListItems}
          footerTexts={[
            'Мы подбираем платформу исходя из специфики проекта, бюджета и планов по развитию интернет-ресурса.'
          ]}
        />

        <StandartText
          marginBottom
          title="Этапы разработки сайта"
          texts={[
            'Создание качественного веб-проекта невозможно без системного подхода. Вот несколько ключевых этапов:'
          ]}
        />

        <Why
          direction="column"
          titleJustify="center"
          titleAlign="center"
          cardsPerRow={3}
          title=""
          showTitle={false}
          itemsData={stagesItems.map((item) => ({
            icon: <AcceptIconBlack />,
            title: item.title,
            description: item.description
          }))}
        />

        <StandartText
          marginBottom
          texts={[
            'Такой подход позволяет быстро запустить рабочий продукт и избежать ошибок в будущем.'
          ]}
        />

        <StandartText
          marginBottom
          title="Что входит в создание сайта"
          texts={[
            'Мы предоставляем комплексную услугу, которая включает все необходимые этапы.',
            'В стандартный пакет входят:',
            packageItemsText,
            'Благодаря этому клиент получает полностью готовый интернет-проект, который можно использовать для продвижения и продаж.'
          ]}
        />

        <ServicePricing
          title="Стоимость разработки сайта"
          badges={[{ label: 'Стоимость', value: 'от 150 000 ₽' }]}
          text="Цена зависит от сложности, функционала и задач. Мы всегда обсуждаем бюджет заранее и предлагаем оптимальное решение. Точную цену можно определить после обсуждения на бесплатной консультации."
          buttonText="Узнать точную стоимость"
          buttonModalKey="стоимость"
        />

        

        <div id="cases" className={styles.casesSection}>
          <Case />
        </div>

        <StandartText
          marginBottom
          title="Видео о нас"
          texts={['добавить шоурил с работами (если получится)']}
        />

        <Review />

        <Faq faqData={faqData} title="FAQ" />

        <SiteDevelopmentQuiz className={styles.formBlock} />

        <StandartText
          marginTop
          marginBottom
          texts={[
            'Разработка сайтов — это ключевой этап цифрового развития компании. Современный ресурс должен не только красиво выглядеть, но и решать конкретные задачи бизнеса: привлекать клиентов из интернета, помогать продавать услуги и продукты, а также усиливать маркетинговые стратегии.',
            'В нашей студии мы рассматриваем разработку как комплексный процесс создания полноценного веб-проекта. Каждый сайт создается с учетом целей бизнеса, особенностей рынка и поведения пользователей. Благодаря такому подходу интернет-ресурс становится не просто страницей в сети, а полноценным инструментом для продвижения и масштабирования.',
            'Мы используем современные технологии веб-разработки и надежные платформы, которые позволяют создавать стабильные и удобные сайты. В зависимости от задач может использоваться готовый конструктор или индивидуальная разработка с уникальным функционалом.',
            'Каждый проект проходит этапы аналитики, проектирования интерфейса, программной реализации и последующего тестирования. Такой процесс позволяет создавать удобные и эффективные решения, которые помогают бизнесу привлекать клиентов из интернета и увеличивать продажи.',
            'Наша студия работает с компаниями из Москвы, регионов России и за рубежом. Независимо от географии клиента мы выстраиваем прозрачный процесс работы и помогаем запускать веб-проекты, которые соответствуют современным требованиям рынка.'
          ]}
        />
      </main>
    </div>
  )
}

export default SozdanieSaytovPage

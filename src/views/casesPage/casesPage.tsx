import { FC } from 'react'
import classNames from 'classnames'

import styles from './casesPage.module.scss'
import { CasesPageProps } from './casesPage.types'
import { Cases } from '@/modules/cases'
import NewModalContainer from '@/components/newModalContainer/newModalContainer'
import { StandartText } from '@/ui/standartText'
import { FormSecond } from '@/modules/formSecond'
import Faq from '@/modules/faq/faq'
import { Review } from '@/modules/review'
import { FormFirst } from '@/modules/formFirst'
import { Wrapper } from '@/ui/wrapper'
import HowWeWork from '@/modules/howwework/howwework'
import { Step } from '@/modules/howwework/howwework.types'
import { Why } from '@/modules/why'
import AcceptIcon from '@icons/accept.svg'
import Services from '@/modules/ServicePage/services/services'
import Tools from '@/modules/tools/tools'

const faqData = [
  {
    title: 'Какие услуги вы оказываете?',
    content: 'Мы гарантируем результат и предоставляем бесплатные доработки до достижения поставленных целей.'
  },
  {
    title: 'У меня не так много времени и ресурсов на маркетинг. Как вы сможете помочь?',
    content: 'Мы гарантируем результат и предоставляем бесплатные доработки до достижения поставленных целей.'
  },
  {
    title: 'Какой бюджет мне нужен для начала работы с вами?',
    content: 'Мы гарантируем результат и предоставляем бесплатные доработки до достижения поставленных целей.'
  },
  {
    title: 'Как вы оцениваете эффективность?',
    content: 'Мы гарантируем результат и предоставляем бесплатные доработки до достижения поставленных целей.'
  }
]

const steps = [
  {
    number: 1,
    title: 'Основатели:',
    description: <>Павел Коржуев <br /> Константин Ким</>
  },
  {
    number: 2,
    title: 'Отдел маркетинга'
  },
  {
    number: 3,
    title: 'Отдел дизайна'
  },
  {
    number: 4,
    title: 'Отдел разработки'
  },
  {
    number: 5,
    title: 'Отдел тафика'
  },
  {
    number: 6,
    title: 'Отдел сопровождения'
  }
]




const CasesPage: FC<CasesPageProps> = ({
  className
}) => {
  const rootClassName = classNames(styles.root, className)

  return (
    <main className={rootClassName}>
      <NewModalContainer />
      <Wrapper>
        <Cases />
        <Why
          direction="row"
          titleJustify='center'
          titleAlign='center'
          titleTextAlign='center'
          cardsPerRow={2}
          title="Что мы предлагаем?"
          itemsData={[{
            icon: <AcceptIcon />,
            title: "Индивидуальный подход",
            description: "Разрабатываем индивидуальные стратегии и подбираем услуги адаптированные под цели и задачи клиента"
          },
          {
            icon: <AcceptIcon />,
            title: "Измеримые результаты",
            description: "Акцентируем внимание на KPI и отчетности по результатам нашей работы"
          },
          {
            icon: <AcceptIcon />,
            title: "Гибкость и адаптивность",
            description: "Следим за тенденциями в маркетинге и быстро вносим изменения в наши подходы, чтобы оставаться актуальными"
          },
          {
            icon: <AcceptIcon />,
            title: "Долгосрочные отношения",
            description: "Стремимся к партнерству на основе доверия и взаимовыгодного сотрудничества"
          }]}
        />
        <Services
          title="Маркетинг"
          categoryId="marketing"
          showSubtitle={false}
          hasCost={true}
          showDescription={false}
        />
        <Services
          title="Дизайн"
          categoryId="design"
          showSubtitle={false}
          hasCost={true}
          showDescription={false}
        />
        <Services
          title="Трафик"
          categoryId="traffic"
          showSubtitle={false}
          hasCost={true}
          showDescription={false}
        />
        <Services
          title="Разработка"
          categoryId="development"
          showSubtitle={false}
          hasCost={true}
          showDescription={false}
        />
        <StandartText
          title="Как мы работаем?"
          texts={[
            'Мы создаем рекламные кампании, погружаясь в ваш бизнес. ',
            'Наша задача — понять ваши цели и особенности. ',
            'Работа строится на интерактивном взаимодействии с клиентом. Сначала мы анализируем ваш бизнес и проверяем текущие маркетинговые активности. Вместе с вами определяем цели и задачи. На этом этапе вы активно участвуете: предлагаете идеи, вносите коррективы. ',
            'Мы разрабатываем стратегию и обсуждаем её с вами на каждом этапе. Можно вносить правки и задавать вопросы. Все этапы работы прозрачны. Мы тестируем разные подходы и делимся результатами в отчетах. ',
            'Наши клиенты могут ознакомиться с результатами в портфолио с примерами успешных кампаний. В каждом кейсе мы показываем, как наши стратегии помогают бизнесу расти и развиваться.'
          ]}
          marginBottom
        />
        <FormFirst />
        <Tools
          title="Работаем, используя надежные платформы и инструменты"
        />
        <HowWeWork
          title="Над проектом работает несколько отделов"
          steps={steps as Step[]}
          hasTopPadding={true}
          hasBottomPadding={true}
        />
        <Faq faqData={faqData} />
        <Review />
        <FormSecond />
        <StandartText
          texts={[
            'На этой странице представлены кейсы K.KIM — маркетинговой студии, которая помогает бизнесу расти с помощью эффективных рекламных стратегий. В нашем портфолио вы найдете примеры работ, которые показывают, как наши решения помогают клиентам достичь их целей.',
            'Каждый кейс — это результат анализа, индивидуального подхода и использования проверенных технологий. Мы глубоко изучаем бизнес клиента и предлагаем решения, которые дают результат. В наших кейсах — разработка сайтов, контент-маркетинг, SEO, таргет и другие инструменты, которые помогают привлекать клиентов и увеличивать конверсии.',
            'Изучите наше портфолио, чтобы увидеть примеры успешных проектов и понять, как мы работаем. '
          ]}
        />
      </Wrapper>
    </main>
  )
}

export default CasesPage

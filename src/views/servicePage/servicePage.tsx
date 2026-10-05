import { FC } from 'react'
import { StandartText, Wrapper } from '@/ui'
import classNames from 'classnames'

import styles from './servicePage.module.scss'
import { ServicePageProps } from './servicePage.types'
import { FormFirst } from '@/modules/formFirst'
import { Branch } from '@/modules/branch'
import { Why } from '@/modules/why'
import { RedBoxWork } from '@/modules/redBoxWork'
import { Case } from '@/modules/case'
import { Review } from '@/modules/review'
import { FormSecond } from '@/modules/formSecond'
import { Favour } from '@/components/favour'
import { Introduce } from '@/components/introduce'
import { Services } from '@/modules/ServicePage/services'

import FlowerDetailIcon from '@icons/flower__detail.svg'
import CheckIcon from '@icons/check.svg'
import DiagramIcon from '@icons/diagramma.svg'
import AcceptIcon from '@icons/accept.svg'

const ServicePage: FC<ServicePageProps> = ({
  className
}) => {
  const rootClassName = classNames(styles.root, className)

  return (
    <main className={rootClassName}>
      <Wrapper>
        <Introduce title={<>Услуги комплексного интернет-маркетинга и&nbsp;системного интегратора</>}
          titleTag="h1"
          titleVariant="medium"
          hasTypingSpan={false}
          hasButton={false}
        />
        <Favour
          itemsData={[{ title: 'Разработаем сайт,', text: 'с анимациями и привлекательным дизайном', linkText: '', linkColor: 'var(--color-black)', backgroundColor: 'var(--color-grey)', textColor: 'var(--color-black)', imageSrc: '/images/spiral.png' },
          { title: 'Продумаем присутствие', text: 'вашей компании в интернете', linkText: '', linkColor: 'var(--color-white-default)', backgroundColor: 'var(--color-black)', textColor: 'var(--color-white-default)', imageSrc: '/images/flower.png' },
          { title: 'Обеспечим поток клиентов', text: '', linkText: '', linkColor: 'var(--color-black)', backgroundColor: 'var(--color-grey-light)', textColor: 'var(--color-black)', imageSrc: '/images/sheeps.png' },
          { title: 'Внедрим и поддержим CRM систему', text: '', linkText: '', linkColor: 'var(--color-black)', backgroundColor: 'var(--color-red-accent)', textColor: 'var(--color-white-default)', imageSrc: '/images/star.png' },
          ]}
        />
        <Why
          direction="column"
          titleJustify='start'
          titleAlign='start'
          cardsPerRow={3}
          itemsData={[{
            icon: <FlowerDetailIcon />,
            title: "Комплексный подход",
            description: "Предоставляем услуги интернет маркетинга: от анализа рынка до дизайна и разработки сайта. Все для быстрого достижения ваших бизнес целей"
          },
          {
            icon: <DiagramIcon />,
            title: "Прозрачность и отчетность",
            description: "Предоставляем услуги интернет маркетинга: от анализа рынка до дизайна и разработки сайта. Все для быстрого достижения ваших бизнес целей"
          },
          {
            icon: <CheckIcon />,
            title: "Устойчивые результаты",
            description: "Мы сосредоточены на создании стратегий, которые увеличат вашу прибыль и узнаваемость бренда в интернете."
          }]}
        />
        <Services
          hasCost={true}
          showDescription={false}
        />
        <FormFirst />
        <Branch
          branchData={[{
            title: 'Малый и средний бизнес',
            backgroundColor: '#18181B',
            textColor: '#FFFFFF',
            linkText: '',
            linkColor: '',
          },
          {
            title: 'Корпоративные клиенты',
            backgroundColor: '#F9F9F9',
            textColor: '#18181B',
            linkText: '',
            linkColor: '',
          },
          {
            title: 'Стартапы и новые компании',
            backgroundColor: '#CB172C',
            textColor: '#FFFFFF',
            linkText: '',
            linkColor: '',
          }
          ]}
        />
        <Why
          direction="row"
          titleJustify='center'
          titleAlign='center'
          cardsPerRow={2}
          title="Почему нас выбирают?"
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
        <RedBoxWork />
        <Case />
        <Review />
        <FormSecond />
        <StandartText
          texts={[
            'KIM Agency — это агентство, которое работает в Москве и специализируется на предоставлении digital-решений и услуг для бизнеса.',
            'Наши услуги предлагают решение задач бизнеса с помощью комплексного подхода в сфере интернет-маркетинга и внедрения ИТ-решений. Как системный интегратор, мы обеспечиваем внедрение всех цифровых процессов, оптимизируя их для достижения максимальной эффективности. Наши специалисты разрабатывают стратегические кампании, которые охватывают SEO, контекстную рекламу, SMM, таргет и контент-маркетинг.',
            'Благодаря системному подходу и опыту, мы гарантируем стабильную работу всех внедрённых решений и их соответствие бизнес-целям клиента.'
          ]}
        />
      </Wrapper>
    </main>
  )
}

export default ServicePage

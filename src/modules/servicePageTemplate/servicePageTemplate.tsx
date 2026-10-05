import { FC } from 'react'
import classNames from 'classnames'

import styles from './servicePageTemplate.module.scss'
import { ServicePageTemplateProps } from './servicePageTemplate.types'
import { Quiz } from '../quiz'
import { FormSecond } from '../formSecond'
import { StandartText } from '@/ui/standartText'
import { Case } from '../case'
import { Clients } from '../clients'
const ServicePageTemplate: FC<ServicePageTemplateProps> = ({
  className
}) => {
  const rootClassName = classNames(styles.root, className)

  return (
    <div className={rootClassName}>
      <Clients />
      <Case />
      <Quiz />
      <FormSecond anchorId="form" />
      <StandartText
        texts={[
          'KIM Agency — это агентство, которое работает в Москве и специализируется на предоставлении digital-решений и услуг для бизнеса.',
          'Наши услуги предлагают решение задач бизнеса с помощью комплексного подхода в сфере интернет-маркетинга и внедрения ИТ-решений. Как системный интегратор, мы обеспечиваем внедрение всех цифровых процессов, оптимизируя их для достижения максимальной эффективности. Наши специалисты разрабатывают стратегические кампании, которые охватывают SEO, контекстную рекламу, SMM, таргет и контент-маркетинг.',
          'Благодаря системному подходу и опыту, мы гарантируем стабильную работу всех внедрённых решений и их соответствие бизнес-целям клиента.'
        ]}
      />
    </div>
  )
}

export default ServicePageTemplate

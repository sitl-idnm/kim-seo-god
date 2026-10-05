import { FC } from 'react'
import { StandartText, Wrapper } from '@/ui'
import classNames from 'classnames'

import styles from './home.module.scss'
import { HomeProps } from './home.types'

import { Favour, Introduce } from '@/components'
import { FormSecond } from '@/modules/formSecond'
import { Case } from '@/modules/case'
import NewModalContainer from '../../components/newModalContainer/newModalContainer'
import { RedBoxWork } from '@/modules/redBoxWork'
import Faq from '@/modules/faq/faq'
import Clients from '@/modules/clients/clients'
import Why from '@/modules/why/why'
import HowWeWork from '@/modules/howwework/howwework'
import Quiz from '@/modules/quiz/quiz'
import Branch from '@/modules/branch/branch'
import Review from '@/modules/review/review'
import { BlogsMain } from '@/modules/blogsMain'
import { BlackBoxLink } from '@/modules/blackBoxLink'
import { Services } from '@/modules/ServicePage/services'

const faqData = [
  {
    title: 'Как понять, какие маркетинговые стратегии мне нужны?',
    content: 'KIM Agency предлагает комплекс услуг: от анализа рынка и создания performance-кампаний до разработки цифровых продуктов и продвижения бренда в интернете. Мы работаем над каждым проектом индивидуально, подбирая оптимальные стратегии для достижения максимальных результатов.'
  },
  {
    title: 'Чем ваше агентство отличается от других?',
    content: 'KIM Agency предлагает комплекс услуг: от анализа рынка и создания performance-кампаний до разработки цифровых продуктов и продвижения бренда в интернете. Мы работаем над каждым проектом индивидуально, подбирая оптимальные стратегии для достижения максимальных результатов.'
  },
  {
    title: 'Можно ли работать с вами на разовой основе?',
    content: 'KIM Agency предлагает комплекс услуг: от анализа рынка и создания performance-кампаний до разработки цифровых продуктов и продвижения бренда в интернете. Мы работаем над каждым проектом индивидуально, подбирая оптимальные стратегии для достижения максимальных результатов.'
  }
]

const Home: FC<HomeProps> = ({ className }) => {
  const rootClassName = classNames(styles.root, className)

  return (
    <main className={rootClassName}>
      <NewModalContainer />
      <Wrapper>
        <Introduce
          title={<>Агентство комплексного<br /></>}
          titleTag="h1"
          titleVariant="large"
          hasTypingSpan={true}
          wordsArray={['интернет-маркетинга', 'интернет-маркетинга']}
          typingInterval={1500}
          hasButton={true}
          buttonText="Получить консультацию"
          buttonPosition="center"
        />
        <Favour />
        <Services
          hasCost={false}
          showDescription={true}
        />
        <HowWeWork />
        <Branch />
        <RedBoxWork />
        <Case />
        <Why
          titleJustify='start'
          titleAlign='start'
        />
        <BlogsMain />
        <BlackBoxLink />
        <Clients />
        <Quiz />
        <Faq faqData={faqData} />
        <Review />
        <FormSecond />
        <StandartText
          texts={[
            'KIM Agency – это агентство интернет маркетинга в Москве, которое специализируется на предоставлении digital-решений для вашего бизнеса. Мы предлагаем широкий спектр маркетинговых и цифровых услуг, которые помогут вам достичь новых высот в онлайн-пространстве. Наша команда профессионалов занимается разработкой и реализацией эффективных стратегий для увеличения продаж и укрепления позиций вашего бизнеса в сфере digital.',
            'KIM Agency предлагает комплекс услуг: от анализа рынка и создания performance-кампаний до разработки цифровых продуктов и продвижения бренда в интернете. Мы работаем над каждым проектом индивидуально, подбирая оптимальные стратегии для достижения максимальных результатов.',
            'Наше агентство интернет маркетинга успешно реализует проекты по всей России, предлагая нашим клиентам лучшие решения для развития бизнеса.',
            'KIM Agency – ваш надежный партнер в мире цифрового маркетинга и гарант высокого результата.'
          ]}
        />
      </Wrapper>
      {/* <DrawerMenu /> */}
    </main>
  )
}

export default Home

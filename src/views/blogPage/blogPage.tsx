import { FC } from 'react'
import classNames from 'classnames'

import styles from './blogPage.module.scss'
import { BlogPageProps } from './blogPage.types'
import { Introduce } from '@/components/introduce'

const BlogPage: FC<BlogPageProps> = ({
  className
}) => {
  const rootClassName = classNames(styles.root, className)

  return (
    <main className={rootClassName}>
      <Introduce
        title={<>Блог об интернет-маркетинге агентства K.KIM</>}
        titleTag="h1"
        titleVariant="large"
        hasTypingSpan={false}
        description="В нашем блоге мы публикуем актуальные статьи по разработке сайтов, интернет-маркетингу и рекламе, анализируем кейсы компаний и раскрываем секреты успешного ведения бизнеса.<br>
Каждая статья наполнена полезной информацией и советами, которые помогут продвижению вашего бизнеса и привлечению новых клиентов."
        descriptionAlign="left"
        hasButton={true}
        buttonText="Оставить заявку"
        buttonPosition="left"
        margin="none"
      />
    </main>
  )
}

export default BlogPage

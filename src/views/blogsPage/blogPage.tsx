import { FC } from 'react'
import classNames from 'classnames'

import styles from './blogPage.module.scss'
import { BlogPageProps } from './blogPage.types'
import { Blogs } from '@/modules/blogs'

const BlogPage: FC<BlogPageProps> = ({
  className
}) => {
  const rootClassName = classNames(styles.root, className)

  return (
    <main className={rootClassName}>
      <Blogs />
    </main>
  )
}

export default BlogPage

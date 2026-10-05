import { FC } from 'react'
import classNames from 'classnames'

import styles from './blogsMain.module.scss'
import { BlogsMainProps } from './blogsMain.types'
import Link from 'next/link'
import Blogs from '../blogs/blogs'

const BlogsMain: FC<BlogsMainProps> = ({
  className
}) => {
  const rootClassName = classNames(styles.root, className)

  return (
    <div className={rootClassName}>
      <div className={styles.blogHeader}>
        <h2 className={styles.blogTitle}>Блог</h2>
        <Link href="/blogs" className={styles.blogLink}>Смотреть все</Link>
      </div>
      <div className={styles.blogList}>
        <Blogs count={3} />
      </div>
    </div>
  )
}

export default BlogsMain

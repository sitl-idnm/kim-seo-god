import { FC } from 'react'
import styles from './blogs.module.scss'
import { BlogsProps } from './blogs.types'

import blogsData from '@/shared/dataBlogs/blogs.json'
import { BlogsData, BlogData } from '@/shared/types/blogs'
import Link from 'next/link'

const Blogs: FC<BlogsProps> = ({
  count,
  excludeSlug
}) => {

  const { blogs } = blogsData as BlogsData

  const blogsList = [...blogs]
    .filter((blog) => blog.slug !== excludeSlug)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  const renderedBlogs = count ? blogsList.slice(0, count) : blogsList

  return (
    <div className={styles.blogList}>
      {renderedBlogs.map((blog: BlogData) => (
        <div key={blog.id} className={styles.blogItem}>
          <Link
            href={`/blogs/${blog.slug}`}
            className={styles.blogLink}
          >
            <h2 className={styles.blogTitle}>{blog.title}</h2>
            {
              !count && <p className={styles.blogDescription}>{blog.description}</p>
            }
            {blog.author && <p className={styles.blogAuthor}>Автор: {blog.author}</p>}
            <div className={styles.blogFooter}>
              <p className={styles.blogDate}>{blog.date}</p>
              <span className={styles.blogMore}>Подробнее</span>
            </div>
          </Link>
        </div>
      ))}
    </div>
  )
}

export default Blogs

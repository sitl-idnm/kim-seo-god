import { FC, ReactNode } from 'react'
import Image from 'next/image'

import { FormFirst } from '@/modules/formFirst'
import { Blogs } from '@/modules/blogs'
import { BlogArticleEngagement } from './BlogArticleEngagement'
import { BlogArticleShare } from './BlogArticleShare'
import styles from './blogArticle.module.scss'
import articleStyles from '@/views/blogsPage/blogPage/blogPage.module.scss'
import { BlogArticleMeta } from '@/views/blogsPage/articles/types'

const SITE_URL = 'https://kim-agency.ru'
const ORGANIZATION_NAME = 'K.KIM'

type BlogArticleLayoutProps = {
  meta: BlogArticleMeta
  slug: string
  children: ReactNode
}

const formatDate = (isoDate: string) => {
  try {
    return new Intl.DateTimeFormat('ru-RU', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    }).format(new Date(isoDate))
  } catch {
    return isoDate
  }
}

export const BlogArticleLayout: FC<BlogArticleLayoutProps> = ({ meta, slug, children }) => {
  const pageUrl = `${SITE_URL}/blogs/${slug}/`
  const heroImage = meta.heroImage ?? '/images/image1_fix.png'
  const authorImage = meta.authorImage ?? '/images/konstantin.png'

  return (
    <div
      itemScope
      itemType="https://schema.org/BlogPosting"
      className={styles.page}
    >
      <meta itemProp="headline" content={meta.title} />
      <meta itemProp="description" content={meta.description} />
      <meta itemProp="datePublished" content={meta.date} />
      <meta itemProp="url" content={pageUrl} />
      <link itemProp="mainEntityOfPage" href={pageUrl} />

      <div itemProp="author" itemScope itemType="https://schema.org/Person">
        <meta itemProp="name" content={meta.author} />
      </div>

      <div itemProp="publisher" itemScope itemType="https://schema.org/Organization">
        <meta itemProp="name" content={ORGANIZATION_NAME} />
        <meta itemProp="url" content={SITE_URL} />
      </div>

      <nav
        className="visually-hidden"
        itemProp="breadcrumb"
        itemScope
        itemType="https://schema.org/BreadcrumbList"
      >
        <ol>
          <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
            <meta itemProp="position" content="1" />
            <meta itemProp="name" content="Главная" />
            <meta itemProp="item" content={`${SITE_URL}/`} />
          </li>
          <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
            <meta itemProp="position" content="2" />
            <meta itemProp="name" content="Блог" />
            <meta itemProp="item" content={`${SITE_URL}/blogs/`} />
          </li>
          <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
            <meta itemProp="position" content="3" />
            <meta itemProp="name" content={meta.title} />
            <meta itemProp="item" content={pageUrl} />
          </li>
        </ol>
      </nav>

      {meta.serviceUrl && (
        <div className="visually-hidden" itemScope itemType="https://schema.org/Service">
          <meta itemProp="name" content="Разработка сайтов" />
          <meta itemProp="url" content={meta.serviceUrl} />
          <div itemProp="provider" itemScope itemType="https://schema.org/Organization">
            <meta itemProp="name" content={ORGANIZATION_NAME} />
            <meta itemProp="url" content={SITE_URL} />
          </div>
          {meta.offerPrice && (
            <div itemProp="offers" itemScope itemType="https://schema.org/Offer">
              <meta itemProp="priceCurrency" content="RUB" />
              <meta itemProp="description" content={meta.offerDescription ?? meta.offerPrice} />
            </div>
          )}
        </div>
      )}

      <main className={articleStyles.root}>
        <article className={articleStyles.article}>
          <header className={styles.hero}>
            <div className={styles.heroImageWrap}>
              <Image
                src={heroImage}
                alt=""
                fill
                className={styles.heroImage}
                sizes="(max-width: 768px) 100vw, 1312px"
                priority
              />
            </div>

            <div className={styles.heroContent}>
              <h1 className={styles.heroTitle} itemProp="headline">
                {meta.title}
              </h1>

              <div className={styles.authorCard}>
                <div className={styles.authorPhoto}>
                  <Image
                    src={authorImage}
                    alt={meta.author}
                    width={56}
                    height={56}
                    className={styles.authorPhotoImg}
                  />
                </div>
                <div>
                  <p className={styles.authorName}>{meta.author}</p>
                  <p className={styles.authorRole}>{meta.authorRole}</p>
                </div>
              </div>

              <div className={styles.metaRow}>
                <time className={styles.metaItem} dateTime={meta.date}>
                  Дата публикации: {formatDate(meta.date)}
                </time>
                <span className={styles.metaItem}>Время прочтения: {meta.readingMinutes} минут</span>
              </div>
            </div>
          </header>

          <div className={styles.body}>{children}</div>

          <section className={styles.leadBlock} aria-label="Заказ услуги">
            <h2 className={styles.leadBlockTitle}>{meta.leadTitle ?? 'Закажите услугу прямо сейчас!'}</h2>
            {meta.serviceTerm && (
              <p className={styles.leadBlockTerm}>Срок оказания услуги: {meta.serviceTerm}</p>
            )}

            <BlogArticleEngagement slug={slug} articleTitle={meta.title} />

            <div id="blog-order-form" className={styles.orderForm}>
              <FormFirst
                title=""
                paragraph=""
                submitValue="Отправить"
              />
            </div>
          </section>

          <BlogArticleShare title={meta.title} className={styles.shareSection} />

          <section className={styles.readMore} aria-label="Читать ещё">
            <h2 className={styles.readMoreTitle}>Читать ещё</h2>
            <Blogs count={2} excludeSlug={slug} />
          </section>
        </article>
      </main>
    </div>
  )
}

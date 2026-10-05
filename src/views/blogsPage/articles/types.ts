import { FC } from 'react'

export type BlogArticleMeta = {
  slug: string
  title: string
  description: string
  date: string
  readingMinutes: number
  author: string
  authorRole: string
  heroImage?: string
  authorImage?: string
  serviceUrl?: string
  serviceLinkText?: string
  offerPrice?: string
  offerDescription?: string
  leadTitle?: string
  serviceTerm?: string
}

export type BlogArticleEntry = {
  meta: BlogArticleMeta
  Content: FC
}

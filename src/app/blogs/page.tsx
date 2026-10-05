import type { Metadata } from 'next'
import BlogPage from '@views/blogsPage/blogPage'

export const metadata: Metadata = {
  title: 'Блог о маркетинге — K.KIM Agency',
  description: 'Статьи о digital-маркетинге, SEO, SMM и разработке сайтов от агентства K.KIM. Полезные материалы для бизнеса.'
}

export default function Home() {
  return <BlogPage />
}

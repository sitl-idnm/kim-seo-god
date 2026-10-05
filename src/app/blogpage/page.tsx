import BlogPage from '@views/blogsPage/blogPage'
import type { Metadata } from 'next'


export const metadata: Metadata = {
  title: 'Блог — K.KIM Agency',
  description: 'Полезные статьи о маркетинге, SEO, SMM и разработке от агентства K.KIM.'
}

export default function Home() {
	return <BlogPage />
}

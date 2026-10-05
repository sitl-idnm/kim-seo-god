import BlogPage from '@views/blogsPage/blogPage/blogPage'
import type { Metadata } from 'next'
import blogsData from '@/shared/dataBlogs/blogs.json'

type Props = { params: Promise<{ blog: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { blog: slug } = await params
  const post = (blogsData.blogs as { slug: string; title: string; description: string }[]).find(
    (b) => b.slug === slug
  )
  if (!post) {
    return {
      title: 'Блог — K.KIM Agency',
      description: 'Полезные статьи о маркетинге, SEO, SMM и разработке от агентства K.KIM.'
    }
  }
  return {
    title: post.title,
    description: post.description || `Статья: ${post.title}. Блог агентства интернет-маркетинга K.KIM.`
  }
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars -- params required by Next.js route
export default async function BlogPostPage({ params }: Props) {
  const { blog: slug } = await params
  return <BlogPage blogSlug={slug} />
}

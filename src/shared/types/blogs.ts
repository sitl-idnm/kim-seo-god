export type BlogData = {
  id: string
  slug: string
  title: string
  description: string
  author?: string
  date: string
}

export type BlogsData = {
  blogs: BlogData[]
}

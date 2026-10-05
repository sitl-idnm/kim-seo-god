export interface SeoPageProps {
  params: { slug: string }
  searchParams: { [key: string]: string | string[] | undefined }
}
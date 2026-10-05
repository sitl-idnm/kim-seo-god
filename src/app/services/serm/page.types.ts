export interface SermPageProps {
  params: { slug: string }
  searchParams: { [key: string]: string | string[] | undefined }
}
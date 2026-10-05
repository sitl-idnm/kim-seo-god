import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import { dirname } from 'path'
import inquirer from 'inquirer'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const questions = [
  {
    type: 'input',
    name: 'slug',
    message: 'Введите slug услуги (например, seo-optimization):',
    validate: (input) => {
      if (!input) return 'Slug не может быть пустым'
      if (!/^[a-z0-9-]+$/.test(input)) return 'Slug может содержать только строчные буквы, цифры и дефисы'
      return true
    }
  },
  {
    type: 'input',
    name: 'title',
    message: 'Введите название услуги:',
    validate: (input) => input.length > 0 || 'Название не может быть пустым'
  },
  {
    type: 'input',
    name: 'description',
    message: 'Введите описание услуги:',
    validate: (input) => input.length > 0 || 'Описание не может быть пустым'
  },
  {
    type: 'input',
    name: 'price',
    message: 'Введите стоимость услуги:',
    validate: (input) => input.length > 0 || 'Стоимость не может быть пустой'
  },
  {
    type: 'confirm',
    name: 'hasFeatures',
    message: 'Добавить список преимуществ?',
    default: true
  },
  {
    type: 'confirm',
    name: 'hasTechnologies',
    message: 'Добавить список технологий?',
    default: true
  }
]

const generateServiceData = (answers) => {
  let features = []
  let technologies = []

  if (answers.hasFeatures) {
    features = [
      'Преимущество 1',
      'Преимущество 2',
      'Преимущество 3'
    ]
  }

  if (answers.hasTechnologies) {
    technologies = [
      'Технология 1',
      'Технология 2',
      'Технология 3'
    ]
  }

  return `export interface ServiceData {
  slug: string
  title: string
  description: string
  price: string
  features?: string[]
  technologies?: string[]
}

export const ${answers.slug.replace(/-/g, '')}Data: ServiceData = {
  slug: '${answers.slug}',
  title: '${answers.title}',
  description: '${answers.description}',
  price: '${answers.price}'${features.length ? `,
  features: ${JSON.stringify(features, null, 2)}` : ''}${technologies.length ? `,
  technologies: ${JSON.stringify(technologies, null, 2)}` : ''}
}`
}

const generatePageContent = (answers) => {
  const componentName = answers.slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join('')
  return `

import { getServiceData } from '@/shared/dataServices'
import styles from './page.module.scss'
import { ServicePageTemplate } from '@/modules/servicePageTemplate'
import classNames from 'classnames'
import { FC } from 'react'
import { IntroWorkUs } from '@/modules/introWorkUs'
import { ${componentName}PageProps } from './page.types'
import type { Metadata } from 'next'

export async function generateMetadata(): Promise<Metadata> {
  const serviceData = getServiceData('${answers.slug}')

  const customMetadata = {
    // Здесь можно переопределить метаданные вручную
    // title: 'Кастомный заголовок',
    // description: 'Кастомное описание',
    // keywords: ['кастомные', 'ключевые', 'слова']
  }

  return {
    title: customMetadata.title || serviceData?.title || '${answers.title}',
    description: customMetadata.description || serviceData?.description || '${answers.description}',
    keywords: customMetadata.keywords || [serviceData?.title?.toLowerCase() || '${answers.title.toLowerCase()}', 'услуги', 'разработка'].filter(Boolean)
  }
}

const ${componentName}Page: FC<${componentName}PageProps> = () => {
  const serviceData = getServiceData('${answers.slug}')

  if (!serviceData) {
    return null
  }

  const rootClassName = classNames(styles.root)

  return (
    <main className={rootClassName}>
      <IntroWorkUs
        title={serviceData?.title}
        text={serviceData?.description}
        highlightedText=""
      />
      <ServicePageTemplate />
    </main>
  )
}

export default ${componentName}Page`
}

const generatePageTypes = (answers) => {
  const componentName = answers.slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join('')
  return `export interface ${componentName}PageProps {
  params: { slug: string }
  searchParams: { [key: string]: string | string[] | undefined }
}`
}

const generatePageStyles = () => {
  return `@use '@styles/func';
@use '@styles/mixins';
@use '@styles/variables';

.root {
  max-width: 1312px;
  margin: 0 auto;
}`
}

const createServiceFiles = async (answers) => {
  // Путь для файлов услуги
  const serviceDir = path.join(process.cwd(), 'src', 'app', 'services', answers.slug)
  const dataFilePath = path.join(serviceDir, 'data.ts')
  const pageFilePath = path.join(serviceDir, 'page.tsx')
  const pageTypesFilePath = path.join(serviceDir, 'page.types.ts')
  const styleFilePath = path.join(serviceDir, 'page.module.scss')

  // Создаем директорию услуги
  if (!fs.existsSync(serviceDir)) {
    fs.mkdirSync(serviceDir, { recursive: true })
  }

  // Создаем файл с данными
  fs.writeFileSync(dataFilePath, generateServiceData(answers))

  // Создаем файл страницы
  fs.writeFileSync(pageFilePath, generatePageContent(answers))

  // Создаем файл типов
  fs.writeFileSync(pageTypesFilePath, generatePageTypes(answers))

  // Создаем файл стилей
  fs.writeFileSync(styleFilePath, generatePageStyles())

  // Обновляем dataServices/index.ts
  const servicesIndexPath = path.join(process.cwd(), 'src', 'shared', 'dataServices', 'index.ts')
  const dir = path.dirname(servicesIndexPath)

  // Создаем директорию dataServices, если её нет
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true })
  }

  let servicesIndexContent
  if (!fs.existsSync(servicesIndexPath)) {
    // Если файл не существует, создаем его с начальным содержимым
    servicesIndexContent = `import { ServiceData } from '@/app/services/${answers.slug}/data'
import { ${answers.slug.replace(/-/g, '')}Data } from '@/app/services/${answers.slug}/data'

export type { ServiceData }

export const servicesData: Record<string, ServiceData> = {
  '${answers.slug}': ${answers.slug.replace(/-/g, '')}Data
}

export const getServiceData = (slug: string): ServiceData | undefined => {
  return servicesData[slug]
}

export const getAllServices = (): ServiceData[] => {
  return Object.values(servicesData)
}

export const getAllServiceSlugs = (): string[] => {
  return Object.keys(servicesData)
}`
  } else {
    // Если файл существует, добавляем новую услугу
    servicesIndexContent = fs.readFileSync(servicesIndexPath, 'utf-8')

    // Добавляем импорт, если его нет
    const importLine = `import { ${answers.slug.replace(/-/g, '')}Data } from '@/app/services/${answers.slug}/data'`
    if (!servicesIndexContent.includes(importLine)) {
      const importIndex = servicesIndexContent.indexOf('import')
      const endOfImports = servicesIndexContent.indexOf('\n', importIndex)
      servicesIndexContent =
        servicesIndexContent.slice(0, endOfImports) +
        '\n' + importLine +
        servicesIndexContent.slice(endOfImports)
    }

    // Добавляем услугу в объект servicesData
    const serviceEntry = `'${answers.slug}': ${answers.slug.replace(/-/g, '')}Data`
    if (!servicesIndexContent.includes(serviceEntry)) {
      servicesIndexContent = servicesIndexContent.replace(
        /export const servicesData[^{]*{([^}]*)}/,
        (match, services) => {
          const updatedServices = services.trim()
            ? `${services.trim()},\n  ${serviceEntry}`
            : `\n  ${serviceEntry}\n`
          return `export const servicesData: Record<string, ServiceData> = {${updatedServices}}`
        }
      )
    }

    fs.writeFileSync(servicesIndexPath, servicesIndexContent)

    console.log(`✅ Услуга "${answers.title}" успешно создана!`)
    console.log(`📁 Путь: ${serviceDir}`)
    console.log('Созданные файлы:')
    console.log(`- data.ts (данные услуги)`)
    console.log(`- page.tsx (страница услуги)`)
    console.log(`- page.types.ts (типы страницы)`)
    console.log(`- page.module.scss (стили страницы)`)
  }
}

inquirer.prompt(questions).then(answers => {
  createServiceFiles(answers)
})

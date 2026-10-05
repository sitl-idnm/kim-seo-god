import type { ServiceData } from '@/app/services/smm/data'
import { sermData } from '@/app/services/serm/data'
import { seoData } from '@/app/services/seo/data'
import { webdesignData } from '@/app/services/web-design/data'
import { smmData } from '@/app/services/smm/data'
import { razrabotkaChatBotovPageData } from '@/app/services/razrabotka-chat-botov/data'
import { lidogeneraciyaData } from '@/app/services/lidogeneraciya/data'

export type { ServiceData }

// Объект со всеми услугами
export const servicesData: Record<string, ServiceData> = {
  'smm': smmData,
  'web-design': webdesignData,
  'seo': seoData,
  'serm': sermData,
  'razrabotka-chat-botov': razrabotkaChatBotovPageData,
  'lidogeneraciya': lidogeneraciyaData,
}

// Функция для получения данных конкретной услуги
export const getServiceData = (slug: string): ServiceData | undefined => {
  return servicesData[slug]
}

// Функция для получения списка всех услуг
export const getAllServices = (): ServiceData[] => {
  return Object.values(servicesData)
}

// Функция для получения списка всех slug'ов услуг
export const getAllServiceSlugs = (): string[] => {
  return Object.keys(servicesData)
}

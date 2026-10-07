export type ServiceCategory = {
  id: string
  name: string
  slug: string
  title: string
  description?: string
}

/**
 * Per-service UI-конфиг для индивидуализации страниц услуг.
 * Читается страницей услуги: задаёт акцентный цвет, вариант героя,
 * подпись-eyebrow и порядок секций. Позволяет делать страницы
 * визуально разными, сохраняя единый каркас качества и SEO-структуру.
 */
export type ServiceUiConfig = {
  /** Акцентный цвет услуги (hex). Прокидывается в CSS-переменную --accent. */
  accent: string
  /** Светлый оттенок акцента для фонов/подложек (rgba/ hex). */
  accentSoft?: string
  /** Вариант оформления героя: меняет подложку и акцент intro-блока. */
  heroVariant?: 'default' | 'split' | 'spotlight' | 'minimal' | 'bold'
  /** Короткая надпись над/перед заголовком героя (eyebrow). */
  heroEyebrow?: string
  /**
   * Порядок секций на странице. Ключи соответствуют секциям,
   * собранным в объекте страницы. Неуказанные секции не рендерятся.
   */
  order?: string[]
}

export type ServiceData = {
  id: string
  slug: string
  title: string
  description: string
  price: string
  categoryId: 'marketing' | 'design' | 'traffic' | 'development' | 'ai'
  features?: string[]
  technologies?: string[]
  /** UI-конфиг для индивидуализации страницы услуги (необязателен). */
  uiConfig?: ServiceUiConfig
}

export type ServicesData = {
  categories: ServiceCategory[]
  services: ServiceData[]
}

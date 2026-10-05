import { ReviewItemProps } from '@/components/reviewItem/reviewItem.types'

// Описание категории УСЛУГИ
export interface ReviewServiceCategory {
  id: string | number;
  name: string;
}

// Описание ТЕМАТИКИ
export interface ReviewTheme {
  id: string | number;
  name: string;
}

// Описание данных отзыва для этого модуля
export interface ReviewData extends Omit<ReviewItemProps, 'categoryIds' | 'themeIds'> { // Убираем старые и новые ID из Omit
  serviceCategoryIds: (string | number)[]; // ID категорий услуг
  themeIds: (string | number)[]; // ID тематик
}

// Пропсы основного компонента
export interface ReviewCategoriesProps {
  className?: string;
  title?: string;
  description?: string;
  serviceCategories: ReviewServiceCategory[]; // Массив категорий услуг
  themes: ReviewTheme[]; // Массив тематик
  reviews: ReviewData[];
}

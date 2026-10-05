'use client'
import { FC, useState, useMemo } from 'react'
import classNames from 'classnames'

import styles from './reviewCategories.module.scss'
import {
  ReviewCategoriesProps,
} from './reviewCategories.types'
import { ReviewItem } from '@/components/reviewItem'

const ReviewCategories: FC<ReviewCategoriesProps> = ({
  className,
  title,
  description,
  serviceCategories,
  themes,
  reviews,
}) => {
  const [selectedServiceCategoryIds, setSelectedServiceCategoryIds] = useState<
    (string | number)[]
  >([])
  const [selectedThemeIds, setSelectedThemeIds] = useState<(string | number)[]>([])

  const rootClassName = classNames(styles.root, className)

  // Обработчик клика по категории УСЛУГ
  const handleServiceCategoryClick = (categoryId: string | number) => {
    setSelectedServiceCategoryIds((prevSelected) =>
      prevSelected.includes(categoryId)
        ? prevSelected.filter((id) => id !== categoryId)
        : [...prevSelected, categoryId]
    )
  }

  // Обработчик клика по ТЕМАТИКЕ
  const handleThemeClick = (themeId: string | number) => {
    setSelectedThemeIds((prevSelected) =>
      prevSelected.includes(themeId)
        ? prevSelected.filter((id) => id !== themeId)
        : [...prevSelected, themeId]
    )
  }

  // Фильтрация отзывов
  const filteredReviews = useMemo(() => {
    return reviews.filter((review) => {
      // Проверка по категориям услуг
      const serviceMatch =
        selectedServiceCategoryIds.length === 0 ||
        review.serviceCategoryIds.some((catId) =>
          selectedServiceCategoryIds.includes(catId)
        )

      // Проверка по тематикам
      const themeMatch =
        selectedThemeIds.length === 0 ||
        review.themeIds.some((themeId) => selectedThemeIds.includes(themeId))

      return serviceMatch && themeMatch // Отзыв должен соответствовать обоим фильтрам (если они активны)
    })
  }, [reviews, selectedServiceCategoryIds, selectedThemeIds])

  return (
    <div className={rootClassName}>
      {title && <h2 className={styles.mainTitle}>{title}</h2>}

      {/* Категории УСЛУГ */}
      <div className={styles.categoriesContainer}>
        {serviceCategories.map((category) => (
          <button
            key={category.id}
            className={classNames(styles.categoryButton, {
              [styles.active]: selectedServiceCategoryIds.includes(category.id),
            })}
            onClick={() => handleServiceCategoryClick(category.id)}
          >
            {category.name}
          </button>
        ))}
      </div>

      {/* ТЕМАТИКИ */}
      <div className={styles.themesContainer}>
        {themes.map((theme) => (
          <button
            key={theme.id}
            className={classNames(styles.themeButton, {
              [styles.active]: selectedThemeIds.includes(theme.id),
            })}
            onClick={() => handleThemeClick(theme.id)}
          >
            {theme.name}
          </button>
        ))}
      </div>

      {description && <p className={styles.description}>{description}</p>}

      {/* Отзывы - возвращаем Grid */}
      <div className={styles.reviewsGrid}>
        {filteredReviews.map((review) => (
          <ReviewItem key={review.name + review.position} {...review} />
        ))}
      </div>
    </div>
  )
}

export default ReviewCategories

'use client'

import { FC, useMemo, useState, useRef, useId, useCallback, KeyboardEvent } from 'react'
import classNames from 'classnames'

import styles from './navigation.module.scss'
import { NavigationProps } from './navigation.types'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { getAllServices } from '@/shared/dataServices'
import { categories } from '@/shared/dataServices/categories'

type NavItem = {
  label: string
  href?: string
  muted?: boolean
  isServices?: boolean
}

const navItems: NavItem[] = [
  { label: 'Главная', href: '/' },
  { label: 'Услуги', href: '/services', isServices: true },
  { label: 'Кейсы', href: '/cases' },
  { label: 'О компании', href: '/company' },
  { label: 'Вакансии', href: '/vacancies' },
  { label: 'Статьи', href: '/blogs' },
  { label: 'Отзывы', href: '/reviews' },
  { label: 'Контакты', href: '/contacts' },
  { label: 'Видео о нас', muted: true },
  { label: 'Команда', muted: true },
  { label: 'Скидки', muted: true },
  { label: 'Цены', muted: true },
  { label: 'Партнерам', muted: true },
  { label: 'Клиенты', muted: true }
]

const Navigation: FC<NavigationProps> = ({
  className
}) => {
  const rootClassName = classNames(styles.root, className)
  const pathname = usePathname()

  // Управление мега-меню «Услуги» с клавиатуры и мышью (a11y)
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const servicesWrapRef = useRef<HTMLLIElement>(null)
  const dropdownId = useId()

  const openServices = useCallback(() => setIsServicesOpen(true), [])
  const closeServices = useCallback(() => setIsServicesOpen(false), [])

  // Закрытие по Escape + возврат фокуса на триггер
  const handleServicesKeyDown = useCallback((event: KeyboardEvent<HTMLLIElement>) => {
    if (event.key === 'Escape' && isServicesOpen) {
      setIsServicesOpen(false)
      const trigger = servicesWrapRef.current?.querySelector<HTMLElement>('[data-services-trigger]')
      trigger?.focus()
    }
  }, [isServicesOpen])

  // Открытие с клавиатуры стрелкой вниз (не мешает переходу по Enter)
  const handleTriggerKeyDown = useCallback((event: KeyboardEvent<HTMLAnchorElement>) => {
    if (event.key === 'ArrowDown') {
      event.preventDefault()
      setIsServicesOpen(true)
    }
  }, [])

  // Текущий slug услуги (если мы на странице услуги)
  const currentServiceSlug = useMemo(() => {
    const parts = pathname.split('/').filter(Boolean)
    return parts[0] === 'services' && parts[1] ? parts[1] : ''
  }, [pathname])

  // Группируем услуги по категориям в порядке categories.ts
  const servicesByCategory = useMemo(() => {
    const services = getAllServices()
    return categories
      .map((category) => ({
        category,
        services: services.filter((service) => service.categoryId === category.id)
      }))
      .filter((group) => group.services.length > 0)
  }, [])

  const isActive = (href?: string, isServices?: boolean) => {
    if (!href) return false
    if (href === '/') return pathname === '/'
    if (isServices) return pathname === '/services' || pathname.startsWith('/services/')
    return pathname === href || pathname.startsWith(`${href}/`)
  }

  return (
    <div className={rootClassName}>
      <nav className={styles.navigation}>
        <ul className={styles.navigation__list}>
          {navItems.map((item) => {
            const active = isActive(item.href, item.isServices)
            const itemClassName = classNames(
              styles.navigation__item,
              item.muted && styles.navigation__item_muted,
              item.isServices && styles.navigation__servicesTrigger,
              active && !item.muted && styles.navigation__item_active
            )

            if (item.isServices) {
              return (
                <li
                  key={item.label}
                  ref={servicesWrapRef}
                  className={classNames(
                    styles.navigation__servicesWrap,
                    isServicesOpen && styles.navigation__servicesWrap_open
                  )}
                  onMouseEnter={openServices}
                  onMouseLeave={closeServices}
                  onKeyDown={handleServicesKeyDown}
                >
                  <Link
                    href={item.href || '/services'}
                    className={itemClassName}
                    aria-current={active ? 'page' : undefined}
                    aria-haspopup="true"
                    aria-expanded={isServicesOpen}
                    aria-controls={dropdownId}
                    data-services-trigger
                    onKeyDown={handleTriggerKeyDown}
                    onFocus={openServices}
                  >
                    {item.label}
                  </Link>
                  <div className={styles.navigation__dropdown} id={dropdownId}>
                    <div className={styles.navigation__mega}>
                      {servicesByCategory.map(({ category, services }) => (
                        <div key={category.id} className={styles.navigation__megaColumn}>
                          <p className={styles.navigation__megaTitle}>{category.name}</p>
                          <ul className={styles.navigation__dropdownList}>
                            {services.map((service) => {
                              const serviceActive = currentServiceSlug === service.slug
                              return (
                                <li key={service.slug}>
                                  <Link
                                    href={`/services/${service.slug}`}
                                    className={classNames(
                                      styles.navigation__dropdownItem,
                                      serviceActive && styles.navigation__dropdownItem_active
                                    )}
                                    aria-current={serviceActive ? 'page' : undefined}
                                  >
                                    {service.title}
                                  </Link>
                                </li>
                              )
                            })}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                </li>
              )
            }

            return (
              <li key={item.label}>
                {item.href ? (
                  <Link
                    href={item.href}
                    className={itemClassName}
                    aria-current={active ? 'page' : undefined}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <span className={itemClassName}>{item.label}</span>
                )}
              </li>
            )
          })}
        </ul>
      </nav>
    </div>
  )
}

export default Navigation

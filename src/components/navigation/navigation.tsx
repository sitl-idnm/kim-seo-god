import { FC } from 'react'
import classNames from 'classnames'

import styles from './navigation.module.scss'
import { NavigationProps } from './navigation.types'
import Link from 'next/link'
import { getAllServices } from '@/shared/dataServices'

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
  { label: 'Статьи', href: '/blogpage' },
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
  const services = getAllServices()

  return (
    <div className={rootClassName}>
      <nav className={styles.navigation}>
        <ul className={styles.navigation__list}>
          {navItems.map((item) => {
            const itemClassName = classNames(
              styles.navigation__item,
              item.muted && styles.navigation__item_muted,
              item.isServices && styles.navigation__servicesTrigger
            )

            if (item.isServices) {
              return (
                <li
                  key={item.label}
                  className={styles.navigation__servicesWrap}
                >
                  <Link href={item.href || '/services'} className={itemClassName}>{item.label}</Link>
                  <div className={styles.navigation__dropdown}>
                    <ul className={styles.navigation__dropdownList}>
                      {services.map((service) => (
                        <li key={service.slug}>
                          <Link href={`/services/${service.slug}`} className={styles.navigation__dropdownItem}>
                            {service.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              )
            }

            return (
              <li key={item.label}>
                {item.href ? (
                  <Link href={item.href} className={itemClassName}>{item.label}</Link>
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

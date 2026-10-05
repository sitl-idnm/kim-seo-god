'use client'

import { FC, useState, useEffect } from 'react'
import classNames from 'classnames'

import styles from './services.module.scss'
import { ServicesProps } from './services.types'
import { getAllServices, ServiceData } from '@/shared/dataServices'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const defaultDescription = '* Наше агентство работает в формате почасовой оплаты труда. Стоимость проекта будет зависеть от количества фактически отработанных часов специалистами агентства.'

const Services: FC<ServicesProps> = ({
  className,
  hasCost = false,
  showDescription = true,
  showSubtitle = true,
  descriptionText = defaultDescription,
  categoryId,
  isTab = false,
  title = 'Услуги',
  excludeCurrentPage = false
}) => {
  const [isMobile, setIsMobile] = useState<boolean>(false)
  const [showAll, setShowAll] = useState<boolean>(false)
  const [openTabId, setOpenTabId] = useState<string | null>(null)
  const pathname = usePathname()

  useEffect(() => {
    const checkResolution = () => {
      setIsMobile(window.innerWidth <= 768)
    }

    checkResolution()
    window.addEventListener('resize', checkResolution)

    return () => {
      window.removeEventListener('resize', checkResolution)
    }
  }, [])

  const services: ServiceData[] = getAllServices()
  const pathParts = pathname.split('/').filter(Boolean)
  const currentSlug =
    pathParts[0] === 'services' && pathParts[1]
      ? pathParts[1]
      : pathParts[0] || ''

  const filteredByCategory = categoryId
    ? services.filter(service => service.categoryId === categoryId)
    : services

  const filteredServices = excludeCurrentPage
    ? filteredByCategory.filter((service) => service.slug !== currentSlug)
    : filteredByCategory

  const visibleServices = isMobile && !showAll ? filteredServices.slice(0, 6) : filteredServices

  const handleTabClick = (serviceId: string) => {
    if (isTab) {
      setOpenTabId(openTabId === serviceId ? null : serviceId)
    }
  }

  const renderService = (service: ServiceData) => {
    const isOpen = openTabId === service.id
    const serviceClassName = classNames(styles.service, {
      [styles.service_tab]: isTab,
      [styles.service_open]: isOpen
    })

    if (isTab) {
      return (
        <div key={service.slug} className={serviceClassName}>
          <div
            className={styles.service__header}
            onClick={() => handleTabClick(service.id)}
          >
            <h3 className={styles.service__content__title}>{service.title}</h3>
            <span className={styles.service__arrow} />
          </div>
          <div className={styles.service__content}>
            {showSubtitle && (
              <p className={styles.service__content__description}>{service.description}</p>
            )}
            <div className={styles.service__footer}>
              {hasCost && (
                <p className={styles.service__footer__price}>{service.price}</p>
              )}
              <div className={styles.service__footer__line} />
              <Link href={`/services/${service.slug}`} className={styles.service__footer__button}>
                Подробнее
              </Link>
            </div>
          </div>
        </div>
      )
    }

    return (
      <Link
        key={service.slug}
        href={`/services/${service.slug}`}
        className={serviceClassName}
        style={!hasCost && !showSubtitle ? { height: '273px' } : {}}
      >
        <div className={styles.service__content}>
          <h3 className={styles.service__content__title}>{service.title}</h3>
          {showSubtitle && (
            <p className={styles.service__content__description}>{service.description}</p>
          )}
        </div>
        <div className={styles.service__footer}>
          {hasCost && (
            <p className={styles.service__footer__price}>{service.price}</p>
          )}
          <div className={styles.service__footer__line} />
          <Link href={`/services/${service.slug}`} className={styles.service__footer__button}>
            Подробнее
          </Link>
        </div>
      </Link>
    )
  }

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>{title}</h2>
      <div className={classNames(styles.root, className, {
        [styles.root_tab]: isTab
      })}>
        {visibleServices.map(renderService)}
      </div>

      {isMobile && !hasCost && filteredServices.length > 6 && !showAll && (
        <div className={styles.showMoreContainer}>
          <button onClick={() => setShowAll(true)} className={styles.showMoreButton}>
            Показать еще
          </button>
        </div>
      )}

      {showDescription && (
        <p className={styles.services__description}>{descriptionText}</p>
      )}
    </div>
  )
}

export default Services

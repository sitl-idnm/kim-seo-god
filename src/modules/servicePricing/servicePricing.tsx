import { FC } from 'react'
import classNames from 'classnames'

import { Button, Heading } from '@/ui'
import { PricingModalButton } from './PricingModalButton'
import styles from './servicePricing.module.scss'
import { ServicePricingProps } from './servicePricing.types'

const defaultTitle = 'Стоимость услуги'

const ServicePricing: FC<ServicePricingProps> = ({
  className,
  title = defaultTitle,
  text,
  badges,
  buttonText,
  buttonHref,
  buttonModalKey
}) => {
  const rootClassName = classNames(styles.root, className)

  return (
    <section className={rootClassName}>
      <Heading size="md" className={styles.title}>
        {title}
      </Heading>
      {text && <p className={styles.text}>{text}</p>}

      <div className={styles.row}>
        {badges.map((badge) => (
          <div key={badge.label} className={styles.badge}>
            <p className={styles.badgeLabel}>{badge.label}</p>
            <p className={styles.badgeValue}>{badge.value}</p>
          </div>
        ))}
      </div>

      {buttonText && buttonModalKey && (
        <div className={styles.action}>
          <PricingModalButton
            modalKey={buttonModalKey}
            maxWidth="320px"
            className={styles.actionButton}
          >
            {buttonText}
          </PricingModalButton>
        </div>
      )}

      {buttonText && buttonHref && !buttonModalKey && (
        <div className={styles.action}>
          <Button
            tag="a"
            href={buttonHref}
            maxWidth="320px"
            className={styles.actionButton}
          >
            {buttonText}
          </Button>
        </div>
      )}
    </section>
  )
}

export default ServicePricing

import { ElementType } from 'react'
import Link from 'next/link'
import classNames from 'classnames'

import styles from './button.module.scss'
import { ButtonProps } from './button.types'

const defaultElement = 'button'

export default function Button<E extends ElementType = typeof defaultElement>({
  children,
  tag,
  className,
  href,
  maxWidth,
  ...props
}: ButtonProps<E>) {
  const elClassName = classNames(
    styles.root,
    className
  )

  const TagName = tag || defaultElement
  const isLink = !!(href && TagName === 'a')

  return isLink ? (
    <Link
      style={{maxWidth: maxWidth}}
      href={href}
      className={elClassName}
      data-back={children}
      data-front={children}
      {...props}
    />
  ) : (
    <TagName
      style={{maxWidth: maxWidth}}
      className={elClassName}
      data-back={children}
      data-front={children}
      {...props}
    />
  )
}

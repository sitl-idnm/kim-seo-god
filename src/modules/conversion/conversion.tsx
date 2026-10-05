'use client'

import { FC } from 'react'
import classNames from 'classnames'

import styles from './conversion.module.scss'
import { ConversionProps } from './conversion.types'
import { ConversionTitle, ConversionType } from '@/components'

const Conversion: FC<ConversionProps> = ({
  className
}) => {
  const rootClassName = classNames(styles.root, className)

  return (
    <div className={rootClassName}>
      <ConversionTitle />
      <ConversionType />
    </div>
  )
}

export default Conversion

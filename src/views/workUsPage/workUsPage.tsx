import { FC } from 'react'
import classNames from 'classnames'

import styles from './workUsPage.module.scss'
import { WorkUsPageProps } from './workUsPage.types'
import { PlusWork } from '@/modules/plusWork'
import { RedBoxWork } from '@/modules/redBoxWork'
import { FormWorkUs } from '@/modules/formWorkUs'
import { IntroWorkUs } from '@/modules/introWorkUs'
import NewModalContainer from '@/components/newModalContainer/newModalContainer'

const WorkUsPage: FC<WorkUsPageProps> = ({
  className
}) => {
  const rootClassName = classNames(styles.root, className)

  return (
    <main className={rootClassName}>
      <NewModalContainer />
      <IntroWorkUs />
      <PlusWork />
      <RedBoxWork />
      <FormWorkUs />
    </main>
  )
}

export default WorkUsPage

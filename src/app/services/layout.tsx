import { ReactNode } from 'react'

import NewModalContainer from '@/components/newModalContainer/newModalContainer'

export default function ServicesLayout({ children }: { children: ReactNode }) {
  return (
    <>
      {children}
      <NewModalContainer />
    </>
  )
}

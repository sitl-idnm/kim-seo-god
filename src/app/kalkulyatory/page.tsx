import type { Metadata } from 'next'
import { CalculatorsPageView } from '@/views/calculatorsPage'

export const metadata: Metadata = {
  title: 'Калькуляторы маркетингового агентства K.KIM',
  description:
    'Калькуляторы конверсии, окупаемости рекламы, ROI, CTR, CPM, CPC, CPA и CPS. Рассчитайте маркетинговые показатели онлайн.',
  alternates: { canonical: '/kalkulyatory' }
}

export default function KalkulyatoryPage() {
  return (
    <CalculatorsPageView
      showCardKeyword={false}
      showCardInputs={false}
      buttonMode="link"
    />
  )
}

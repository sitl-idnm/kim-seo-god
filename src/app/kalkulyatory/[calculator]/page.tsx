import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { CalculatorsPageView, getCalculatorConfigById } from '@views/calculatorsPage'

type CalculatorPageProps = {
  params: Promise<{ calculator: string }>
}

export async function generateMetadata({ params }: CalculatorPageProps): Promise<Metadata> {
  const { calculator } = await params
  const config = getCalculatorConfigById(calculator)

  if (!config) {
    return {
      title: 'Калькулятор не найден | K.KIM'
    }
  }

  return {
    title: `${config.title} — калькулятор | K.KIM`,
    description: config.description
  }
}

export default async function CalculatorPage({ params }: CalculatorPageProps) {
  const { calculator } = await params
  const config = getCalculatorConfigById(calculator)

  if (!config) {
    notFound()
  }

  return (
    <CalculatorsPageView
      singleCalculatorId={calculator}
      buttonMode="calculate"
      showCardKeyword
      showCardInputs
      showExtraSections={false}
    />
  )
}

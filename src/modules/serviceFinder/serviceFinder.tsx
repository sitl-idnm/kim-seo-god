'use client'

import { FC, useId, useMemo, useState } from 'react'
import classNames from 'classnames'
import Link from 'next/link'
import { useSetAtom } from 'jotai'

import styles from './serviceFinder.module.scss'
import { FinderStep, FinderStepId, ServiceFinderProps } from './serviceFinder.types'
import { getAllServices, getServiceData } from '@/shared/dataServices'
import { openModalContent } from '@/shared/atoms/openModal'

const steps: FinderStep[] = [
  {
    id: 'business',
    question: 'Какой у вас бизнес?',
    options: [
      { id: 'startup', label: 'Стартап / новый проект' },
      { id: 'smb', label: 'Малый и средний бизнес' },
      { id: 'ecom', label: 'Интернет-магазин / e-commerce' },
      { id: 'corp', label: 'Крупная компания' }
    ]
  },
  {
    id: 'goal',
    question: 'Какая у вас главная цель?',
    options: [
      { id: 'leads', label: 'Больше заявок и продаж' },
      { id: 'brand', label: 'Узнаваемость бренда' },
      { id: 'site', label: 'Новый сайт или приложение' },
      { id: 'automate', label: 'Автоматизировать процессы' }
    ]
  },
  {
    id: 'budget',
    question: 'Какой бюджет на старт?',
    options: [
      { id: 'low', label: 'До 50 000 ₽' },
      { id: 'mid', label: '50 000 – 150 000 ₽' },
      { id: 'high', label: 'Более 150 000 ₽' }
    ]
  }
]

type Answers = Partial<Record<FinderStepId, string>>

// Детерминированный rule-based маппинг: приоритетные slug'и услуг по ответам.
// Цель задаёт основную услугу, тип бизнеса и бюджет — усиливают/добавляют.
const recommendServiceSlugs = (answers: Answers): string[] => {
  const { goal, business, budget } = answers
  const slugs: string[] = []

  const push = (slug: string) => {
    if (!slugs.includes(slug)) slugs.push(slug)
  }

  // Основная логика по цели
  switch (goal) {
    case 'leads':
      push('lidogeneraciya')
      push('kontekstnaya-reklama')
      push('seo')
      break
    case 'brand':
      push('smm')
      push('firmenniy-stil')
      push('serm')
      break
    case 'site':
      push('sozdanie-saytov')
      push('web-design')
      push('razrabotka-mobilnogo-prilozheniya')
      break
    case 'automate':
      push('vnedrenie-ii')
      push('razrabotka-chat-botov')
      push('tekhpodderzhka')
      break
    default:
      break
  }

  // Корректировка по типу бизнеса
  if (business === 'ecom') {
    push('kontekstnaya-reklama')
    push('seo')
  }
  if (business === 'startup') {
    push('firmenniy-stil')
    push('sozdanie-saytov')
  }
  if (business === 'corp') {
    push('vnedrenie-ii')
    push('audit-internet-marketinga')
  }

  // Бюджетный фильтр: при низком бюджете поднимаем недорогие входные услуги
  if (budget === 'low') {
    push('razrabotka-chat-botov')
    push('audit-internet-marketinga')
  }

  return slugs.slice(0, 3)
}

const ServiceFinder: FC<ServiceFinderProps> = ({ className }) => {
  const [currentStep, setCurrentStep] = useState(0)
  const [answers, setAnswers] = useState<Answers>({})
  const [isDone, setIsDone] = useState(false)
  const setModalContent = useSetAtom(openModalContent)
  const questionId = useId()

  const rootClassName = classNames(styles.root, className)
  const totalSteps = steps.length
  const step = steps[currentStep]

  const recommended = useMemo(() => {
    if (!isDone) return []
    return recommendServiceSlugs(answers)
      .map((slug) => getServiceData(slug))
      .filter((s): s is NonNullable<typeof s> => Boolean(s))
  }, [answers, isDone])

  const handleSelect = (stepId: FinderStepId, optionId: string) => {
    const nextAnswers = { ...answers, [stepId]: optionId }
    setAnswers(nextAnswers)

    if (currentStep < totalSteps - 1) {
      setCurrentStep((prev) => prev + 1)
    } else {
      setIsDone(true)
    }
  }

  const handleBack = () => {
    if (isDone) {
      setIsDone(false)
      return
    }
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1)
    }
  }

  const handleReset = () => {
    setAnswers({})
    setCurrentStep(0)
    setIsDone(false)
  }

  const progress = isDone ? 100 : ((currentStep) / totalSteps) * 100

  // fallback, если вдруг ничего не подобралось
  const resultServices = recommended.length > 0 ? recommended : getAllServices().slice(0, 3)

  return (
    <section className={rootClassName}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Подберём услугу за 3 шага</h2>
          <p className={styles.subtitle}>
            Ответьте на три коротких вопроса — покажем решения, которые подойдут именно вам.
          </p>
        </div>

        <div className={styles.content} aria-live="polite">
          <div className={styles.progress}>
            <div className={styles.progressBar} style={{ width: `${progress}%` }} />
            <span className={styles.stepCount}>
              {isDone ? `${totalSteps}/${totalSteps}` : `${currentStep + 1}/${totalSteps}`}
            </span>
          </div>

          {!isDone ? (
            <div className={styles.step}>
              <h3 className={styles.question} id={questionId}>{step.question}</h3>
              <div
                className={styles.options}
                role="radiogroup"
                aria-labelledby={questionId}
              >
                {step.options.map((option) => {
                  const selected = answers[step.id] === option.id
                  return (
                    <button
                      key={option.id}
                      type="button"
                      role="radio"
                      aria-checked={selected}
                      className={classNames(styles.option, {
                        [styles.option_active]: selected
                      })}
                      onClick={() => handleSelect(step.id, option.id)}
                    >
                      {option.label}
                    </button>
                  )
                })}
              </div>
            </div>
          ) : (
            <div className={styles.result}>
              <h3 className={styles.question}>Рекомендуем для вас:</h3>
              <ul className={styles.recommendations}>
                {resultServices.map((service) => (
                  <li key={service.slug} className={styles.recommendation}>
                    <div className={styles.recommendation__info}>
                      <p className={styles.recommendation__title}>{service.title}</p>
                      <p className={styles.recommendation__price}>{service.price}</p>
                    </div>
                    <Link
                      href={`/services/${service.slug}`}
                      className={styles.recommendation__link}
                    >
                      Подробнее
                    </Link>
                  </li>
                ))}
              </ul>
              <div className={styles.result__cta}>
                <button
                  type="button"
                  className={styles.ctaButton}
                  onClick={() => setModalContent('детали')}
                >
                  Получить консультацию
                </button>
              </div>
            </div>
          )}

          <div className={styles.controls}>
            <button
              type="button"
              className={styles.backButton}
              onClick={handleBack}
              disabled={!isDone && currentStep === 0}
            >
              Назад
            </button>
            {isDone && (
              <button
                type="button"
                className={styles.resetButton}
                onClick={handleReset}
              >
                Пройти заново
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ServiceFinder

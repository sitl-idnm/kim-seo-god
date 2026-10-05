'use client'

import { FC, useState, useEffect } from 'react'
import classNames from 'classnames'
import DotStarIcon from '@icons/dot__star.svg'
import styles from './quiz.module.scss'
import { QuizProps } from './quiz.types'
import { Form } from '@/components/form'

const steps = [
  {
    id: 1,
    question: 'Какой у вас бизнес?',
    options: [
      'Стартап',
      'Средний бизнес',
      'Крупная компания'
    ]
  },
  {
    id: 2,
    question: 'Какие услуги вас интересуют?',
    options: [
      'Разработка сайта',
      'Продвижение (SEO)',
      'Контекстная реклама',
      'Комплексный маркетинг'
    ]
  },
  {
    id: 3,
    question: 'Какой у вас бюджет на маркетинг?',
    options: [
      'До 50 000 ₽',
      '50 000 - 100 000 ₽',
      '100 000 - 300 000 ₽',
      'Более 300 000 ₽'
    ]
  },
  {
    id: 4,
    question: 'Какие цели вы хотите достичь?',
    options: [
      'Увеличить продажи',
      'Повысить узнаваемость бренда',
      'Привлечь новых клиентов',
      'Выйти на новые рынки'
    ]
  },
  {
    id: 5,
    question: 'Какой у вас опыт работы с маркетингом?',
    options: [
      'Большой опыт',
      'Небольшой опыт',
      'Только начинаем',
      'Нет опыта'
    ]
  },
  {
    id: 6,
    question: 'Как быстро вам нужен результат?',
    options: [
      'Как можно скорее',
      'В течение 3 месяцев',
      'В течение 6 месяцев',
      'Готов к долгосрочной работе'
    ]
  },
  {
    id: 7,
    question: 'Есть ли у вас сайт?',
    options: [
      'Да, современный',
      'Да, но требует обновления',
      'Нет, но планируем создать',
      'Нет, не планируем создавать'
    ]
  },
  {
    id: 8,
    type: 'form',
    question: 'Отлично! Оставьте свои контакты для получения результатов'
  }
]

const QuizComponent: FC<QuizProps> = ({
  className
}) => {
  const [currentStep, setCurrentStep] = useState(1)
  const [totalSteps] = useState(8)
  const [answers, setAnswers] = useState<Record<number, string>>({})
  const rootClassName = classNames(styles.root, className)

  useEffect(() => {
    let timer: NodeJS.Timeout
    if (answers[currentStep] && currentStep < totalSteps) {
      timer = setTimeout(() => {
        setCurrentStep(prev => prev + 1)
      }, 1000)
    }
    return () => clearTimeout(timer)
  }, [answers, currentStep, totalSteps])

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(prev => prev + 1)
    }
  }

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(prev => prev - 1)
    }
  }

  const handleOptionSelect = (stepId: number, option: string) => {
    setAnswers(prev => ({
      ...prev,
      [stepId]: option
    }))
  }

  const currentStepData = steps.find(step => step.id === currentStep)

  return (
    <div className={rootClassName}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>
            Подберите идеальное<br />
            маркетинговое решение<br />
            для вашего бизнеса
          </h2>
          <div className={styles.subtitle}>
            <DotStarIcon className={styles.subtitleIcon} />
            <p>
              Пройдите быстрый тест, чтобы узнать,<br />
              какие инструменты подойдут вам.
            </p>
          </div>
        </div>

        <div className={styles.content}>
          <div className={styles.progress}>
            <div
              className={styles.progressBar}
              style={{ width: `${(currentStep / totalSteps) * 100}%` }}
            />
            <span className={styles.stepCount}>{currentStep}/{totalSteps}</span>
          </div>

          <div className={styles.form}>
            {currentStepData?.type === 'form' ? (
              <div className={styles.formStep}>
                <h3 className={styles.question}>{currentStepData.question}</h3>
                <Form quizData={answers} />
              </div>
            ) : (
              <div
                className={classNames(
                  styles.step,
                  { [styles.active]: true }
                )}
              >
                <h3 className={styles.question}>{currentStepData?.question}</h3>
                <div className={styles.options}>
                  {currentStepData?.options?.map((option, index) => (
                    <label key={index} className={styles.option}>
                      <input
                        type="radio"
                        name={`step-${currentStep}`}
                        value={option}
                        checked={answers[currentStep] === option}
                        onChange={() => handleOptionSelect(currentStep, option)}
                        className={styles.radio}
                      />
                      <span className={styles.checkmark} />
                      <span className={styles.text}>{option}</span>
                    </label>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className={styles.controls}>
            <button
              className={styles.backButton}
              onClick={handleBack}
              disabled={currentStep === 1}
            >
              Назад
            </button>
            {currentStep < totalSteps && (
              <button
                className={styles.nextButton}
                onClick={handleNext}
                disabled={!answers[currentStep]}
              >
                Далее
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default QuizComponent

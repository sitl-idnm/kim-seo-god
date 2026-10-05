'use client'

import { FC, useMemo, useState } from 'react'
import classNames from 'classnames'

import { Form } from '@/components/form'
import {
  SITE_DEVELOPMENT_QUIZ_SUBTITLE,
  SITE_DEVELOPMENT_QUIZ_TITLE,
  siteDevelopmentQuizSteps
} from './data'
import styles from './siteDevelopmentQuiz.module.scss'
import { SiteDevelopmentQuizProps } from './siteDevelopmentQuiz.types'

const TOTAL_STEPS = siteDevelopmentQuizSteps.length

const SiteDevelopmentQuiz: FC<SiteDevelopmentQuizProps> = ({ className }) => {
  const [currentStep, setCurrentStep] = useState(1)
  const [answers, setAnswers] = useState<Record<number, string>>({})
  const rootClassName = classNames(styles.root, className)

  const currentStepData = siteDevelopmentQuizSteps.find((step) => step.id === currentStep)
  const isFormStep = currentStepData?.type === 'form'

  const quizDataForSubmit = useMemo(() => {
    const data: Record<number, string> = {}

    siteDevelopmentQuizSteps.forEach((step) => {
      if (step.type === 'form') {
        return
      }

      const answer = answers[step.id]
      if (answer) {
        data[step.id] = `${step.question}: ${answer}`
      }
    })

    return data
  }, [answers])

  const handleNext = () => {
    if (currentStep < TOTAL_STEPS) {
      setCurrentStep((prev) => prev + 1)
    }
  }

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1)
    }
  }

  const handleOptionSelect = (stepId: number, option: string) => {
    setAnswers((prev) => ({
      ...prev,
      [stepId]: option
    }))
  }

  return (
    <div id="site-quiz" className={rootClassName}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>{SITE_DEVELOPMENT_QUIZ_TITLE}</h2>
          <p className={styles.subtitle}>{SITE_DEVELOPMENT_QUIZ_SUBTITLE}</p>
        </div>

        <div className={styles.content}>
          <div className={styles.progress}>
            <div
              className={styles.progressBar}
              style={{ width: `${(currentStep / TOTAL_STEPS) * 100}%` }}
            />
            <span className={styles.stepCount}>
              {currentStep}/{TOTAL_STEPS}
            </span>
          </div>

          <div className={styles.form}>
            {isFormStep ? (
              <div className={styles.formStep}>
                <h3 className={styles.question}>{currentStepData.question}</h3>
                <Form
                  className={styles.quizForm}
                  quizData={quizDataForSubmit}
                  submitValue="Получить результат"
                />
              </div>
            ) : (
              <div className={classNames(styles.step, styles.active)}>
                <h3 className={styles.question}>{currentStepData?.question}</h3>
                <div className={styles.options}>
                  {currentStepData?.options?.map((option) => (
                    <label key={option} className={styles.option}>
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

          {!isFormStep && (
            <div className={styles.controls}>
              <button
                type="button"
                className={styles.backButton}
                onClick={handleBack}
                disabled={currentStep === 1}
              >
                Назад
              </button>
              <button
                type="button"
                className={styles.nextButton}
                onClick={handleNext}
                disabled={!answers[currentStep]}
              >
                Далее
              </button>
            </div>
          )}

          {isFormStep && (
            <div className={classNames(styles.controls, styles.controlsFormStep)}>
              <button
                type="button"
                className={styles.backButton}
                onClick={handleBack}
              >
                Назад
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default SiteDevelopmentQuiz

'use client'
import { sendLeadMessage } from '@/shared/api/sendLead'
import { FC, useState } from 'react'
import classNames from 'classnames'
import Link from 'next/link'

import styles from './form.module.scss'
import { FormProps } from './form.types'
import {
  formatPhoneDisplay,
  isPhoneValid,
  getPhoneDigitsOnly,
  PHONE_PLACEHOLDER,
  positionAfterDigit,
  digitsBeforePosition
} from '@/shared/utils/phoneMask'

const defaultProjectPlaceholder = 'Расскажите про свой проект'

const Form: FC<FormProps> = ({
  className,
  mail,
  project,
  projectPlaceholder = defaultProjectPlaceholder,
  work,
  quizData,
  submitValue = 'Отправить',
  secondSubmitValue,
  secondSubmitClassName
}) => {
  const rootClassName = classNames(styles.root, className)
  const [successMessage, setSuccessMessage] = useState<string | null>(null)

  const handleNameInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value
    event.target.value = value.replace(/\d/g, '')
  }

  const handlePhoneInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const input = event.target
    const formatted = formatPhoneDisplay(input.value)
    const prevDigits = (input.value.slice(0, input.selectionStart ?? 0).match(/\d/g) || []).length
    input.value = formatted
    const newPos = positionAfterDigit(formatted, prevDigits)
    input.setSelectionRange(newPos, newPos)
  }

  const handlePhoneKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    const input = event.target as HTMLInputElement
    const value = input.value
    const cursor = input.selectionStart ?? 0
    const digits = getPhoneDigitsOnly(value)
    const digitsBefore = digitsBeforePosition(value, cursor)

    if (event.key === 'Backspace' && digitsBefore > 0) {
      const charBefore = value[cursor - 1]
      if (charBefore != null && !/\d/.test(charBefore)) {
        event.preventDefault()
        const newDigits = digits.slice(0, digitsBefore - 1) + digits.slice(digitsBefore)
        const raw = newDigits.length > 0 ? '7' + newDigits : ''
        const formatted = formatPhoneDisplay(raw)
        input.value = formatted
        const newPos = positionAfterDigit(formatted, digitsBefore - 1)
        input.setSelectionRange(newPos, newPos)
      }
    } else if (event.key === 'Delete' && digitsBefore < digits.length) {
      const charAt = value[cursor]
      if (charAt != null && !/\d/.test(charAt)) {
        event.preventDefault()
        const newDigits = digits.slice(0, digitsBefore) + digits.slice(digitsBefore + 1)
        const raw = newDigits.length > 0 ? '7' + newDigits : ''
        const formatted = formatPhoneDisplay(raw)
        input.value = formatted
        const newPos = positionAfterDigit(formatted, digitsBefore)
        input.setSelectionRange(newPos, newPos)
      }
    }
  }

  const sanitizeInput = (input: string) => {
    const sanitized = input.replace(/<[^>]*>/g, '')
    if (sanitized !== input) {
      throw new Error('HTML tags are not allowed')
    }
    return sanitized
  }

  const isValidEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  const formatQuizData = (data: Record<number, string>) => {
    return Object.entries(data)
      .map(([step, answer]) => `Шаг ${step}: ${answer}`)
      .join('\n')
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const data = Object.fromEntries(formData.entries())

    if (data.mail && !isValidEmail(data.mail as string)) {
      setSuccessMessage('Ошибка отправки заявки. Неправильный email адрес.')
      return
    }

    const phone = (data.phone as string)?.trim() ?? ''
    if (!isPhoneValid(phone)) {
      setSuccessMessage('Введите корректный номер телефона: +7 (XXX) XXX-XX-XX')
      return
    }

    if (project) {
      try {
        data.project = sanitizeInput(data.project as string)
      } catch (error) {
        setSuccessMessage('Ошибка отправки заявки. HTML теги не разрешены.')
        return
      }
    }
		const quizResults = quizData ? `\n\nРезультаты квиза:\n${formatQuizData(quizData)}` : ''

    const message = `🎯 *Пришла новая заявка с SEO-сайта KIM!*

👤 *Контактные данные:*
• Имя: ${data.name}
• Телефон: ${phone}${data.mail ? `\n• Почта: ${data.mail}` : ''}

${data.project ? `💡 *О проекте:*\n${data.project}\n` : ''}${quizResults ? `\n📋 *Результаты опроса:*${quizResults}` : ''}`

    try {
      await sendLeadMessage(message, { parse_mode: 'Markdown' })
      setSuccessMessage('Форма успешно отправлена!')
    } catch (error) {
      console.error('Ошибка при отправке:', error)
      setSuccessMessage('Ошибка при отправке заявки.')
    }
  }

  return (
    <div className={rootClassName}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.form_wrapper}>
          <input
            type="text"
            name="name"
            placeholder='Имя'
            required
            onChange={handleNameInput}
            style={work ? { color: 'black', backgroundColor: '#FAFAFA' } : undefined}
          />
          <label className={styles.placeholder}>Имя*</label>
        </div>
        <div className={styles.form_wrapper}>
          <input
            type="tel"
            name="phone"
            placeholder={PHONE_PLACEHOLDER}
            required
            onChange={handlePhoneInput}
            onKeyDown={handlePhoneKeyDown}
            onFocus={(e) => { if (e.target.value === '') e.target.placeholder = '' }}
            onBlur={(e) => { if (e.target.value === '') e.target.placeholder = PHONE_PLACEHOLDER }}
            style={work ? { color: 'black', backgroundColor: '#FAFAFA' } : undefined}
          />
          <label className={styles.placeholder}>Телефон*</label>
        </div>
        {/* Часть формы для страницы работа у нас */}
        {work !== undefined && (
          <div className={styles.form_wrapper}>
            <input type="text" name="url" placeholder='Ссылка на резюме' onFocus={(e) => e.target.placeholder = ''} onBlur={(e) => e.target.placeholder = 'Ссылка на резюме'} style={work ? { color: 'black', backgroundColor: '#FAFAFA' } : undefined} />
            <label className={styles.placeholder}>Ссылка на резюме</label>
          </div>
        )}
        {work !== undefined && (
          <div className={styles.form_wrapper}>
            <textarea name="project" placeholder='Расскажите про свой проект' onFocus={(e) => e.target.placeholder = ''} style={work ? { color: 'black', backgroundColor: '#FAFAFA' } : undefined} onBlur={(e) => e.target.placeholder = 'Расскажите про свой проект'} ></textarea>
            <label className={styles.placeholder}>Расскажите про свой проект</label>
          </div>
        )}

        {/* Часть формы для второй формы на главной странице */}
        {mail === true && (
          <div className={styles.form_wrapper}>
            <input
              type="mail"
              name="mail"
              placeholder='Почта'
              onFocus={(e) => e.target.placeholder = ''}
              onBlur={(e) => e.target.placeholder = 'Почта'}
            />
            <label className={styles.placeholder}>Почта</label>
          </div>
        )}
        {project === true && (
          <div className={styles.form_wrapper}>
            <textarea
              name="project"
              placeholder={projectPlaceholder}
              onFocus={(e) => e.target.placeholder = ''}
              onBlur={(e) => e.target.placeholder = projectPlaceholder}
            />
            <label className={styles.placeholder}>{projectPlaceholder}</label>
          </div>
        )}
        <div className={classNames(styles.form_wrapper, styles.form_wrapper_checkbox)}>
          <input type="checkbox" required />
          <label style={work ? { color: 'black' } : undefined}>
            Согласен на обработку<Link className={styles.policyLink} href='/privacy-policy' target='_blank' style={work ? { color: '#CB172C' } : undefined}>персональных данных</Link>
          </label>
        </div>
        {mail === true && (
          <div className={classNames(styles.form_wrapper, styles.form_wrapper_checkbox)}>
            <input type="checkbox" />
            <label>Согласен на получение email - рассылок</label>
          </div>
        )}
        {work !== undefined && (
          <div className={classNames(styles.form_wrapper, styles.form_wrapper_checkbox)}>
            <input type="checkbox" />
            <label style={work ? { color: 'black' } : undefined}>Согласен на получение email - рассылок</label>
          </div>
        )}
        <div className={styles.form_wrapper}>
          {secondSubmitValue ? (
            <div className={styles.form_buttonsRow}>
              <input type="submit" value={submitValue} />
              <input
                type="submit"
                value={secondSubmitValue}
                className={secondSubmitClassName}
              />
            </div>
          ) : (
            <input type="submit" value={submitValue} />
          )}
        </div>
        {successMessage && (
          <div className={styles.successMessage}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="24" height="24" rx="12" fill="white" />
              <path d="M8 12L11.5 16L16 7" stroke="#CB172C" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
            {successMessage}
          </div>
        )}
      </form>
    </div>
  )
}

export default Form

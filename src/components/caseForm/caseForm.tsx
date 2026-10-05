'use client'
import { sendLeadMessage } from '@/shared/api/sendLead'
import { FC, useState } from 'react'
import classNames from 'classnames'

import styles from './caseForm.module.scss'
import { CaseFormProps } from './caseForm.types'
import {
  formatPhoneDisplay,
  isPhoneValid,
  getPhoneDigitsOnly,
  PHONE_PLACEHOLDER,
  positionAfterDigit,
  digitsBeforePosition
} from '@/shared/utils/phoneMask'
import Image from 'next/image'
import { Borders } from '@/ui'
import Link from 'next/link'

const CaseForm: FC<CaseFormProps> = ({
  className,
  image
}) => {
  const rootClassName = classNames(styles.root, className)
  const [successMessage, setSuccessMessage] = useState<string | null>(null)

  const handleNameInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    event.target.value = value.replace(/\d/g, '');
  };

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
        input.setSelectionRange(positionAfterDigit(formatted, digitsBefore - 1), positionAfterDigit(formatted, digitsBefore - 1))
      }
    } else if (event.key === 'Delete' && digitsBefore < digits.length) {
      const charAt = value[cursor]
      if (charAt != null && !/\d/.test(charAt)) {
        event.preventDefault()
        const newDigits = digits.slice(0, digitsBefore) + digits.slice(digitsBefore + 1)
        const raw = newDigits.length > 0 ? '7' + newDigits : ''
        const formatted = formatPhoneDisplay(raw)
        input.value = formatted
        input.setSelectionRange(positionAfterDigit(formatted, digitsBefore), positionAfterDigit(formatted, digitsBefore))
      }
    }
  }

  const sanitizeInput = (input: string) => {
    const sanitized = input.replace(/<[^>]*>/g, '');
    if (sanitized !== input) {
      throw new Error('HTML tags are not allowed');
    }
    return sanitized;
  };

  const isValidEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

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
    try {
      data.project = sanitizeInput(data.project as string)
    } catch (error) {
      setSuccessMessage('Ошибка отправки заявки. HTML теги не разрешены.')
      return
    }
		const message = `Новая заявка:\nИмя: ${data.name}\nТелефон: ${data.phone}${data.mail ? `\nПочта: ${data.mail}` : ''}${data.project ? `\nРасскажите про свой проект: ${data.project}` : ''}`

    try {
      await sendLeadMessage(message)
      setSuccessMessage('Форма успешно отправлена!');
    } catch (error) {
      console.error('Ошибка при отправке:', error)
      setSuccessMessage('Ошибка при отправке заявки.')
    }
  }

  return (
    <div className={rootClassName}>
      <Borders cornersWithCrosses={['topLeft', 'bottomRight', 'topRight', 'bottomLeft']} />
      <div className={styles.form_header}>
        <h2 className={styles.form_header_title}>Тоже нужен сайт?</h2>
        <Image
          src={image}
          alt='image'
          width={760}
          height={549}
          quality={100}
        />
      </div>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.form_wrapper}>
          <h3>Оставьте заявку</h3>
        </div>
        <div className={styles.form_wrapper}>
          <input type="text" name="name" placeholder='Имя' required onChange={handleNameInput} style={{ color: 'black', backgroundColor: '#FAFAFA' }} />
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
            style={{ color: 'black', backgroundColor: '#FAFAFA' }}
          />
          <label className={styles.placeholder}>Телефон*</label>
        </div>
        <div className={styles.form_wrapper}>
          <input type="mail" name="mail" placeholder='Почта' onFocus={(e) => e.target.placeholder = ''} onBlur={(e) => e.target.placeholder = 'Почта'} />
          <label className={styles.placeholder}>Email</label>
        </div>
        <div className={styles.form_wrapper}>
          <textarea name="project" placeholder='Сообщение' onFocus={(e) => e.target.placeholder = ''} onBlur={(e) => e.target.placeholder = 'Сообщение'} ></textarea>
          <label className={styles.placeholder}>Сообщение</label>
        </div>
        <div className={styles.form_wrapper}>
          <input type="checkbox" required/>
          <label>Согласен на обработку<Link className={styles.policyLink} href='/privacy-policy' target='_blank' style={{ color: '#CB172C'}}>персональных данных</Link></label>
        </div>
        <div className={styles.form_wrapper}>
          <input type="checkbox" />
          <label>Согласен на получение email - рассылок</label>
        </div>
        <div className={styles.form_wrapper}>
          <input type="submit" value={'Отправить'} />
        </div>
        {successMessage && (
          <div className={styles.successMessage}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="24" height="24" rx="12" fill="white"/>
            <path d="M8 12L11.5 16L16 7" stroke="#CB172C" stroke-width="1.5" stroke-linecap="round"/>
            </svg>
            {successMessage}
          </div>
        )}
      </form>
    </div>
  )

}

export default CaseForm

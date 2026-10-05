'use client'
import { sendLeadMessage } from '@/shared/api/sendLead'

import { FC, useState } from 'react'
import classNames from 'classnames'

import styles from './modalForm.module.scss'
import { ModalFormProps } from './modalForm.types'
import {
  formatPhoneDisplay,
  isPhoneValid,
  getPhoneDigitsOnly,
  PHONE_PLACEHOLDER,
  positionAfterDigit,
  digitsBeforePosition
} from '@/shared/utils/phoneMask'

import PhoneDef from '../../shared/assets/icons/phone - default.svg'
import PhoneActive from '../../shared/assets/icons/phone - active.svg'
import WaDef from '../../shared/assets/icons/wa - default.svg'
import WaActive from '../../shared/assets/icons/wa - active.svg'
import TgDef from '../../shared/assets/icons/tg - default.svg'
import TgActive from '../../shared/assets/icons/tg - active.svg'
import Link from 'next/link'

const handleNameInput = (event: React.ChangeEvent<HTMLInputElement>) => {
	const value = event.target.value;
	event.target.value = value.replace(/\d/g, '');
};

const isValidEmail = (email: string) => {
	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	return emailRegex.test(email);
};

const DETAILS_LIDOGENERACIYA = {
  title: 'Обсудить лидогенерацию',
  description: 'Оставьте контакты — мы подберём формат под вашу нишу, рассчитаем бюджет и расскажем, как получить первых лидов без переплаты за контекст.',
  submitValue: 'Обсудить результат'
} as const

const ModalForm: FC<ModalFormProps> = ({ className, details, count, start, detailsVariant }) => {
	const rootClassName = classNames(styles.root, className)
	const [selectedContactMethod, setSelectedContactMethod] = useState('number')
	const [successMessage, setSuccessMessage] = useState<string | null>(null)

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

	const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault()
		const formData = new FormData(event.currentTarget)
		const data = Object.fromEntries(formData.entries())
		if (data.mailModal && !isValidEmail(data.mailModal as string)) {
			setSuccessMessage('Ошибка отправки заявки. Неправильный email адрес.');
			return;
		}
		const phone = (data.phoneModal as string)?.trim() ?? ''
		if (!isPhoneValid(phone)) {
			setSuccessMessage('Введите корректный номер телефона: +7 (XXX) XXX-XX-XX')
			return
		}
		if (data.commentModal != null && typeof data.commentModal === 'string') {
			try {
				data.commentModal = sanitizeInput(data.commentModal)
			} catch (error) {
				setSuccessMessage('Ошибка отправки заявки. HTML теги не разрешены.')
				return
			}
		}
		const message = `Новая заявка:\nИмя: ${data.nameModal}\nТелефон: ${data.phoneModal}${data.mailModal ? `\nПочта: ${data.mailModal}` : ''}${data.commentModal ? `\nРасскажите про свой проект: ${data.commentModal}` : ''}\nПредпочтительный способ связи: ${selectedContactMethod}`

		try {
			await sendLeadMessage(message)
			setSuccessMessage('Форма успешно отправлена!');
		} catch (error) {
			console.error('Error sending message to Telegram:', error)
			setSuccessMessage('Ошибка при отправке заявки.')
		}
	}

	return (
		<div className={rootClassName} style={details ? {height: '90vh'} : {}}>
			{
				details
					? <h2 className={styles.root__title}>{detailsVariant === 'lidogeneraciya' ? DETAILS_LIDOGENERACIYA.title : 'Заказать сайт'}</h2>
					: count ? <h2 className={styles.root__title}>Рассчитать срок и стоимость моего проекта</h2> : start ? <h2 className={styles.root__title}>Начать работу</h2> : <h2 className={styles.root__title}>Получить консультацию</h2>
			}
			<div className={styles.root__content}>
				<div className={styles.root__content__text}>
					{details ? null : start ? null : <p className={styles.white}>Готовы начать погружение в ваш проект!</p>}
					<p className={styles.gray}>
						{details
							? (detailsVariant === 'lidogeneraciya' ? DETAILS_LIDOGENERACIYA.description : 'Заполните краткую форму, чтобы мы связались с вами и обсудили все детали.')
							: count ? 'Заполните краткую форму, чтобы мы связались с вами и рассчитали сроки и стоимость разработки сайта.' : start ? 'Заполните форму и мы свяжемся с вами в ближайшее время для записи на консультацию' : 'Просто оставьте контактные данные, мы свяжемся с вами, чтобы собрать информацию и предложить решение.'}
					</p>
				</div>
				<form onSubmit={handleSubmit} action="POST" className={styles.root__content__form}>
					<div className={styles.root__content__form__first__line}>
						<div>
							<input
								type="text"
								name="nameModal"
								placeholder="Имя"
								className={`${styles.root__content__form__first__line__name} ${styles.input}`}
								required
								onChange={handleNameInput}
							/>
							<label className={styles.placeholder}>Имя*</label>
						</div>
						<div>
							<input
								type="tel"
								name="phoneModal"
								placeholder={PHONE_PLACEHOLDER}
								className={`${styles.root__content__form__first__line__number} ${styles.input}`}
								required
								onChange={handlePhoneInput}
								onKeyDown={handlePhoneKeyDown}
								onFocus={(e) => { if (e.target.value === '') e.target.placeholder = '' }}
								onBlur={(e) => { if (e.target.value === '') e.target.placeholder = PHONE_PLACEHOLDER }}
							/>
							<label className={styles.placeholder}>Телефон*</label>
						</div>
					</div>
					{details ? null : <div className={styles.root__content__form__second__line}>
						<div>
							<input
								type="mail"
								name="mailModal"
								placeholder="Почта"
								className={styles.root__content__form__second__line__mail}
								onFocus={(e) => e.target.placeholder = ''}
								onBlur={(e) => e.target.placeholder = 'Почта'}
							/>
							<label className={styles.placeholder}>Почта</label>
						</div>
						<div>
							<textarea
								name="commentModal"
								placeholder="Комментарий"
								onFocus={(e) => e.target.placeholder = ''}
								onBlur={(e) => e.target.placeholder = 'Комментарий'}
							/>
							<label className={styles.placeholder}>Комментарий</label>
						</div>
					</div>}
					<div className={styles.root__content__form__third__line}>
						<h3 className={styles.radio__title}>Где с вами связаться?</h3>
						<div className={styles.radio__list}>
							<div className={styles.input__wrapper}>
								<input
									type="radio"
									name="contactButton"
									id="rad1"
									checked={selectedContactMethod === 'number'}
									value="number"
									onChange={() => setSelectedContactMethod('number')}
								/>
								<label htmlFor="rad1" className={styles.radio__num}>
									{selectedContactMethod === 'number' ? <PhoneActive /> : <PhoneDef />}
									Телефон
								</label>
							</div>
							<div className={styles.input__wrapper}>
								<input
									type="radio"
									name="contactButton"
									id="rad2"
									checked={selectedContactMethod === 'tg'}
									value="tg"
									onChange={() => setSelectedContactMethod('tg')}
								/>
								<label htmlFor="rad2" className={styles.radio__tg}>
									{selectedContactMethod === 'tg' ? <TgActive /> : <TgDef />}
									Telegram
								</label>
							</div>
							<div className={styles.input__wrapper}>
								<input
									type="radio"
									name="contactButton"
									id="rad3"
									checked={selectedContactMethod === 'whatsapp'}
									value="whatsapp"
									onChange={() => setSelectedContactMethod('whatsapp')}
								/>
								<label htmlFor="rad3" className={styles.radio__wa}>
									{selectedContactMethod === 'whatsapp' ? <WaActive /> : <WaDef />}
									WhatsApp
								</label>
							</div>
						</div>
					</div>
					<div className={styles.wrapper}>
						<div className={styles.form_wrapper}>
							<input type="checkbox" required />
							<label>
								Согласен на обработку<Link className={styles.policyLink} href='/privacy-policy' target='_blank' style={{ color: '#CB172C'}}>персональных данных</Link>
							</label>
						</div>
						<div className={styles.form_wrapper}>
							<input type="checkbox" />
							<label>Согласен на получение email - рассылок</label>
						</div>
						<div className={styles.form_wrapper}>
							{details ? <input type="submit" value={detailsVariant === 'lidogeneraciya' ? DETAILS_LIDOGENERACIYA.submitValue : 'Заказать сайт'} /> : count ? <input type="submit" value={'Рассчитать '} /> : <input type="submit" value={'Получить консультацию'} />}
						</div>
						{successMessage && (
							<div className={styles.successMessage}>
								<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
									<rect width="24" height="24" rx="12" fill="white" />
									<path d="M8 12L11.5 16L16 7" stroke="#CB172C" stroke-width="1.5" stroke-linecap="round" />
								</svg>
								{successMessage}
							</div>
						)}
					</div>
				</form>
			</div>
		</div>
	)
}

export default ModalForm

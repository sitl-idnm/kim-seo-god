/**
 * Форматирование ввода телефона в маску +7 (XXX) XXX-XX-XX.
 * Без лишних скобок: скобка ) только после полной группы из 3 цифр.
 */
export function formatPhoneDisplay(raw: string): string {
  const digits = raw.replace(/\D/g, '')
  let rest = digits
  if (rest.startsWith('8')) rest = '7' + rest.slice(1)
  else if (rest.startsWith('7')) rest = rest.slice(1)
  rest = rest.slice(0, 10)
  if (rest.length === 0) return ''
  const a = rest.slice(0, 3)
  const b = rest.slice(3, 6)
  const c = rest.slice(6, 8)
  const d = rest.slice(8, 10)
  let out = '+7'
  if (a.length) out += ' (' + a
  if (a.length === 3) out += ')'
  if (b.length) out += ' ' + b
  if (c.length) out += '-' + c
  if (d.length) out += '-' + d
  return out
}

/** Позиция в отформатированной строке сразу после n-й цифры (n от 0). */
export function positionAfterDigit(formatted: string, digitIndex: number): number {
  let count = 0
  for (let i = 0; i < formatted.length; i++) {
    if (/\d/.test(formatted[i])) {
      if (count === digitIndex) return i + 1
      count++
    }
  }
  return formatted.length
}

/** Сколько цифр в строке до позиции cursor (не включая символ под курсором). */
export function digitsBeforePosition(value: string, cursor: number): number {
  const s = value.slice(0, cursor)
  return (s.match(/\d/g) || []).length
}

/** Только цифры номера после +7 (0–10 символов). */
export function getPhoneDigitsOnly(value: string): string {
  let d = value.replace(/\D/g, '')
  if (d.startsWith('8')) d = '7' + d.slice(1)
  if (d.startsWith('7')) d = d.slice(1)
  return d.slice(0, 10)
}

export function getPhoneDigits(value: string): string {
  const only = getPhoneDigitsOnly(value)
  return only.length > 0 ? '7' + only : ''
}

export function isPhoneValid(value: string): boolean {
  const digits = getPhoneDigits(value)
  return digits.length === 11 && digits.startsWith('7')
}

export const PHONE_PLACEHOLDER = '+7 (___) ___-__-__'

export interface FormProps {
  className?: string
  mail?: boolean
  project?: boolean
  /** Плейсхолдер и подпись для поля «проект». По умолчанию «Расскажите про свой проект». */
  projectPlaceholder?: string
  work?: boolean
  quizData?: Record<number, string>
  /** Текст кнопки отправки. По умолчанию «Отправить». */
  submitValue?: string
  /** Вторая кнопка отправки (дубликат, в одну строку). */
  secondSubmitValue?: string
  /** Класс для второй кнопки (например белый вариант). */
  secondSubmitClassName?: string
}

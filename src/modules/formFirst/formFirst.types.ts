export interface FormFirstProps {
  className?: string
  title?: string
  paragraph?: string
  /** Пункты списка под текстом (в плашках) */
  listItems?: string[]
  /** Текст после списка */
  listClosing?: string
  /** Текст кнопки отправки формы. */
  submitValue?: string
  /** Показывать поле «Расскажите про свой проект» / кастомный плейсхолдер. */
  project?: boolean
  /** Плейсхолдер для поля проекта (при project=true). */
  projectPlaceholder?: string
}
import { ReactNode } from 'react'

export interface FormSecondProps {
  className?: string;
  title?: ReactNode;
  paragraph?: ReactNode;
  widthImg?: number;
  heightImg?: number;
  positionRight?: string;
  positionTop?: string;
  /** Текст кнопки отправки формы (передаётся в Form). */
  submitValue?: string;
  /** Вторая кнопка отправки (дубликат, белая). */
  secondSubmitValue?: string;
  /** Класс для второй кнопки (белый вариант). */
  secondSubmitClassName?: string;
  /** Показывать поле «Почта». По умолчанию true. */
  mail?: boolean;
  /** Показывать поле «Расскажите про свой проект». По умолчанию true. */
  project?: boolean;
  /** id секции формы для якорных ссылок (например "form"). */
  anchorId?: string;
}

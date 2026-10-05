'use client'

import { FC, FormEvent, useEffect, useState } from 'react'
import classNames from 'classnames'

import { sendLeadMessage } from '@/shared/api/sendLead'
import styles from './blogArticle.module.scss'

type BlogArticleEngagementProps = {
  slug: string
  articleTitle: string
  className?: string
}

const DEFAULT_ANSWER =
  'Спасибо за вопрос! Интерактивный сайт имеет смысл, когда продукт сложно объяснить одним экраном: квиз, калькулятор или конфигуратор помогают собрать вводные до звонка и повысить качество заявки. Если нужна оценка под ваш проект — оставьте контакты в форме ниже.'

export const BlogArticleEngagement: FC<BlogArticleEngagementProps> = ({
  slug,
  articleTitle,
  className
}) => {
  const storageKey = `blog-like-${slug}`
  const [liked, setLiked] = useState(false)
  const [likeCount, setLikeCount] = useState(0)
  const [question, setQuestion] = useState('')
  const [answer, setAnswer] = useState<string | null>(null)
  const [questionError, setQuestionError] = useState('')
  const [isSending, setIsSending] = useState(false)

  useEffect(() => {
    try {
      const raw = localStorage.getItem(storageKey)
      if (!raw) return
      const parsed = JSON.parse(raw) as { liked?: boolean; count?: number }
      setLiked(Boolean(parsed.liked))
      setLikeCount(typeof parsed.count === 'number' ? parsed.count : 0)
    } catch {
      /* ignore */
    }
  }, [storageKey])

  const handleLike = () => {
    const nextLiked = !liked
    const nextCount = Math.max(0, likeCount + (nextLiked ? 1 : -1))
    setLiked(nextLiked)
    setLikeCount(nextCount)
    localStorage.setItem(storageKey, JSON.stringify({ liked: nextLiked, count: nextCount }))
  }

  const handleQuestionSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const trimmed = question.trim()
    if (!trimmed) {
      setQuestionError('Введите вопрос')
      return
    }

    setQuestionError('')
    setIsSending(true)

    try {
      await sendLeadMessage(
        `Вопрос к статье «${articleTitle}»\n\n${trimmed}`,
        { parse_mode: 'HTML' }
      )
      setAnswer(DEFAULT_ANSWER)
      setQuestion('')
    } catch {
      setAnswer(
        'Не удалось отправить вопрос. Попробуйте ещё раз или оставьте заявку в форме ниже — мы ответим лично.'
      )
    } finally {
      setIsSending(false)
    }
  }

  return (
    <section className={classNames(styles.engagement, className)} aria-label="Обратная связь по статье">
      <div className={styles.engagementRow}>
        <button
          type="button"
          className={classNames(styles.likeButton, liked && styles.likeButtonActive)}
          onClick={handleLike}
          aria-pressed={liked}
        >
          {liked ? 'Вам понравилось' : 'Нравится'}
          {likeCount > 0 && <span className={styles.likeCount}>{likeCount}</span>}
        </button>
      </div>

      <div className={styles.qaBlock}>
        <h3 className={styles.qaTitle}>Задать вопрос по статье</h3>
        <form className={styles.qaForm} onSubmit={handleQuestionSubmit}>
          <textarea
            className={styles.qaInput}
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder="Напишите ваш вопрос"
            rows={3}
            disabled={isSending}
          />
          {questionError && <p className={styles.qaError}>{questionError}</p>}
          <button type="submit" className={styles.qaSubmit} disabled={isSending}>
            {isSending ? 'Отправка…' : 'Отправить вопрос'}
          </button>
        </form>
        {answer && (
          <div className={styles.qaAnswer} role="status">
            <p className={styles.qaAnswerLabel}>Ответ</p>
            <p className={styles.qaAnswerText}>{answer}</p>
          </div>
        )}
      </div>
    </section>
  )
}

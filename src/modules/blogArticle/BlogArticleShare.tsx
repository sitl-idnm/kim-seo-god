'use client'

import { FC, useCallback, useState } from 'react'
import classNames from 'classnames'

import styles from './blogArticle.module.scss'

type BlogArticleShareProps = {
  title: string
  className?: string
}

export const BlogArticleShare: FC<BlogArticleShareProps> = ({ title, className }) => {
  const [copied, setCopied] = useState(false)

  const shareUrl = typeof window !== 'undefined' ? window.location.href : ''

  const handleCopy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(shareUrl)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      setCopied(false)
    }
  }, [shareUrl])

  const handleNativeShare = useCallback(async () => {
    if (!navigator.share) {
      handleCopy()
      return
    }
    try {
      await navigator.share({ title, url: shareUrl })
    } catch {
      /* user cancelled */
    }
  }, [handleCopy, shareUrl, title])

  const vkShare = `https://vk.com/share.php?url=${encodeURIComponent(shareUrl)}&title=${encodeURIComponent(title)}`
  const tgShare = `https://t.me/share/url?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(title)}`

  return (
    <section className={classNames(styles.share, className)} aria-label="Поделиться статьёй">
      <h3 className={styles.shareTitle}>Поделиться</h3>
      <div className={styles.shareButtons}>
        <a href={vkShare} target="_blank" rel="noopener noreferrer" className={styles.shareLink}>
          ВКонтакте
        </a>
        <a href={tgShare} target="_blank" rel="noopener noreferrer" className={styles.shareLink}>
          Telegram
        </a>
        <button type="button" className={styles.shareLink} onClick={handleNativeShare}>
          Поделиться
        </button>
        <button type="button" className={styles.shareLink} onClick={handleCopy}>
          {copied ? 'Ссылка скопирована' : 'Скопировать ссылку'}
        </button>
      </div>
    </section>
  )
}

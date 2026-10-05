import { FC } from 'react'
import classNames from 'classnames'

import styles from './videoReviews.module.scss'
import { VideoReviewsProps } from './videoReviews.types'

// Пример данных (лучше передавать через пропсы извне)
const defaultVideos = [
  { id: 1, videoId: 'dQw4w9WgXcQ' }, // Пример ID видео
  { id: 2, videoId: 'dQw4w9WgXcQ' },
  { id: 3, videoId: 'dQw4w9WgXcQ' },
]

const VideoReviews: FC<VideoReviewsProps> = ({
  className,
  title = 'Видеоотзывы',
  videos = defaultVideos,
}) => {
  const rootClassName = classNames(styles.root, className)

  return (
    <div className={rootClassName}>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.videoGrid}>
        {videos.map((video) => (
          <div key={video.id} className={styles.videoItem}>
            <iframe
              className={styles.videoFrame}
              src={`https://www.youtube.com/embed/${video.videoId}`}
              title={`YouTube video player ${video.id}`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        ))}
      </div>
    </div>
  )
}

export default VideoReviews

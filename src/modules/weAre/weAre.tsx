import { FC } from 'react'
import classNames from 'classnames'
import Image from 'next/image'

import styles from './weAre.module.scss'
import { WeAreProps } from './weAre.types'

const WeAre: FC<WeAreProps> = ({
  className,
  title = 'Чем мы можем вам помочь?',
  showText = true,
  compactImage = false,
}) => {
  const rootClassName = classNames(styles.root, className)
  const memberClassName = classNames(styles.member, {
    [styles.member_compact]: compactImage,
  })

  return (
    <div className={rootClassName}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h2 className={styles.title}>{title}</h2>
          {showText && (
            <div className={styles.text}>
              <p>K.KIM -  агентство интернет-маркетинга в Москве. Мы помогаем компаниям достигать высоких результатов  в онлайн-пространстве и предлагаем широкий спектр услуг начиная от  разработки сайтов, чат-ботов и ИИ-агентов  заканчивая запуском контекстной и таргетированной рекламы. К нам обращаются когда бизнес не приносит ожидаемых результатов и своими силами их добиться не получается. Для начала мы погружаемся в проект и постепенно приходим к высоким конверсиям и сильным офферам. Наша миссия — помогать бизнесам раскрывать их потенциал, создавая инновационные и эффективные решения, которые способствуют росту и успеху наших клиентов.
              </p>
              <p className={styles.quote}>«Сегодня бизнесу недостаточно просто рекламы. Нужна система — где маркетинг, IT и AI работают вместе и дают измеримый результат. Именно поэтому мы создали K.KIM — агентство, которое помогает компаниям расти быстрее рынка. Мы проектируем решения, которые автоматизируют процессы и превращают технологии в прибыль»</p>
              <p className={styles.author}>Константин Ким</p>
            </div>
          )}
        </div>
        <div className={styles.team}>
          <div className={memberClassName}>
            <Image
              src="/images/konstantin.png"
              alt="Константин Ким"
              width={475}
              height={475}
              className={styles.memberImage}
            />
            <p className={styles.memberName}>Константин Ким</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WeAre

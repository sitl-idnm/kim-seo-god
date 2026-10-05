import { FC } from 'react'
import classNames from 'classnames'

import styles from './tenetAbout.module.scss'
import { TenetAboutProps } from './tenetAbout.types'

const TenetAbout: FC<TenetAboutProps> = ({
  className,
  title,
  text,
  heightContentDesktop,
  widthContentDesktop,
  heightContentAdaptive,
  widthContentAdaptive,
  heightContentMobile,
  widthContentMobile,
  bgColor,
  leftPercent,
  marginTop
}) => {
  const rootClassName = classNames(styles.root, className)
  console.log(window.innerWidth)


  function getRandomIntInclusive(min: number, max: number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); // Максимум и минимум включаются
  }

  if (window.innerWidth < 768) {
    const arrayPercent = ['flex-start', 'flex-end']

    return (
      <div className={rootClassName} style={{height: heightContentMobile, width: widthContentMobile, background: '#E7E8EC51', alignSelf: arrayPercent[getRandomIntInclusive(0, 1)]}}>
        <h3 className={styles.title}>
          {title}
        </h3>
        <p className={styles.text}>
          {text}
        </p>
      </div>
    )
  } else if (window.innerWidth < 1200) {
    const arrayPercent = ['10%', '20%', '45%', '50%']

    return (
      <div className={rootClassName} style={{height: heightContentMobile, width: widthContentMobile, background: bgColor, left: arrayPercent[getRandomIntInclusive(0, 3)]}}>
        <h3 className={styles.title}>
          {title}
        </h3>
        <p className={styles.text}>
          {text}
        </p>
      </div>
    )
  } else if (window.innerWidth < 1440) {
    const arrayPercent = ['10%', '30%', '40%', '50%', '60%']
    return (
      <div className={rootClassName} style={{height: heightContentAdaptive, width: widthContentAdaptive, background: bgColor, left: arrayPercent[getRandomIntInclusive(0, 4)]}}>
        <h3 className={styles.title}>
          {title}
        </h3>
        <p className={styles.text}>
          {text}
        </p>
      </div>
    )
  } else {
    return (
      <div className={rootClassName} style={{height: heightContentDesktop, width: widthContentDesktop, background: bgColor, left: leftPercent, marginTop: marginTop}}>
        <h3 className={styles.title}>
          {title}
        </h3>
        <p className={styles.text}>
          {text}
        </p>
      </div>
    )
  }
}

export default TenetAbout

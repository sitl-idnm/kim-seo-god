'use client'

import { FC, useRef } from 'react'
import classNames from 'classnames'
import gsap from 'gsap'
import { MotionPathPlugin } from 'gsap/MotionPathPlugin'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import styles from './conversionTitle.module.scss'
import { ConversionTitleProps } from './conversionTitle.types'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(MotionPathPlugin, ScrollTrigger)

const ConversionTitle: FC<ConversionTitleProps> = ({ className }) => {
  const rootClassName = classNames(styles.root, className)
  const iconRef = useRef<SVGSVGElement>(null)
  const secondTitleRef = useRef<HTMLSpanElement>(null)
  const thirdTitleRef = useRef<HTMLSpanElement>(null)

  useGSAP(() => {
    if (iconRef.current) {
      const ball = iconRef.current.querySelector('#ball')
      const path = iconRef.current.querySelector('#path')
      if (ball && path) {
        gsap.to(ball, {
          duration: 3,
          ease: 'none',
          motionPath: {
            path: path as SVGPathElement,
            align: path as SVGPathElement,
            alignOrigin: [0.5, 0.5]
          },
          scrollTrigger: {
            trigger: iconRef.current,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none none'
          }
        })

        gsap.fromTo(secondTitleRef.current, {
          opacity: 0
        }, {
          opacity: 1,
          duration: 1,
          delay: 1.5,
          scrollTrigger: {
            trigger: iconRef.current,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none none'
          }
        })

        gsap.fromTo(thirdTitleRef.current, {
          opacity: 0
        }, {
          opacity: 1,
          duration: 1,
          delay: 3,
          scrollTrigger: {
            trigger: iconRef.current,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none none'
          }
        })
      }
    }
  }, [])

  return (
    <div className={rootClassName}>
      <div className={styles.root__img}>
        <svg
          ref={iconRef}
          width="177"
          height="162"
          viewBox="0 0 177 162"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            id="path"
            d="M7.79199 9.07031V65.7254C7.79199 74.3998 14.824 81.4318 23.4984 81.4318H71.7394C80.4138 81.4318 87.4457 88.4638 87.4457 97.1382V137.526C87.4457 146.2 94.4777 153.232 103.152 153.232H169.343"
            stroke="url(#paint0_linear_927_132)"
            stroke-width="2.24377"
          />
          <circle cx="8.35319" cy="8.50944" r="6.7313" fill="white" />
          <circle
            cx="8.35319"
            cy="8.50944"
            r="6.7313"
            stroke="#CB172C"
            stroke-width="2.24377"
          />
          <circle
            cx="8.35319"
            cy="8.50944"
            r="6.7313"
            stroke="url(#paint1_linear_927_132)"
            stroke-width="2.24377"
          />
          <circle
            cx="83.5192"
            cy="85.9196"
            r="6.7313"
            fill="white"
            stroke="#CB172C"
            stroke-width="2.24377"
          />
          <circle
            cx="168.782"
            cy="153.233"
            r="6.7313"
            fill="white"
            stroke="#CB172C"
            stroke-width="2.24377"
          />
          <circle
            id="ball"
            cx="168.782"
            cy="153.233"
            r="7.85319"
            fill="#CB172C"
          />
          <defs>
            <linearGradient
              id="paint0_linear_927_132"
              x1="-18.5723"
              y1="-39.7316"
              x2="334.087"
              y2="-48.281"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#CB172C" />
              <stop offset="1" stop-color="#CB172C" stop-opacity="0" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_927_132"
              x1="-1.14777"
              y1="-4.66069"
              x2="16.7413"
              y2="-3.82448"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#CB172C" />
              <stop offset="1" stop-color="#CB172C" stop-opacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <h2 className={styles.root__title}>
        Через погружение в проект
        <span className={styles.center} ref={secondTitleRef}>к сильным офферам</span>
        <span className={styles.bottom} ref={thirdTitleRef}>и высокой конверсии</span>
      </h2>
    </div>
  )
}

export default ConversionTitle

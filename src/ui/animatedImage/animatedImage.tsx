'use client';

import { FC, useEffect, useRef } from 'react';
import classNames from 'classnames';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import styles from './animatedImage.module.scss';
import { AnimatedImageProps } from './animatedImage.types';

gsap.registerPlugin(ScrollTrigger);

const AnimatedImage: FC<AnimatedImageProps> = ({ className }) => {
  const rootClassName = classNames(styles.root, className);
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const elements = svgRef.current?.querySelectorAll('circle, path');

    if (elements) {
      gsap.fromTo(
        elements,
        { strokeDasharray: '0 1000', strokeDashoffset: 1000 },
        {
          strokeDasharray: '5000 5000',
          strokeDashoffset: 0,
          duration: 20,
          stagger: 0.5, // Задержка для отрисовки элементов один за другим
          ease: 'power2.out',
          scrollTrigger: {
            trigger: svgRef.current,
            start: 'top 75%', // Начнем анимацию, когда SVG будет на 75% экрана
            toggleActions: 'play none none none',
          },
        }
      );
    }
  }, []);

  return (
    <div className={rootClassName}>
      <svg
        ref={svgRef}
        width="852"
        height="568"
        viewBox="0 0 852 568"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="426" cy="426" r="356" stroke="#E7E8EC" strokeWidth="2" />
        <path
          d="M820 425.5C820 642.823 643.601 819 426 819C208.399 819 32 642.823 32 425.5C32 208.177 208.399 32 426 32C643.601 32 820 208.177 820 425.5Z"
          stroke="#E7E8EC"
          strokeWidth="2"
        />
        <circle cx="426" cy="426" r="425" stroke="#E7E8EC" strokeWidth="2" />
      </svg>
    </div>
  );
};

export default AnimatedImage;

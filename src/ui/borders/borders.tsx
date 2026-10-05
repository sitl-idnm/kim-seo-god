'use client';

import { FC, useEffect, useRef, useCallback, useMemo } from 'react';
import classNames from 'classnames';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

import styles from './borders.module.scss';
import { BordersProps } from './borders.types';

gsap.registerPlugin(ScrollTrigger);

const Borders: FC<BordersProps> = ({ className, cornersWithCrosses = [] }) => {
  const rootClassName = classNames(styles.root, className);

  // Рефы для каждой линии
  const topRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);

  // Рефы для крестиков
  const topLeftRef = useRef<HTMLDivElement>(null);
  const topRightRef = useRef<HTMLDivElement>(null);
  const bottomLeftRef = useRef<HTMLDivElement>(null);
  const bottomRightRef = useRef<HTMLDivElement>(null);

  const crossRefs = useMemo(() => ({
    topLeft: topLeftRef,
    topRight: topRightRef,
    bottomLeft: bottomLeftRef,
    bottomRight: bottomRightRef,
  }), []);

  const animateBorders = useCallback(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: topRef.current,
        start: 'top center',
        toggleActions: 'play none none none',
      },
    });

    // Анимация для линий
    tl.fromTo(
      [topRef.current, rightRef.current, bottomRef.current, leftRef.current],
      { scaleX: 0, scaleY: 0 },
      {
        scaleX: 1,
        scaleY: 1,
        duration: 1,
        transformOrigin: 'center',
        ease: 'power2.out',
      }
    );

    // Анимация для крестиков в углах
    cornersWithCrosses.forEach((corner) => {
      if (crossRefs[corner].current) {
        gsap.fromTo(
          crossRefs[corner].current,
          { opacity: 0, scale: 0 },
          { opacity: 1, scale: 1, duration: 1, ease: 'power2.out', delay: 0.5 }
        );
      }
    });
  }, [cornersWithCrosses, crossRefs]);

  useEffect(() => {
    animateBorders();

    // Очистка ScrollTrigger при размонтировании компонента
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [animateBorders]);

  return (
    <div className={rootClassName}>
      {/* Линии по сторонам */}
      <div ref={topRef} className={styles.borderTop}></div>
      <div ref={rightRef} className={styles.borderRight}></div>
      <div ref={bottomRef} className={styles.borderBottom}></div>
      <div ref={leftRef} className={styles.borderLeft}></div>

      {/* Крестики в углах */}
      {cornersWithCrosses.includes('topLeft') && (
        <div ref={topLeftRef} className={`${styles.cross} ${styles.crossTopLeft}`}></div>
      )}
      {cornersWithCrosses.includes('topRight') && (
        <div ref={topRightRef} className={`${styles.cross} ${styles.crossTopRight}`}></div>
      )}
      {cornersWithCrosses.includes('bottomLeft') && (
        <div ref={bottomLeftRef} className={`${styles.cross} ${styles.crossBottomLeft}`}></div>
      )}
      {cornersWithCrosses.includes('bottomRight') && (
        <div ref={bottomRightRef} className={`${styles.cross} ${styles.crossBottomRight}`}></div>
      )}
    </div>
  );
};

export default Borders;

"use client";

import React, { FC, useState, useEffect } from 'react';
import styles from './typingSpan.module.scss';

type TypingSpanProps = {
  words: string[];
  interval?: number; // интервал замены слова (в миллисекундах)
  typingSpeed?: number; // скорость печати по буквам
};

const TypingSpan: FC<TypingSpanProps> = ({
  words,
  interval = 2000,
  typingSpeed = 100
}) => {
  const [displayedText, setDisplayedText] = useState<string>('');
  const [isDeleting, setIsDeleting] = useState<boolean>(false);
  const [currentWordIndex, setCurrentWordIndex] = useState<number>(0);

  useEffect(() => {
    const word = words[currentWordIndex];
    let timer: NodeJS.Timeout;

    if (isDeleting) {
      // Уменьшаем количество символов при удалении текста
      timer = setTimeout(() => {
        setDisplayedText((prev) => word.slice(0, prev.length - 1));
        if (displayedText.length === 1) { // Изменено с 0 на 1
          setIsDeleting(false);
          setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
        }
      }, typingSpeed);
    } else {
      // Добавляем по одному символу при печати
      timer = setTimeout(() => {
        setDisplayedText((prev) => word.slice(0, prev.length + 1));
        if (displayedText.length + 1 === word.length) { // Изменено на +1
          setTimeout(() => setIsDeleting(true), interval);
        }
      }, typingSpeed);
    }

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, words, interval, typingSpeed, currentWordIndex]);

  return (
    <span className={styles.awesome}>
      {displayedText}
      <span className={styles.cursor}></span>
    </span>
  );
};

export default TypingSpan;

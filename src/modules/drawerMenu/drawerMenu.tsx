'use client'

import { FC, useEffect, useRef, useState } from 'react'
import classNames from 'classnames'
import gsap from 'gsap'
import { Draggable } from 'gsap/Draggable'

import styles from './drawerMenu.module.scss'
import { DrawerMenuProps } from './drawerMenu.types'
import Navigation from '@/components/navigation/navigation'

gsap.registerPlugin(Draggable)

const DrawerMenu: FC<DrawerMenuProps> = ({
  className,
  children
}) => {
  const rootClassName = classNames(styles.root, className)
  const rootRef = useRef<HTMLDivElement>(null)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const root = rootRef.current

    if (!root) return

    // Начальное положение - выглядывает на 20px
    gsap.set(root, {
      x: -root.offsetWidth + 20,
      top: window.innerHeight * 0.2 // Начальная позиция 20% от высоты экрана
    })

    // Отслеживаем скролл
    const showOnScroll = () => {
      const scrollPercent = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)
      const scrolledPast30vh = window.scrollY > window.innerHeight * 0.3

      // Показываем/скрываем меню
      if (scrolledPast30vh) {
        const currentX = gsap.getProperty(root, 'x') as number

        gsap.to(root, {
          autoAlpha: 1,
          duration: 0.3,
          display: 'block'
        })

        // Вычисляем позицию так, чтобы плашка оставалась видимой
        const maxTop = window.innerHeight - root.offsetHeight - 20 // 20px отступ снизу
        const startTop = window.innerHeight * 0.2 // 20% от высоты экрана
        const endTop = maxTop
        const currentTop = startTop + (endTop - startTop) * scrollPercent

        // Анимируем позицию от верха до низа в зависимости от прокрутки
        gsap.to(root, {
          top: Math.min(maxTop, currentTop),
          x: currentX, // Сохраняем текущую X позицию
          duration: 0.3,
          ease: 'none'
        })
      } else {
        gsap.to(root, {
          autoAlpha: 0,
          duration: 0.3,
          display: 'none'
        })
      }
    }

    window.addEventListener('scroll', showOnScroll)

    // Настраиваем Draggable
    const draggable = Draggable.create(root, {
      type: 'x',
      bounds: {
        minX: -root.offsetWidth + 20,
        maxX: 0
      },
      dragResistance: 0.5,
      edgeResistance: 0.5,
      inertia: true,
      allowNativeTouchScrolling: false,
      onDragStart: function () {
        gsap.set(root, { cursor: 'grabbing' });
      },
      onDrag: function () {
        // Если перетянули вправо дальше нуля
        if (this.x > 0) {
          // Плавно возвращаем на место с эластичным эффектом
          gsap.to(root, {
            x: 0,
            duration: 0.5,
            ease: 'elastic.out(1, 0.5)'
          });
          this.endDrag(); // Прекращаем перетаскивание
        }
        // Если перетянули влево дальше предела
        if (this.x < -root.offsetWidth + 20) {
          gsap.to(root, {
            x: -root.offsetWidth + 20,
            duration: 0.5,
            ease: 'elastic.out(1, 0.5)'
          });
          this.endDrag();
        }
      },
      onDragEnd: function () {
        gsap.set(root, { cursor: 'grab' });
        const rect = root.getBoundingClientRect();

        // Используем fromTo для точного контроля начальной и конечной позиции
        if (this.x > -root.offsetWidth + 50) { // Увеличили порог для открытия
          gsap.fromTo(root,
            {
              x: this.x,
              top: rect.top
            },
            {
              x: 0,
              top: rect.top,
              duration: 0.3,
              ease: 'power2.out',
              overwrite: true
            }
          );
          setIsOpen(true);
        } else {
          gsap.fromTo(root,
            {
              x: this.x,
              top: rect.top
            },
            {
              x: -root.offsetWidth + 20,
              top: rect.top,
              duration: 0.3,
              ease: 'power2.out',
              overwrite: true
            }
          );
          setIsOpen(false);
        }
      }
    })[0]

    // Добавляем обработчик для открытия/закрытия по тапу на видимую часть
    const handleTouchStart = (e: TouchEvent) => {
      const touch = e.touches[0];
      const rootRect = root.getBoundingClientRect();

      // Если тап был на правом краю
      if (touch.clientX >= rootRect.right - 20) {
        if (isOpen) {
          gsap.fromTo(root,
            {
              x: 0,
              top: rootRect.top
            },
            {
              x: -root.offsetWidth + 20,
              top: rootRect.top,
              duration: 0.3,
              ease: 'power2.out',
              overwrite: true
            }
          );
          setIsOpen(false);
        } else {
          gsap.fromTo(root,
            {
              x: -root.offsetWidth + 20,
              top: rootRect.top
            },
            {
              x: 0,
              top: rootRect.top,
              duration: 0.3,
              ease: 'power2.out',
              overwrite: true
            }
          );
          setIsOpen(true);
        }
      }
    };

    root.addEventListener('touchstart', handleTouchStart);
    showOnScroll() // Вызываем сразу для установки начальной позиции

    return () => {
      window.removeEventListener('scroll', showOnScroll);
      root.removeEventListener('touchstart', handleTouchStart);
      draggable.kill();
    }
  }, [isOpen])

  return (
    <div ref={rootRef} className={rootClassName} style={{ visibility: 'hidden' }}>
      <div className={styles.drawer}>
        <div className={styles.content}>
          <Navigation className={styles.navigation} />
          {children}
        </div>
        <div className={styles.handle} />
      </div>
    </div>
  )
}

export default DrawerMenu

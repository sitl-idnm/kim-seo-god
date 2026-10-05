'use client'

import { FC, useState, useEffect, useRef, useCallback } from 'react';
import { Wrapper } from '@/ui';
import classNames from 'classnames';
import gsap from 'gsap';

import styles from './header.module.scss';
import { HeaderProps } from './header.types';
import Logo from './logo';
import { Button } from '@/ui/index';
import { Navigation } from '@/components';
import { openModalContent } from '@/shared/atoms/openModal';
import { useSetAtom } from 'jotai';
import PhoneIcon from '@icons/phone-custom.svg';
import VkIcon from '@icons/vk.svg';
import TelegramIcon from '@icons/telegram.svg';

const Header: FC<HeaderProps> = ({ className }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const headerClassName = classNames(styles.root, className);
  const menuRef = useRef<HTMLDivElement>(null);
  const burgerButtonRef = useRef<HTMLDivElement>(null);
  const burgerIconRef = useRef<HTMLDivElement>(null);
  const burgerBeforeRef = useRef<HTMLDivElement>(null);
  const burgerAfterRef = useRef<HTMLDivElement>(null);
  const setModalContent = useSetAtom(openModalContent)

  const openWindows = useCallback((name: string) => {
    setModalContent(name)
  }, [setModalContent])

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1024);
    };

    // Инициализация при монтировании
    handleResize();

    // Добавляем слушатель изменения размера окна
    window.addEventListener('resize', handleResize);

    // Очистка при размонтировании
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      gsap.to(menuRef.current, {
        opacity: 1,
        scale: 1,
        duration: 0.3,
        ease: 'back.out(1.7)',
        pointerEvents: 'auto'
      });

      gsap.to(burgerBeforeRef.current, {
        top: 0,
        rotation: 45,
        duration: 0.3
      });

      gsap.to(burgerAfterRef.current, {
        top: 0,
        rotation: -45,
        duration: 0.3
      });
    } else {
      gsap.to(menuRef.current, {
        opacity: 0,
        scale: 0.95,
        duration: 0.2,
        ease: 'power2.in',
        pointerEvents: 'none'
      });

      gsap.to(burgerBeforeRef.current, {
        top: '-6px',
        rotation: 0,
        duration: 0.3
      });

      gsap.to(burgerAfterRef.current, {
        top: '6px',
        rotation: 0,
        duration: 0.3
      });
    }
  }, [isMenuOpen]);

  useEffect(() => {
    if (!isMobile) {
      document.body.style.overflow = '';
      document.body.style.touchAction = '';
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.left = '';
      document.body.style.right = '';
      document.body.style.width = '';
      return;
    }

    if (isMenuOpen) {
      const scrollY = window.scrollY;
      document.body.dataset.scrollLockY = String(scrollY);
      document.body.style.overflow = 'hidden';
      document.body.style.touchAction = 'none';
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.left = '0';
      document.body.style.right = '0';
      document.body.style.width = '100%';
    } else {
      const savedScrollY = Number(document.body.dataset.scrollLockY || '0');
      document.body.style.overflow = '';
      document.body.style.touchAction = '';
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.left = '';
      document.body.style.right = '';
      document.body.style.width = '';
      delete document.body.dataset.scrollLockY;
      window.scrollTo(0, savedScrollY);
    }

    return () => {
      const savedScrollY = Number(document.body.dataset.scrollLockY || '0');
      document.body.style.overflow = '';
      document.body.style.touchAction = '';
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.left = '';
      document.body.style.right = '';
      document.body.style.width = '';
      delete document.body.dataset.scrollLockY;
      if (savedScrollY) {
        window.scrollTo(0, savedScrollY);
      }
    };
  }, [isMenuOpen, isMobile]);

  const handleBurgerClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Обработчик клика вне меню
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isMenuOpen &&
        menuRef.current &&
        burgerButtonRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        !burgerButtonRef.current.contains(event.target as Node)
      ) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <header className={headerClassName}>
      <Wrapper className={styles.wrapper}>
        <div className={styles.desktopHeader}>
          <div className={styles.topRowFull}>
            <div className={styles.topRow}>
              <div className={styles.socials}>
                <a href="tel:+79152306549" aria-label="Позвонить" className={styles.socials__item}>
                  <PhoneIcon />
                </a>
                <a href="https://vk.com/kkimagency" target="_blank" rel="noreferrer" aria-label="ВКонтакте" className={styles.socials__item}>
                  <VkIcon />
                </a>
                <a href="https://t.me/kimagency" target="_blank" rel="noreferrer" aria-label="Telegram" className={styles.socials__item}>
                  <TelegramIcon />
                </a>
              </div>
              <div className={styles.topActions}>
                <button type="button" className={styles.cityButton}>Москва</button>
                <Button
                  tag='button'
                  className={styles.workButton}
                  onClick={() => openWindows('детали')}
                  maxWidth='250px'
                >
                  Начать работу
                </Button>
              </div>
            </div>
          </div>

          <div className={styles.middleRow}>
            <div className={styles.brand}>
              <Logo />
              <p className={styles.brand__text}>Агентство комплексного интернет-маркетинга</p>
            </div>
            <div className={styles.contacts}>
              <div className={styles.contacts__address}>
                <p>Москва</p>
                <p>Локомотивный проезд, д.&nbsp;11/10</p>
              </div>
              <div className={styles.contacts__time}>
                <p>Пн-Пт</p>
                <p>09:00-21:00</p>
              </div>
              <div className={styles.contacts__phones}>
                <a href="tel:+79152306549">+7 (915) 230-65-49</a>
                <a href="tel:+74954766162">+7 (495) 476-61-62</a>
              </div>
            </div>
          </div>

          <div className={styles.bottomRow}>
            <Navigation />
          </div>
        </div>

        <div className={styles.mobileBar}>
          <div className={styles.mobileBar__brand}>
            <Logo />
            <p className={styles.mobileBar__text}>Агентство комплексного интернет-маркетинга</p>
          </div>
          <div className={styles.buttons__wrapper}>
            {!isMobile && (
              <Button
                tag='button'
                onClick={() => openWindows('детали')}
                maxWidth='192px'
              >
                Начать работу
              </Button>
            )}
            <div
              className={styles.burgerbutton}
              onClick={handleBurgerClick}
              ref={burgerButtonRef}
              data-open={isMenuOpen}
            >
              <div className={styles.burgericon} ref={burgerIconRef}>
                <div className={styles.burgericon__before} ref={burgerBeforeRef}></div>
                <div className={styles.burgericon__after} ref={burgerAfterRef}></div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.mobileActions}>
          <button type="button" className={styles.cityButton}>Москва</button>
          <Button
            tag='button'
            className={styles.workButtonMobile}
            onClick={() => openWindows('детали')}
            maxWidth='100%'
          >
            Начать работу
          </Button>
        </div>

        <div ref={menuRef} className={styles.mobilemenu}>
          <div className={styles.mobilemenu__header}>
            <div className={styles.mobilemenu__brand}>
              <Logo />
              <p className={styles.mobilemenu__text}>Агентство комплексного интернет-маркетинга</p>
            </div>
          </div>
          <Navigation />
          <div className={styles.mobileContacts}>
            <div className={styles.mobileContacts__address}>
              <p>Москва</p>
              <p>Локомотивный проезд, д.&nbsp;11/10</p>
            </div>
            <div className={styles.mobileContacts__time}>
              <p>Пн-Пт</p>
              <p>09:00-21:00</p>
            </div>
            <div className={styles.mobileContacts__phones}>
              <a href="tel:+79152306549">+7 (915) 230-65-49</a>
              <a href="tel:+74954766162">+7 (495) 476-61-62</a>
            </div>
            <div className={styles.mobileContacts__socials}>
              <a href="tel:+79152306549" aria-label="Позвонить" className={styles.socials__item}>
                <PhoneIcon />
              </a>
              <a href="https://vk.com/kkimagency" target="_blank" rel="noreferrer" aria-label="ВКонтакте" className={styles.socials__item}>
                <VkIcon />
              </a>
              <a href="https://t.me/kimagency" target="_blank" rel="noreferrer" aria-label="Telegram" className={styles.socials__item}>
                <TelegramIcon />
              </a>
            </div>
          </div>
        </div>
      </Wrapper>
    </header>
  );
};

export default Header;

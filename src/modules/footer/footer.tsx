import { FC } from 'react'
import { Wrapper } from '@/ui'

import styles from './footer.module.scss'
import LogoIcon from '@icons/logo.svg'
import PhoneIcon from '@icons/phone-custom.svg'
import Vk from '@icons/vk.svg'
import Telegram from '@icons/telegram.svg'
import Link from 'next/link'

const Footer: FC = () => {
  const mainLinks = ['Главная', 'Кейсы', 'О компании', 'Вакансии', 'Статьи', 'Отзывы', 'Часто-задаваемые вопросы']
  const serviceLinks = ['SMM продвижение', 'Веб-дизайн', 'SEO оптимизация', 'SERM', 'Разработка чат-ботов', 'Лидогенерация', 'Контакты']
  const mutedLinks = ['Видео о нас', 'Команда', 'Скидки', 'Цены', 'Партнерам', 'Клиенты']

  return (
    <footer className={styles.root}>
      <Wrapper className={styles.wrapper}>
        <div className={styles.top}>
          <div className={styles.topMeta}>
            <div className={styles.brand}>
              <Link href="/" className={styles.brand__logo} aria-label="home">
                <LogoIcon />
              </Link>
              <p className={styles.brand__text}>Сайт агентства интернет&nbsp;&mdash; маркетинга K.KIM,<br />Москва</p>
            </div>

            <div className={styles.contacts}>
              <p>Пн-Пт 09:00-21:00</p>
              <a href="tel:+79152306549">+7 (915) 230-65-49</a>
              <a href="tel:+74954766162">+7 (495) 476-61-62</a>
              <a href="mailto:info@kim.agency">info@kim.agency</a>
            </div>
          </div>

          <div className={styles.navRow}>
            <ul className={styles.links}>
              {mainLinks.map((item) => (
                <li key={item}><Link href="#" className={styles.links__item}>{item}</Link></li>
              ))}
            </ul>
            <ul className={styles.links}>
              {serviceLinks.map((item) => (
                <li key={item}><Link href="#" className={styles.links__item}>{item}</Link></li>
              ))}
            </ul>
            <ul className={styles.links}>
              {mutedLinks.map((item) => (
                <li key={item}><span className={styles.links__itemMuted}>{item}</span></li>
              ))}
            </ul>
          </div>
        </div>

        <div className={styles.bottom}>
          <div className={styles.bottomTop}>
            <div className={styles.company}>
              <p>ООО &quot;Ким Эдженси&quot;</p>
              <p>ИНН: 7727487051</p>
              <p>ОГРН: 1227700126708</p>
              <p>127238, город Москва, Локомотивный проезд, д. 11/10, кв. 26</p>
            </div>

            <div className={styles.policies}>
              <Link href="/privacy-policy" target="_blank">Политика конфиденциальности</Link>
              <Link href="/approve" target="_blank">Согласие на обработку персональных данных</Link>
              <div className={styles.socials}>
                <a href="tel:+79152306549" aria-label="Позвонить"><PhoneIcon /></a>
                <a href="https://vk.com/kkimagency" target="_blank" rel="noreferrer"><Vk /></a>
                <a href="https://t.me/kimagency" target="_blank" rel="noreferrer"><Telegram /></a>
              </div>
            </div>
          </div>

          <div className={styles.bottomBottom}>
            <p className={styles.copyright}>© 2026 ООО &quot;Ким Эдженси&quot;. Все права защищены.</p>
            <p className={styles.chamber}>Мы являемся членами Московской торгово-промышленной палаты</p>
          </div>
        </div>
      </Wrapper>
    </footer>
  )
}

export default Footer

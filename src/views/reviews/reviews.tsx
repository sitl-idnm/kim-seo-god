import { FC } from 'react'
import classNames from 'classnames'

import styles from './reviews.module.scss'
import { ReviewsProps } from './reviews.types'
import { Clients } from '@/modules/clients'
import { FormSecond } from '@/modules/formSecond'
import { StandartText } from '@/ui/standartText'
import { Why } from '@/modules/why'
import AcceptIcon from '@icons/accept.svg'
import { FormFirst } from '@/modules/formFirst'
import VideoReviews from '@/modules/videoReviews/videoReviews'
import { MoreReviews } from '@/modules/moreReviews'
import YandexMapsIcon from '@icons/yandex.svg'
import TwoGisIcon from '@icons/twogis.svg'
import ReviewCategories from '@/modules/reviewCategories/reviewCategories'
import { ReviewServiceCategory } from '@/modules/reviewCategories/reviewCategories.types'
import { ReviewTheme } from '@/modules/reviewCategories/reviewCategories.types'
import { ReviewData } from '@/modules/reviewCategories/reviewCategories.types'

const Reviews: FC<ReviewsProps> = ({
  className
}) => {
  const rootClassName = classNames(styles.root, className)

  const serviceCategories: ReviewServiceCategory[] = [
    { id: 'dev', name: 'Разработка сайта' },
    { id: 'design', name: 'Дизайн' },
    { id: 'marketing', name: 'Контент-маркетинг' },
    { id: 'smm', name: 'SMM' },
    { id: 'context', name: 'Контекстная реклама' },
    { id: 'target', name: 'Таргентированная реклама' },
    { id: 'serm', name: 'SERM' }
  ];

  const themes: ReviewTheme[] = [
    { id: 'medicine', name: 'Медицина' },
    { id: 'marketplaces', name: 'Маркетплейсы' },
    { id: 'cars', name: 'Автомобили' },
    { id: 'restaurants', name: 'Рестораны' },
    { id: 'real-estate', name: 'Недвижимость' },
    { id: 'repair', name: 'Ремонт квартир' },
    { id: 'construction', name: 'Строительство домов' },
    { id: 'gifts', name: 'Подарки' },
    { id: 'advertising', name: 'Рекламные агентства' },
    { id: 'online-services', name: 'Онлайн сервисы' },
  ];

  const reviews: ReviewData[] = [
    {
      avatar: '/images/reviews/andrey-nikolaevich.png',
      name: 'Андрей Николаевич',
      position: 'SEO - SweetCorp',
      reviewText: 'Хочу поблагодарить команду K.KIM за отличную работу! Мы обратились с задачей повысить трафик и конверсию на сайте, и результат превзошел ожидания. Агентство провело детальный анализ, разработало стратегию и оперативно внедрило решения. Особенно впечатлила глубина погружения в наш бизнес и внимательное отношение к деталям.',
      serviceCategoryIds: ['dev', 'marketing'],
      themeIds: ['medicine'],
      companyUrl: 'https://yandex.ru/maps/',
      companyLinkText: 'Ссылка на сайт компании',
      originalReviewUrl: 'https://yandex.ru/maps/',
      buttonText: 'Посмотреть оригинал',
    },
    {
      avatar: '/images/reviews/andrey-nikolaevich.png',
      name: 'Андрей Николаевич',
      position: 'SEO - SweetCorp',
      reviewText: 'Хочу поблагодарить команду K.KIM за отличную работу! Мы обратились с задачей повысить трафик и конверсию на сайте, и результат превзошел ожидания. Агентство провело детальный анализ, разработало стратегию и оперативно внедрило решения. Особенно впечатлила глубина погружения в наш бизнес и внимательное отношение к деталям.',
      serviceCategoryIds: ['dev'],
      themeIds: ['marketplaces'],
      companyUrl: 'https://yandex.ru/maps/',
      companyLinkText: 'Ссылка на сайт компании',
      originalReviewUrl: 'https://yandex.ru/maps/',
      buttonText: 'Посмотреть оригинал',
    },
    {
      avatar: '/images/reviews/andrey-nikolaevich.png',
      name: 'Андрей Николаевич',
      position: 'SEO - SweetCorp',
      reviewText: 'Хочу поблагодарить команду K.KIM за отличную работу! Мы обратились с задачей повысить трафик и конверсию на сайте, и результат превзошел ожидания. Агентство провело детальный анализ, разработало стратегию и оперативно внедрило решения. Особенно впечатлила глубина погружения в наш бизнес и внимательное отношение к деталям.',
      serviceCategoryIds: ['dev', 'marketing'],
      themeIds: ['medicine'],
      companyUrl: 'https://yandex.ru/maps/',
      companyLinkText: 'Ссылка на сайт компании',
      originalReviewUrl: 'https://yandex.ru/maps/',
      buttonText: 'Посмотреть оригинал',
    },
  ];

  return (
    <main className={rootClassName}>
      <h1 className={styles.title}>Отзывы о работе с K.KIM</h1>
      <p className={styles.description}>На этой странице представлены отзывы о маркетинговом интернет-агентстве.<br />Мы благодарны каждому клиенту, кто делится своим опытом сотрудничества с нами.</p>

      <ReviewCategories
        serviceCategories={serviceCategories}
        themes={themes}
        reviews={reviews}
        description="Ниже вы можете ознакомиться с реальными отзывами о нашей работе. Мы гордимся, что клиенты выражают благодарность за успешное сотрудничество с нами и делятся своими результатами."
      />

      <MoreReviews links={[{
        id: 1,
        url: 'https://yandex.ru/maps/',
        Icon: YandexMapsIcon,
      },
      {
        id: 2,
        url: 'https://2gis.ru/',
        Icon: TwoGisIcon,
      },
      ]} />
      <StandartText
        texts={[
          'Ваше мнение очень важно для нас! Если вы уже работали с нами, мы будем рады, если вы оставите свой отзыв и поделитесь своим опытом. Это поможет нам становиться ещё лучше и вдохновит других предпринимателей на успешное сотрудничество.'
        ]}
        marginBottom
      />
      <VideoReviews title="Видеоотзывы" videos={[]} />
      <StandartText
        title="Как мы помогаем бизнесам?"
        texts={[
          'K.KIM - агентство цифрового маркетинга в Москве. Мы содействуем компаниям в достижении высоких результатов в интернете, предлагая широкий спектр услуг, начиная от разработки и дизайна веб-ресурсов до реализации стратегий маркетинга и SEO-оптимизации. К нам обращаются, когда бизнес не приносит ожидаемых результатов, и своими силами их добиться не получается.',
          'Наша команда помогает генерировать большое количество трафика на сайты наших клиентов с различных источников, включая органический поиск, социальные сети, Email-рассылки, контент-маркетинг.',
          'Мы создаем сайты, которые не только привлекают посетителей, но и конвертируют их в заявки, формируя сильные офферы и удобные пользовательские интерфейсы. Для нас важно, чтобы каждый элемент сайта способствовал увеличению конверсии и удовлетворенности клиентов.',
          'Помогаем продолжить коммуникацию с клиентами с помощью SMM, контент-маркетинга и других стратегий, поддерживая активные и долгосрочные отношения с вашей целевой аудиторией. Наша цель — помогать бизнесам в интернете раскрывать их возможности, предлагая инновационные и эффективные маркетинговые решения, которые стимулируют их рост и обеспечивают успех.'
        ]}
        marginBottom
      />
      <FormFirst />
      <Why
        direction="column"
        titleJustify='start'
        titleAlign='center'
        titleTextAlign='center'
        cardsPerRow={2}
        title="Почему приходят к нам?"
        itemsData={[{
          icon: <AcceptIcon />,
          title: "Широкий спектр услуг"
        },
        {
          icon: <AcceptIcon />,
          title: "Результативность"
        },
        {
          icon: <AcceptIcon />,
          title: "Долгосрочные отношения с клиентами"
        },
        {
          icon: <AcceptIcon />,
          title: "Индивидуальный подход"
        }]}
      />
      <Why
        counter
        direction="row"
        titleJustify='start'
        titleAlign='start'
        cardsPerRow={3}
        title="Немного статистики"
        itemsData={[{
          icon: '',
          title: '15',
          description: "сотрудников в штате"
        },
        {
          icon: '',
          title: '5',
          description: "отделов"
        },
        {
          icon: '',
          title: '150+',
          description: "реализованных проектов "
        },
        {
          icon: '',
          title: '10 000+',
          description: "приведенных лидов"
        },
        {
          icon: '',
          title: '32',
          description: "платных сервиса использует команда ежемесячно"
        },
        {
          icon: '',
          title: '4',
          description: "модели ИИ помогают сотрудникам в работе"
        }]}
      />
      <Clients />
      <FormSecond />
      <StandartText
        texts={[
          'KIM Agency — это агентство, которое работает в Москве и специализируется на предоставлении digital-решений и услуг для бизнеса.',
          'Наши услуги предлагают решение задач бизнеса с помощью комплексного подхода в сфере интернет-маркетинга и внедрения ИТ-решений. Как системный интегратор, мы обеспечиваем внедрение всех цифровых процессов, оптимизируя их для достижения максимальной эффективности. Наши специалисты разрабатывают стратегические кампании, которые охватывают SEO, контекстную рекламу, SMM, таргет и контент-маркетинг.',
          'Благодаря системному подходу и опыту, мы гарантируем стабильную работу всех внедрённых решений и их соответствие бизнес-целям клиента.'
        ]}
      />
    </main>
  )
}

export default Reviews

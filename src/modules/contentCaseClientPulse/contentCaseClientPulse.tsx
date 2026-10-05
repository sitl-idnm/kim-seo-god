import { FC } from 'react'
import classNames from 'classnames'

import styles from './contentCaseClientPulse.module.scss'
import { ContentCaseClientPulseProps } from './contentCaseClientPulse.types'
import { DefaultTextCase, TextCase } from '@/components'

const ContentCaseClientPulse: FC<ContentCaseClientPulseProps> = ({
  className
}) => {
  const rootClassName = classNames(styles.root, className)

  return (
    <div className={rootClassName}>
      <TextCase
        title={'Задача'}
        text={<><span>Разработать фирменный стиль и сайт, которые будут отвечать новому позиционированию компании и подробно рассказывать потенциальным клиентам про все продукты и возможности цифрового сервиса для работы с клиентскими данными.</span><span>Так как продукт сложный, мы начали с исследований аудитории и конкурентов, чтобы выделить основные смыслы и посылы, которые необходимо транслировать на новом сайте.</span></>}
        image={''}
        id={'first'}
      />
      <TextCase
        title={'Анализ конкурентов'}
        text={<><span>Разработку сайта мы начинаем с исследования рынка и аудитории. Это помогает выделить смыслы, которые нужно транслировать на странице, чтобы отстроиться от конкурентов, привлечь внимание аудитории и побудить ее выполнить целевое действие.</span><span>Для анализа конкурентов мы взяли компании, которые продают сладкие новогодние подарки оптом и в розницу. Из них выбрали предприятия с лучшими показателями по трафику на сайт и знанию бренда в нише. После чего проанализировали содержание каждого сайта по выгодам, ценам, специальным предложениям, составам наборов, уникальности подарков для предприятий, вариантам оплаты, упаковкам, сервису и другим возможностям. Свели эти наблюдения в таблицу и сделали вывод о том, что должно быть на новом сайте Sweet Corp, чтобы выделить их на фоне конкурентов.</span></>}
        image={'/images/cases/sweetcorp/tableSweetcorp.png'}
        id={'second'}
      />
      <div className={styles.textCaseWrapper}>
        <TextCase
          title={'Анализ аудитории'}
          text={<><span>Каждый продукт компании предназначен для B2B, но у каждого – своя специфика и свой сегмент целевой аудитории. Поэтому для анализа мы разделили аудиторию на сегменты по продуктам:</span><ul><li>Гостевой Wi-Fi</li><li>MAC радар</li><li>SMS- Email- мессенджер-маркетинг</li><li>CDP</li>
          <li>eCards – карты клиентов на основе технологии Wallet</li></ul><span>Так как некоторые продукты сложные для понимания аудиторией, мы разбили сегменты по трем, подходящим для наших задач, уровням лестницы узнавания Бена Ханта:</span><ul><li>Проблему поняли, но пока еще не знают, как решить</li><li>Сравнивают разные варианты решения</li><li>Ищут подходящую компанию</li></ul><span>Для каждого сегмента прописали боли, страхи, цель покупки, возражения, факторы принятия решения, цель посещения сайта.</span><span>Информацию брали со слов клиента, в отзывах на компанию и конкурентов, в обсуждениях тематических сообществ.</span><span>Всю информацию свели в интеллект-карту:</span></>}
          image={'/images/cases/sweetcorp/intellMap.png'}
          id={'third'}
        />
      </div>
      <p className={styles.text}><span>По итогам анализа аудитории мы понимали какие боли, возражения и факторы принятия решения о покупке у каждого сегмента нам надо закрывать, какие смыслы подсвечивать на сайте, чтобы вызвать у пользователя желание оставить заявку.</span><span>Теперь это всё предстояло упаковать в конкретные смысловые блоки сайта. Так мы перешли к этапу прототипирования.</span></p>
      <TextCase
        title={'Разработка логотипа и сайта'}
        subTitle={'Разработка логотипа'}
        text={<><span>Перед тем, как приступать к разработке сайта, нужно создать логотип с новым названием, который будет отвечать актуальному позиционированию компании.</span><span>Разработать и согласовать новый логотип надо было в сжатые сроки, поэтому мы предложили 3 варианта.</span></>}
        image={'/images/cases/clientpulse/second.png'}
        id={''}
      />
      <TextCase
        title={'Разработка логотипа и сайта'}
        subTitle={'Разработка логотипа'}
        text={<>Заказчик выбрал первый вариант, мы его анимировали, чтобы продемонстрировать основную выгоду — 10+ инструментов для маркетинга и рекламы в одном личном кабинете</>}
        image={'/images/cases/clientpulse/third.png'}
        id={''}
      />
      <TextCase
        title={''}
        subTitle={'Разработка сайта'}
        text={<><span>Мы не беспокоим своих заказчиков по пустякам, но всегда согласовываем результаты больших этапов разработки – тестовый прототип, дизайн, сверстанный сайт. Это сокращает время на создание сайта и позволяет оперативно исправлять неточности, если они есть.</span><span>Разрабатывать и согласовывать страницы мы решили по порядку готовности продуктов – от тех, которые компания предоставляет давно, до тех, которые еще в разработке:</span><ul><li>Гостевой Wi-Fi – готовый продукт</li><li>MAC-радар – готовый продукт</li><li>SMS-, email- и мессенджер-рассылки – этап доработки</li><li>CDP – разработка</li>
        <li>eCards (карты клиентов на основе технологии Wallet) – разработка</li><li>Главная</li></ul><span>Главную решили делать после разработки всех остальных страниц, чтобы глубже понимать все продукты и выгодно представить их вместе.</span></>}
        image={'/images/cases/clientpulse/fourth.png'}
        id={'fourth'}
      />
      <TextCase
        title={''}
        subTitle={''}
        text={null}
        image={'/images/cases/clientpulse/fifth.png'}
        id={''}
      />
      <TextCase
        title={''}
        subTitle={''}
        text={null}
        image={'/images/cases/clientpulse/sixth.png'}
        id={''}
      />
      <TextCase
        title={''}
        subTitle={''}
        text={null}
        image={'/images/cases/clientpulse/seventh.png'}
        id={''}
      />
      <TextCase
        title={''}
        subTitle={''}
        text={null}
        image={'/images/cases/clientpulse/eighth.png'}
        id={''}
      />
      <TextCase
        title={'Страница «Гостевой Wi-Fi»'}
        subTitle={''}
        text={'На главный экран в заголовок вынесли название самой услуги, чтобы потенциальный покупатель понимал, что он тут может настроить гостевой Wi-Fi, а в подзаголовок добавили дополнительные выгоды и кнопку с призывом «Узнать подробнее», которая открывает pop-up с формой заявки на консультацию. Также прописали визуализацию сервиса, чтобы продемонстрировать, как он выглядит для бизнеса и клиентов.'}
        image={'/images/cases/clientpulse/ninth.png'}
        id={''}
      />
      <TextCase
        title={''}
        subTitle={''}
        text={'На следующих экранах актуализировали сложности, с которыми сталкивается бизнес и предложили решение.'}
        image={'/images/cases/clientpulse/tenth.png'}
        id={''}
      />
      <TextCase
        title={''}
        subTitle={''}
        text={null}
        image={'/images/cases/clientpulse/eleventh.png'}
        id={''}
      />
      <TextCase
        title={''}
        subTitle={''}
        text={'Выделили блок о том, кому подойдет.'}
        image={'/images/cases/clientpulse/twelfth.png'}
        id={''}
      />
      <TextCase
        title={''}
        subTitle={''}
        text={'Кратко описали процесс работы и добавили формы захвата в двух вариантах – для более самостоятельных пользователей и для тех, кто не хочет сам всё настраивать.'}
        image={'/images/cases/clientpulse/thirteenth.png'}
        id={''}
      />
      <TextCase
        title={''}
        subTitle={''}
        text={'Следующим экраном разместили выгоды.'}
        image={'/images/cases/clientpulse/fourteenth.png'}
        id={''}
      />
      <TextCase
        title={''}
        subTitle={''}
        text={'Подробно расписали возможности сервиса исходя из потребностей бизнеса.'}
        image={'/images/cases/clientpulse/fifteenth.png'}
        id={''}
      />
      <TextCase
        title={''}
        subTitle={''}
        text={'Добавили информацию про сетевые заведения.'}
        image={'/images/cases/clientpulse/sixteenth.png'}
        id={''}
      />
      <TextCase
        title={''}
        subTitle={''}
        text={'Сделали интерактивный экран со всеми возможностями сервиса.'}
        image={'/images/cases/clientpulse/seventeenth.png'}
        id={''}
      />
      <TextCase
        title={''}
        subTitle={''}
        text={'Добавили форму захвата.'}
        image={'/images/cases/clientpulse/eighteenth.png'}
        id={''}
      />
      <TextCase
        title={''}
        subTitle={''}
        text={'Запланировали блоки с социальными доказательствами – кейсы, клиенты, отзывы и добавили призыв к действию.'}
        image={'/images/cases/clientpulse/nineteenth.png'}
        id={''}
      />
      <TextCase
        title={''}
        subTitle={''}
        text={'Расписали тарифы.'}
        image={'/images/cases/clientpulse/twentieth.png'}
        id={''}
      />
      <TextCase
        title={''}
        subTitle={''}
        text={'В эту же группу блоков с ценами добавили информацию про акцию и форму захвата.'}
        image={'/images/cases/clientpulse/twentyfirst.png'}
        id={''}
      />
      <TextCase
        title={''}
        subTitle={''}
        text={'Добавили блок с интеграциями.'}
        image={'/images/cases/clientpulse/twentysecond.png'}
        id={''}
      />
      <TextCase
        title={''}
        subTitle={''}
        text={'Разместили форму захвата с альтернативным консультации следующим шагом – скачать презентацию.'}
        image={'/images/cases/clientpulse/twentythird.png'}
        id={''}
      />
      <DefaultTextCase
          mainText={<><span>Страница получилась объемная, закрывающая максимум возражений и демонстрирующая все выгоды продукта с точки зрения потребности бизнеса.</span><span>Для пользователей, которые не будут листать её всю, мы поставили разные формы захвата каждые 2-3 экрана, чтобы они смогли оставить заявку в любом месте страницы. А те, кому нужно изучить больше информации перед совершением целевого действия, тоже смогли бы это сделать. </span></>}
          subText={<><span>Для пользователей, которые не будут листать её всю, мы поставили разные формы захвата каждые 2-3 экрана, чтобы они смогли оставить заявку в любом месте страницы. А те, кому нужно изучить больше информации перед совершением целевого действия, тоже смогли бы это сделать. </span></>}
        />
        <TextCase
          title={'Страница «MAC-радар»'}
          subTitle={''}
          text={null}
          image={'/images/cases/clientpulse/twentyfourth.png'}
          id={''}
        />
        <TextCase
          title={''}
          subTitle={''}
          text={null}
          image={'/images/cases/clientpulse/twentyfifth.png'}
          id={''}
        />
        <TextCase
          title={''}
          subTitle={''}
          text={null}
          image={'/images/cases/clientpulse/twentysixth.png'}
          id={''}
        />
        <TextCase
          title={''}
          subTitle={''}
          text={null}
          image={'/images/cases/clientpulse/twentyseventh.png'}
          id={''}
        />
        <TextCase
          title={''}
          subTitle={''}
          text={null}
          image={'/images/cases/clientpulse/twentyeighth.png'}
          id={''}
        />
        <TextCase
          title={''}
          subTitle={''}
          text={null}
          image={'/images/cases/clientpulse/twentyninth.png'}
          id={''}
        />
        <TextCase
          title={'Главная страница'}
          subTitle={''}
          text={'На этапе разработки главной страницы мы уже знали особенности каждого продукта и варианты их взаимосвязи между собой. Поэтому на главном экране разместили демонстрацию возможностей продукта с точки зрения нужд бизнеса и ниже – список продуктов со ссылками на соответствующие страницы.'}
          image={'/images/cases/clientpulse/thirtieth.png'}
          id={''}
        />
        <TextCase
          title={''}
          subTitle={''}
          text={'Продемонстрировали основную выгоду, которая выходит из нового позиционирования.'}
          image={'/images/cases/clientpulse/thirtyfirst.png'}
          id={''}
        />
        <TextCase
          title={''}
          subTitle={''}
          text={'Добавили информацию о возможностях создания индивидуального тарифа.'}
          image={'/images/cases/clientpulse/thirtysecond.png'}
          id={''}
        />
    </div>
  )
}

export default ContentCaseClientPulse

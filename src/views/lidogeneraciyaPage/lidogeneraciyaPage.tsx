'use client'

import { FC } from 'react'
import classNames from 'classnames'
import { IntroWorkUs } from '@/modules/introWorkUs'
import { StandartText } from '@/ui'
import { Why } from '@/modules/why'
import AcceptIcon from '@icons/accept.svg'
import AcceptIconBlack from '@icons/accept-black.svg'
import { Faq } from '@/modules/faq'
import { Branch } from '@/modules/branch'
import { FormFirst } from '@/modules/formFirst'
import { FormSecond } from '@/modules/formSecond'
import { CaseLeadgen } from '@/modules/caseLeadgen'
import { IntroButtonsLeadgen } from './IntroButtonsLeadgen'
import { OpenDetailsModalButton } from './OpenDetailsModalButton'
import NewModalContainer from '@/components/newModalContainer/newModalContainer'
import { faqData } from './faqData'

import styles from './lidogeneraciyaPage.module.scss'

export const LidogeneraciyaPageView: FC = () => {
  const rootClassName = classNames(styles.root)

  return (
    <>
      <main className={rootClassName}>
        <IntroWorkUs
          className={styles.introBlock}
          title="Найдем клиентов там, где конкуренты сливают бюджеты на контекст"
          text="Живые лиды без переплаты за клики. Гарантируем — ваши данные не уйдут конкурентам."
          highlightedText=""
          titleClassName={styles.introTitleSmall}
          buttons={<IntroButtonsLeadgen />}
        />

        <Why
          className={styles.whyCardsEqualPadding}
          direction="column"
          titleJustify="center"
          titleAlign="center"
          cardsPerRow={3}
          title=""
          showTitle={false}
          itemsData={[
            { icon: <AcceptIconBlack />, title: 'Первые диалоги через 3-5 дней', description: '' },
            { icon: <AcceptIconBlack />, title: 'Гарантия эксклюзива', description: '' },
            { icon: <AcceptIconBlack />, title: 'Дозвон 85% — вдвое выше среднего по рынку', description: '' }
          ]}
        />

        <StandartText
          marginBottom
          marginTop
          title={'Кому подходит экосистема\u00A0лидогенерации'}
          texts={[
            'Агентство K.KIM предлагает комплексные решения для\u00A0B2B и B2C.'
          ]}
        />

        <Why
          className={styles.whyCardsEqualPadding}
          direction="column"
          titleJustify="center"
          titleAlign="center"
          cardsPerRow={4}
          title=""
          showTitle={false}
          itemsData={[
            {
              icon: <AcceptIconBlack />,
              title: 'Для тех, кто переплачивает за контекст, но не получает лидов',
              description: ''
            },
            {
              icon: <AcceptIconBlack />,
              title: 'Для тех, кто устал покупать базы, где 80% «мертвых» номеров',
              description: ''
            },
            {
              icon: <AcceptIconBlack />,
              title:
                'Для компаний, где менеджеры отказываются или не умеют звонить по холодной базе контактов',
              description: ''
            },
            {
              icon: <AcceptIconBlack />,
              title: 'Для тех, кто дорожит своими данными и боится «слива» конкурентам',
              description: ''
            }
          ]}
        />

        <div className={styles.sectionDivider} aria-hidden>
          <span className={styles.sectionDividerLine} />
        </div>

        <Why
          className={styles.whyCardsEqualPadding}
          direction="row"
          titleJustify="center"
          titleAlign="center"
          cardsPerRow={2}
          title={'Что меняется для\u00A0вашего бизнеса'}
          action={
            <OpenDetailsModalButton maxWidth="240px">
              Хочу так же
            </OpenDetailsModalButton>
          }
          itemsData={[
            {
              icon: <AcceptIcon />,
              title:
                'Менеджеры не тратят время на\u00A0холодные звонки — сразу работают с\u00A0теплыми клиентами и закрывают сделки',
              description: ''
            },
            {
              icon: <AcceptIcon />,
              title:
                'Конверсия во\u00A0встречу растет в 2-3 раза — заранее знаем потребности клиента и предлагаем релевантное решение',
              description: ''
            },
            {
              icon: <AcceptIcon />,
              title: 'Вы знаете, откуда пришел каждый клиент — прозрачная аналитика по\u00A0сделкам',
              description: ''
            },
            {
              icon: <AcceptIcon />,
              title: 'Ни один лид не уходит конкурентам — гарантия эксклюзива в\u00A0договоре',
              description: ''
            },
            {
              icon: <AcceptIcon />,
              title: 'Бюджет на\u00A0лидогенерацию становится предсказуемым',
              description: ''
            },
            {
              icon: <AcceptIcon />,
              title:
                'Получаете больше качественных лидов — мы дозваниваемся до\u00A085% контактов (рынок дает 40-50%)',
              description: ''
            }
          ]}
        />

        <CaseLeadgen id="cases" />

        <StandartText
          marginBottom
          marginTop
          title={'Как работает лидогенерация с\u00A0K.KIM'}
          texts={[
            'Большинство компаний делают что-то одно: продают базы, звонят по списку или настраивают контекст. Наше основное отличие — мы выстраиваем многоуровневую экосистему, которая включает:',
            'Если у вас нет ресурса вести сделку дальше — нет менеджера, перегружены или хотите полностью делегировать процесс — мы можем взять на себя и процесс закрытия сделки и выставления счета клиенту.'
          ]}
        />

        <Why
          className={styles.whyCardsEqualPadding}
          direction="column"
          titleJustify="start"
          titleAlign="start"
          cardsPerRow={4}
          title=""
          showTitle={false}
          itemsData={[
            {
              icon: <AcceptIconBlack />,
              title: 'Комплексный сбор контактов через ИИ',
              description:
                'Находим вашу целевую аудиторию — тех, кто уже ищет то, что вы продаете. Подключаем подходящие источники: конкуренты, форумы, базы мероприятий, партнерские данные.'
            },
            {
              icon: <AcceptIconBlack />,
              title: 'Верификация антиспам-роботом',
              description:
                'Отсеиваем «мертвые» номера, операторов, спам-ловушки. Дозвон до 85% вместо рыночных 40-50%.'
            },
            {
              icon: <AcceptIconBlack />,
              title: 'Квалификация',
              description:
                'Выявляем реальную потребность, определяем ЛПР, фиксируем контекст.'
            },
            {
              icon: <AcceptIconBlack />,
              title: 'Прогрев несколькими касаниями',
              description: 'Доводим до\u00A0готовности к\u00A0сделке через звонки и мессенджеры.'
            },
            {
              icon: <AcceptIconBlack />,
              title: 'Передача готового диалога',
              description:
                'В\u00A0продажи уходит не номер, а контакт с\u00A0полным контекстом разговора.'
            },
            {
              icon: <AcceptIconBlack />,
              title: 'Закрытие под ключ (опционально)',
              description:
                'Если нужно, доведем сделку до\u00A0счета и заказа.'
            },
            {
              icon: <AcceptIconBlack />,
              title: 'Масштабирование',
              description:
                'Отключаем низкоэффективные каналы, усиливаем прибыльные. Система обучается и становится эффективнее с\u00A0каждым месяцем.'
            }
          ]}
        />

        <FormFirst
          title="Нужно закрытие сделки под ключ?"
          paragraph={'Возьмем на\u00A0себя весь цикл — от\u00A0поиска клиента до\u00A0выставления счета. Обучим операторов вашему продукту, зафиксируем заказ и передадим в\u00A0работу.'}
          submitValue="Обсудить индивидуально"
        />

        <Branch
          title={
            <>
              Сколько стоит лидогенерация
              <br />
              <span className={styles.branchSubtitle}>Цены: от теста до системной работы</span>
            </>
          }
          itemsPerRow={3}
          actionButton={
            <OpenDetailsModalButton variant="branchLink">
              Рассчитать мой вариант
            </OpenDetailsModalButton>
          }
          branchData={[
            {
              title: 'Тестовый запуск (пилот)',
              backgroundColor: '#18181B',
              textColor: '#FFFFFF',
              linkText: '',
              linkColor: '',
              list: [
                'от 100 000 ₽',
                'Подбор каналов под\u00A0вашу нишу',
                'Сбор 500-1000 целевых контактов',
                'Ручной обзвон по скриптам или робот-антиспам (на выбор)',
                'Выявление потребности, квалификация',
                'Передача в\u00A0отдел продаж: контакт + контекст разговора',
                'Фиксируем результат через 7-14 дней',
                'Гарантия эксклюзива — база только у\u00A0вас'
              ]
            },
            {
              title: 'Лидогенерация под ключ',
              backgroundColor: '#CB172C',
              textColor: '#FFFFFF',
              linkText: '',
              linkColor: '',
              list: [
                'от 200 000 ₽/мес',
                'Подбор каналов под\u00A0вашу нишу',
                'Регулярный сбор целевых контактов (от 1000/мес)',
                'Ручной обзвон по скриптам или робот-антиспам (на выбор)',
                'Выявление потребности, квалификация',
                'Передача в\u00A0отдел продаж: контакт + контекст разговора',
                'Гарантия эксклюзива — база только у\u00A0вас',
                'Тщательный сбор контактов по базам руководителей организаций, участников мероприятий (форумов, конференций)',
                'Свежие данные, реальные люди'
              ]
            },
            {
              title: 'Эксклюзивные базы',
              backgroundColor: '#F9F9F9',
              textColor: '#18181B',
              linkText: '',
              linkColor: '',
              list: [
                'Тщательный сбор контактов по базам руководителей организаций, участников мероприятий (форумов, конференций)',
                'Свежие данные, реальные люди',
                'Гарантия эксклюзива — база только у\u00A0вас',
                'от 15 ₽/контакт (в\u00A0зависимости от\u00A0сложности и объема)'
              ],
              footerTitle: 'Примеры баз',
              footer: [
                'Руководители компаний по\u00A0ОКВЭД: от 100 ₽/контакт',
                'Конкурентная разведка: от 60 ₽/контакт',
                'Базы с\u00A0мероприятий: от 55 000 ₽ за\u00A0базу'
              ]
            }
          ]}
        />

        <Why
          className={styles.whyCardsEqualPadding}
          direction="row"
          titleJustify="center"
          titleAlign="center"
          cardsPerRow={2}
          title={'Работаем строго в\u00A0правовом поле. Без рисков для\u00A0вас.'}
          showTitle={true}
          itemsData={[
            {
              icon: <AcceptIcon />,
              title: 'Полное соответствие 152-ФЗ — ваши данные под защитой',
              description: ''
            },
            {
              icon: <AcceptIcon />,
              title:
                'Никаких «серых» баз — только открытые источники и деловые контакты',
              description: ''
            },
            {
              icon: <AcceptIcon />,
              title:
                'Фиксируем происхождение каждого лида — вы всегда знаете, откуда пришел клиент',
              description: ''
            },
            {
              icon: <AcceptIcon />,
              title:
                'Эксклюзивность в договоре — юридически гарантируем, что ваши лиды не будут переданы другим компаниям',
              description: ''
            },
            {
              icon: <AcceptIcon />,
              title: 'Без репутационных рисков — работаем аккуратно, без спама',
              description: ''
            }
          ]}
        />

        <FormFirst
          title="Хотите узнать, подойдет ли вам лидогенерация?"
          paragraph="Оставьте заявку — мы разберем ваш бизнес бесплатно и скажем:"
          listItems={[
            'Сколько реально клиентов можно получить',
            'Какие каналы сработают именно у вас',
            'Какой бюджет нужен на старте'
          ]}
          listClosing="Свяжемся с вами в течение 1 часа."
          project
          projectPlaceholder="Опишите Вашу задачу"
          submitValue="Обсудить решение"
        />

        <Faq faqData={faqData} title="Нас часто спрашивают:" />

        <FormSecond
          title="Остались вопросы — мы на связи"
          paragraph={'Если у\u00A0вас сложная задача, есть ограничения или вы хотите обсудить формат работы — позвоните или оставьте контакт. Мы вместе разберем контекст и предложим варианты решения.'}
          submitValue="Обсудить решение"
          mail={false}
          project={false}
        />
      </main>
      <NewModalContainer />
    </>
  )
}

'use client'

import { FC, useState } from 'react'
import classNames from 'classnames'
import { IntroWorkUs } from '@/modules/introWorkUs'
import { StandartText, Button } from '@/ui'
import { FormFirst } from '@/modules/formFirst'
import Services from '@/modules/ServicePage/services/services'
import Blogs from '@/modules/blogs/blogs'
import styles from './calculatorsPage.module.scss'

type CalculatorField = {
  key: string
  label: string
}

type CalculatorConfig = {
  id: string
  title: string
  keyword: string
  tone: 'dark' | 'light' | 'red'
  formula: string
  description: string
  fields: CalculatorField[]
  calculate: (values: Record<string, number>) => { value: number; suffix?: string; note?: string }
}

const calcConfigs: CalculatorConfig[] = [
  {
    id: 'conversion',
    title: 'Калькулятор конверсии продаж',
    keyword: 'Калькулятор для подсчета конверсии',
    tone: 'dark',
    formula: '(количество заявок / количество кликов) * 100%',
    description: 'Показывает, какой процент от общего числа лидов превратился в\u00A0реальные продажи.',
    fields: [
      { key: 'leads', label: 'Количество заявок' },
      { key: 'clicks', label: 'Количество кликов' }
    ],
    calculate: (v) => ({ value: (v.leads / v.clicks) * 100, suffix: '%' })
  },
  {
    id: 'roas',
    title: 'Калькулятор расчета рекламы онлайн',
    keyword: 'Калькулятор расчета окупаемости рекламы',
    tone: 'light',
    formula: 'доходы / расходы',
    description: 'Значение ROAS > 1 означает, что реклама окупилась.',
    fields: [
      { key: 'revenue', label: 'Доходы' },
      { key: 'cost', label: 'Расходы' }
    ],
    calculate: (v) => ({
      value: v.revenue / v.cost,
      note: `или ${(((v.revenue / v.cost) * 100)).toFixed(2)}%`
    })
  },
  {
    id: 'seo-traffic',
    title: 'SEO калькулятор продвижения',
    keyword: 'seo калькулятор трафика',
    tone: 'red',
    formula: 'частота фразы * позиция',
    description: 'Помогает оценить ориентировочное количество переходов по\u00A0выбранной фразе.',
    fields: [
      { key: 'frequency', label: 'Частота фразы' },
      { key: 'position', label: 'Позиция' }
    ],
    calculate: (v) => ({ value: v.frequency * v.position })
  },
  {
    id: 'roi',
    title: 'ROI',
    keyword: 'Калькулятор расчета roi',
    tone: 'light',
    formula: '(доходы - расходы) / расходы * 100%',
    description: 'Показывает, насколько эффективны были вложения в\u00A0рекламу.',
    fields: [
      { key: 'revenue', label: 'Доходы' },
      { key: 'cost', label: 'Расходы' }
    ],
    calculate: (v) => ({ value: ((v.revenue - v.cost) / v.cost) * 100, suffix: '%' })
  },
  {
    id: 'cpm',
    title: 'CPM',
    keyword: 'CPM калькулятор',
    tone: 'dark',
    formula: '(потраченная сумма / количество показов) * 1000',
    description: 'Определяет стоимость 1000 показов рекламного объявления.',
    fields: [
      { key: 'cost', label: 'Потраченная сумма' },
      { key: 'impressions', label: 'Количество показов' }
    ],
    calculate: (v) => ({ value: (v.cost / v.impressions) * 1000 })
  },
  {
    id: 'ctr',
    title: 'CTR',
    keyword: 'CTR калькулятор',
    tone: 'light',
    formula: '(количество кликов / количество показов) * 100%',
    description: 'Показывает, какой процент пользователей, увидевших рекламу, кликнули по\u00A0ней.',
    fields: [
      { key: 'clicks', label: 'Количество кликов' },
      { key: 'impressions', label: 'Количество показов' }
    ],
    calculate: (v) => ({ value: (v.clicks / v.impressions) * 100, suffix: '%' })
  },
  {
    id: 'cpc',
    title: 'CPC',
    keyword: 'CPC калькулятор',
    tone: 'red',
    formula: 'потраченная сумма / количество кликов',
    description: 'Позволяет определить стоимость каждого клика по\u00A0вашей рекламе.',
    fields: [
      { key: 'cost', label: 'Потраченная сумма' },
      { key: 'clicks', label: 'Количество кликов' }
    ],
    calculate: (v) => ({ value: v.cost / v.clicks })
  },
  {
    id: 'cpa',
    title: 'CPA',
    keyword: 'CPA калькулятор',
    tone: 'light',
    formula: 'потраченная сумма / количество целевых действий',
    description: 'Показывает, сколько вы платите за\u00A0каждое выполненное пользователем целевое действие.',
    fields: [
      { key: 'cost', label: 'Потраченная сумма' },
      { key: 'actions', label: 'Количество целевых действий' }
    ],
    calculate: (v) => ({ value: v.cost / v.actions })
  },
  {
    id: 'cps',
    title: 'Калькулятор продаж',
    keyword: 'калькулятор продаж',
    tone: 'dark',
    formula: 'потраченная сумма / количество продаж',
    description: 'Вычисляет стоимость одной продажи, полученной благодаря рекламе.',
    fields: [
      { key: 'cost', label: 'Потраченная сумма' },
      { key: 'sales', label: 'Количество продаж' }
    ],
    calculate: (v) => ({ value: v.cost / v.sales })
  }
]

const normalizeText = (value: string) => value.replaceAll('\\u00A0', '\u00A0')

type CalculatorsPageViewProps = {
  showCardKeyword?: boolean
  showCardInputs?: boolean
  buttonMode?: 'calculate' | 'link'
  singleCalculatorId?: string
  showExtraSections?: boolean
}

export const getCalculatorConfigById = (id: string) => calcConfigs.find((c) => c.id === id)

export const CalculatorsPageView: FC<CalculatorsPageViewProps> = ({
  showCardKeyword = true,
  showCardInputs = true,
  buttonMode = 'calculate',
  singleCalculatorId,
  showExtraSections = true
}) => {
  const rootClassName = classNames(styles.root)
  const [inputs, setInputs] = useState<Record<string, Record<string, string>>>({})
  const [toasts, setToasts] = useState<Record<string, { type: 'success' | 'error'; text: string } | undefined>>({})
  const cardsToRender = singleCalculatorId
    ? calcConfigs.filter((config) => config.id === singleCalculatorId)
    : calcConfigs

  const handleInputChange = (calcId: string, fieldKey: string, value: string) => {
    setInputs((prev) => ({
      ...prev,
      [calcId]: {
        ...(prev[calcId] || {}),
        [fieldKey]: value
      }
    }))
  }

  const handleCalculate = (config: CalculatorConfig) => {
    const currentInputs = inputs[config.id] || {}
    const parsedValues: Record<string, number> = {}

    for (const field of config.fields) {
      const raw = (currentInputs[field.key] || '').replace(',', '.').trim()
      const num = Number(raw)
      if (!Number.isFinite(num)) {
        setToasts((prev) => ({
          ...prev,
          [config.id]: { type: 'error', text: 'Введите корректные числовые значения.' }
        }))
        return
      }
      parsedValues[field.key] = num
    }

    const zeroDenominator =
      (config.id === 'conversion' && parsedValues.clicks === 0) ||
      (config.id === 'roas' && parsedValues.cost === 0) ||
      (config.id === 'roi' && parsedValues.cost === 0) ||
      (config.id === 'cpm' && parsedValues.impressions === 0) ||
      (config.id === 'ctr' && parsedValues.impressions === 0) ||
      (config.id === 'cpc' && parsedValues.clicks === 0) ||
      (config.id === 'cpa' && parsedValues.actions === 0) ||
      (config.id === 'cps' && parsedValues.sales === 0)

    if (zeroDenominator) {
      setToasts((prev) => ({
        ...prev,
        [config.id]: { type: 'error', text: 'Деление на ноль невозможно.' }
      }))
      return
    }

    const calcResult = config.calculate(parsedValues)
    const formatted = `${calcResult.value.toFixed(2)}${calcResult.suffix || ''}`
    const withNote = calcResult.note ? `${formatted} (${calcResult.note})` : formatted

    setToasts((prev) => ({
      ...prev,
      [config.id]: { type: 'success', text: `Результат: ${withNote}` }
    }))
  }

  const closeToast = (calcId: string) => setToasts((prev) => ({ ...prev, [calcId]: undefined }))

  return (
    <main className={rootClassName}>
      <IntroWorkUs
        className={styles.introBlock}
        titleClassName={styles.introTitleSmall}
        title="Калькуляторы маркетингового агентства K.KIM"
        text=""
        highlightedText=""
        buttons={<></>}
      />

      <section id="calculators-grid" className={styles.calculatorsSection}>
        <div className={styles.calculatorsGrid}>
          {cardsToRender.map((config) => (
            <article
              key={config.id}
              className={classNames(
                styles.card,
                styles[`card_${config.tone}`],
                !showCardInputs && styles.card_compact
              )}
            >
              <h2 className={styles.cardTitle}>{normalizeText(config.title)}</h2>
              {showCardKeyword && <p className={styles.cardKeyword}>{normalizeText(config.keyword)}</p>}
              <p className={styles.cardFormula}><strong>Формула:</strong> {normalizeText(config.formula)}</p>
              <p className={styles.cardDescription}>{normalizeText(config.description)}</p>

              {showCardInputs && (
                <div className={styles.fieldsWrap}>
                  {config.fields.map((field) => (
                    <label key={field.key} className={styles.field}>
                      <span>{normalizeText(field.label)}</span>
                      <input
                        type="number"
                        step="any"
                        value={inputs[config.id]?.[field.key] || ''}
                        onChange={(e) => handleInputChange(config.id, field.key, e.target.value)}
                      />
                    </label>
                  ))}
                </div>
              )}

              <div className={styles.actionSlot}>
                {buttonMode === 'link' ? (
                  <Button
                    tag="a"
                    href={`/kalkulyatory/${config.id}`}
                    className={styles.calcButton}
                  >
                    Рассчитать
                  </Button>
                ) : !toasts[config.id] ? (
                  <Button
                    tag="button"
                    className={styles.calcButton}
                    onClick={() => handleCalculate(config)}
                  >
                    Рассчитать
                  </Button>
                ) : (
                  <div
                    className={classNames(
                      styles.resultBar,
                      toasts[config.id]?.type === 'success' ? styles.toast_success : styles.toast_error
                    )}
                  >
                    <span className={styles.resultBarText}>{toasts[config.id]?.text}</span>
                    <button
                      type="button"
                      className={styles.resultBarClose}
                      onClick={() => closeToast(config.id)}
                      aria-label="Закрыть уведомление"
                    >
                      ×
                    </button>
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      {showExtraSections && (
        <>
          <section className={styles.popularArticles}>
            <h2 className={styles.sectionTitle}>Популярные статьи</h2>
            <p className={styles.sectionLead}>
              {normalizeText('Актуальные и\\u00A0информативные статьи, которые помогут вам разобраться в\\u00A0тонкостях современного маркетинга.')}
            </p>
            <div className={styles.blogsWrap}>
              <Blogs count={3} />
            </div>
          </section>

          <section className={styles.popularServices}>
            <div className={styles.servicesWrap}>
              <Services
                title="Популярные услуги"
                hasCost
                showDescription={false}
                showSubtitle
                descriptionText=""
              />
            </div>
          </section>

          <StandartText
            marginBottom
            texts={[
              normalizeText('Продажа товаров онлайн требует тщательной подготовки и\\u00A0эффективных инструментов. Калькуляторы нашего агентства помогают рассчитать аспекты рекламных кампаний, улучшая коэффициент конверсии, раскрутку, продвижение и\\u00A0увеличивая прибыль.'),
              normalizeText('Для расчета достаточно ввести данные, и\\u00A0калькулятор вычислит показатель эффективности с\\u00A0учетом стоимости и\\u00A0цены. Оставьте заявку на\\u00A0консультацию, чтобы узнать, как эффективно продавать свои товары и\\u00A0услуги. Наш менеджер свяжется с\\u00A0вами, чтобы предложить индивидуальное решение.')
            ]}
          />

          <FormFirst
            className={styles.formBlock}
            title="Обсудить проект"
            paragraph="Оставьте контакт и комментарий — подскажем, какие метрики важно отслеживать в вашем проекте."
            submitValue="Отправить"
            project
            projectPlaceholder="Комментарий (укажите, какие именно аспекты вас интересуют)"
          />
        </>
      )}
    </main>
  )
}

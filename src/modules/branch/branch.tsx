import { FC } from 'react'
import classNames from 'classnames'

import styles from './branch.module.scss'
import { BranchProps, BranchItemData } from './branch.types'
import { FavourItem } from '@/components'

const defaultBranchData: BranchItemData[] = [
  {
    title: 'E-commerce и ритейл',
    backgroundColor: '#18181B',
    textColor: '#FFFFFF',
    linkText: '',
    linkColor: '',
    list: [
      'Разработка интернет-магазинов и маркетплейсов',
      'SEO-оптимизация для роста органического трафика',
      'Performance-реклама для масштабирования продаж',
      'Контент-стратегия и визуальный брендинг'
    ]
  },
  {
    title: 'Web3, блокчейн и AI',
    backgroundColor: '#F9F9F9',
    textColor: '#18181B',
    linkText: '',
    linkColor: '',
    list: [
      'Токеномика и разработка маркетинговых стратегий для DAO',
      'PR и комьюнити-менеджмент в криптоиндустрии',
      'Листинг на биржах и маркетинг NFT-проектов'
    ]
  },
  {
    title: 'HoReCa',
    backgroundColor: '#CB172C',
    textColor: '#FFFFFF',
    linkText: '',
    linkColor: '',
    list: [
      'SMM и SERM-маркетинг',
      'Таргетированная реклама для привлечения гостей',
      'Автоматизация маркетинга и CRM-стратегии'
    ]
  }
]

const Branch: FC<BranchProps> = ({
  className,
  branchData = defaultBranchData,
  showTitle = true,
  title = 'Кому подходят наши услуги?',
  itemsPerRow = 3,
  listJustifyContent = 'flex-start',
  listAlignItems = 'flex-start',
  listFlexDirection = 'row',
  isTitleLeft = false,
  actionButton
}) => {
  const rootClassName = classNames(styles.root, className)
  const contentClassName = classNames(styles.content, styles[`content_${itemsPerRow}`])

  return (
    <div className={rootClassName}>
      <div className={styles.container}>
        {showTitle && (
          <h2 className={styles.title}>
            {title}
          </h2>
        )}
        <ul className={contentClassName}>
          {branchData.map((item, index) => (
            <FavourItem
              key={index}
              title={item.title}
              backgroundColor={item.backgroundColor}
              textColor={item.textColor}
              linkText={item.linkText}
              linkColor={item.linkColor}
              list={item.list}
              isTitleLeft={isTitleLeft}
              justifyContent={listJustifyContent}
              alignItems={listAlignItems}
              flexDirection={listFlexDirection}
              footer={item.footer}
              footerTitle={item.footerTitle}
            />
          ))}
        </ul>
        {actionButton && (
          <div className={styles.actionWrap}>
            {typeof actionButton === 'object' && actionButton !== null && 'label' in actionButton && 'href' in actionButton ? (
              <a href={actionButton.href} className={styles.actionButton}>
                {actionButton.label}
              </a>
            ) : (
              actionButton
            )}
          </div>
        )}
      </div>
    </div>
  )
}

export default Branch

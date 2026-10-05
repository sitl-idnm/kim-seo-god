'use client'

import { FC } from 'react'
import classNames from 'classnames'
import CheckIcon from '@icons/why/check.svg'
import FolderIcon from '@icons/why/folder.svg'
import HeartIcon from '@icons/why/heart.svg'
import PeopleIcon from '@icons/why/people.svg'

import styles from './why.module.scss'
import { WhyProps } from './why.types'

const defaultItemsData = [
	{
		icon: <CheckIcon className={styles.icon} />,
		title: 'Результативность',
		description: 'Гарантируем достижение поставленных целей и измеримых результатов'
	},
	{
		icon: <FolderIcon className={styles.icon} />,
		title: 'Широкий спектр услуг',
		description: 'Предоставляем полный комплекс digital-маркетинговых решений'
	},
	{
		icon: <PeopleIcon className={styles.icon} />,
		title: 'Долгосрочные отношения',
		description: 'Выстраиваем надежные партнерские отношения с каждым клиентом'
	},
	{
		icon: <HeartIcon className={styles.icon} />,
		title: 'Индивидуальный подход',
		description: 'Разрабатываем уникальные стратегии под ваши задачи'
	}
]

const WhyComponent: FC<WhyProps> = ({
	className,
	counter,
	direction = 'row',
	titleJustify = 'center',
	titleAlign = 'center',
	itemsData = defaultItemsData,
	cardsPerRow = 2,
	title = 'Почему мы?',
	showTitle = true,
	titleTextAlign = 'left',
	action
}) => {
	const rootClassName = classNames(styles.root, className, {
		[styles['root--counter']]: counter
	})
	const containerClassName = classNames(
		styles.container,
		styles[`container_${direction}`]
	)
	const titleWrapperClassName = classNames(
		styles.titleWrapper,
		styles[`titleWrapper_justify_${titleJustify}`],
		styles[`titleWrapper_align_${titleAlign}`]
	)
	const titleClassName = classNames(
		styles.title,
		styles[`title_${titleTextAlign}`]
	)
	const advantagesListClassName = classNames(
		styles.advantagesList,
		styles[`advantagesList_${cardsPerRow}`]
	)

	return (
		<div className={rootClassName}>
			<div className={containerClassName}>
				<div className={styles.content}>
					{showTitle && (
						<div className={titleWrapperClassName}>
							<h2 className={titleClassName}>{title}</h2>
						</div>
					)}
					<div className={styles.cardsColumn}>
						<div className={advantagesListClassName}>
							{itemsData.map((item, index) => (

								<div key={index} className={styles.advantageItem}>
									<div className={styles.iconWrapper}>
										{item.icon}
									</div>
									<h3 className={styles.advantageTitle}>{item.title}</h3>
									{item.description && (
										<p className={styles.advantageDescription}>{item.description}</p>)}
								</div>
							))}
						</div>
						{action != null && <div className={styles.actionWrap}>{action}</div>}
					</div>
				</div>
			</div>
		</div>
	)
}

export default WhyComponent

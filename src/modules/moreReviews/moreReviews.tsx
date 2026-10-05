import { FC } from 'react'
import classNames from 'classnames'
import Link from 'next/link'

import styles from './moreReviews.module.scss'
import { MoreReviewsProps } from './moreReviews.types'

// Импортируем иконки (пути могут отличаться)
import YandexMapsIcon from '@icons/yandex.svg'
import TwoGisIcon from '@icons/twogis.svg'

// Пример данных по умолчанию
const defaultLinks = [
	{
		id: 1,
		text: 'Яндекс Карты',
		url: 'https://yandex.ru/maps/', // Замените на реальную ссылку
		Icon: YandexMapsIcon,
	},
	{
		id: 2,
		text: '2ГИС',
		url: 'https://2gis.ru/', // Замените на реальную ссылку
		Icon: TwoGisIcon,
	},
]

const MoreReviews: FC<MoreReviewsProps> = ({
	className,
	title = 'Еще больше отзывов:',
	links = defaultLinks,
}) => {
	const rootClassName = classNames(styles.root, className)

	return (
		<div className={rootClassName}>
			<h3 className={styles.title}>{title}</h3>
			<div className={styles.linksContainer}>
				{links.map((link) => (
					<Link key={link.id} href={link.url} target="_blank" rel="noopener noreferrer" className={styles.linkItem}>
						<link.Icon className={styles.icon} />
					</Link>
				))}
			</div>
		</div>
	)
}

export default MoreReviews

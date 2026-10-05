import { ServiceCategory } from '@/shared/types/services'

export const categories: ServiceCategory[] = [
	{
		id: 'marketing',
		name: 'Маркетинг',
		slug: 'marketing',
		title: 'Маркетинг',
		description: 'Комплексное продвижение вашего бизнеса'
	},
	{
		id: 'design',
		name: 'Дизайн',
		slug: 'design',
		title: 'Дизайн',
		description: 'Создание уникального визуального образа'
	},
	{
		id: 'traffic',
		name: 'Трафик',
		slug: 'traffic',
		title: 'Трафик',
		description: 'Привлечение целевой аудитории'
	},
	{
		id: 'development',
		name: 'Разработка',
		slug: 'development',
		title: 'Разработка',
		description: 'Создание и поддержка сайтов'
	}
]

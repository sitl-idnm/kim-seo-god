import { FC } from 'react'
import classNames from 'classnames'

import styles from './contentCaseMagiyaVkusa.module.scss'
import { ContentCaseMagiyaVkusaProps } from './contentCaseMagiyaVkusa.types'
import { TextCase } from '@/components'

const ContentCaseMagiyaVkusa: FC<ContentCaseMagiyaVkusaProps> = ({
  className,
}) => {
  const rootClassName = classNames(styles.root, className)

  return (
    <div className={rootClassName}>
      <TextCase
        title={''}
        text={<>На главной странице мы разместили важную для пользователей информацию, которую необходимо показать, чтобы увеличить конверсию в заказ: информацию о скидке на первый заказ, выгоды, акции, каталог, информацию о стоимости, сроках и минимальной цене заказа, условия оплаты, возврата и доставки, плагин с отзывами на Яндекс.Картах, контакты.</>}
        image={'/images/cases/magiyavkusa/1.png'}
        id={''}
      />
      <TextCase
        title={''}
        text={<>В каталоге можно посмотреть как всю выпечку, так и отдельную категорию: сытная выпечка, сладкая выпечка, сеты, халяль. Здесь пользователи сразу могут увидеть цену, сокращенный состав и добавить понравившийся пирог в корзину.</>}
        image={'/images/cases/magiyavkusa/2.png'}
        id={''}
      />
      <TextCase
        title={''}
        text={<>В карточке товара можно посмотреть больше фотографий, узнать вес и полный состав пирога.</>}
        image={'/images/cases/magiyavkusa/3.png'}
        id={''}
      />
      <TextCase
        title={''}
        text={<>Корзина появляется в формате всплывающего виджета с количеством добавленных товаров и общей суммой. Анимация приближения иконки упаковки привлекает внимание к новому элементу. </>}
        image={'/images/cases/magiyavkusa/4.png'}
        id={''}
      />
      <TextCase
        title={''}
        text={<>Оформление заказа простое и понятное.</>}
        image={'/images/cases/magiyavkusa/5.png'}
        id={''}
      />
    </div>
  )
}

export default ContentCaseMagiyaVkusa

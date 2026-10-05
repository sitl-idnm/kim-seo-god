import MagiyaVkusa from '@views/casesPage/cases/magiyaVkusa'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Кейс: интернет-магазин пекарни «Магия Вкуса» | K.KIM',
  description: 'Разработка интернет-магазина на Webflow для пекарни в Москве. Каталог, корзина, онлайн-заказ пирогов. Кейс K.KIM.',
  alternates: { canonical: '/cases/magiya-vkusa' }
}

export default function Home() {
  return <MagiyaVkusa />
}

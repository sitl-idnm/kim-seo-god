/**
 * Ленивая централизованная загрузка GSAP и плагинов.
 *
 * Тяжёлый GSAP (core + ScrollTrigger + MotionPath) выносится из первоначального
 * JS-бандла: импортируется динамически только в момент инициализации анимации
 * (внутри эффекта компонента). Плагины регистрируются один раз на страницу.
 *
 * Использование:
 *   const { gsap, ScrollTrigger } = await loadGsap()
 */

let registered = false

export const loadGsap = async () => {
  const gsap = (await import('gsap')).default
  const { ScrollTrigger } = await import('gsap/ScrollTrigger')

  if (!registered) {
    gsap.registerPlugin(ScrollTrigger)
    registered = true
  }

  return { gsap, ScrollTrigger }
}

export const loadGsapWithMotionPath = async () => {
  const gsap = (await import('gsap')).default
  const { ScrollTrigger } = await import('gsap/ScrollTrigger')
  const { MotionPathPlugin } = await import('gsap/MotionPathPlugin')

  gsap.registerPlugin(ScrollTrigger, MotionPathPlugin)

  return { gsap, ScrollTrigger, MotionPathPlugin }
}

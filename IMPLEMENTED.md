# Что реализовано в этой копии (полный список)

Копия `Kimmy-SEO` с внедрёнными изменениями под лиды, SEO, AEO и GEO.
Полное ТЗ и стратегия — в корне workspace: `ТЗ-KIM-agency-сайт.md`.
Сборка проверена (`yarn build` → exit 0), страницы проверены в headless-браузере (0 ошибок консоли).

## 1. Безопасность и инфраструктура
- Токен Telegram-бота убран из кода → только из env; добавлены rate-limit (5/мин на IP) и honeypot. `src/app/api/lead/route.ts`
- `.env.example` с инструкцией. ⚠️ Старый токен нужно отозвать в @BotFather вручную.

## 2. Доступ ИИ-краулеров (GEO)
- `public/robots.txt`: GPTBot, OAI-SearchBot, PerplexityBot, Google-Extended, ClaudeBot, CCBot и др. переведены с `Disallow: /` на `Allow: /`.

## 3. Метаданные и граф сущностей
- Глобальные `metadata` (metadataBase, OpenGraph, Twitter, robots) + живой JSON-LD Organization + Person (Константин Ким) + WebSite с `sameAs`. `src/app/layout.tsx`
- `canonical` добавлен на все основные страницы (услуги, кейсы, блог, верхнеуровневые): главная + 5 флагман/услуг + 22 страницы.
- Убран ошибочный глобальный `canonical: '/'`; убран дублирующий бренд в title (title-шаблон).

## 4. Флагманская посадочная (новый оффер)
- `src/app/services/vnedrenie-ii/` — «Внедрение ИИ и ИИ-агентов в бизнес»: ответ-в-начале, реальные цифры кейсов, методология (диагностика→пилот→масштабирование), JSON-LD Service+Offer+FAQPage+BreadcrumbList, видимый FAQ, 2 CTA. Зарегистрирована в реестре услуг → в `/services` и sitemap.

## 5. Переработка 4 пустых услуг
- `seo`, `smm`, `serm`, `web-design`: из заглушек (`ServicePageTemplate`) → полноценные посадочные по каркасу флагмана. Уникальный контент, цены, Why-блоки, FAQ (видимый) + JSON-LD Service+Offer+FAQPage+Breadcrumb, canonical. Исправлен баг `cardsPerRow`.

## 6. Контент блога (AEO/GEO)
- 3 статьи кластера D (`src/views/blogsPage/articles/`):
  - `kak-vnedrit-ii-v-biznes` → ссылка на /services/vnedrenie-ii
  - `chem-ii-agent-otlichaetsya-ot-chat-bota` → на чат-боты и флагман
  - `pochemu-lidov-mnogo-a-prodazh-net` → на лидогенерацию
- Каждая: ответ-в-начале, оглавление, таблицы, FAQ + JSON-LD Article+FAQPage, внутренняя перелинковка.

## 7. Технический фундамент
- 301-редиректы дублей: `/blog`,`/blogpage`→`/blogs`; `/blog/:slug`→`/blogs/:slug`; `/ux-ui`→`/services/ux-ui`; `/lidogeneraciya`→`/services/lidogeneraciya`. `next.config.mjs`
- sitemap переписан: осмысленные priority/changefreq по типу, исключены дубли и тех. страницы. `src/app/sitemap.xml/route.ts`
- Исправлен битый URL в schema чат-ботов (`https://kim-agency/...` → `https://kim-agency.ru/services/...`).

## 8. Оптимизация изображений
- `util/img/optimize-images.mjs`: пережаты тяжёлые PNG/JPG без смены путей. **503.7 МБ → 41.4 МБ (−92%)**, 150 файлов. Ссылки не затронуты.

## Осталось вручную (нельзя из кода)
1. Отозвать старый токен бота в @BotFather, заполнить `.env.local`.
2. Добавить OG-картинку `public/og-image.jpg` (1200×630), раскомментировать `images` в `openGraph` (layout).
3. Уточнить точный адрес/ИНН в JSON-LD Organization (layout).
4. (Опц.) Нормализовать бренд в title: сейчас смесь «K.KIM» / «KIM.agency» (исторически). Задвоения нет.
5. `yarn && yarn build` → деплой.

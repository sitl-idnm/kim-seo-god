# Quick-wins, уже внедрённые в эту копию

Это копия `Kimmy-SEO`, в которую внесены приоритетные правки. Полное ТЗ — в корне workspace: `ТЗ-KIM-agency-сайт.md`.

| # | Что сделано | Файл | Зачем |
|---|---|---|---|
| 1 | Удалён захардкоженный токен Telegram-бота; секреты только из env; добавлены rate-limit (5/мин на IP) и honeypot-поле `company` | `src/app/api/lead/route.ts` | P0 безопасность + анти-спам заявок |
| 2 | ИИ-краулеры (GPTBot, OAI-SearchBot, PerplexityBot, Google-Extended, ClaudeBot, CCBot) переведены с `Disallow: /` на `Allow: /` | `public/robots.txt` | Попадание в ответы ChatGPT/Perplexity/Gemini/Claude |
| 3 | Добавлены глобальные `metadata` (metadataBase, title-template, OpenGraph, Twitter, robots) | `src/app/layout.tsx` | Корректный шаринг в мессенджерах, база под canonical/OG |
| 4 | Добавлен живой JSON-LD: Organization + WebSite + Person (Константин Ким) с `sameAs` | `src/app/layout.tsx` | Граф сущностей, E-E-A-T, связь сайта с личным брендом |
| 5 | Исправлены контакты: реальная почта `info@kim.agency`, ссылка VK | `src/components/contactsData/contactsData.tsx` | Был плейсхолдер `example@example.com` и почта=телефон |
| 6 | Исправлен баг «от от {цена}» в описаниях | `src/app/services/{seo,serm,smm}/page.tsx` | Корректные meta-description |
| 7 | Добавлен `.env.example` | `.env.example` | Понятная настройка окружения |

## ОБЯЗАТЕЛЬНО вручную после развёртывания
1. **Отозвать старый токен бота** `7862004029:...` в @BotFather (он утёк в git-историю оригинала) и выписать новый в `.env.local`.
2. Заполнить `.env.local` по образцу `.env.example`.
3. Добавить OG-картинку `public/og-image.jpg` (1200×630) и раскомментировать `images` в `openGraph` (`layout.tsx`).
4. `yarn && yarn build` — проверить сборку.

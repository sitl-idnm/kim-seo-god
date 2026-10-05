import type { ServiceData } from '@/app/services/smm/data'
import { sermData } from '@/app/services/serm/data'
import { seoData } from '@/app/services/seo/data'
import { webdesignData } from '@/app/services/web-design/data'
import { smmData } from '@/app/services/smm/data'
import { razrabotkaChatBotovPageData } from '@/app/services/razrabotka-chat-botov/data'
import { lidogeneraciyaData } from '@/app/services/lidogeneraciya/data'
import { uxUiData } from '@/app/services/ux-ui/data'
import { auditInternetMarketingData } from '@/app/services/audit-internet-marketinga/data'
import { kontekstnayaReklamaData } from '@/app/services/kontekstnaya-reklama/data'
import { tekhpodderzhkaData } from '@/app/services/tekhpodderzhka/data'
import { razrabotkaMobilnogoPrilozheniyaData } from '@/app/services/razrabotka-mobilnogo-prilozheniya/data'
import { sozdanieSaytovData } from '@/app/services/sozdanie-saytov/data'
import { firmenniyStilData } from '@/app/services/firmenniy-stil/data'
import { vnedrenieIiData } from '@/app/services/vnedrenie-ii/data'

export type { ServiceData }

// Объект со всеми услугами
export const servicesData: Record<string, ServiceData> = {
	'vnedrenie-ii': vnedrenieIiData,
	'smm': smmData,
	'web-design': webdesignData,
	'seo': seoData,
	'serm': sermData,
	'razrabotka-chat-botov': razrabotkaChatBotovPageData,
	'lidogeneraciya': lidogeneraciyaData,
	'ux-ui': uxUiData,
	'audit-internet-marketinga': auditInternetMarketingData,
	'kontekstnaya-reklama': kontekstnayaReklamaData,
	'tekhpodderzhka': tekhpodderzhkaData,
	'razrabotka-mobilnogo-prilozheniya': razrabotkaMobilnogoPrilozheniyaData,
	'sozdanie-saytov': sozdanieSaytovData,
	'firmenniy-stil': firmenniyStilData,
}

// Функция для получения данных конкретной услуги
export const getServiceData = (slug: string): ServiceData | undefined => {
	return servicesData[slug]
}

// Функция для получения списка всех услуг
export const getAllServices = (): ServiceData[] => {
	return Object.values(servicesData)
}

// Функция для получения списка всех slug'ов услуг
export const getAllServiceSlugs = (): string[] => {
	return Object.keys(servicesData)
}

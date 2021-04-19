import { createI18n } from 'vue-i18n'

import en from '@/lang/en.json'
import tw from '@/lang/zh_TW.json'
import cn from '@/lang/zh_CN.json'

const messages = {
  en,
  tw,
  cn
}

const i18n = createI18n({
  legacy: false,
  locale: 'tw',
  fallbackLocale: 'en',
  messages
})

export default i18n

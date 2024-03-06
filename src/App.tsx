import './App.css'
import i18n from 'i18next'
import { useTranslation, initReactI18next } from 'react-i18next'
import resourcesToBackend from 'i18next-resources-to-backend'
import en from './locales/en/translation.json'

i18n
  .use(
    resourcesToBackend((language, namespace, callback) => {
      console.log('namespace', namespace, language)
      callback(null, en)
    }),
  )
  .use(initReactI18next)
  .init({
    defaultNS: 'common',
    lng: 'en',
    fallbackLng: 'en',
    react: {
      useSuspense: false,
    },
    interpolation: {
      escapeValue: false,
    },
  })

function App() {
  const { t } = useTranslation()

  return (
    <>
      <h1>{t('my_key')}</h1>
    </>
  )
}

export default App

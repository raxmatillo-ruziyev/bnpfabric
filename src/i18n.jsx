import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import ru from '../public/locales/ru.json';
import uz from '../public/locales/uz.json';
import en from '../public/locales/en.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      ru: { translation: ru },
      uz: { translation: uz },
      en: { translation: en },
    },
    lng: 'ru', // boshlang'ich til
    fallbackLng: 'ru',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;

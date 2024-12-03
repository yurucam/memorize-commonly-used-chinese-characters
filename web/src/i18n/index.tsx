import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    resources: {
      ko: {
        translation: {
          'home.title': '🇯🇵 일본어 상용한자 외우기 프로젝트',
        },
      },
      en: {
        translation: {
          'home.title': '🇯🇵 Learn Japanese Kanji',
        },
      },
      fr: {
        translation: {
          'home.title': '🇯🇵 Apprenez les kanjis japonais',
        },
      },
    },
  });

export { i18n };

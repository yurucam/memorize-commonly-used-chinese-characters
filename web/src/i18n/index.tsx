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
          'home.group-list': '그룹 목록',
          'home.group-share': '그룹 공유',
        },
      },
      en: {
        translation: {
          'home.title': '🇯🇵 Learn Japanese Kanji',
          'home.group-list': 'Group List',
          'home.group-share': 'Group Share',
        },
      },
      fr: {
        translation: {
          'home.title': '🇯🇵 Apprenez les kanjis japonais',
          'home.group-list': 'Liste de groupes',
          'home.group-share': 'Partage de groupe',
        },
      },
    },
  });

export { i18n };

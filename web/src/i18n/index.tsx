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
          'home.my-group-list': '내 그룹 목록',
          'home.group-share-center': '그룹 공유 센터',
        },
      },
      en: {
        translation: {
          'home.title': '🇯🇵 Learn Japanese Kanji',
          'home.my-group-list': 'My Group List',
          'home.group-share-center': 'Group Share Center',
        },
      },
      fr: {
        translation: {
          'home.title': '🇯🇵 Apprenez les kanjis japonais',
          'home.my-group-list': 'Ma liste de groupes',
          'home.group-share-center': 'Centre de partage de groupe',
        },
      },
    },
  });

export { i18n };

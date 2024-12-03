import { Page, Navbar } from 'konsta/react';
import { useTranslation } from 'react-i18next';

export const Home = () => {
  const { t } = useTranslation();

  return (
    <>
      <Page>
        <Navbar title={t('home.title')} />
      </Page>
    </>
  );
};

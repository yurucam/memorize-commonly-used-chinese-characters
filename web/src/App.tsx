import { PGlite } from '@electric-sql/pglite';
import { PGliteProvider } from '@electric-sql/pglite-react';
import { live, PGliteWithLive } from '@electric-sql/pglite/live';
import { useEffect, useState } from 'react';
import { Router } from './router';
import { Konsta } from './ui';
import { I18nextProvider } from 'react-i18next';
import { i18n } from './i18n';
import { databaseInitialize } from './database/database-initialize';

export const App = () => {
  const [db, setDB] = useState<PGliteWithLive | null>(null);

  useEffect(() => {
    if (db) return;
    PGlite.create({
      extensions: { live },
      dataDir: 'idb://memorize-commonly-used-kanji',
    }).then(async (pglite) => {
      if (db) return;
      await pglite.waitReady;
      await databaseInitialize(pglite);
      setDB(pglite);
    });
  }, [db]);

  if (!db) {
    return (
      <Konsta.App theme="ios" safeAreas>
        <Konsta.Page>
          <div className="h-screen flex items-center justify-center">
            <Konsta.Preloader />
          </div>
        </Konsta.Page>
      </Konsta.App>
    );
  }

  return (
    <Konsta.App theme="ios" safeAreas>
      <PGliteProvider db={db}>
        <I18nextProvider i18n={i18n}>
          <Router />
        </I18nextProvider>
      </PGliteProvider>
    </Konsta.App>
  );
};

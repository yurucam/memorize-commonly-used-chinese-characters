import { PGlite } from '@electric-sql/pglite';
import { PGliteProvider } from '@electric-sql/pglite-react';
import {
  live,
  PGliteWithLive,
} from '@electric-sql/pglite/live';
import { useEffect, useState } from 'react';
import { Router } from './router';
import { Konsta } from './ui';

export const App = () => {
  const [db, setDB] = useState<PGliteWithLive | null>(null);

  useEffect(() => {
    if (db) return;
    PGlite.create({
      extensions: { live },
      dataDir:
        'idb://memorize-commonly-used-chinese-characters',
    }).then(async (pglite) => {
      await pglite.waitReady;
      if (db) return;
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
        <Router />
      </PGliteProvider>
    </Konsta.App>
  );
};

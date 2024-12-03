import { PGliteWithLive } from '@electric-sql/pglite/live';

export const databaseInitialize = async (db: PGliteWithLive) => {
  await db.query(`
    CREATE TABLE IF NOT EXISTS words (
      id SERIAL PRIMARY KEY,
      kanji TEXT NOT NULL,
      meaning TEXT NOT NULL,
      hiragana TEXT NOT NULL,
      starred BOOLEAN NOT NULL
    )
  `);
};

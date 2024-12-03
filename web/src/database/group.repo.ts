import { PGliteWithLive } from '@electric-sql/pglite/live';

export const useGroupRepo = (db: PGliteWithLive) => {
  return {
    findAll: async () => {
      const result = await db.query('SELECT * FROM groups;');
      console.log(result.rows);
    },
  };
};

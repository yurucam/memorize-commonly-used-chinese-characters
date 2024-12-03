import { usePGlite } from '@electric-sql/pglite-react';

export const MyComponent = () => {
  const db = usePGlite();

  const insertItem = async () => {
    await db.query('CREATE TABLE IF NOT EXISTS my_table (name TEXT, number INT);');

    await db.query("INSERT INTO my_table (name, number) VALUES ('Arthur', 42);");

    const result = await db.query('SELECT * FROM my_table;');

    console.log(result.rows);
  };

  return (
    <>
      <button onClick={insertItem}>test</button>
    </>
  );
};

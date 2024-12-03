import { PGlite } from '@electric-sql/pglite';
import { live } from '@electric-sql/pglite/live';
import { PGliteProvider } from '@electric-sql/pglite-react';
import { MyComponent } from './MyComponent';

const db = await PGlite.create({
  extensions: { live },
  dataDir: 'idb://my-pgdata',
});

function App() {
  return (
    <>
      <PGliteProvider db={db}>
        <MyComponent />
      </PGliteProvider>
    </>
  );
}

export default App;

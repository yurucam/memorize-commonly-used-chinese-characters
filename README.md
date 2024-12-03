# 🇯🇵 일본어 상용한자 외우기 프로젝트

- [PGlite](https://github.com/electric-sql/pglite)
  - [Vite를 사용할 경우 config 설정을 해줘야 함](https://pglite.dev/docs/bundler-support)
  - [React를 사용할 경우 제공되는 Hook을 사용할 수 있음](https://pglite.dev/docs/framework-hooks/react)
  - `const db = await PGlite.create({ dataDir: 'idb://my-pgdata' });`처럼 선언하여 indexedDB에 데이터를 영구 저장할 수 있음
  - 만들어진 데이터베이스는 `indexedDB.deleteDatabase('/pglite/my-pgdata');`처럼 지울 수 있음

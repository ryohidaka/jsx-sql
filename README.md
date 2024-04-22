# jsx-sql

[![npm version](https://badge.fury.io/js/jsx-sql.svg)](https://badge.fury.io/js/jsx-sql)
![build](https://github.com/ryohidaka/jsx-sql/workflows/Build/badge.svg)
[![codecov](https://codecov.io/gh/ryohidaka/jsx-sql/graph/badge.svg?token=RHP9TB2F51)](https://codecov.io/gh/ryohidaka/jsx-sql)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](https://opensource.org/licenses/MIT)

[![ko-fi](https://ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/B0B6TVH92)

## Overview

A SQL notation that mimic JSX.

## Notes

- This library is a tribute to the following X-posts.
  - https://x.com/RyanEls4/status/1781711077639688197
- Please understand that this is only a joke.

![Original Image from X](https://pbs.twimg.com/media/GLnoyCTX0AASc8E?format=jpg&name=900x900)

## Installation

You can install this library using npm:

```shell
npm install jsx-sql
```

## Usage

1. Create SQLite3 database.

```shell
touch ./db/sqlite.db
```

2. Insert data into database.

```shell
sqlite3 db/sqlite.db < db/init.sql
```

3. Wrap your app with the `SQLProvider` and provide `dbPath` property.

```tsx
import { SQLProvider } from "jsx-sql";

ReactDOM.render(
  <React.StrictMode>
    <SQLProvider dbPath="/db/sqlite.db">
      <App />
    </SQLProvider>
  </React.StrictMode>,
  document.getElementById("root"),
);
```

Use the provided hooks to fetch DB data:

```tsx
export default function Home() {
  const data = query(
    <Select>
      <Where>
        <Column name="status" value="paid" />
        <Column name="name" value="bob" />
      </Where>
      <Limit amount={5} />
    </Select>,
  );

  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {data.map((record, index) => (
          <tr key={index}>
            <td>{record[0]}</td>
            <td>{record[1]}</td>
            <td>{record[2]}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
```

## API

### Hooks

- `query(node)` - Build SQL query by JSX.Element and fetch data from DB.

### SQLProvider

The `SQLProvider` component should be used to wrap your app.

## Link

- [Original Post](https://x.com/RyanEls4/status/1781711077639688197)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

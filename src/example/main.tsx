import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { SQLProvider } from "..";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <SQLProvider dbPath="/db/sqlite.db">
      <App />
    </SQLProvider>
  </React.StrictMode>,
);

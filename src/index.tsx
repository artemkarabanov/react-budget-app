import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import {
  BadgetContextProvider,
  CurencyContextProvider,
  ExpensesContextProvider,
} from "contex";
import { GlobalStyles } from "./ui";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <BadgetContextProvider>
    <App />
  </BadgetContextProvider>
);

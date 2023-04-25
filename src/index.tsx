import {
  AppContext,
  CurrencyContextProvider,
  BudgetContextProvider,
  ExpensesContextProvider,
} from "./context";
import { GlobalStyles } from "./GlobalStyles";
import ReactDOM from "react-dom/client";
import { App } from "./App";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <AppContext
    components={[CurrencyContextProvider, BudgetContextProvider, ExpensesContextProvider]}
  >
    <GlobalStyles />
    <App />
  </AppContext>,
);

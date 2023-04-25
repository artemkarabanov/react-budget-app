import { ReactNode } from "react";
import { Currency } from "../../config";

export interface ICurrencyContextProviderProps {
  children: ReactNode;
}

export interface ICurrency {
  label: keyof typeof Currency;
  value: Currency;
}

export interface ICurrencyContext {
  curentCurrency: ICurrency;
  currencies: ICurrency[];
  setNewCurrency: (option: ICurrency) => void;
}

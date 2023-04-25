import { ReactNode } from "react";
import { StyledBudge } from "./styles";
import { useCurrencyContext } from "../../context";

interface IProps {
  value: string;
}

export const Badge = ({ value }: IProps) => {
  const { curentCurrency } = useCurrencyContext();
  return (
    <StyledBudge>
      {curentCurrency.value}
      {value}
    </StyledBudge>
  );
};

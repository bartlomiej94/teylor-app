import { objectToCurrencyValue } from "./utils";
import { G_TRateSelectedCurrencies } from "../types/globalTypes";

export const calcCurrencyPairRate = (
  data: any,
  selectedCurrencies: G_TRateSelectedCurrencies
) => {
  if (!data || selectedCurrencies.includes(null)) return;

  console.log(data);

  const baseCurrencyValue = objectToCurrencyValue(data, selectedCurrencies[0]);
  const quoteCurrencyValue = objectToCurrencyValue(data, selectedCurrencies[1]);

  if (quoteCurrencyValue && baseCurrencyValue)
    return quoteCurrencyValue / baseCurrencyValue;
};

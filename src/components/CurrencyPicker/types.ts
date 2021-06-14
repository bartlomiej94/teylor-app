import { G_TRate, G_TRateSelectedCurrencies } from "../../types/globalTypes";

export type TCurrencyPickerProps = {
  selectedCurrencies: G_TRateSelectedCurrencies;
  setSelectedCurrencies: (value: G_TRateSelectedCurrencies) => void;
  currentRateDetails?: G_TRate;
  setCurrentRateDetails: (value: G_TRate) => void;
  baseCurrencyAmount: number;
  setBaseCurrencyAmount: (value: number) => void;
};

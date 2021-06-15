import {
  G_TRateSelectedCurrencies,
  G_IRatesMap,
  G_TPastData,
} from "../../types/globalTypes";

export type TExchangeTable = {
  liveData?: G_IRatesMap;
  pastData?: G_TPastData[];
  selectedCurrencies: G_TRateSelectedCurrencies;
  isDateRangeSelected: boolean;
  baseCurrencyAmount: number;
};

export type TOtherCurrenciesDataSource = {
  key: number;
  currency: string;
  rate: string;
  amount: string;
};

export type TPastDataSource = {
  date: string;
  rate: string;
  amount: string;
};

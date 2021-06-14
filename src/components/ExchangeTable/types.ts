import { G_TRateSelectedCurrencies } from "../../types/globalTypes";

export type TExchangeTable = {
  liveData: any;
  pastData: any;
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

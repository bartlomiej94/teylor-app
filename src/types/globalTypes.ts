export type G_TRateSelectedCurrencies = (string | null)[];

export type G_TRate = {
  currency: string;
  rate: number;
  value: number | undefined;
};

export interface G_IRatesMap {
  [name: string]: number;
}

interface IDisplayedRatesMap {
  [name: string]: string;
}

export type G_TPastData = {
  date: string;
  rates: IDisplayedRatesMap;
};

export type G_TRateDetails = {
  currency: string;
  rate: number;
  value: number;
};

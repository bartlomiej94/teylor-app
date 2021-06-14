import { calcCurrencyPairRate } from "../../utils/math";

import { TOtherCurrenciesDataSource, TPastDataSource } from "./types";
import {
  G_TRateSelectedCurrencies,
  G_IRatesMap,
  G_TPastData,
} from "../../types/globalTypes";

export const mapOtherCurrenciesData = (
  data: G_IRatesMap,
  baseCurrencyAmount: number
) => {
  if (!data || !baseCurrencyAmount) return;
  const dataSource: TOtherCurrenciesDataSource[] = [];

  Object.keys(data).forEach((key: string, index: number) => {
    dataSource.push({
      key: index,
      currency: key,
      rate: data[key].toFixed(4),
      amount: (baseCurrencyAmount * data[key]).toFixed(4),
    });
  });

  return dataSource;
};

export const mapPastData = (
  data: G_TPastData[],
  baseCurrencyAmount: number,
  selectedCurrencies: G_TRateSelectedCurrencies
) => {
  if (!data) return;

  const dataSource: TPastDataSource[] = data.map((item: G_TPastData) => {
    const rate = calcCurrencyPairRate(item.rates, selectedCurrencies);
    return {
      date: item.date,
      rate: rate!.toFixed(4),
      amount: (rate! * baseCurrencyAmount).toFixed(4),
    };
  });

  return dataSource;
};

export const pastDataColumns = [
  {
    title: "Date",
    dataIndex: "date",
    key: "date",
  },
  {
    title: "Rate",
    dataIndex: "rate",
    key: "rate",
  },
  {
    title: "Amount",
    dataIndex: "amount",
    key: "amount",
  },
];

export const otherCurrenciesColumns = [
  {
    title: "Currency",
    dataIndex: "currency",
    key: "currency",
  },
  {
    title: "Rate",
    dataIndex: "rate",
    key: "rate",
  },
  {
    title: "Amount",
    dataIndex: "amount",
    key: "amount",
  },
];

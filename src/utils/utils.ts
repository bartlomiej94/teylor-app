import { G_IRatesMap } from "../types/globalTypes";

export const objectToCurrencyValue = (
  allCurrencyValues: G_IRatesMap,
  baseCurrencyName: string | null
) => {
  if (allCurrencyValues && baseCurrencyName) {
    return allCurrencyValues[baseCurrencyName];
  }
};

export const mapPastDataToRatesArray = (data: any) => {
  if (!data) return [];
  const mappedData = data.map((item: any) => {
    return {
      date: item.date,
      rates: item.rates,
    };
  });

  return mappedData;
};

export const getAndParseTodaysDate = () => {
  const date = new Date();
  const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  const hour = date.getHours();
  const minute =
    date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes();
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();

  return `${day}-${month}-${year} ${hour}:${minute} (${timezone})`;
};

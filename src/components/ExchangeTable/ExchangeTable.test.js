import { mapOtherCurrenciesData, mapPastData } from "./utils";
import { calcCurrencyPairRate } from "../../utils/math";

const rates = {
  EUR: 1.5,
  GBP: 1.7,
  USD: 1.3,
};
const baseAmount = 1000;

describe("<ExchangeTable />", () => {
  it("Maps other currencies data for display.", () => {
    const expectedResult = [
      {
        key: 0,
        currency: "EUR",
        rate: (1.5).toFixed(4),
        amount: (1.5 * baseAmount).toFixed(4),
      },
      {
        key: 1,
        currency: "GBP",
        rate: (1.7).toFixed(4),
        amount: (1.7 * baseAmount).toFixed(4),
      },
      {
        key: 2,
        currency: "USD",
        rate: (1.3).toFixed(4),
        amount: (1.3 * baseAmount).toFixed(4),
      },
    ];

    expect(mapOtherCurrenciesData(rates, baseAmount)).toEqual(expectedResult);
  });
  it("Maps past data for display.", () => {
    const selectedCurrencies = ["GBP", "USD"];
    const data = [
      {
        date: "2021-06-07",
        rates,
      },
      {
        date: "2021-06-06",
        rates,
      },
      {
        date: "2021-06-05",
        rates,
      },
    ];

    const rate = calcCurrencyPairRate(rates, selectedCurrencies);

    const expectedResult = [
      {
        date: "2021-06-07",
        rate: calcCurrencyPairRate(rates, selectedCurrencies).toFixed(4),
        amount: (
          calcCurrencyPairRate(rates, selectedCurrencies) * baseAmount
        ).toFixed(4),
      },
      {
        date: "2021-06-06",
        rate: calcCurrencyPairRate(rates, selectedCurrencies).toFixed(4),
        amount: (
          calcCurrencyPairRate(rates, selectedCurrencies) * baseAmount
        ).toFixed(4),
      },
      {
        date: "2021-06-05",
        rate: calcCurrencyPairRate(rates, selectedCurrencies).toFixed(4),
        amount: (
          calcCurrencyPairRate(rates, selectedCurrencies) * baseAmount
        ).toFixed(4),
      },
    ];

    expect(mapPastData(data, baseAmount, selectedCurrencies)).toEqual(
      expectedResult
    );
  });
});

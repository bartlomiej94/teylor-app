import { objectToCurrencyValue, mapPastDataToRatesArray } from "./utils/utils";

const rates = {
  EUR: 1.5,
  GBP: 1.7,
  USD: 1.3,
};

describe("<App />", () => {
  it("Converts object into currency value.", () => {
    const baseCurrencyName = "USD";
    const expectedResult = 1.3;

    expect(objectToCurrencyValue(rates, baseCurrencyName)).toEqual(
      expectedResult
    );
  });
});

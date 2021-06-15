import {
  getFavoriteCurrencyStatus,
  mapSearchToSelectedCurrencies,
} from "./utils";

const allCurrencyNames = [
  { name: "USD", isFavorite: false },
  { name: "EUR", isFavorite: false },
  { name: "GBP", isFavorite: false },
  { name: "JPY", isFavorite: true },
];

describe("<CurrencyPicker />", () => {
  it("Reads a currency as favorite.", () => {
    const selectedCurrencies = ["JPY", "GBP"];
    const storageName = `teylor_fav_${selectedCurrencies[0]}`;
    localStorage.setItem(storageName, "true");

    expect(
      getFavoriteCurrencyStatus(selectedCurrencies, allCurrencyNames)
    ).toEqual(true);
  });

  it("Searches for currency on user text input.", () => {
    let searchString = "EUR";
    let selectedCurrencies = ["", ""];
    const setSelectedCurrencies = (selectedCurs) => {
      selectedCurrencies = selectedCurs;
    };
    const setSearch = (value) => {
      searchString = value;
    };

    expect(
      mapSearchToSelectedCurrencies(
        searchString,
        selectedCurrencies,
        () => setSelectedCurrencies(selectedCurrencies),
        () => setSearch(searchString)
      )
    ).toEqual(["EUR", ""]);
  });
});

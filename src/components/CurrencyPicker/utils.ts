import {
  G_TRateSelectedCurrencies,
  G_TNameWithFavoriteFlag,
} from "../../types/globalTypes";

export const getUpdatedFavoriteCurrencies = (allNames: string[]) => {
  const mappedNames: G_TNameWithFavoriteFlag[] = allNames.map(
    (name: string) => {
      const storageName = `teylor_fav_${name}`;
      return {
        name,
        isFavorite: localStorage.getItem(storageName) === "true",
      };
    }
  );

  return mappedNames;
};

export const setFavoriteCurrency = (
  selectedCurrencies: G_TRateSelectedCurrencies,
  allCurrencyNames: G_TNameWithFavoriteFlag[] | undefined,
  setIsSelectedCurrencyFavorite: (value: boolean) => void
) => {
  if (!allCurrencyNames) return;

  const storageName = `teylor_fav_${selectedCurrencies[0]}`;
  const currentlyStoredValue = localStorage.getItem(storageName);
  let isFavorite;

  if (!currentlyStoredValue || currentlyStoredValue === "false") {
    isFavorite = true;
  } else {
    isFavorite = false;
  }

  setIsSelectedCurrencyFavorite(isFavorite);
  localStorage.setItem(storageName, isFavorite.toString());
};

export const getFavoriteCurrencyStatus = (
  selectedCurrencies: G_TRateSelectedCurrencies,
  allCurrencyNames: G_TNameWithFavoriteFlag[] | undefined
) => {
  if (!allCurrencyNames) return false;

  const storageName = `teylor_fav_${selectedCurrencies[0]}`;
  const currentlyStoredValue = localStorage.getItem(storageName);

  return currentlyStoredValue === "true";
};

export const mapSearchToSelectedCurrencies = (
  search: string,
  selectedCurrencies: G_TRateSelectedCurrencies,
  setSelectedCurrencies: (value: G_TRateSelectedCurrencies) => void,
  setSearch: (value: string) => void
) => {
  const newSelectedCurrencies = [...selectedCurrencies];
  const value = search.toUpperCase();
  setSearch(value);

  if (value.length === 3) {
    newSelectedCurrencies[0] = value;
  } else if (value.length === 6) {
    newSelectedCurrencies[0] = value.substr(0, 3);
    newSelectedCurrencies[1] = value.substr(3, 6);
  }

  setSelectedCurrencies(newSelectedCurrencies);

  return newSelectedCurrencies;
};

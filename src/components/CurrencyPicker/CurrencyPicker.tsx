import React, { useState, useEffect } from "react";
import DropdownMenu from "../shared/DropdownMenu/DropdownMenu";
import InputField from "../shared/InputField/InputField";

import { TCurrencyPickerProps } from "./types";
import { G_TNameWithFavoriteFlag } from "../../types/globalTypes";

import { Menu } from "antd";

import { fetchAllCurrencyNames } from "./fetch";
import {
  getUpdatedFavoriteCurrencies,
  setFavoriteCurrency,
  getFavoriteCurrencyStatus,
  mapSearchToSelectedCurrencies,
} from "./utils";

import styles from "./CurrencyPicker.module.scss";

const CurrencyPicker = ({
  selectedCurrencies,
  setSelectedCurrencies,
  currentRateDetails,
  setCurrentRateDetails,
  baseCurrencyAmount,
  setBaseCurrencyAmount,
}: TCurrencyPickerProps) => {
  const [allCurrencyNames, setAllCurrencyNames] =
    useState<G_TNameWithFavoriteFlag[] | undefined>();
  const [isSelectedCurrencyFavorite, setIsSelectedCurrencyFavorite] =
    useState<boolean>(false);
  const [search, setSearch] = useState<string>("");

  useEffect(() => {
    // Fetch all currency names and store them to be used in dropdowns, inluding favorite flag.
    const fetch = async () => {
      const allNames = await fetchAllCurrencyNames();
      const allNamesWithFavorites = getUpdatedFavoriteCurrencies(allNames);
      setAllCurrencyNames(allNamesWithFavorites);
    };
    if (!allCurrencyNames) fetch();
  }, []);

  useEffect(() => {
    const isFavorite = getFavoriteCurrencyStatus(
      selectedCurrencies,
      allCurrencyNames
    );
    setIsSelectedCurrencyFavorite(isFavorite);
  }, [selectedCurrencies]);

  useEffect(() => {
    // Update rates with their values after user input.
    if (currentRateDetails) {
      const rate = currentRateDetails;
      rate.value = baseCurrencyAmount * rate.rate;
      setCurrentRateDetails(rate);
    }
  }, [baseCurrencyAmount, selectedCurrencies]);

  const onBaseCurrencyAmountBlur = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBaseCurrencyAmount(parseFloat(e.target.value));
  };

  const onSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    mapSearchToSelectedCurrencies(
      e.target.value,
      selectedCurrencies,
      setSelectedCurrencies,
      setSearch
    );
  };

  const onInteractiveIconClick = () => {
    // Update favorite currencies.
    if (selectedCurrencies[0] !== null) {
      setFavoriteCurrency(
        selectedCurrencies,
        allCurrencyNames,
        setIsSelectedCurrencyFavorite
      );
      const allNamesWithFavorites = getUpdatedFavoriteCurrencies(allNames);
      setAllCurrencyNames(allNamesWithFavorites);
    }
  };

  const setSelectedCurrency = (key: number, index: number) => {
    // Triggered whenever user changes base or quote currency.
    if (!allCurrencyNames) return;
    const allNames = allCurrencyNames.map((name) => name.name);
    const value = allNames[key];
    const arr = [...selectedCurrencies];
    arr[index] = value;
    setSelectedCurrencies(arr);
  };

  if (!allCurrencyNames) return null;

  const allNames = allCurrencyNames.map((name) => name.name);

  const menuContent = allNames.map((currencyName: string, index: number) => {
    return <Menu.Item key={index}>{currencyName}</Menu.Item>;
  });

  return (
    <div className={styles.container}>
      <div className={styles.picker}>
        <InputField
          id="CurrencyPicker_Input_Amount"
          type="number"
          min={0}
          placeholder="Amount"
          onBlur={(e: React.ChangeEvent<HTMLInputElement>) =>
            onBaseCurrencyAmountBlur(e)
          }
          isInteractiveIconFilled={isSelectedCurrencyFavorite}
          interactiveIconCallback={onInteractiveIconClick}
        />
        {selectedCurrencies.map(
          (selectedCurrency: string | null, index: number) => {
            return (
              <DropdownMenu
                key={index}
                index={index}
                title={selectedCurrency || `Cur ${index + 1}`}
                menuContent={menuContent}
                setSelectedCurrency={setSelectedCurrency}
              />
            );
          }
        )}
      </div>
      <div>
        <InputField
          id="CurrencyPicker_Input_Search"
          value={search}
          maxLength={6}
          placeholder="Start searching (e.g. EURUSD)"
          onChange={onSearchChange}
          searchbar
        />
      </div>
    </div>
  );
};

export default CurrencyPicker;

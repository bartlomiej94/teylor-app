import React, { useState, useEffect } from "react";
import DropdownMenu from "../shared/DropdownMenu/DropdownMenu";
import InputField from "../shared/InputField/InputField";

import { TCurrencyPickerProps } from "./types";

import { Menu } from "antd";

import { fetchAllCurrencyNames } from "./fetch";

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
    useState<string[] | undefined>();

  useEffect(() => {
    // Fetch all currency names and store them to be used in dropdowns.
    const fetch = async () => {
      setAllCurrencyNames(await fetchAllCurrencyNames());
    };
    if (!allCurrencyNames) fetch();
  }, []);

  useEffect(() => {
    // Update rates with their values after user input.
    if (currentRateDetails) {
      const rate = currentRateDetails;
      rate.value = baseCurrencyAmount * rate.rate;
      setCurrentRateDetails(rate);
    }
  }, [baseCurrencyAmount, selectedCurrencies]);

  const onBaseCurrencyAmountChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setBaseCurrencyAmount(parseFloat(e.target.value));
  };

  const setSelectedCurrency = (key: number, index: number) => {
    // Triggered whenever user changes base or quote currency.
    const value = allCurrencyNames![key];
    const arr = [...selectedCurrencies];
    arr[index] = value;
    setSelectedCurrencies(arr);
  };

  if (!allCurrencyNames) return null;

  const menuContent = allCurrencyNames.map(
    (currencyName: string, index: number) => {
      return <Menu.Item key={index}>{currencyName}</Menu.Item>;
    }
  );

  return (
    <div className={styles.container}>
      <InputField
        type="number"
        min={0}
        placeholder="Amount"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          onBaseCurrencyAmountChange(e)
        }
        interactiveIconOptions={true}
      />
      {selectedCurrencies.map(
        (selectedCurrency: string | null, index: number) => {
          return (
            <DropdownMenu
              key={index}
              index={index}
              title={selectedCurrency || `Currency ${index + 1}`}
              menuContent={menuContent}
              setSelectedCurrency={setSelectedCurrency}
            />
          );
        }
      )}
    </div>
  );
};

export default CurrencyPicker;

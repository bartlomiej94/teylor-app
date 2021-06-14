import React, { useState, useEffect } from "react";

import CurrencyPicker from "./components/CurrencyPicker/CurrencyPicker";
import ExchangeRate from "./components/ExchangeRate/ExchangeRate";
import ExchangeTable from "./components/ExchangeTable/ExchangeTable";
import NoExchange from "./components//NoExchange/NoExchange";
import DatePicker from "./components/shared/RangePicker/RangePicker";

import { fetchLiveData, fetchPastData } from "./fetch/global";
import { mapPastDataToRatesArray } from "./utils/utils";
import { calcCurrencyPairRate } from "./utils/math";

import { G_TRate, G_TPastData, G_TRateDetails } from "./types/globalTypes";

import "./App.scss";
import "antd/dist/antd.css";

const App = () => {
  const [selectedCurrencies, setSelectedCurrencies] = useState<
    (string | null)[]
  >([null, null]);
  const [liveData, setLiveData] = useState<Object>(); // Fix any type for live and past
  const [pastData, setPastData] = useState<G_TPastData[]>();
  const [currentRateDetails, setCurrentRateDetails] =
    useState<G_TRate | undefined>();
  const [baseCurrencyAmount, setBaseCurrencyAmount] = useState<number>(0);
  const [selectedDateRange, setSelectedDateRange] = useState<string[]>([
    "",
    "",
  ]);

  useEffect(() => {
    // Fetch all live data on load.
    if (!liveData) {
      const fetch = async () => {
        setLiveData(await fetchLiveData());
      };

      fetch();
    }
  }, []);

  useEffect(() => {
    // Fetch past data after user chooses day range.
    if (selectedDateRange.length) {
      const fetch = async () => {
        const data = await fetchPastData(
          selectedDateRange[0],
          selectedDateRange[1]
        );

        setPastData(mapPastDataToRatesArray(data));
      };

      fetch();
    }
  }, [selectedDateRange]);

  useEffect(() => {
    // Calculate currency flat values & rate based on current EUR rate.
    const rate = calcCurrencyPairRate(liveData, selectedCurrencies);

    // Store rate for the user chosen currency pair.
    if (rate) {
      const rateDetails: G_TRateDetails = {
        currency: selectedCurrencies[1]!,
        rate,
        value: parseFloat((baseCurrencyAmount * rate).toFixed(2)),
      };
      setCurrentRateDetails(rateDetails);
    }
  }, [selectedCurrencies, baseCurrencyAmount]);

  const onRangePickerChange = (values: any, formatString: [string, string]) => {
    setSelectedDateRange(formatString);
  };

  const showExchange = baseCurrencyAmount && !selectedCurrencies.includes(null);

  return (
    <div className="App">
      <CurrencyPicker
        selectedCurrencies={selectedCurrencies}
        setSelectedCurrencies={setSelectedCurrencies}
        currentRateDetails={currentRateDetails}
        setCurrentRateDetails={setCurrentRateDetails}
        baseCurrencyAmount={baseCurrencyAmount}
        setBaseCurrencyAmount={setBaseCurrencyAmount}
      />
      <DatePicker onChange={onRangePickerChange} />
      {!!showExchange ? (
        <>
          <ExchangeRate
            header={`Total amount in ${selectedCurrencies[1]}`}
            currentRateDetails={currentRateDetails}
          />
          {/* 
          If time allowed large data like liveData and pastData would ideally not be passed to
          ExchangeTable as props to improve performance.
        */}
          <ExchangeTable
            liveData={liveData}
            pastData={pastData}
            selectedCurrencies={selectedCurrencies}
            isDateRangeSelected={!selectedDateRange.includes("")}
            baseCurrencyAmount={baseCurrencyAmount}
          />
        </>
      ) : (
        <NoExchange />
      )}
    </div>
  );
};

export default App;

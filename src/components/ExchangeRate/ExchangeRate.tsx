import React from "react";
import InputField from "../shared/InputField/InputField";

import { getAndParseTodaysDate } from "../../utils/utils";

import { TExchangeRateProps } from "./types";

import styles from "./ExchangeRate.module.scss";

const ExchangeRate = ({ header, currentRateDetails }: TExchangeRateProps) => {
  if (!currentRateDetails) return null;
  return (
    <div className={styles.container}>
      <div className={styles.inputGroup}>
        <h3>{header}</h3>
        <InputField value={currentRateDetails.value} size="large" isDisabled />
      </div>
      <div className={styles.inputGroup}>
        <h3>Current exchange rate</h3>
        <InputField value={currentRateDetails.rate} size="large" isDisabled />
      </div>
      <h5>As of: {getAndParseTodaysDate()}</h5>
    </div>
  );
};

export default ExchangeRate;

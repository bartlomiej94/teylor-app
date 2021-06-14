import { Table } from "antd";

import { TExchangeTable } from "./types";

import {
  mapOtherCurrenciesData,
  mapPastData,
  pastDataColumns,
  otherCurrenciesColumns,
} from "./utils";

import styles from "./ExchangeTable.module.scss";

const ExchangeTable = ({
  liveData,
  pastData,
  selectedCurrencies,
  isDateRangeSelected,
  baseCurrencyAmount,
}: TExchangeTable) => {
  const dataSource: any = isDateRangeSelected
    ? mapPastData(pastData, baseCurrencyAmount, selectedCurrencies)
    : mapOtherCurrenciesData(liveData, baseCurrencyAmount);

  const columns = isDateRangeSelected
    ? pastDataColumns
    : otherCurrenciesColumns;

  return (
    <div className={styles.container}>
      <h4>{isDateRangeSelected ? "Past" : "Other currencies"}</h4>
      <Table
        dataSource={dataSource}
        columns={columns}
        pagination={{ pageSize: 5, position: ["bottomCenter"] }}
      />
    </div>
  );
};

export default ExchangeTable;

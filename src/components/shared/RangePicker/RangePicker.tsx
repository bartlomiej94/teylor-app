import { DatePicker as AntdDatePicker } from "antd";
import moment from "moment";

import { TRangePickerProps } from "./types";

import styles from "./RangePicker.module.scss";

const AntdRangePicker = AntdDatePicker.RangePicker;

const RangePicker = ({ onChange }: TRangePickerProps) => {
  return (
    <div className={styles.container}>
      <AntdRangePicker
        className={styles.rangePicker}
        onChange={(values, formatString) => onChange(values, formatString)}
        ranges={{
          "This Week": [moment().startOf("week"), moment().endOf("week")],
          "This Month": [moment().startOf("month"), moment().endOf("month")],
        }}
      />
    </div>
  );
};

export default RangePicker;

import { ChangeEvent } from "react";
import moment from "moment";

export type TRangePickerProps = {
  onChange: (values: any, formatString: [string, string]) => void;
};

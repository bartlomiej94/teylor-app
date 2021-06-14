import { ChangeEvent } from "react";
import { SizeType } from "antd/lib/config-provider/SizeContext";

export type TInputField = {
  value?: number;
  isDisabled?: boolean;
  size?: SizeType;
  type?: string;
  min?: number;
  placeholder?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  interactiveIconOptions?: any;
};

import { ChangeEvent, MouseEventHandler } from "react";
import { SizeType } from "antd/lib/config-provider/SizeContext";

export type TInputField = {
  id: string;
  value?: number | string;
  isDisabled?: boolean;
  size?: SizeType;
  type?: string;
  min?: number;
  maxLength?: number;
  placeholder?: string;
  onBlur?: (e: ChangeEvent<HTMLInputElement>) => void;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  isInteractiveIconFilled?: boolean;
  interactiveIconCallback?: () => void;
  searchbar?: boolean;
};

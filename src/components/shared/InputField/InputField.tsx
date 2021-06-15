import InteractiveIcon from "../UI/InteractiveIcon/InteractiveIcon";

import { Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";

import { TInputField } from "./types";

import styles from "./InputField.module.scss";

const InputField = ({
  id,
  value,
  isDisabled,
  size,
  type,
  min,
  maxLength,
  placeholder,
  onBlur,
  onChange,
  isInteractiveIconFilled,
  interactiveIconCallback,
  searchbar,
}: TInputField) => {
  return (
    <div className={styles.container}>
      <Input
        id={id}
        className={styles.inputContainer}
        value={value}
        disabled={isDisabled}
        size={size}
        type={type}
        min={min}
        maxLength={maxLength}
        placeholder={placeholder}
        onBlur={onBlur}
        onChange={onChange}
      />
      {searchbar && (
        <div className={styles.iconContainer}>
          <SearchOutlined />
        </div>
      )}
      {!!interactiveIconCallback && (
        <InteractiveIcon
          classes={styles.iconContainer}
          onClick={interactiveIconCallback}
          isFilled={isInteractiveIconFilled}
        />
      )}
    </div>
  );
};

export default InputField;

import InteractiveIcon from "../UI/InteractiveIcon/InteractiveIcon";

import { Input } from "antd";

import { TInputField } from "./types";

import styles from "./InputField.module.scss";

const InputField = ({
  value,
  isDisabled,
  size,
  type,
  min,
  placeholder,
  onChange,
  interactiveIconOptions,
}: TInputField) => {
  return (
    <div className={styles.container}>
      <Input
        className={styles.inputContainer}
        value={value}
        disabled={isDisabled}
        size={size}
        type={type}
        min={min}
        placeholder={placeholder}
        onBlur={onChange}
      />
      {!!interactiveIconOptions && (
        <InteractiveIcon classes={styles.iconContainer} />
      )}
    </div>
  );
};

export default InputField;

import { MouseEventHandler } from "react";

export type TInteractiveIconProps = {
  classes: string;
  onClick?: MouseEventHandler<HTMLSpanElement>;
  isFilled?: boolean;
};

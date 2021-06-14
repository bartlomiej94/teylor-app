import { StarOutlined, StarFilled, StarTwoTone } from "@ant-design/icons";

import { TInteractiveIconProps } from "./types";

const InteractiveIcon = ({ classes }: TInteractiveIconProps) => {
  return (
    <div className={classes}>
      <StarOutlined />
    </div>
  );
};

export default InteractiveIcon;

import { StarOutlined, StarFilled } from "@ant-design/icons";

import { TInteractiveIconProps } from "./types";

const InteractiveIcon = ({
  classes,
  onClick,
  isFilled,
}: TInteractiveIconProps) => {
  return (
    <div className={classes}>
      {isFilled ? (
        <StarFilled onClick={onClick} />
      ) : (
        <StarOutlined onClick={onClick} />
      )}
    </div>
  );
};

export default InteractiveIcon;

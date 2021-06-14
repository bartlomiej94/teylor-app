import { Dropdown, Menu } from "antd";
import { DownOutlined } from "@ant-design/icons";

import { TDropdownMenuProps } from "./types";

import styles from "./DropdownMenu.module.scss";

const DropdownMenu = ({
  index,
  title,
  menuContent,
  setSelectedCurrency,
}: TDropdownMenuProps) => {
  const menu = (
    <Menu
      className={styles.menu}
      onClick={(e) => setSelectedCurrency(parseInt(e.key), index)}
    >
      {menuContent}
    </Menu>
  );

  return (
    <Dropdown.Button
      overlay={menu}
      placement="bottomRight"
      icon={<DownOutlined />}
    >
      {title}
    </Dropdown.Button>
  );
};

export default DropdownMenu;

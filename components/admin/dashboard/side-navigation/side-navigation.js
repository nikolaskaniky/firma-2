import React from "react";
import classes from "./side-navigation.module.scss";
import menu from "../../../../assets/images/dashboard/menu.svg";
import useStickyValue from "../../../HOOKS/sticky-state";
import Image from "next/image";
import Box from "../../../UI/box/box";

const SideNavigation = (props) => {
  const { array, onMenuItemClick, selectedMenu } = props;
  const [menuIsActive, setMenuIsActive] = useStickyValue(
    true,
    "dashboardMenuIsActive"
  );
  const menuIsActiveHandler = () =>
    setMenuIsActive((prev) => setMenuIsActive(!prev));

  return (
    <Box
      style={`${classes["menu-list"]} ${
        menuIsActive ? classes.active : undefined
      }`}
    >
      <div className={classes["menu-box"]} onClick={menuIsActiveHandler}>
        <Image
          src={menu}
          width={20}
          height={20}
          alt="svg"
          className={classes.img}
        />
      </div>

      {array.map((obj, index) => (
        <li key={index} onClick={() => onMenuItemClick(obj.name)}>
          <div
            className={`${classes["svg-box"]} ${
              selectedMenu === obj.name ? classes.active : undefined
            }`}
          >
            {obj.image}
          </div>

          <p
            className={`${
              selectedMenu === obj.name ? classes.active : undefined
            } ${!menuIsActive ? classes.invisible : undefined}`}
          >
            {obj.name}
          </p>
        </li>
      ))}
    </Box>
  );
};

export default SideNavigation;

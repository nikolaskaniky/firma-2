import React from "react";
import classes from "./main.module.scss";

const Bar = (props) => {
  const { deposit_array, onListItemClick, deposit } = props;

  return (
    <ul className={classes.bar}>
      {deposit_array.map((obj, index) => (
        <li key={index} onClick={() => onListItemClick(obj.name)} className={deposit === obj.name ? classes.active : undefined}>
          {obj.name}
        </li>
      ))}
    </ul>
  );
};

export default Bar;

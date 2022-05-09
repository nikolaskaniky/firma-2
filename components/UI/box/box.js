import React from "react";
import classes from "./box.module.scss";

const Box = (props) => {
  return (
    <div className={`${classes.box} ${props.style}`} onClick={props.onClick}>
      {props.children}
    </div>
  );
};

export default Box;

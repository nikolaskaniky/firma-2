import React from "react";
import classes from "./input-error.message.module.scss";

const InputErrorMessage = (props) => {
  return <p className={classes.error}>{props.children}</p>;
};

export default InputErrorMessage;

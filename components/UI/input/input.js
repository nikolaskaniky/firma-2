import React from "react";
import classes from "./input.module.scss";

const Input = (props) => {
  return <input {...props} className={`${classes.input} ${props.cn}`} />;
};

export default Input;

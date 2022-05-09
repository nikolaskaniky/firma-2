import React from "react";
import classes from "./box.module.scss";

const Box = (props) => {
  return (
    <div className={`${classes.box} ${props.style}`}>
      {props.title && <h4 className={classes.title}>{props.title}</h4>}

      {props.content ? (
        <div className={classes.content}>{props.children}</div>
      ) : (
        props.children
      )}
    </div>
  );
};

export default Box;

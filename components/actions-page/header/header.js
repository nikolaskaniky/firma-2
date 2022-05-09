import React from "react";
import classes from "./header.module.scss";
import Box from "../../UI/box/box";

const Header = (props) => {
  const { array, selectedPage, selectedComponentHandler } = props;

  return (
    <Box style={classes.wrapper}>
      {array.map((item, index) => (
        <li
          key={index}
          className={
            selectedPage === item.label ? classes.active : undefined
          }
          onClick={() => selectedComponentHandler(item.label)}
        >
          <h4>{item.header.h4}</h4>
          <p>{item.header.p}</p>
        </li>
      ))}
    </Box>
  );
};

export default Header;

import React from "react";
import classes from "./founders.module.scss";

const Header = (props) => {
  const { founders, selectedFounder, selectedFounderHandler } = props;

  return (
    <header className={classes.header}>
      {founders.map((item, index) => (
        <p
          key={index}
          className={selectedFounder === item.name ? classes.active : undefined}
          onClick={() => selectedFounderHandler(item)}
        >
          {item.name}
        </p>
      ))}
    </header>
  );
};

export default Header;

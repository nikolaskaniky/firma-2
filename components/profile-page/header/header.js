import React from "react";
import classes from "./header.module.scss";
import Box from "../reusable/box";

const Header = (props) => {
  const { profile_array, selectedSection, selectedSectionHandler } = props;

  return (
    <Box style={classes.navbar}>
      {profile_array.map((item, index) => (
        <li
          key={index}
          onClick={() => selectedSectionHandler(item.name)}
          className={selectedSection === item.name ? classes.active : undefined}
        >
          {item.name}
        </li>
      ))}
    </Box>
  );
};

export default Header;

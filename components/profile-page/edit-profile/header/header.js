import React from "react";
import classes from "./header.module.scss";
import Box from "../../reusable/box";

const Header = (props) => {
  const { editProfile_array, selectedProfile, selectedProfileHandler } = props;

  return (
    <Box style={classes.navbar}>
      {editProfile_array.map((item, index) => (
        <li
          key={index}
          onClick={() => selectedProfileHandler(item.name)}
          className={selectedProfile === item.name ? classes.active : undefined}
        >
          {item.name}
        </li>
      ))}
    </Box>
  );
};

export default Header;

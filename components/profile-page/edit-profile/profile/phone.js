import React from "react";
import classes from "./profile.module.scss";
import Box from "../../reusable/box";

const Phone = () => {
  return (
    <Box style={classes["phone-box"]} title="Phone number" content>
      <div className={classes.label}>
        <label>Phone 1</label>
        <input type="text" />
      </div>

      <div className={classes.label}>
        <label>Phone 2</label>
        <input type="text" />
      </div>

      <button>SAVE</button>
    </Box>
  );
};

export default Phone;

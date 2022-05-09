import React, { useState } from "react";
import classes from "./profile.module.scss";
import Box from "../../reusable/box";
import { user } from "../../../../data/users-data";

const Address = () => {
  const [values, setValues] = useState({
    country: user.country,
    city: user.city,
    address: user.address,
    postalCode: user.postalCode,
  });

  const inputChangeHandler = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  return (
    <Box title="Address" content style={classes["address-box"]}>
      <div className={classes.label}>
        <label>Address 1</label>
        <input
          name="address"
          value={values.address}
          onChange={inputChangeHandler}
          type="text"
        />
      </div>

      <div className={classes.label}>
        <label>Address 2</label>
        <input type="text" />
      </div>

      <div className={classes.label}>
        <label>City</label>
        <input
          name="city"
          value={values.city}
          onChange={inputChangeHandler}
          type="text"
        />
      </div>

      <div className={classes.label}>
        <label>Region</label>
        <input type="text" />
      </div>

      <div className={classes.label}>
        <label>Country</label>
        <input
          name="country"
          value={values.country}
          onChange={inputChangeHandler}
          type="text"
        />
      </div>

      <div className={classes.label}>
        <label>Postal Code</label>
        <input
          name="postalCode"
          value={values.postalCode}
          onChange={inputChangeHandler}
          type="text"
        />
      </div>

      <button>SAVE</button>
    </Box>
  );
};

export default Address;

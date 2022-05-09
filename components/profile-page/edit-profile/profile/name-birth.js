import React, { useState } from "react";
import classes from "./profile.module.scss";
import Box from "../../reusable/box";
import { user } from "../../../../data/users-data";

const NameBirth = () => {
  const [values, setValues] = useState({
    firstName: user.firstName,
    lastName: user.lastName,
    dateOfBirth: user.dateOfBirth,
  });

  const inputChangeHandler = (e) => {
    const { value, name } = e.target;
    setValues({ ...values, [name]: value });
  };

  console.log(values);

  return (
    <Box style={classes["name-birth-box"]} title="General info" content>
      <div className={classes.label}>
        <label>Last Name</label>
        <input
          name="lastName"
          value={values.lastName}
          onChange={inputChangeHandler}
          type="text"
        />
      </div>

      <div className={classes.label}>
        <label>First Name</label>
        <input
          name="firstName"
          value={values.firstName}
          type="text"
          onChange={inputChangeHandler}
        />
      </div>

      <div className={classes.label}>
        <label>Date of Birth</label>
        <input
          name="dateOfBirth"
          value={values.dateOfBirth}
          type="text"
          onChange={inputChangeHandler}
        />
      </div>

      <button>SAVE</button>
    </Box>
  );
};

export default NameBirth;

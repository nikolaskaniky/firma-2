import React, { useState } from "react";
import classes from "./account-settings.module.scss";
import Box from "../../reusable/box";
import { user } from "../../../../data/users-data";
import PasswordInput from "../../../UI/password-input/password-input";

const Email = () => {
  const [values, setValues] = useState({
    email: user.email,
    password: user.password,
  });
  const inputChangeHandler = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  return (
    <Box style={classes["email-box"]} title="Email">
      <form>
        <div className={classes.label}>
          <label>Email</label>
          <input
            name="email"
            value={values.email}
            onChange={inputChangeHandler}
            type="text"
          />
        </div>

        <div className={classes.label}>
          <label>Password (if email changed)</label>
        <PasswordInput
          style={classes["password-input"]}
          input={{
            className: classes.password,
            name: "password",
            value: values.password,
            onChange: inputChangeHandler,
          }}
        />
        <p>Forgot password?</p>
        </div>
      
        <button>SAVE</button>
      </form>
    </Box>
  );
};

export default Email;

import React, { useState, useEffect } from "react";
import classes from "./password-strength.module.scss";

const PasswordStrength = (props) => {
  const { value } = props;
  const tooSmallLength = value.length < 8;
  const digits = /\d/.test(value);
  const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(value);
  const upperCaseLetter = / *[A-Z]/.test(value);

  const [strength, setStrength] = useState(0);

  useEffect(() => {
    if (!tooSmallLength && digits && upperCaseLetter && specialChars) {
      setStrength(3);
    } else if (!tooSmallLength && digits && upperCaseLetter) {
      setStrength(2);
    } else setStrength(1);
  }, [value]);

  console.log(strength);

  return (
    <div className={classes.container}>
      <div
        className={`${classes.block} ${classes.weak} ${
          strength > 0 ? classes.fill : undefined
        }`}
      ></div>
      <div
        className={`${classes.block} ${classes.average} ${
          strength > 1 ? classes.fill : undefined
        }`}
      ></div>
      <div
        className={`${classes.block} ${classes.high} ${
          strength > 2 ? classes.fill : undefined
        }`}
      ></div>
    </div>
  );
};

export default PasswordStrength;

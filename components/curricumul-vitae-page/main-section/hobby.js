import React from "react";
import classes from "../curriculum-vitae.module.scss";

const Hobby = (props) => {
  const {
    values,
    isTouched,
    onChangeHandler,
    onBlurHandler,
    onFocusHandler,
    errors,
  } = props;

  return (
    <div className={classes.hobby}>
      <div className={classes.line}></div>
      <div className={classes["textarea-wrapper"]}>
        <label>About me</label>
        <textarea
          placeholder="what do you like to do in your free time?"
          name="hobby"
          value={values.hobby}
          onChange={onChangeHandler}
          onBlur={onBlurHandler}
          onFocus={onFocusHandler}
        ></textarea>
        {isTouched.hobby && errors && <p>{errors.hobby}</p>}
      </div>
    </div>
  );
};

export default Hobby;

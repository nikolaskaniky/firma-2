import React from "react";
import classes from "../curriculum-vitae.module.scss";

const Description = (props) => {
  const {
    values,
    isTouched,
    onChangeHandler,
    onBlurHandler,
    onFocusHandler,
    errors,
  } = props;

  return (
    <div className={classes.description}>
      <div className={classes.line}></div>
      <div className={classes["textarea-wrapper"]}>
        <label>About me</label>
        <textarea
          placeholder="what do you like to do in your free time?"
          name="description"
          value={values.description}
          onChange={onChangeHandler}
          onBlur={onBlurHandler}
          onFocus={onFocusHandler}
        ></textarea>
        {isTouched.description && errors.description && (
          <p>{errors.description}</p>
        )}
      </div>
    </div>
  );
};

export default Description;

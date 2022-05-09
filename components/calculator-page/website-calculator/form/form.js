import React, { useState } from "react";
import classes from "./form.module.scss";

const Form = (props) => {
  const { websiteCalculatorData, goNextHandler } = props;

  const [textareaValue, setTextareaValue] = useState(
    websiteCalculatorData
      .map(
        (item) =>
          `${item.label}: ${item.selectedOption}, price: ${item.minPrice}$`
      )
      .toString()
  );
  const onChangeHandler = (e) => setTextareaValue(e.target.value);

  return (
    <section className={classes.form}>
      <textarea
        value={textareaValue}
        onChange={onChangeHandler}
        cols="30"
        rows="10"
      />

      <button onClick={goNextHandler}>Send Quote</button>
    </section>
  );
};

export default Form;

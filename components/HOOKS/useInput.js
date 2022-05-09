import React, { useState, useEffect } from "react";

const useInput = (validation, label, data) => {
  const [value, setValue] = useState(data ? data : "");
  const [isTouched, setIsTouched] = useState(false);
  const [errors, setErrors] = useState("");

  useEffect(() => {
    isTouched && setErrors(validation(value, label));
  }, [isTouched]);

  const onBlurHandler = () => setIsTouched(true);
  const onClickHandler = () => {
    setIsTouched(false);
    setErrors("");
  };
  const onChangeHandler = (e) => setValue(e.target.value);
  const hasError = validation(value, label);

  return {
    value,
    setValue,
    onBlurHandler,
    onClickHandler,
    onChangeHandler,
    errors,
    setIsTouched,
    hasError,
  };
};

export default useInput;

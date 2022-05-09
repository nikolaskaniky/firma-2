import React, { useState, useEffect } from "react";

const useForm = (validation) => {
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    country: "",
    city: "",
    zipCode: "",
    email: "",
    phoneNumber: "",
    hobby: "",
    description: "",
  });

  const [isTouched, setIsTouched] = useState({
    firstName: false,
    lastName: false,
    country: false,
    city: false,
    zipCode: false,
    email: false,
    phoneNumber: false,
    hobby: false,
    description: false,
  });

  const [errors, setErrors] = useState({});
  const hasErrors = validation(values);

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const onBlurHandler = (e) => {
    const { name } = e.target;
    setIsTouched({ ...isTouched, [name]: true });
  };

  const onFocusHandler = (e) => {
    const { name } = e.target;
    setIsTouched({ ...isTouched, [name]: false });
  };

  const onSubmitHandler = () => {
    setIsTouched({
      firstName: true,
      lastName: true,
      country: true,
      city: true,
      zipCode: true,
      email: true,
      phoneNumber: true,
      hobby: true,
      description: true,
    });
  };

  useEffect(() => {
    setErrors(validation(values));
  }, [values]);

  return {
    values: values,
    isTouched: isTouched,
    onChangeHandler: onChangeHandler,
    onBlurHandler: onBlurHandler,
    onFocusHandler: onFocusHandler,
    errors: errors,
    hasErrors: hasErrors,
    onSubmitHandler: onSubmitHandler,
  };
};

export default useForm;

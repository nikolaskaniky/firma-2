import React, { useEffect, useState } from "react";

const useForm = (validation) => {
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    birthday: "",
    phoneNumber: "",
    country: "",
    zipCode: "",
    city: "",
    companyName: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const [isTouched, setIsTouched] = useState({
    firstName: false,
    lastName: false,
    birthday: false,
    phoneNumber: false,
    country: false,
    zipCode: false,
    city: false,
    companyName: false,
    email: false,
    password: false,
  });

  useEffect(() => {
    setErrors(validation(values));
  }, [isTouched]);

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

  const submitHandler = () => {
    setIsTouched({
      firstName: true,
      lastName: true,
      birthday: true,
      phoneNumber: true,
      country: true,
      zipCode: true,
      city: true,
      companyName: true,
      email: true,
      password: true,
    });
  };

  return {
    values: values,
    onChangeHandler: onChangeHandler,
    onBlurHandler: onBlurHandler,
    onFocusHandler: onFocusHandler,
    isTouched: isTouched,
    errors: errors,
    submitHandler: submitHandler,
  };
};

export default useForm;

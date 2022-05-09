import React from "react";
import classes from "./sign-up.module.scss";
import validation from "./validation";
import axios from "axios";
import Box from "../UI/box/box";
import Link from "next/link";
import useForm from "./useForm";
import InputErrorMessage from "../UI/input-error-message/input-error-message";
import PasswordStrength from "../UI/password-strength/password-strength";

const SignUp = () => {
  const {
    values,
    onChangeHandler,
    onBlurHandler,
    onFocusHandler,
    isTouched,
    errors,
    submitHandler: checkInputValues,
  } = useForm(validation);

  const submitHandler = (e) => {
    e.preventDefault();

    checkInputValues();

    if (Object.keys(errors).length !== 0) return;

    console.log("submitted");

    const requestBody = {
      firstName: values.firstName,
      lastName: values.lastName,
      birthday: values.birthday,
      phone: values.phoneNumber,
      country: values.country,
      zipCode: values.zipCode,
      city: values.city,
      companyName: values.companyName,
      email: values.email,
      password: values.password,
    };

    axios
      .post("/", requestBody)
      .then((response) => console.log(response.config.data))
      .catch((error) => console.log(error));
  };

  return (
    <Box style={classes["sign-up"]}>
      <form onSubmit={submitHandler}>
        <h1 className={classes.title}>SIGN UP</h1>

        <div className={classes.content}>
          {/* //! LEFT  */}
          <div className={classes["left-form"]}>
            {/* //todo || first name */}
            <div className={classes["input-wrapper"]}>
              <input
                type="text"
                placeholder="First name"
                name="firstName"
                value={values.firstName}
                onChange={onChangeHandler}
                onBlur={onBlurHandler}
                onFocus={onFocusHandler}
              />
              {isTouched.firstName && errors.firstName && (
                <InputErrorMessage>{errors.firstName}</InputErrorMessage>
              )}
            </div>
            {/* //todo || last name */}
            <div className={classes["input-wrapper"]}>
              <input
                type="text"
                placeholder="Last name"
                name="lastName"
                value={values.lastName}
                onChange={onChangeHandler}
                onBlur={onBlurHandler}
                onFocus={onFocusHandler}
              />
              {isTouched.lastName && errors.lastName && (
                <InputErrorMessage>{errors.lastName}</InputErrorMessage>
              )}
            </div>
            {/* //todo || birthday input */}
            <div className={classes["input-wrapper"]}>
              <input type="text" placeholder="Birthday" />
            </div>

            {/* // todo || phone input */}
            <div className={classes["input-wrapper"]}>
              <input
                type="text"
                placeholder="Phone number"
                name="phoneNumber"
                value={values.phoneNumber}
                onChange={onChangeHandler}
                onBlur={onBlurHandler}
                onFocus={onFocusHandler}
              />
              {isTouched.phoneNumber && errors.phoneNumber && (
                <InputErrorMessage>{errors.phoneNumber}</InputErrorMessage>
              )}
            </div>
            {/* //todo || country */}
            <div className={classes["input-wrapper"]}>
              <input
                type="text"
                placeholder="Country"
                name="country"
                value={values.country}
                onChange={onChangeHandler}
                onBlur={onBlurHandler}
                onFocus={onFocusHandler}
              />
              {isTouched.country && errors.country && (
                <InputErrorMessage>{errors.country}</InputErrorMessage>
              )}
            </div>
          </div>

          {/* //! RIGHT */}
          <div className={classes["right-form"]}>
            {/* //todo || zip code */}
            <div className={classes["input-wrapper"]}>
              <input
                type="text"
                placeholder="Zip code"
                name="zipCode"
                value={values.zipCode}
                onChange={onChangeHandler}
                onBlur={onBlurHandler}
                onFocus={onFocusHandler}
              />
              {isTouched.zipCode && errors.zipCode && (
                <InputErrorMessage>{errors.zipCode}</InputErrorMessage>
              )}
            </div>
            {/* //todo || city */}
            <div className={classes["input-wrapper"]}>
              <input
                type="text"
                placeholder="City"
                name="city"
                value={values.city}
                onChange={onChangeHandler}
                onBlur={onBlurHandler}
                onFocus={onFocusHandler}
              />
              {isTouched.city && errors.city && (
                <InputErrorMessage>{errors.city}</InputErrorMessage>
              )}
            </div>
            {/* //todo || company name */}
            <div className={classes["input-wrapper"]}>
              <input
                type="text"
                placeholder="Company name"
                name="companyName"
                value={values.companyName}
                onChange={onChangeHandler}
                onBlur={onBlurHandler}
                onFocus={onFocusHandler}
              />
              {isTouched.companyName && errors.companyName && (
                <InputErrorMessage>{errors.companyName}</InputErrorMessage>
              )}
            </div>
            {/* //todo || email */}
            <div className={classes["input-wrapper"]}>
              <input
                type="text"
                placeholder="Email"
                name="email"
                value={values.email}
                onChange={onChangeHandler}
                onBlur={onBlurHandler}
                onFocus={onFocusHandler}
              />
              {isTouched.email && errors.email && (
                <InputErrorMessage>{errors.email}</InputErrorMessage>
              )}
            </div>
            {/* //todo || password */}
            <div className={classes["input-wrapper"]}>
              <input
                type="password"
                placeholder="Password"
                name="password"
                value={values.password}
                onChange={onChangeHandler}
                onBlur={onBlurHandler}
                onFocus={onFocusHandler}
              />
              {values.password !== "" && (
                <PasswordStrength value={values.password} />
              )}
              {isTouched.password && errors.password && (
                <InputErrorMessage>{errors.password}</InputErrorMessage>
              )}
            </div>
          </div>
        </div>

        <div className={classes["submit-btn"]}>
          <button type="submit" className={classes["sign-up-btn"]}>
            Sign up
          </button>
        </div>

        <div className={classes["redirect-wrapper"]}>
          <Link href="/sign-in">
            <a>
              <p className={classes["redirect-text"]}>Sign in</p>
            </a>
          </Link>
        </div>
      </form>
    </Box>
  );
};

export default SignUp;

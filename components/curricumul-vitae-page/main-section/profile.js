import React, { useState } from "react";
import classes from "../curriculum-vitae.module.scss";
import "react-phone-number-input/style.css";

const Profile = (props) => {
  const {
    personalInfo,
    setPersonalInfo,
    values,
    isTouched,
    onChangeHandler,
    onBlurHandler,
    onFocusHandler,
    errors,
  } = props;

  return (
    <div className={classes.profile}>
      <div className={classes.input}>
        <label>First Name</label>
        <input
          type="text"
          name="firstName"
          value={values.firstName}
          onChange={onChangeHandler}
          onBlur={onBlurHandler}
          onFocus={onFocusHandler}
        />
        {isTouched.firstName && <p>{errors.firstName}</p>}
      </div>

      <div className={classes.input}>
        <label>Last Name</label>
        <input
          type="text"
          name="lastName"
          value={values.lastName}
          onChange={onChangeHandler}
          onBlur={onBlurHandler}
          onFocus={onFocusHandler}
        />
        {isTouched.lastName && <p>{errors.lastName}</p>}
      </div>

      <div className={classes.input}>
        <label>Country</label>
        <input
          type="text"
          name="country"
          value={values.country}
          onChange={onChangeHandler}
          onBlur={onBlurHandler}
          onFocus={onFocusHandler}
        />
        {isTouched.country && <p>{errors.country}</p>}
      </div>

      <div className={classes.input}>
        <label>City</label>
        <input
          type="text"
          name="city"
          value={values.city}
          onChange={onChangeHandler}
          onBlur={onBlurHandler}
          onFocus={onFocusHandler}
        />
        {isTouched.city && <p>{errors.city}</p>}
      </div>

      <div className={classes.input}></div>

      <div className={classes.input}>
        <label>Zip Code</label>
        <input
          type="text"
          name="zipCode"
          value={values.zipCode}
          onChange={onChangeHandler}
          onBlur={onBlurHandler}
          onFocus={onFocusHandler}
        />
        {isTouched.zipCode && <p>{errors.zipCode}</p>}
      </div>

      <div className={classes.input}>
        <label>Email Address</label>
        <input
          type="text"
          name="email"
          value={values.email}
          onChange={onChangeHandler}
          onBlur={onBlurHandler}
          onFocus={onFocusHandler}
        />
        {isTouched.email && <p>{errors.email}</p>}
      </div>

      <div className={classes.input}>
        <label>Phone Number</label>
        <input
          type="text"
          name="phoneNumber"
          value={values.phoneNumber}
          onChange={onChangeHandler}
          onBlur={onBlurHandler}
          onFocus={onFocusHandler}
        />
        {isTouched.phoneNumber && <p>{errors.phoneNumber}</p>}
      </div>
    </div>
  );
};

export default Profile;

import React from "react";

const validation = (values) => {
  let errors = {};

  if (values.firstName.trim() === "") {
    errors.firstName = "First name is required.";
  }

  if (values.lastName.trim() === "") {
    errors.lastName = "Last name is required.";
  }

  if (values.phoneNumber.trim() === "") {
    errors.phoneNumber = "Phone number is required.";
  }

  if (values.country.trim() === "") {
    errors.country = "Country is required.";
  }

  if (values.zipCode.trim() === "") {
    errors.zipCode = "Zip code is required.";
  }

  if (values.city.trim() === "") {
    errors.city = "City is required.";
  }

  if (values.companyName.trim() === "") {
    errors.companyName = "Company is required.";
  }

  if (values.email.trim() === "") {
    errors.email = "Email is required.";
  } else if (!values.email.includes("@")) {
    errors.email = 'Email must include "@".';
  }

  if (values.password.trim() === "") {
    errors.password = "Password is required";
  } else if (values.password.length < 8) {
    errors.password = "Password must be longer than 8 char.";
  }

  return errors;
};

export default validation;

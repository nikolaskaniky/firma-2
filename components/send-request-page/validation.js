import React from "react";

const validation = (value, label) => {
  let errors = "";

  if (label === "firstName" && value.trim() === "") {
    errors = "First name is required.";
  }

  if (label === "lastName" && value.trim() === "") {
    errors = "Last name is required";
  }

  if (label === "dateOfBirth" && value.trim() === "") {
    errors = "Date of Birth is required.";
  }

  if (label === "phone" && value.trim() === "") {
    errors = "Phone Number is required.";
  }

  if (label === "country" && value.trim() === "") {
    errors = "Country is required.";
  }

  if (label === "zipCode" && value.trim() === "") {
    errors = "Zip Code is required.";
  }

  if (label === "city" && value.trim() === "") {
    errors = "City is required.";
  }

  if (label === "companyName" && value.trim() === "") {
    errors = "Company Name is required.";
  }

  if (label === "password" && value.trim() === "") {
    errors = "Password is required.";
  }

  if (label === "email" && value.trim() === "") {
    errors = "Email is required";
  } else if (label === "email" && !value.includes("@")) {
    errors = "Email should include @!";
  }

  if (label === "category" && value === "") {
    errors = "this field is required.";
  }

  if (label === "description" && value.trim() === "") {
    errors = "this field is required";
  }

  return errors;
};

export default validation;

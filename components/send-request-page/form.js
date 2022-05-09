import React, { useState, useEffect } from "react";
import classes from "./form.module.scss";
import useInput from "../HOOKS/useInput";
import validation from "./validation";
import DateInput from "../UI/date-input/date-input";
import UploadFile from "./upload-file/upload-file";
import Category from "./category/category";
import axios from "axios";

const Form = (props) => {
  //? hooks.
  const {
    value: categoryValue,
    setValue: setCategoryValue,
    errors: categoryErrors,
    hasError: categoryHasError,
    onBlurHandler: categoryBlurHandler,
    onClickHandler: categoryClickHandler,
  } = useInput(validation, "category");

  const {
    value: firstNameValue,
    onChangeHandler: firstNameChangeHandler,
    onBlurHandler: firstNameOnBlurHandler,
    onClickHandler: firstNameOnClickHandler,
    errors: firstNameErrors,
    setIsTouched: setFirstNameIsTouched,
    hasError: firstNameHasError,
  } = useInput(validation, "firstName");

  const {
    value: lastNameValue,
    onChangeHandler: lastNameChangeHandler,
    onBlurHandler: lastNameOnBlurHandler,
    onClickHandler: lastNameOnClickHandler,
    errors: lastNameErrors,
    setIsTouched: setLastNameIsTouched,
    hasError: lastNameHasError,
  } = useInput(validation, "lastName");

  const {
    value: emailValue,
    onChangeHandler: emailChangeHandler,
    onBlurHandler: emailOnBlurHandler,
    onClickHandler: emailOnClickHandler,
    errors: emailErrors,
    setIsTouched: setEmailIsTouched,
    hasError: emailHasError,
  } = useInput(validation, "email");

  const {
    value: countryValue,
    onChangeHandler: countryChangeHandler,
    onBlurHandler: countryOnBlurHandler,
    onClickHandler: countryOnClickHandler,
    errors: countryErrors,
    setIsTouched: setCountryIsTouched,
    hasError: countryHasError,
  } = useInput(validation, "country");

  const {
    value: cityValue,
    onChangeHandler: cityChangeHandler,
    onBlurHandler: cityOnBlurHandler,
    onClickHandler: cityOnClickHandler,
    errors: cityErrors,
    setIsTouched: setCityIsTouched,
    hasError: cityHasError,
  } = useInput(validation, "city");

  const {
    value: phoneValue,
    onChangeHandler: phoneChangeHandler,
    onClickHandler: phoneClickHandler,
    onBlurHandler: phoneBlurHandler,
    hasError: phoneHasError,
    errors: phoneErrors,
  } = useInput(validation, "phone");

  const { value: companyValue, onChangeHandler: companyChangeHandler } =
    useInput(validation, "company");

  const { value: zipCodeValue, onChangeHandler: zipCodeChangeHandler } =
    useInput(validation, "zipCode");

  const { value: websiteLinkValue, onChangeHandler: websiteLinkChangeHandler } =
    useInput(validation, "websiteLink");

  const {
    value: descriptionValue,
    onChangeHandler: descriptionChangeHandler,
    onBlurHandler: descriptionBlurHandler,
    onClickHandler: descriptionClickHandler,
    hasError: descriptionHasError,
    errors: descriptionErrors,
  } = useInput(
    validation,
    "description",
    props.data
      ? props.data
          .map(
            (item) =>
              `${item.label}: ${item.selectedOption}, price: ${item.minPrice}$`
          )
          .toString()
      : ""
  );

  //todo || upload file logic.
  const [files, setFiles] = useState([]);
  const fileChangeHandler = (e) => {
    setFiles([...files, ...e.target.files]);
    e.target.value = "";
  };
  console.log(files);
  const submitHandler = async (e) => {
    e.preventDefault();

    categoryBlurHandler();
    firstNameOnBlurHandler();
    lastNameOnBlurHandler();
    emailOnBlurHandler();
    countryOnBlurHandler();
    cityOnBlurHandler();
    descriptionBlurHandler();
    phoneBlurHandler();

    if (
      categoryHasError ||
      firstNameHasError ||
      lastNameHasError ||
      emailHasError ||
      countryHasError ||
      cityHasError ||
      descriptionHasError ||
      phoneHasError
    ) {
      return;
    }

    let formData = new FormData();
    for (let i = 0; i < files.length; i++) {
      formData.append("files", files[i]);
    }

    const requestBody = {
      files: formData,
      category: categoryValue,
      calendar: "to be created.",
      firstName: firstNameValue,
      lastName: lastNameValue,
      email: emailValue,
      company: companyValue,
      country: countryValue,
      city: cityValue,
      phone: phoneValue,
      zipCode: zipCodeValue,
      websiteLink: websiteLinkValue,
      description: descriptionValue,
    };

    //aici este pentru calculator sa trimita formularul si sa te duca la pagina de confirmed.
    if (props.data) {
      props.goNextHandler();
    }

    axios
      .post("/", requestBody)
      .then((response) => console.log(response))
      .catch((error) => console.log(error));

    console.log("s-a trimis");
  };

  return (
    <main className={`${classes["info-form"]} ${props.style}`}>
      {/* // todo || uplad */}
      <UploadFile
        fileChangeHandler={fileChangeHandler}
        files={files}
        setFiles={setFiles}
      />

      <form>
        <Category
          categoryValue={categoryValue}
          categoryErrors={categoryErrors}
          setCategoryValue={setCategoryValue}
          categoryClickHandler={categoryClickHandler}
        />
        <div className={` ${classes["calendar-label"]}`}>calendar</div>

        <div className={classes.label}>
          <input
            type="text"
            placeholder="First Name"
            value={firstNameValue}
            onChange={firstNameChangeHandler}
            onBlur={firstNameOnBlurHandler}
            onFocus={firstNameOnClickHandler}
          />
          {firstNameErrors && <p>{firstNameErrors}</p>}
        </div>

        <div className={classes.label}>
          <input
            type="text"
            placeholder="Last Name"
            value={lastNameValue}
            onChange={lastNameChangeHandler}
            onBlur={lastNameOnBlurHandler}
            onFocus={lastNameOnClickHandler}
          />
          {lastNameErrors && <p>{lastNameErrors}</p>}
        </div>

        <div className={classes.label}>
          <input
            type="text"
            placeholder="Email"
            value={emailValue}
            onChange={emailChangeHandler}
            onBlur={emailOnBlurHandler}
            onFocus={emailOnClickHandler}
          />
          {emailErrors && <p>{emailErrors}</p>}
        </div>

        <div className={classes.label}>
          <input
            type="text"
            placeholder="Company"
            onChange={companyChangeHandler}
            value={companyValue}
          />
        </div>

        <div className={classes.label}>
          <input
            type="text"
            placeholder="Country"
            value={countryValue}
            onChange={countryChangeHandler}
            onBlur={countryOnBlurHandler}
            onFocus={countryOnClickHandler}
          />
          {countryErrors && <p>{countryErrors}</p>}
        </div>

        <div className={classes.label}>
          <input
            type="text"
            placeholder="City"
            value={cityValue}
            onChange={cityChangeHandler}
            onBlur={cityOnBlurHandler}
            onFocus={cityOnClickHandler}
          />
          {cityErrors && <p>{cityErrors}</p>}
        </div>

        <div className={classes.label}>
          <input
            type="text"
            placeholder="Phone"
            onChange={phoneChangeHandler}
            onFocus={phoneClickHandler}
            onBlur={phoneBlurHandler}
            value={phoneValue}
          />
          {phoneErrors && <p>{phoneErrors}</p>}
        </div>

        <div className={classes.label}>
          <input
            type="text"
            placeholder="Zip Code"
            onChange={zipCodeChangeHandler}
            value={zipCodeValue}
          />
        </div>

        <div className={`${classes.label} ${classes["website-label"]}`}>
          <input
            type="text"
            placeholder="Website Link"
            onChange={websiteLinkChangeHandler}
            value={websiteLinkValue}
          />
        </div>

        <div className={`${classes.label} ${classes["textarea-label"]}`}>
          <textarea
            cols="30"
            rows="10"
            placeholder="Description"
            onChange={descriptionChangeHandler}
            value={descriptionValue}
            onFocus={descriptionClickHandler}
            onBlur={descriptionBlurHandler}
          ></textarea>
          {descriptionErrors && <p>{descriptionErrors}</p>}
        </div>
        <button onClick={submitHandler}>Confirm request</button>
      </form>
    </main>
  );
};

export default Form;

import React from "react";
import classes from "../curriculum-vitae.module.scss";
import Description from "./description";
import Hobby from "./hobby";
import Language from "./language";
import Links from "./links";
import Profile from "./profile";

const MainSection = (props) => {
  const {
    personalInfo,
    setPersonalInfo,
    links,
    setLinks,
    languageList,
    setLanguageList,
    //todo | hooks
    values,
    isTouched,
    onChangeHandler,
    onBlurHandler,
    onFocusHandler,
    errors,

    languageHasError,
    formIsSubmitted,

    linksList,
    setLinksList,
  } = props;

  return (
    <section className={classes["main-section"]}>
      <h1>My Profile</h1>
      <Profile
        values={values}
        isTouched={isTouched}
        onChangeHandler={onChangeHandler}
        onBlurHandler={onBlurHandler}
        onFocusHandler={onFocusHandler}
        errors={errors}
      />
      <h1>Add Languages</h1>
      <Language
        languageList={languageList}
        setLanguageList={setLanguageList}
        formIsSubmitted={formIsSubmitted}
        languageHasError={languageHasError}
      />
      <h1>Add links</h1>
      <Links linksList={linksList} setLinksList={setLinksList} />
      <h1>Hobby</h1>
      <Hobby
        values={values}
        isTouched={isTouched}
        onChangeHandler={onChangeHandler}
        onBlurHandler={onBlurHandler}
        onFocusHandler={onFocusHandler}
        errors={errors}
      />
      <h1>Description</h1>
      <Description
        values={values}
        isTouched={isTouched}
        onChangeHandler={onChangeHandler}
        onBlurHandler={onBlurHandler}
        onFocusHandler={onFocusHandler}
        errors={errors}
      />
    </section>
  );
};

export default MainSection;

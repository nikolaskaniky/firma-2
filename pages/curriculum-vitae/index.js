import React, { useState } from "react";
import MainSection from "../../components/curricumul-vitae-page/main-section/main-section";
import SkillsSection from "../../components/curricumul-vitae-page/skills-section/skills-section";
import classes from "./index.module.scss";
import useForm from "../../components/curricumul-vitae-page/useForm";
import validation from "../../components/curricumul-vitae-page/validation";
import axios from "axios";
import { useSelector } from "react-redux";

const CurriculumVitae = () => {
  const [personalInfo, setPersonalInfo] = useState({
    firstName: "",
    lastName: "",
    country: "",
    city: "",
    birth: "",
    zipCode: "",
    emailAddress: "",
    phoneNumber: "",
    hobby: "",
    description: "",
  });

  //* --> language logic
  const [languageList, setLanguageList] = useState([
    {
      language: "",
      level: "",
    },
  ]);
  function languageValidation(value) {
    let error = "";
    if (value === "") {
      error = "At least first language is required.";
    }
    return error;
  }
  const languageHasError = languageValidation(languageList[0].language);
  //* <--

  //* --> links logic
  const [linksList, setLinksList] = useState([
    {
      website: "",
    },
  ]);
  //* <--

  //* --> profile skills logic
  const [skillsProfile, setSkillsProfile] = useState([
    {
      profile: "designer",
      skills: [
        {
          skill: "UI / UX",
          experience: 0,
        },

        {
          skill: "Designer Logo",
          experience: 0,
        },

        {
          skill: "Designer Wev",
          experience: 0,
        },
      ],
    },

    {
      profile: "developer",
      skills: [
        {
          skill: "dev1",
          experience: 0,
        },

        {
          skill: "dev2",
          experience: 0,
        },

        {
          skill: "dev3",
          experience: 0,
        },
      ],
    },

    {
      profile: "seo",
      skills: [
        {
          skill: "seo1",
          experience: 0,
        },

        {
          skill: "seo2",
          experience: 0,
        },

        {
          skill: "seo3",
          experience: 0,
        },
      ],
    },

    {
      profile: "marketing",
      skills: [
        {
          skill: "mar1",
          experience: 0,
        },

        {
          skill: "mar2",
          experience: 0,
        },

        {
          skill: "mar3",
          experience: 0,
        },
      ],
    },
  ]);
  const selectedProfile = useSelector((state) => state.selectedCVSkill);
  const skillsArray = skillsProfile
    .find((profile) => profile.profile === selectedProfile)
    .skills.filter(
      (skill) => skill.isSelected === true && skill.experience > 0
    );
  const skillsHasErrors =
    skillsArray.length === 0
      ? "select at least 1 skill and set experience."
      : "";

  //* <--

  const {
    values,
    isTouched,
    onChangeHandler,
    onBlurHandler,
    onFocusHandler,
    errors,
    hasErrors,
    onSubmitHandler,
  } = useForm(validation);

  const array = [
    {
      ceva: 4,
    },
  ];

  //? SUBMIT HANDLER
  const [formIsSubmitted, setFormIsSubmitted] = useState(false);
  const submitHandler = async (e) => {
    e.preventDefault();
    onSubmitHandler();
    setFormIsSubmitted(true);
    if (Object.keys(errors).length !== 0 || languageHasError) return;
    if (skillsHasErrors) return;

    const requestBody = {
      fistName: values.firstName,
      lastName: values.lastName,
      country: values.country,
      city: values.city,
      zipCode: values.zipCode,
      emailAddress: values.email,
      phoneNumber: values.phoneNumber,
      hobby: values.hobby,
      description: values.description,
      language: languageList,
      profile: selectedProfile,
      skills: skillsArray,
    };

    axios
      .post("/", requestBody)
      .then((response) => console.log(response.config.data))
      .catch((error) => console.log(error));
  };

  return (
    <form className={classes["form"]} onSubmit={submitHandler}>
      <div className={classes["form-wrapper"]}>
        <SkillsSection
          skillsProfile={skillsProfile}
          setSkillsProfile={setSkillsProfile}
          skillsHasErrors={skillsHasErrors}
          formIsSubmitted={formIsSubmitted}
        />
        <MainSection
          personalInfo={personalInfo}
          setPersonalInfo={setPersonalInfo}
          languageList={languageList}
          setLanguageList={setLanguageList}
          values={values}
          isTouched={isTouched}
          onChangeHandler={onChangeHandler}
          onBlurHandler={onBlurHandler}
          onFocusHandler={onFocusHandler}
          errors={errors}
          languageHasError={languageHasError}
          formIsSubmitted={formIsSubmitted}
          linksList={linksList}
          setLinksList={setLinksList}
        />
      </div>

      <div className={classes["submit-wrapper"]}>
        <button type="submit">SEND YOU CV</button>
      </div>
    </form>
  );
};

export default CurriculumVitae;

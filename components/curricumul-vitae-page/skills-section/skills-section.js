import React, { useState, useEffect, Fragment } from "react";
import classes from "./skills-section.module.scss";
import camera from "../../../assets/images/curriculum-vitae-page/camera@3x.png";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { getCVSkillAction } from "../../../redux/actions/cv-skill-actions";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const SkillsSection = (props) => {
  const { skillsProfile, setSkillsProfile, formIsSubmitted, skillsHasErrors } =
    props;
  const dispatch = useDispatch();
  const selectedCVSkill = useSelector((state) => state.selectedCVSkill);
  const profile = skillsProfile.find(
    (profile) => profile.profile === selectedCVSkill
  );


  const plusHandler = (skill) => {
    skill.experience = skill.experience + 1;
    setSkillsProfile([...skillsProfile]);
  };

  const minusHandler = (skill) => {
    if (skill.experience === 0) return;
    skill.experience = skill.experience - 1;
    setSkillsProfile([...skillsProfile]);
  };

  useEffect(() => {
    const list = [...skillsProfile];
    const length = list.length;
    for (let i = 0; i < length; i++) {
      const skillsLength = list[i].skills.length;
      for (let x = 0; x < skillsLength; x++) {
        list[i].skills[x].experience = 0;
        list[i].skills[x].isSelected = false;
      }
    }
    setSkillsProfile(list);
  }, [profile]);

  return (
    <section className={classes["skills-section"]}>
      <div className={classes["add-image-area"]}>
        <div className={classes.image}>
          <Image src={camera} layout="fill" alt="image" />
        </div>
        <p>Upload Image</p>
      </div>

      {/* //todo --> profiles */}
      <div className={classes.label}>
        <div className={classes.title}>
          <h4>ALL PROFILE</h4>
          <div className={classes.line}></div>
        </div>

        <ul>
          {skillsProfile.map((profile, index) => (
            <li
              key={index}
              onClick={() => dispatch(getCVSkillAction(profile.profile))}
            >
              <div className={classes.bubble}>
                <div
                  className={
                    selectedCVSkill === profile.profile
                      ? classes.fill
                      : undefined
                  }
                ></div>
              </div>

              <p>{profile.profile}</p>
            </li>
          ))}
        </ul>
      </div>
      {/* //todo | <-- */}

      {/* //todo | --> skills list */}
      <div className={classes.label}>
        <div className={classes.title}>
          <h4>Skills</h4>
          <div className={classes.line}></div>
        </div>

        <ul>
          {profile.skills.map((skill, index) => (
            <Fragment key={index}>
              <li
                key={index}
                onClick={() => {
                  if (!skill.isSelected) {
                    skill.isSelected = true;
                    setSkillsProfile([...skillsProfile]);
                  } else {
                    skill.isSelected = false;
                    setSkillsProfile([...skillsProfile]);
                  }
                }}
              >
                <div className={classes.bubble}>
                  <div
                    className={skill.isSelected ? classes.fill : undefined}
                  ></div>
                </div>

                <p>{skill.skill}</p>
              </li>
              {skill.isSelected && (
                <div className={classes.dropdown}>
                  <div className={classes.counter}>
                    <div
                      className={classes.minus}
                      onClick={() => minusHandler(skill)}
                    >
                      <FaAngleLeft />
                    </div>

                    <div className={classes.result}>
                      <p>{skill.experience}</p>
                    </div>

                    <div
                      className={classes.plus}
                      onClick={() => plusHandler(skill)}
                    >
                      <FaAngleRight />
                    </div>
                  </div>
                  <p>Years</p>
                </div>
              )}
            </Fragment>
          ))}
        </ul>
      </div>
      {/* //todo | <--  */}
      {skillsHasErrors && formIsSubmitted && <p>{skillsHasErrors}</p>}
    </section>
  );
};

export default SkillsSection;

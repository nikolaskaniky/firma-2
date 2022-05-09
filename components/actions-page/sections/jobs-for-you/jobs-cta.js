import React from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import logo from "../../../../assets/images/jobs-page/logo@3x.png";
import classes from "./jobs.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { getCVSkillAction } from "../../../../redux/actions/cv-skill-actions";

const data = [
  {
    name: 'designer'
  },

  {
    name: 'developer'
  },

  {
    name: 'seo'
  },

  {
    name: 'marketing'
  }
]

const JobsCTA = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const selectedCVSkill = useSelector((state) => state.selectedCVSkill);
  return (
    <div className={classes.cta}>
      <div className={classes.logo}>
        <Image src={logo} layout="fill" alt="logo" />
      </div>

      <h4>Apply now for a job</h4>
      <p>Choose a domain and fill out the CV</p>

      <div className={classes.buttons}>
        {data.map((item, index) => (
          <div
            className={classes.button}
            key={index}
            onClick={() => {
              dispatch(getCVSkillAction(item.name));
              router.push("/jobs/curriculum-vitae");
            }}
          >
            <p className={classes["btn-text"]}>{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobsCTA;

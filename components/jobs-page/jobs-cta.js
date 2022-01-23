import React from 'react';
import Image from 'next/image';
import logo from '../../assets/images/jobs-page/logo@3x.png';
import classes from "../../styles/jobs-page/jobs-page.module.scss";
import { cv_skill_data } from '../../data/cv-skill-data';

const JobsCTA = () => {
  return (
      <div className={classes.cta}>
          <div className={classes.logo}>
              <Image src={logo} layout='fill' alt='logo' />
          </div>

          <h4>Apply now for a job</h4>
          <p>Choose a domain and fill out the CV</p>

          <div className={classes.buttons}>
              {cv_skill_data.map((item, index) => (
                  <div className={classes.button} key={index}>
                      <p className={classes['btn-text']}>{item.select}</p>
                  </div>
              ))}
          </div>
      </div>
  )
};

export default JobsCTA;

import React from 'react';
import classes from "../../styles/jobs-page/jobs-page.module.scss";
import JobsCTA from './jobs-cta';
import JobsImage from './jobs-image';

const Jobs = () => {
  return (
    <section className={classes.jobs}>
        <JobsImage />
        <JobsCTA />
    </section>
  )
};

export default Jobs;

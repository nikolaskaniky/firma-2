import React from "react";
import classes from "./jobs.module.scss";
import JobsCTA from "./jobs-cta";
import JobsImage from "./jobs-image";
import Box from '../../../UI/box/box';

const Jobs = () => {
  return (
    <Box style={classes.jobs}>
      <JobsImage />
      <JobsCTA />
    </Box>
  );
};

export default Jobs;

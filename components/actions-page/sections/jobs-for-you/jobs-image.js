import React from "react";
import Image from "next/image";
import classes from "./jobs.module.scss";
import jobs from "../../../../assets/images/jobs-page/jobs@3x.png";

const JobsImage = () => {
  return (
      <div className={classes.image}>
        <Image src={jobs} height={600} objectFit="contain" alt="image" />
      </div>
  );
};

export default JobsImage;

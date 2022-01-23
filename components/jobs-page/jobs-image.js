import React from 'react';
import Image from 'next/image';
import classes from "../../styles/jobs-page/jobs-page.module.scss";
import jobs from '../../assets/images/jobs-page/jobs@3x.png';

const JobsImage = () => {
  return (
    <div className={classes['image-wrapper']}>
        <div className={classes.image}>
            <Image src={jobs} layout='fill' alt='image' />
        </div>
    </div>
  )
};

export default JobsImage;

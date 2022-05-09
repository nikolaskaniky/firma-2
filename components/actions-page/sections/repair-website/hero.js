import React from "react";
import Image from "next/image";
import repair from "../../../../assets/images/repair-page/repair@3x.png";
import classes from "./repair.module.scss";
import { useRouter } from "next/router";
import Box from '../../../UI/box/box';

const Hero = () => {
  const router = useRouter();

  return (
    <Box style={classes.hero}>
      <div className={classes.image}>
        <Image src={repair} height={600} objectFit="contain" alt="image" />
      </div>

      <div className={classes.button} onClick={() => router.push('/gallery')}>
        <p>Go to gallery</p>
      </div>

      <div className={classes.text}>
        <h4>Checkout our gallery and get inspired from our projects.</h4>
      </div>

      <div className={classes.tags}>
        <div className={classes["tag-wrapper"]}>
          <p>help</p>
        </div>

        <div className={classes["tag-wrapper"]}>
          <p>view</p>
        </div>

        <div className={classes["tag-wrapper"]}>
          <p>search</p>
        </div>
      </div>
    </Box>
  );
};

export default Hero;

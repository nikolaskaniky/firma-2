import React from "react";
import Image from "next/image";
import create from "../../../../assets/images/create-page/create@3x.png";
import Box from "../../../UI/box/box";
import classes from "./create.module.scss";

const Hero = () => {
  return (
    <Box style={classes.hero}>
      <div className={classes.image}>
        <Image src={create} height={600} objectFit="contain" alt="image" />
      </div>

      <div className={classes.button}>
        <p>Go to gallery</p>
      </div>

      <div className={classes.text}>
        <p>
          Visit our gallery if you haven’t already <br />
          for a better inspiration.
        </p>
      </div>
    </Box>
  );
};

export default Hero;

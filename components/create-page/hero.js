import React from "react";
import Image from "next/image";
import create from "../../assets/images/create-page/create@3x.png";
import classes from "../../styles/create-page/create-page.module.scss";

const Hero = () => {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image src={create} layout="fill" alt="image" />
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
    </section>
  );
};

export default Hero;

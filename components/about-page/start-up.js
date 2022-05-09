import React from "react";
import Image from "next/image";
import classes from "./start-up.module.scss";
import start from "../../assets/images/about-page/start@3x.png";

const StartUp = () => {
  return (
    <section className={classes["start-up"]}>
      <div className={classes.image}>
        <Image src={start} layout="responsive" alt="image" />
      </div>

      <div className={classes["title-wrapper"]}>
        <h1>START UP</h1>
        <h4>Who are we?</h4>
      </div>

      <div className={classes.description}>
        <p>
          We are web design and development startup company who has ambitions to
          grow into a <br />
          world wide franchise company so we can collaborate with all the
          top-notch companies.
        </p>
      </div>
    </section>
  );
};

export default StartUp;

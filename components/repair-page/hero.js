import React from "react";
import Image from "next/image";
import repair from "../../assets/images/repair-page/repair@3x.png";
import classes from "../../styles/repair-page/repair-page.module.scss";
import { useRouter } from "next/router";

const Hero = () => {
  const router = useRouter();

  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image src={repair} layout="fill" alt="image" />
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
    </section>
  );
};

export default Hero;

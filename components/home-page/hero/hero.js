import React from "react";
import classes from "../../../styles/home-page/hero/hero.module.scss";
import HeroCTA from "./hero-cta";
import HeroNavigation from "./hero-navigation";
import HeroPresentation from "./hero-presentation";

const Hero = () => {
  return (
    <section className={classes.hero}>
        <HeroPresentation />
        <HeroCTA />
      <HeroNavigation />
    </section>
  );
};

export default Hero;

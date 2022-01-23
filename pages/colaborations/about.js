import React, { useState } from "react";
import Franchise from "../../components/about-page/franchise";
import Hero from "../../components/about-page/hero";
import Investment from "../../components/about-page/investment";
import Partnership from "../../components/about-page/partnership";
import StartUp from "../../components/about-page/start-up";
import classes from "../../styles/about-page/about.module.scss";

const AboutPage = () => {
  return (
    <main className={classes["about-page"]}>
      <Hero />
      <StartUp />
      <Investment />
      <Franchise />
      <Partnership />
    </main>
  );
};

export default AboutPage;

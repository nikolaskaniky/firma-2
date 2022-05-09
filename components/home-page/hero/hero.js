import React from "react";
import classes from "./hero.module.scss";
import Box from "../../UI/box/box";
import Content from "../ui/content/content";

import HeroPresentation from "./hero-presentation";
import PageNavigationBar from "../../UI/page-navigation-bar/page-navigation-bar";
import CTASection from "../ui/cta-section/cta-section";
import hero from "../../../assets/images/home-page/hero/Slider img Gradient.png";

const PAGE_NAVIGATION = [
  {
    name: "Home",
    linkTo: "/",
  },

  {
    name: "Sign in",
    linkTo: "/sign-in",
  },

  {
    name: "Sign up",
    linkTo: "/sign-up",
  },
];

const Hero = () => {
  return (
    <Box style={classes["hero-section"]}>
      <Content>
        <HeroPresentation />
        <CTASection
          image={hero}
          width="542"
          height="624"
          buttonText="Visit our gallery"
          linkTo="/gallery"
        />
      </Content>
      <PageNavigationBar data={PAGE_NAVIGATION} />
    </Box>
  );
};

export default Hero;

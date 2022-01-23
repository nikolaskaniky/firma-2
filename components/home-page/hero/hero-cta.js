import React from "react";
import classes from "../../../styles/home-page/hero/hero.module.scss";
import HomeCTA from "../../reusables/home-cta";
import hero from '../../../assets/images/home-page/hero/hero@3x.png';

const HeroCTA = () => {
  return (
      <>
      <HomeCTA
        src={hero}
        ctaStyle={classes.cta}
        contentStyle={classes.content}
        containerStyle={classes['image-container']}
        buttonStyle={classes.button}
        buttonText='Visit our gallery'
        buttonTextStyle={classes['button-p']}
        linkTo='/gallery'
        scrollToButton={true}
      />
      </>
  )
};

export default HeroCTA;

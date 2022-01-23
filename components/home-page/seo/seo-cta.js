import React from "react";
import classes from "../../../styles/home-page/seo/seo.module.scss";
import seo from "../../../assets/images/home-page/seo/seo@3x.png";
import HomeCTA from "../../reusables/home-cta";

const SEOCTA = () => {
  return (
    <HomeCTA
      src={seo}
      linkTo={'/seo'}
      buttonText={'Contact us'}
      containerStyle={classes['image-container']}
      contentStyle={classes.content}
    />
    );
};

export default SEOCTA;

import React from "react";
import classes from "../../../styles/home-page/gallery/gallery.module.scss";
import HomeCTA from "../../reusables/home-cta";
import gallery from '../../../assets/images/home-page/gallery/gallery@3x.png';

const GalleryCTA = () => {
  return (
    <>
      <HomeCTA
        src={gallery}
        ctaStyle={classes.cta}
        contentStyle={classes.content}
        containerStyle={classes["image-container"]}
        buttonStyle={classes.button}
        buttonText="See gallery"
        buttonTextStyle={classes["button-p"]}
        linkTo="/gallery"
      />
    </>
  );
};

export default GalleryCTA;

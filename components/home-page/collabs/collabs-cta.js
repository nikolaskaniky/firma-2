import React from "react";
import classes from "../../../styles/home-page/collabs/collabs.module.scss";
import HomeCTA from "../../reusables/home-cta";
import collabs from '../../../assets/images/home-page/collabs/collabs@3x.png';

const CollabsCTA = () => {
  return (
    <HomeCTA
      src={collabs}
      linkTo={"/collabs"}
      buttonText={"Hire us"}
      containerStyle={classes["image-container"]}
      contentStyle={classes.content}
      ctaStyle={classes.cta}
    />
  );
};

export default CollabsCTA;

import React from "react";
import classes from "../../../styles/home-page/nft/nft.module.scss";
import HomeCTA from "../../reusables/home-cta";
import sample from '../../../assets/images/home-page/contact/contact@3x.png';

const NFTCTA = () => {
  return (
    <>
      <HomeCTA
        src={sample}
        ctaStyle={classes.cta}
        contentStyle={classes.content}
        containerStyle={classes["image-container"]}
        buttonStyle={classes.button}
        buttonText="Contact us"
        buttonTextStyle={classes["button-p"]}
        linkTo="/gallery"
      />
    </>
  );
};

export default NFTCTA;

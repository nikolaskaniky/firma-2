import React from "react";
import classes from "../../../styles/home-page/contact/contact.module.scss";
import HomeCTA from "../../reusables/home-cta";
import contact from '../../../assets/images/home-page/contact/contact@3x.png';

const ContactCTA = () => {
  return (
    <HomeCTA 
    src={contact}
    linkTo={"/contact"}
    buttonText={"Contact us"}
    containerStyle={classes["image-container"]}
    contentStyle={classes.content}
    ctaStyle={classes.cta}
    />
  );
};

export default ContactCTA;

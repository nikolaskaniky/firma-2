import React from "react";
import classes from "../../../styles/home-page/contact/contact.module.scss";
import ContactCTA from "./contact-cta";
import ContactPresentation from "./contact-presentation";

const Contact = () => {
  return (
    <div className={classes.contact}>
      <ContactPresentation />
      <ContactCTA />
    </div>
  );
};

export default Contact;

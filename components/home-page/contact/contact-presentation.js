import React from "react";
import classes from "../../../styles/home-page/contact/contact.module.scss";

const ContactPresentation = () => {
  return (
    <div className={classes.presentation}>
      <div className={classes.nr}>
        <h1>09</h1>
      </div>

      <div className={classes["title-wrapper"]}>
        <div className={classes.pre}>
          <div className={classes.line}></div>
          <p>Get in touch with us.</p>
        </div>

        <div className={classes.main}>
          <h1>Contact</h1>
        </div>

        <div className={classes.sub}>
          <h4>DEVELOPMENT</h4>
        </div>
      </div>

      <div className={classes.text}>
        <p>
          Let us know if you have questions, send us an email and we will <br />
          do our best to see how we can help you.
        </p>
        <p>Talk to you soon!</p>
      </div>
    </div>
  );
};

export default ContactPresentation;

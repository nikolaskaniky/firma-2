import React from "react";
import Image from "next/image";
import classes from "./error-message.module.scss";
import error from "../../../assets/images/ui/exclamation-mark.png";

const ErrorMessage = () => {
  return (
    <section className={classes["error-message"]}>
      <div className={classes["image-container"]}>
        <Image src={error} layout="fill" alt="error" />
      </div>

      <div className={classes.banner}>
        <h1>OOPS!</h1>
      </div>

      <p className={classes.message}>Oops! Something went wrong!</p>
      <p className={classes.copyright}>Copywright 2022 CA23</p>

      <div className={classes.button}>
        <h4>Go back to homepage</h4>
      </div>
    </section>
  );
};

export default ErrorMessage;

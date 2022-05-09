import React, { Fragment } from "react";
import classes from "./password-change-success.module.scss";
import check from "../../../assets/images/reset-password-page/check.png";
import Image from "next/image";

const PasswordChangeSuccess = (props) => {
  return (
    <section className={classes["success"]}>
      <div className={classes["image-container"]}>
        <Image src={check} layout="fill" alt="check" />
      </div>

      <div className={classes.banner}>
        <h4>{props.title}</h4>
      </div>

      <p className={classes.message}>{props.message}</p>
    </section>
  );
};

export default PasswordChangeSuccess;

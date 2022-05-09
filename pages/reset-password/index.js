import React, { useState, Fragment } from "react";
import Image from "next/image";
import classes from "./index.module.scss";
import email from "../../assets/images/reset-password-page/email.png";
import PasswordChangeSuccess from "../../components/UI/password-change-success/password-change-success";

const ResetPassword = () => {
  const [submitted, setSubmitted] = useState(false);
  const submitHandler = (e) => {
    e.preventDefault();
    setSubmitted((prev) => !prev);
  };

  return (
    <main className={classes["reset-password-page"]}>
      {submitted ? (
        <PasswordChangeSuccess
          title="Password reseted!"
          message="Your password has been reseted successfully."
        />
      ) : (
        <section className={classes['reset']}>
          <div className={classes["image-container"]}>
            <Image src={email} layout="fill" alt="email image" />
          </div>

          <div className={classes.banner}>
            <h1>Reset your password</h1>
          </div>

          <div className={classes.description}>
            <p>Enter a new password for alin@yahoo.com</p>
          </div>

          <form onSubmit={submitHandler}>
            <div className={classes.inputs}>
              <input placeholder="Password" type="password" />
              <input placeholder="Confirm Password" type="password" />
            </div>

            <button>Reset Password</button>
          </form>
        </section>
      )}
    </main>
  );
};

export default ResetPassword;

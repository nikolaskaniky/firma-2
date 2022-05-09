import React, { useState, Fragment } from "react";
import Image from "next/image";
import classes from "./index.module.scss";
import email from "../../assets/images/reset-password-page/email.png";
import PasswordChangeSuccess from "../../components/UI/password-change-success/password-change-success";
import ChangePassword from "../../components/UI/error-message/error-message";
import ErrorMessage from "../../components/UI/error-message/error-message";

const ChangePasswordPage = () => {
  const [submitted, setSubmitted] = useState(false);
  const submitHandler = (e) => {
    e.preventDefault();
    setSubmitted((prev) => !prev);
  };

  return (
    <main className={classes["change-password-page"]}>
      {submitted ? (
        // <PasswordChangeSuccess
        //   title="Password changed!"
        //   message="Your password has been changed successfully."
        // />
        <ErrorMessage />
      ) : (
        <section className={classes["reset"]}>
          <div className={classes["image-container"]}>
            <Image src={email} layout="fill" alt="email image" />
          </div>

          <div className={classes.banner}>
            <h1>Change your password</h1>
          </div>

          <div className={classes.description}>
            <p>Enter a new password for alin@yahoo.com</p>
          </div>

          <form onSubmit={submitHandler}>
            <div className={classes.inputs}>
              <input placeholder="Current password" type="password" />
              <input placeholder="New Password" type="password" />
              <input placeholder="Confirm Password" type="password" />
            </div>

            <button>Change Password</button>
          </form>
        </section>
      )}
    </main>
  );
};

export default ChangePasswordPage;

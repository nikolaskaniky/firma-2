import React from "react";
import classes from "./index.module.scss";
import Image from "next/image";
import image from "../../assets/images/forgot-password/parolapz1.png";

const ForgotPasswordPage = () => {
  const submitHandler = (e) => {
    e.preventDefault();
    console.log("email submitted");
  };

  return (
    <main className={classes["forgot-password-page"]}>
      <section>
        <div className={classes.image}>
          <Image src={image} width={364} height={241} alt="img" objectFit="contain" />
        </div>

        <form onSubmit={submitHandler}>
          <div className={classes.text}>
            <h1>Forgot Password?</h1>
            <p>
              Enter the email address you used when you joined and we{`'`}ll
              send you instruction to reset your password.
            </p>
            <p>
              For security reasons, we do NOT store your password. So rest
              assured that we will never send your password via email.
            </p>
          </div>

          <input type="text" placeholder="Email Address" />

          <div className={classes.buttons}>
            <div className={classes["send-btn"]}>
              <p>Set reset instructions</p>
            </div>
            <div className={classes["back-btn"]}>
              <p>Return to login</p>
            </div>
          </div>
        </form>
      </section>
    </main>
  );
};

export default ForgotPasswordPage;

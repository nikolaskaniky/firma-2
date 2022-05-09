import React from "react";
import SignUp from "../../components/sign-up-page/sign-up";
import classes from "./index.module.scss";

const SignUpPage = () => {
  return (
    <main className={classes["sign-up-page"]}>
      <SignUp />
    </main>
  );
};

export default SignUpPage;

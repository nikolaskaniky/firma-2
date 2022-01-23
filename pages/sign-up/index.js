import React from "react";
import HeroNavigation from "../../components/home-page/hero/hero-navigation";
import SignUp from "../../components/sign-up-page/sign-up";
import classes from "../../styles/sign-up-page/sign-up-page.module.scss";

const SignUpPage = () => {
  return (
    <main className={classes["sign-up-page"]}>
      <SignUp />
      <HeroNavigation />
    </main>
  );
};

export default SignUpPage;

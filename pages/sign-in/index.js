import React from "react";
import HeroNavigation from "../../components/home-page/hero/hero-navigation";
import SignIn from "../../components/sign-in-page/sign-in";
import classes from "../../styles/sign-in-page/sign-in-page.module.scss";

const SignInPage = () => {
  return (
    <main className={classes["sign-in-page"]}>
      <SignIn />
      <HeroNavigation />
    </main>
  );
};

export default SignInPage;

import React from "react";
import Image from "next/image";
import classes from "../../styles/sign-in-page/sign-in-page.module.scss";
import login from "../../assets/images/sign-in-page/sign_in@3x.png";
import Input from "../reusables/input";

const SignIn = () => {
  return (
    <section className={classes["sign-in"]}>
      <div className={classes.login}>
        <div className={classes["back-layout"]}>
          <h1>Sign in</h1>

          <form>
            <Input placeholder="Email" type="text" />
            <Input placeholder="Password" type="password" />
          </form>
        </div>
      </div>

      <div className={classes.image}>
        <Image src={login} width={542} height={624} alt="login-image" />
      </div>
    </section>
  );
};

export default SignIn;

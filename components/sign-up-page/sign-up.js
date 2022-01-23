import React from "react";
import classes from "../../styles/sign-up-page/sign-up-page.module.scss";
import Input from "../reusables/input";

const SignUp = () => {
  return (
    <section className={classes["sign-up"]}>
      <form className={classes.backdrop}>
        <div className={classes["left-form"]}>
          <Input type="text" placeholder="First Name" />
          <Input type="text" placeholder="Last Name" />
          <Input type="text" placeholder="Date of Birth" />
          <Input type="text" placeholder="Phone" />
          <Input type="text" placeholder="Country" />
        </div>

        <div className={classes["right-form"]}>
          <Input type="text" placeholder="Zip Code" />
          <Input type="text" placeholder="City" />
          <Input type="text" placeholder="Company Name" />
          <Input type="text" placeholder="Email" />
          <Input type="password" placeholder="Password" />
        </div>

        <h1>Sign in</h1>
        <button>Confirm Sign Up</button>
      </form>
    </section>
  );
};

export default SignUp;

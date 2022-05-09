import React, { useState } from "react";
import Image from "next/image";
import classes from "./sign-in.module.scss";
import login from "../../assets/images/sign-in-page/sign_in@3x.png";
import { useRouter } from "next/router";
import Box from "../UI/box/box";
import { BsEyeFill, BsEyeSlashFill } from "react-icons/bs";
import Link from "next/link";
import { HiArrowNarrowRight } from "react-icons/hi";

const DUMMY_USERS = [
  {
    email: "pascugeorgenicolae@yahoo.com",
    password: "Kaniky23$",
  },
];

const SignIn = () => {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();
  const [passwordIsVisible, setPasswordIsVisible] = useState(false);
  const passwordIsVisibleHandler = () => setPasswordIsVisible((prev) => !prev);

  const submitHandler = (e) => {
    e.preventDefault();
    DUMMY_USERS.some((user) => {
      user.email === enteredEmail && user.password === enteredPassword
        ? router.push("/")
        : setError("Email or password doesn't match!");
    });
  };

  return (
    <Box style={classes["sign-in"]}>
      <div className={classes.login}>
        <form onSubmit={submitHandler}>
          <h1>SIGN IN</h1>

          <div className={classes.inputs}>
            <div className={classes["input-wrapper"]}>
              <input
                type="text"
                value={enteredEmail}
                onChange={(e) => setEnteredEmail(e.target.value)}
                placeholder="Email"
              />
            </div>

            <div className={classes["input-wrapper"]}>
              <input
                type={passwordIsVisible ? "text" : "password"}
                value={enteredPassword}
                placeholder="Password"
                onChange={(e) => setEnteredPassword(e.target.value)}
              />
              {passwordIsVisible ? (
                <BsEyeSlashFill
                  className={classes.eye}
                  onClick={passwordIsVisibleHandler}
                />
              ) : (
                <BsEyeFill
                  className={classes.eye}
                  onClick={passwordIsVisibleHandler}
                />
              )}
            </div>
          </div>

          <Link href="/forgot-password">
            <a className={classes["forgot-password"]}>Forgot Password?</a>
          </Link>

          <p className={classes.error}>{error}</p>

          <div className={classes.submit}>
            <h4>Sign in</h4>
            <button className={classes.button} type='submit'>
              <HiArrowNarrowRight />
            </button>
          </div>
        </form>
      </div>

      <div className={classes.image}>
        <Image src={login} width={594} height={650} objectFit="contain" alt="login-image" />
      </div>
    </Box>
  );
};

export default SignIn;

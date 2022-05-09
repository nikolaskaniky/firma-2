import React from "react";
import classes from "./start.module.scss";
import Image from "next/image";
import logo from '../../../assets/images/ui/logo.png';

const Start = () => {
  return (
    <div className={classes.start}>
      <div className={classes.content}>
        <div className={classes.logo}>
          <Image src={logo} width={112} height={100} alt='logo' objectFit="contain" />
        </div>
        <div className={classes.cta}>
          <div className={classes.title}>
            <h1>Start a Project with itCA 23</h1>
          </div>

          <div className={classes.text}>
            <p>
              We are based in Warsaw, Bydgoszcz {"&"} Torun in Bucarest but
              since we are Google <br />
              Cloud Partner we can arrange a meeting at Google Campus in Warsaw
              or in London. <br />
              We are also present in Paris. Below you will find all the contact
              details you need.
            </p>
          </div>

          <div className={classes["button-wrapper"]}>
            <div>
              <p>ESTIMATE PROJECT</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Start;

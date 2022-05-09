import React from "react";
import Image from "next/image";
import classes from "./partnership.module.scss";
import partnership from "../../assets/images/about-page/partnership@3x.png";

const Partnership = () => {
  return (
    <section className={classes.partnership}>
      <div className={classes.presentation}>
        <div className={classes.title}>
          <h1>Partnership</h1>
        </div>

        <div className={classes.text}>
          <p className={classes.highlight}>Interested in becoming a partner?</p>
          <p>
            We{"'"}re also open to new partners so if you want to be <br />
            part of our company send us a message and we will <br />
            schedule a call to learn more about it.
          </p>
        </div>
      </div>

      <div className={classes["image-wrapper"]}>
        <div className={classes.image}>
          <Image src={partnership} layout="responsive" alt="image" />
        </div>
      </div>
    </section>
  );
};

export default Partnership;

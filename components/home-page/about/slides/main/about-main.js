import React from "react";
import HomePresentation from "../../../../reusables/home-presentation";
import HomeCTA from "../../../../reusables/home-cta";
import about from "../../../../../assets/images/home-page/about/about@3x.png";
import classes from "../../../../../styles/home-page/about/about.module.scss";

const AboutMain = () => {
  return (
    <>
      <HomePresentation
        nr="07"
        pre="Who are we?"
        main={<h1>About</h1>}
        text={
          <p className={classes["p-text"]}>
            First things first you can start by meeting the{" "}
            <span className={classes.highlight}>founders</span>. <br />
            Then we{"'"}ll introduce you to our{" "}
            <span className={classes.highlight}>team</span>. <br />
            Now you wanna see our working{" "}
            <span className={classes.highlight}>tools</span>?
          </p>
        }
        textStyle={classes.text}
      />
      <HomeCTA
        src={about}
        linkTo={"/about"}
        buttonText={"Details"}
        containerStyle={classes["image-container"]}
        contentStyle={classes.content}
        ctaStyle={classes.cta}
      />
    </>
  );
};

export default AboutMain;

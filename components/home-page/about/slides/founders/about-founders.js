import React from "react";
import HomePresentation from "../../../../reusables/home-presentation";
import HomeCTA from "../../../../reusables/home-cta";
import about from "../../../../../assets/images/home-page/about/about@3x.png";
import classes from "../../../../../styles/home-page/about/about.module.scss";

const AboutFounders = () => {
  return (
    <>
      <HomePresentation
        nr="07"
        pre="Nice to meet you!"
        main={<h1>Founders</h1>}
        text={
          <p className={classes["p-text"]}>
            We{"'"}ve decided to create this startup CA23 so <br /> we can offer
            our services and help other <br /> people start their own online
            business.
          </p>
        }
      />
      <HomeCTA
        src={about}
        linkTo={"/founders"}
        buttonText={"Details"}
        containerStyle={classes["image-container"]}
        contentStyle={classes.content}
        ctaStyle={classes.cta}
      />
    </>
  );
};

export default AboutFounders;

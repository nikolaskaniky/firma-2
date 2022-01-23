import React from "react";
import HomePresentation from "../../../../reusables/home-presentation";
import HomeCTA from "../../../../reusables/home-cta";
import apps from "../../../../../assets/images/home-page/apps/apps@3x.png";
import classes from "../../../../../styles/home-page/apps/apps.module.scss";

const AppsMain = () => {
  return (
    <>
      <HomePresentation
        nr="04"
        pre="We also build"
        main={<h1>Apps</h1>}
        text={
          <p>
            We design and develop cross-platform mobile apps, <br />
            the benefit of an app is that you have a great tool <br />
            to engage with customers and you can send them <br />
            push notifications.
          </p>
        }
      />
      <HomeCTA
        src={apps}
        linkTo={"/apps"}
        buttonText={"Simulate app price"}
        containerStyle={classes["image-container"]}
        contentStyle={classes.content}
        ctaStyle={classes.cta}
      />
    </>
  );
};

export default AppsMain;

import React from "react";
import HomePresentation from "../../../../reusables/home-presentation";
import HomeCTA from "../../../../reusables/home-cta";
import navigator from "../../../../../assets/images/home-page/website/navigator@3x.png";
import classes from "../../../../../styles/home-page/website/navigator.module.scss";

const WebsiteNavigator = () => {
  return (
    <>
      <HomePresentation
        nr="03"
        pre="The purpose of"
        main={<h1>Navigator</h1>}
        text={
          <p>
            The navigator helps us to easily navigate through <br />
            our website pages and have quick access <br />
            to them.
          </p>
        }
        button
        buttonText="Simulate website price"
        buttonSubtext={
          <h4>
            You can use our simulator to see an estimative <br />
            price of your desired web site
          </h4>
        }
      />
      <HomeCTA
        src={navigator}
        linkTo={"/website"}
        buttonText={"See our models"}
        containerStyle={classes["image-container"]}
        contentStyle={classes.content}
        ctaStyle={classes.cta}
      />
    </>
  );
};

export default WebsiteNavigator;

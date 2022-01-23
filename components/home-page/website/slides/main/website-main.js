import React from "react";
import HomeCTA from "../../../../reusables/home-cta";
import HomePresentation from "../../../../reusables/home-presentation";
import website from "../../../../../assets/images/home-page/website/website.svg";
import classes from "../../../../../styles/home-page/website/website.module.scss";

const WebsiteMain = () => {
  return (
    <>
      <HomePresentation
        nr="03"
        pre="Need a"
        main={<h1>Website</h1>}
        text={
          <p>
            We design and develop websites for startups, <br />
            small and medium size businesses.
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
        src={website}
        linkTo={"/website"}
        buttonText={"See our models"}
        containerStyle={classes["image-container"]}
        contentStyle={classes.content}
        ctaStyle={classes.cta}
      />
    </>
  );
};

export default WebsiteMain;

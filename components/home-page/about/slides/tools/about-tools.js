import React from "react";
import HomePresentation from "../../../../reusables/home-presentation";
import HomeCTA from "../../../../reusables/home-cta";
import tools from "../../../../../assets/images/home-page/about/tools@3x.png";
import classes from "../../../../../styles/home-page/about/tools.module.scss";

const AboutTools = () => {
  return (
    <>
      <HomePresentation
        nr="07"
        pre="These are"
        main={<h1>Our tools</h1>}
        text={
          <p className={classes["p-text"]}>
            We’re working with the tools that helped at creating <br />
            the biggest platforms of the web, this way we can <br />
            keep our projects secured and updated.
          </p>
        }
      />
      <HomeCTA
        src={tools}
        linkTo={"/about"}
        buttonText={"Hire us"}
        containerStyle={classes["image-container"]}
        contentStyle={classes.content}
        ctaStyle={classes.cta}
      />
    </>
  );
};

export default AboutTools;

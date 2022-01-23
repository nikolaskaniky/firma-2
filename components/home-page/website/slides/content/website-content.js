import React from "react";
import HomeCTA from "../../../../reusables/home-cta";
import HomePresentation from "../../../../reusables/home-presentation";
import content from "../../../../../assets/images/home-page/website/content@3x.png";
import classes from "../../../../../styles/home-page/website/content.module.scss";

const WebsiteContent = () => {
  return (
    <>
      <HomePresentation
        nr="03"
        pre="The purpose of"
        main={<h1>Content</h1>}
        text={
          <p>
            Here is the place where all the website content is <br />
            displayed such as different sections that can hold <br />
            products or blog news and many other elements.
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
        src={content}
        linkTo={"/website"}
        buttonText={"See our models"}
        containerStyle={classes["image-container"]}
        contentStyle={classes.content}
        ctaStyle={classes.cta}
      />
    </>
  );
};

export default WebsiteContent;

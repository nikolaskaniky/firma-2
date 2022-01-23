import React from "react";
import HomePresentation from "../../../../reusables/home-presentation";
import HomeCTA from "../../../../reusables/home-cta";
import footer from "../../../../../assets/images/home-page/website/footer@3x.png";
import classes from "../../../../../styles/home-page/website/footer.module.scss";

const WebsiteFooter = () => {
  return (
    <>
      <HomePresentation
        nr="03"
        pre="Purpose of"
        main={<h1>Footer</h1>}
        text={
          <p>
            We will always find the footer element at the bottom of <br />
            a website with elements like our navigation links, a <br />
            subscription box, or the website terms and conditions <br />
            and many more.
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
        src={footer}
        linkTo={"/website"}
        buttonText={"See our models"}
        containerStyle={classes["image-container"]}
        contentStyle={classes.content}
        ctaStyle={classes.cta}
      />
    </>
  );
};

export default WebsiteFooter;

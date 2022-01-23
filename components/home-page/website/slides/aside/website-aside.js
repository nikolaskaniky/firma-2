import React from "react";
import HomePresentation from "../../../../reusables/home-presentation";
import HomeCTA from "../../../../reusables/home-cta";
import aside from "../../../../../assets/images/home-page/website/aside@3x.png";
import classes from "../../../../../styles/home-page/website/aside.module.scss";

const WebsiteAside = () => {
  return (
    <>
      <HomePresentation
        nr="03"
        pre="Purpose of"
        main={<h1>Aside</h1>}
        text={
          <p>
            This element is mostly used for an aside navigator or <br /> have
            some other content like an advertise displayed <br /> on our
            website.
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
        src={aside}
        linkTo={"/website"}
        buttonText={"See our models"}
        containerStyle={classes["image-container"]}
        contentStyle={classes.content}
        ctaStyle={classes.cta}
      />
    </>
  );
};

export default WebsiteAside;

import React from "react";
import HomePresentation from "../../../../reusables/home-presentation";
import HomeCTA from "../../../../reusables/home-cta";
import dashbord from "../../../../../assets/images/home-page/website/dashbord@3x.png";
import classes from "../../../../../styles/home-page/website/dashbord.module.scss";

const WebsiteDashbord = () => {
  return (
    <>
      <HomePresentation
        nr="03"
        pre="Purpose of"
        main={<h1>Dashbord</h1>}
        text={
          <p>
            The dashboard helps the business owner or the <br />
            admin to manage and check the products, <br />
            orders or user invoices.
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
        src={dashbord}
        linkTo={"/website"}
        buttonText={"See our models"}
        containerStyle={classes["image-container"]}
        contentStyle={classes.content}
        ctaStyle={classes.cta}
      />
    </>
  );
};

export default WebsiteDashbord;

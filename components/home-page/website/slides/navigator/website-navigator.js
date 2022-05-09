import React from "react";
import HomePresentation from "../../../../reusables/home-presentation";
import navigator from "../../../../../assets/images/home-page/website/navigator@3x.png";
import CTASection from "../../../ui/cta-section/cta-section";

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
      <CTASection
        image={navigator}
        width="551"
        height="289"
        buttonText="See our models"
        linkTo='/models'
      />
    </>
  );
};

export default WebsiteNavigator;

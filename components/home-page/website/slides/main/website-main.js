import React from "react";
import CTASection from "../../../ui/cta-section/cta-section";
import HomePresentation from "../../../../reusables/home-presentation";
import website from "../../../../../assets/images/home-page/website/website.svg";

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
      <CTASection
        image={website}
        width="574"
        height="475"
        buttonText="See our models"
        linkTo="/models"
      />
    </>
  );
};

export default WebsiteMain;

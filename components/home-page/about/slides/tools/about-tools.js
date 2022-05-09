import React from "react";
import HomePresentation from "../../../../reusables/home-presentation";
import tools from "../../../../../assets/images/home-page/about/tools@3x.png";
import CTASection from "../../../ui/cta-section/cta-section";

const AboutTools = () => {
  return (
    <>
      <HomePresentation
        nr="07"
        pre="These are"
        main={<h1>Our tools</h1>}
        text={
          <p>
            We’re working with the tools that helped at creating <br />
            the biggest platforms of the web, this way we can <br />
            keep our projects secured and updated.
          </p>
        }
      />
      <CTASection
        image={tools}
        width="421"
        height="448"
        buttonText="See details"
        linkTo="/details"
      />
    </>
  );
};

export default AboutTools;

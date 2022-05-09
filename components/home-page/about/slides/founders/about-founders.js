import React from "react";
import HomePresentation from "../../../../reusables/home-presentation";
import about from "../../../../../assets/images/home-page/about/about@3x.png";
import CTASection from "../../../ui/cta-section/cta-section";

const AboutFounders = () => {
  return (
    <>
      <HomePresentation
        nr="07"
        pre="Nice to meet you!"
        main={<h1>Founders</h1>}
        text={
          <p>
            We{"'"}ve decided to create this startup CA23 so <br /> we can offer
            our services and help other <br /> people start their own online
            business.
          </p>
        }
      />
       <CTASection image={about} width='554' height='520' buttonText='See details' linkTo='/' />
    </>
  );
};

export default AboutFounders;

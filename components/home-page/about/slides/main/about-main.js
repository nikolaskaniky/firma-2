import React from "react";
import HomePresentation from "../../../../reusables/home-presentation";
import about from "../../../../../assets/images/home-page/about/about@3x.png";
import CTASection from "../../../ui/cta-section/cta-section";

const AboutMain = () => {
  return (
    <>
      <HomePresentation
        nr="07"
        pre="Who are we?"
        main={<h1>About</h1>}
        text={
          <p>
            First things first you can start by meeting the{" "}
            <span>founders</span>. <br />
            Then we{"'"}ll introduce you to our <span>team</span>. <br />
            Now you wanna see our working <span>tools</span>?
          </p>
        }
      />
      <CTASection image={about} width='554' height='520' buttonText='See details' linkTo='/details' />
    </>
  );
};

export default AboutMain;

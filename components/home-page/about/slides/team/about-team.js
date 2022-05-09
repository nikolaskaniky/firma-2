import React from "react";
import HomePresentation from "../../../../reusables/home-presentation";
import team from "../../../../../assets/images/home-page/about/team@3x.png";
import CTASection from "../../../ui/cta-section/cta-section";

const AboutTeam = () => {
  return (
    <>
      <HomePresentation
        nr="07"
        pre="Nice to meet you!"
        main={<h1>Our team</h1>}
        text={
          <p>
            We are an enthusiastic and creative team who come <br />
            up with great ideas and solutions .<br />
            Here at CA23 we are not working, we do what we like <br />
            and that{"'"}s why we succeed.
          </p>
        }
      />
       <CTASection image={team} width='382' height='428' buttonText='See details' linkTo='/details' />
    </>
  );
};

export default AboutTeam;

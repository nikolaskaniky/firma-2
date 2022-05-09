import React from "react";
import HomePresentation from "../../../../reusables/home-presentation";
import aside from "../../../../../assets/images/home-page/website/aside@3x.png";
import '../../../ui/cta-section/cta-section';
import CTASection from "../../../ui/cta-section/cta-section";

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
      <CTASection image={aside} width='540' height='487' linkTo='/models' buttonText="See models" />
    </>
  );
};

export default WebsiteAside;

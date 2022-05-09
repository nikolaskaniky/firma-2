import React from "react";
import HomePresentation from "../../../../reusables/home-presentation";
import apps from "../../../../../assets/images/home-page/apps/apps@3x.png";
import CTASection from '../../../ui/cta-section/cta-section';

const AppsMain = () => {
  return (
    <>
      <HomePresentation
        nr="04"
        pre="We also build"
        main={<h1>Apps</h1>}
        text={
          <p>
            We design and develop cross-platform mobile apps, <br />
            the benefit of an app is that you have a great tool <br />
            to engage with customers and you can send them <br />
            push notifications.
          </p>
        }
      />

      <CTASection image={apps} width='451' height='561' buttonText='Simulate app price' linkTo='apps' />
    </>
  );
};

export default AppsMain;

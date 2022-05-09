import React from "react";
import HomePresentation from "../../../../reusables/home-presentation";
import dashbord from "../../../../../assets/images/home-page/website/dashbord@3x.png";
import CTASection from "../../../ui/cta-section/cta-section";

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
      <CTASection image={dashbord} width='622' height='426' buttonText='See models' linkTo='/models' />
    </>
  );
};

export default WebsiteDashbord;

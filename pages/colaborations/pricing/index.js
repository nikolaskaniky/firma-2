import React from "react";
import Hero from "../../../components/pricing-page/hero";
import NavigationBar from "../../../components/pricing-page/navigation-bar";
import classes from "../../../styles/pricing-page/pricing-page.module.scss";

const PricingPage = () => {
  return (
    <main className={classes["pricing-page"]}>
      <NavigationBar />
      <Hero />
    </main>
  );
};

export default PricingPage;

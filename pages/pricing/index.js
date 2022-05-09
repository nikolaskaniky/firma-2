import React from "react";
import Hero from "../../../components/pricing-page/hero";
import NavigationBar from "../../../components/pricing-page/navigation-bar";
import Table from "../../../components/pricing-page/table/table";
import classes from "./index.module.scss";

const PricingPage = () => {
  return (
    <main className={classes["pricing-page"]}>
      <NavigationBar />
      <Hero />
      <Table />
    </main>
  );
};

export default PricingPage;

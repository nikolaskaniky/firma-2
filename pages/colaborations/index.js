import React from "react";
import Colaborations from "../../components/colaborations-page/colaborations";
import NavigationHeader from "../../components/reusables/navigation-header";
import classes from "../../styles/colaborations-page/colaborations-page.module.scss";

const ColaborationsPage = () => {
  return (
    <main className={classes["collaborations-page"]}>
      <NavigationHeader />
      <Colaborations />
    </main>
  );
};

export default ColaborationsPage;

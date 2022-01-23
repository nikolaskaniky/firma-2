import React from "react";
import Jobs from "../../components/jobs-page/jobs";
import NavigationHeader from "../../components/reusables/navigation-header";
import classes from "../../styles/jobs-page/jobs-page.module.scss";

const JobsPage = () => {
  return (
    <main className={classes["jobs-page"]}>
      <NavigationHeader />
      <Jobs />
    </main>
  );
};

export default JobsPage;

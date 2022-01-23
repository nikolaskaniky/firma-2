import React, { useState } from "react";
import Hero from "../../components/repair-page/hero";
import RepairCTA from "../../components/repair-page/repair-cta";
import RepairPop from "../../components/repair-page/repair-pop";
import NavigationHeader from "../../components/reusables/navigation-header";
import Portal from "../../components/reusables/portal";
import classes from "../../styles/repair-page/repair-page.module.scss";

const RepairPage = () => {
  const [pop, setPop] = useState(false);
  const popHandler = () => setPop(prev => setPop(!prev));

  return (
    <main className={classes["repair-page"]}>
      <NavigationHeader />
      <Hero />
      <RepairCTA popHandler={popHandler} />

      {pop && (
        <Portal>
          <RepairPop popHandler={popHandler} />
        </Portal>
      )}
    </main>
  );
};

export default RepairPage;

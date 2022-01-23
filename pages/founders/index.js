import React, { useState } from "react";
import classes from "../../styles/founders-page/founders-page.module.scss";
import { main_founders } from "../../data/founders-data";
import Hero from "../../components/founders-page/hero";
import Header from "../../components/founders-page/header";
import Office from "../../components/founders-page/office";
import Certificates from "../../components/founders-page/certificates";
import Skills from "../../components/founders-page/skills";

const FoundersPage = () => {
  const [selectedFounder, setSelectedFounder] = useState(main_founders[0].name);
  const selectedFounderHandler = (item) => setSelectedFounder(item.name);
  const founder = main_founders.find(
    (founder) => founder.name === selectedFounder
  );

  return (
    <main className={classes["founders-page"]}>
      <Header
        founders={main_founders}
        selectedFounder={selectedFounder}
        selectedFounderHandler={selectedFounderHandler}
      />
      <Hero founder={founder} />
      <Office founder={founder} />
      <Certificates founder={founder} />
      <Skills founder={founder} />
    </main>
  );
};

export default FoundersPage;

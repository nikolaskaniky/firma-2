import React from "react";
import classes from "./confirmation.module.scss";

const Confirmation = () => {
  return (
    <section className={classes.confirmation}>
      <h1>Confirmed</h1>
      <p>
        Iti multumim ca ai ales sa lucrezi cu noi. <br /> Cererea ta a fost confirmata
        cu succes!
      </p>
    </section>
  );
};

export default Confirmation;

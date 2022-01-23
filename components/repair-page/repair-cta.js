import React from "react";
import classes from "../../styles/repair-page/repair-page.module.scss";

const RepairCTA = (props) => {
  const { popHandler } = props;

  return (
    <section className={classes.cta}>
      <div className={classes.title}>
        <h1>Repair website</h1>
      </div>

      <div className={classes.text}>
        <p>
          Website troubles ? <br />
          If you already have a website and it got slow and old, <br />
          well we offer mordern solutions and services to bring your business up
          to <br /> date.
        </p>
      </div>

      <div className={classes.button} onClick={popHandler}>
        <p>repair</p>
      </div>
    </section>
  );
};

export default RepairCTA;

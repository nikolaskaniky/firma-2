import React from "react";
import classes from "./gallery.module.scss";

const GalleryCTA = () => {
  return (
    <div className={classes.cta}>
      <div className={classes.info}>
        <h4>Ready to get started?</h4>
        <p>
          ai terminat de cautat sau informat cea ce doresti treci la simulator{" "}
          <br />
          ca sa iti obti proriul tau site acum ! <br />
          te asteptam cu drag.
        </p>
      </div>

      <div className={classes.button}>
          <div className={classes['button-wrapper']}>
              <p>Simulate calculator</p>
          </div>
      </div>
    </div>
  );
};

export default GalleryCTA;

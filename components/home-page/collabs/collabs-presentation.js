import React from "react";
import classes from "./collabs.module.scss";

const CollabsPresentation = () => {
  return (
    <div className={classes.presentation}>
      <div className={classes.nr}>
        <h1>08</h1>
      </div>

      <div className={classes["title-wrapper"]}>
        <div className={classes.pre}>
          <div className={classes.line}></div>
          <p>Let{"'"}s work together!</p>
        </div>

        <div className={classes.main}>
          <h1>Collabs</h1>
        </div>
      </div>

      <div className={classes.text}>
        <p>
          Let us know if you need a hand on your project and send us <br />
          your request and project details, and we will get back to <br />
          you as soon as possible.
        </p>
      </div>
    </div>
  );
};

export default CollabsPresentation;

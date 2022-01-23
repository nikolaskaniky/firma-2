import React from "react";
import classes from "../../styles/create-page/create-page.module.scss";

const CreateCTA = () => {
  return (
    <section className={classes.cta}>
      <div className={classes.title}>
        <h1>Calculator</h1>
      </div>

      <div className={classes.text}>
        <p>
          Calculate the cost of your project to get estimative results on both
          low <br /> and high end prices. After this step you can schedule a
          call with us and <br /> talk about the details of your project.
        </p>
      </div>

      <div className={classes.buttons}>
        <div className={classes.button}>
          <p>Website</p>
        </div>

        <div className={classes.button}>
          <p>Custom Component</p>
        </div>

        <div className={classes.button}>
          <p>App</p>
        </div>
      </div>
    </section>
  );
};

export default CreateCTA;

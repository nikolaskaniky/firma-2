import React from "react";
import classes from "./create.module.scss";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import Box from '../../../UI/box/box';

const CreateCTA = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const selectedCalculator = useSelector((state) => state.selectedCalculator);
  const goToWebsiteCalculatorHandler = () => {
    dispatch({ type: "WEBSITE" });
    router.push("/calculator");
  };
  const goToComponentCalculatorHandler = () => {
    dispatch({ type: "COMPONENT" });
    router.push("/calculator");
  };

  return (
    <Box style={classes.cta}>
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
        <div className={classes.button} onClick={goToWebsiteCalculatorHandler}>
          <p>Website</p>
        </div>

        <div
          className={classes.button}
          onClick={goToComponentCalculatorHandler}
        >
          <p>Custom Component</p>
        </div>

        <div className={classes.button}>
          <p>App</p>
        </div>
      </div>
    </Box>
  );
};

export default CreateCTA;

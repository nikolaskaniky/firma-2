import React from "react";
import classes from "./calculator.module.scss";
import Row from "./row";
import { useDispatch, useSelector } from "react-redux";

const Calculator = (props) => {
  const { websiteCalculatorData, setWebsiteCalculatorData, goNextHandler } =
    props;
  const dispatch = useDispatch();
  const currentSlide = useSelector((state) => state.currentSlide);
  const nextSlideHandler = () => dispatch({ type: "INCREASE" });

  return (
    <section className={classes.calculator}>
      <ul className={classes["tabel"]}>
        {websiteCalculatorData.map((row, index) => (
          <Row
            key={index}
            row={row}
            index={index}
            websiteCalculatorData={websiteCalculatorData}
            setWebsiteCalculatorData={setWebsiteCalculatorData}
          />
        ))}
      </ul>
      <button onClick={goNextHandler}>See pricing results</button>
    </section>
  );
};

export default Calculator;

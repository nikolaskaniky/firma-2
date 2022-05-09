import React from "react";
import classes from "./price-results.module.scss";
import Row from "./row";

const PriceResults = (props) => {
  const { websiteCalculatorData, setWebsiteCalculatorData, goNextHandler, setCurrentSlide } = props;

  return (
    <section className={classes["price-results"]}>
      <ul className={classes.table}>
        <div className={classes["top-labels"]}>
          <div className={classes["min-label"]}>
            <p>medium</p>
          </div>

          <div className={classes["max-label"]}>
            <p>high</p>
          </div>
        </div>
        {websiteCalculatorData.map((row, index) => (
          <Row
            key={index}
            row={row}
            websiteCalculatorData={websiteCalculatorData}
            setWebsiteCalculatorData={setWebsiteCalculatorData}
            index={index}
          />
        ))}
      </ul>

      <div className={classes.buttons}>
        <button onClick={() => setCurrentSlide(0)}>Get another Quote</button>
      <button onClick={goNextHandler}>Schedule a call</button>
      </div>
    </section>
  );
};

export default PriceResults;

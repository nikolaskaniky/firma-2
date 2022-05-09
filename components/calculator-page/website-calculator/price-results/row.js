import React, { useEffect } from "react";
import classes from "./price-results.module.scss";
import useCalculator from "../useCalculator";

const Row = (props) => {
  const { row, websiteCalculatorData, setWebsiteCalculatorData, index } = props;
  const { option, name, prices } = useCalculator(row.selectedOption, row.label);

  useEffect(() => {
    const list = [...websiteCalculatorData];
    list[index].minPrice = prices.minPrice;
    list[index].maxPrice = prices.maxPrice;
    setWebsiteCalculatorData(list);
  }, [prices]);

  console.log(websiteCalculatorData)

  return (
    <li className={classes.row}>
      <div className={classes.wrapper}>
        <div className={classes["label"]}>
          <h4>{row.label}</h4>
        </div>

        <div className={classes["selected-option"]}>
          <h4>{row.selectedOption}</h4>
        </div>

        <div className={classes.price}>
          <h4>{row.minPrice}</h4>
        </div>
      </div>

      <div className={classes["wrapper-max-price"]}>
        <h4>{row.maxPrice}</h4>
      </div>
    </li>
  );
};

export default Row;

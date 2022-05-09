import React, { useState } from "react";
import DropdownInput from "./dropdown-input";
import classes from "./calculator.module.scss";

const Calculator = (props) => {
  const { customComponentData, setCustomComponentData, goNextHandler } = props;
  const [selectedInput, setSelectedInput] = useState("");
  const selectedInputHandler = (label) => setSelectedInput(label);

  return (
    <ul className={classes.calculator}>
      {customComponentData.map((row, index) => (
        <li key={index}>
          <p>{row.label}</p>
          <DropdownInput
            row={row}
            customComponentData={customComponentData}
            setCustomComponentData={setCustomComponentData}
            selectedInput={selectedInput}
            setSelectedInput={setSelectedInput}
            selectedInputHandler={selectedInputHandler}
            mainIndex={index}
          />
        </li>
      ))}
      <div className={classes.total}>
        <p>total:</p>
        <div className={classes["input-box"]}>
          <p>
            {customComponentData.reduce((curr, next) => curr + next.minPrice, 0)}$
          </p>
        </div>
      </div>

      <div className={classes.button} onClick={goNextHandler}>Confirm</div>
    </ul>
  );
};

export default Calculator;

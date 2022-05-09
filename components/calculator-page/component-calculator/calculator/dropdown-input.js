import React, { useState, useEffect } from "react";
import classes from "./calculator.module.scss";
import PriceInput from "./price-input";

const DropdownInput = (props) => {
  const {
    row,
    customComponentData,
    setCustomComponentData,
    selectedInputHandler,
    selectedInput,
    setSelectedInput,
    mainIndex,
  } = props;
  const [selectedOption, setSelectedOption] = useState(row.options[0].name);
  const [price, setPrice] = useState(row.options[0].price);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const list = [...customComponentData];
    list[mainIndex].minPrice = price;
    list[mainIndex].selectedOption = selectedOption;
    setCustomComponentData(list);
  }, [price]);

  useEffect(() => setIsMounted(true), []);

  isMounted &&
    window.addEventListener("click", (e) => {
      setSelectedInput("");
    });

  return (
    <>
      <div
        className={classes["dropdown-input"]}
        onClick={(e) => {
          e.stopPropagation();
          if (!selectedInput || selectedInput !== row.label) {
            selectedInputHandler(row.label);
          } else {
            setSelectedInput("");
          }
        }}
      >
        <p>{selectedOption.toUpperCase()}</p>

        {/* //todo| dropdown */}
        {selectedInput === row.label && (
          <div className={classes["dropdown-list"]}>
            {row.options.map((option, index) => (
              <div
                className={classes.option}
                key={index}
                onClick={(e) => {
                  setSelectedOption(option.name);
                  setSelectedInput("");
                  e.stopPropagation();
                  setPrice(option.price);
                }}
              >
                <p>{option.name.toUpperCase()}</p>
              </div>
            ))}
          </div>
        )}
      </div>

      <PriceInput selectedOption={selectedOption} price={price} />
    </>
  );
};

export default DropdownInput;

import React, { useState, useEffect, useRef } from "react";
import classes from "./calculator.module.scss";
import Dots from "./dots";

const Row = (props) => {
  const { row, websiteCalculatorData, setWebsiteCalculatorData, index } = props;

  const [mounted, setMounted] = useState(false);
  const optionsLength = row.options.length;
  const spacePerOption = 100 / (optionsLength - 1);

  const [handlerIsClicked, setHandlerIsClicked] = useState(false);
  const handlerIsClickedHandler = (e) => {
    e.stopPropagation();
    setHandlerIsClicked(true);
  };

  const [sliderIsClicked, setSliderIsClicked] = useState(false);

  const [mousePosition, setMousePosition] = useState(0);
  const mousePositionHandler = (e) => {
    setMousePosition(e.clientX);
  };

  const [currentHandlerIndex, setCurrentHandlerIndex] = useState(0);
  const [selectedValue, setSelectedValue] = useState(row.options[0].name);

  useEffect(() => {
    setMounted(true);
    setCurrentHandlerIndex(0);
  }, []);

  useEffect(() => {
    handlerIsClicked &&
      window.addEventListener("mousemove", mousePositionHandler);

    sliderIsClicked &&
      window.addEventListener("mouseup", () => {
        setSliderIsClicked(false);
      });
  }, [handlerIsClicked, sliderIsClicked, selectedValue]);

  mounted &&
    handlerIsClicked &&
    window.addEventListener("mouseup", () => {
      setHandlerIsClicked(false);
      window.removeEventListener("mousemove", mousePositionHandler);
    });

  const sliderIsClickedHandler = (e) => {
    setMousePosition(e.clientX);
    setSliderIsClicked(true);
  };

  useEffect(() => {
    if (!handlerIsClicked) {
      const list = [...websiteCalculatorData];
      list[index].selectedOption = selectedValue;
      setWebsiteCalculatorData(list);
    }
  }, [selectedValue]);

  return (
    <li className={classes.row}>
      <h4>{row.label}</h4>

      <div className={classes.range}>
        <div className={classes.slider} onMouseDown={sliderIsClickedHandler}>
          <div
            className={classes.progression}
            style={{
              width: 100 - spacePerOption * currentHandlerIndex + "%",
              transition: "0.1s ease all",
            }}
          />
          <a
            className={classes.handler}
            onMouseDown={handlerIsClickedHandler}
            style={{
              left: currentHandlerIndex * spacePerOption - 2 + "%",
              transition: "0.1s ease all",
            }}
          >
            {selectedValue}
          </a>

          {/* //! dots */}
          {row.options.map((dot, index) => (
            <Dots
              key={index}
              dot={dot}
              index={index}
              spacePerOption={spacePerOption}
              mounted={mounted}
              mousePosition={mousePosition}
              currentHandlerIndex={currentHandlerIndex}
              setCurrentHandlerIndex={setCurrentHandlerIndex}
              optionsLength={optionsLength}
              selectedValue={selectedValue}
              setSelectedValue={setSelectedValue}
              handlerIsClicked={handlerIsClicked}
              sliderIsClicked={sliderIsClicked}
            />
          ))}
        </div>
      </div>
    </li>
  );
};

export default Row;

import React, { useState, useEffect, useRef } from "react";
import classes from "../styles/test.module.scss";

const CALCULATOR_ARRAY = [
  {
    label: "pages",
    options: ["one", "five", "ten", "fifteen"],
    selectedOption: "",
  },

  {
    label: "numbers",
    options: ["1", "2", "3", "4"],
    selectedOption: "",
  },

  {
    label: "design",
    options: ["no", "yes"],
    selectedOption: "",
  },
];

const CalculatorPage = () => {
  return (
    <main className={classes["calculator-page"]}>
      <h1>calculator</h1>

      <ul className={classes.calculator}>
        {CALCULATOR_ARRAY.map((item, index) => (
          <Range key={index} item={item} />
        ))}
      </ul>
    </main>
  );
};

export default CalculatorPage;

//! RANGE.

export const Range = (props) => {
  const { item } = props;
  const [mounted, setMounted] = useState(false);

  const optionsLength = item.options.length;
  const dotDistance = 100 / (optionsLength - 1);

  const [handlerIsActive, setHandlerIsActive] = useState(false);
  const handlerIsActiveHandler = (event) => {
    event.stopPropagation();
    setHandlerIsActive(true);
  };

  const [clickIsActive, setClickIsActive] = useState(false);

  const [mousePosition, setMousePosition] = useState(0);
  const getMousePositionHandler = (event) => {
    setMousePosition(event.clientX);
  };

  const [theIndex, setTheIndex] = useState(0);
  const [selectedValue, setSelectedValue] = useState(item.options[0]);

  useEffect(() => {
    setMounted(true);
    setTheIndex(0);
  }, []);

  useEffect(() => {
    handlerIsActive &&
      window.addEventListener("mousemove", getMousePositionHandler);

    clickIsActive &&
      window.addEventListener("mouseup", () => {
        setClickIsActive(false);
      });
  }, [handlerIsActive, clickIsActive, selectedValue]);

  mounted &&
    handlerIsActive &&
    window.addEventListener("mouseup", () => {
      setHandlerIsActive(false);
      window.removeEventListener("mousemove", getMousePositionHandler);
    });

  const getClickedStatusHandler = (event) => {
    setMousePosition(event.clientX);
    setClickIsActive(true);
  };

  return (
    <li className={classes.row}>
      <h4>{item.label}</h4>

      <div className={classes.range}>
        <div className={classes.slider} onMouseDown={getClickedStatusHandler}>
          <div
            className={classes.progression}
            style={{
              width: 100 - dotDistance * theIndex + "%",
              transition: "0.1s ease all",
            }}
          />
          <a
            className={classes.handler}
            onMouseDown={handlerIsActiveHandler}
            style={{
              left: theIndex * dotDistance - 2 + "%",
              transition: "0.1s ease all",
            }}
          >
            {selectedValue}
          </a>
          {item.options.map((dot, index) => (
            <Dots
              mounted={mounted}
              key={index}
              dot={dot}
              index={index}
              dotDistance={dotDistance}
              optionsLength={optionsLength}
              mousePosition={mousePosition}
              setTheIndex={setTheIndex}
              setSelectedValue={setSelectedValue}
              handlerIsActive={handlerIsActive}
              theIndex={theIndex}
              clickIsActive={clickIsActive}
            />
          ))}
        </div>

        {/* <select name="" id=""></select> */}
      </div>
    </li>
  );
};

//! DOTS.

export const Dots = (props) => {
  const {
    dot,
    index,
    dotDistance,
    optionsLength,
    mounted,
    mousePosition,
    setTheIndex,
    handlerIsActive,
    theIndex,
    setSelectedValue,
    clickIsActive,
  } = props;

  const dotRef = useRef();
  const dotPosition = mounted && dotRef.current.getBoundingClientRect().x;

  useEffect(() => {
    if (mousePosition > dotPosition - 40) {
      setTheIndex(index);
    }

    handlerIsActive &&
      theIndex === index &&
      window.addEventListener("mouseup", () => setSelectedValue(dot));

    clickIsActive &&
      theIndex === index &&
      window.addEventListener("mouseup", () => setSelectedValue(dot));
  }, [mousePosition, theIndex, handlerIsActive, clickIsActive]);

  return (
    <span>
      <span
        ref={dotRef}
        className={`${classes.dot} ${
          index === 0 ? classes.hidden : undefined
        } ${index === optionsLength - 1 ? classes.hidden : undefined}`}
        style={{ left: dotDistance * index + "%" }}
      ></span>
      <span className={classes["dot-label"]}></span>
    </span>
  );
};

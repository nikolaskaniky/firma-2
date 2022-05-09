import React, { useRef, useEffect } from "react";
import classes from "./calculator.module.scss";

const Dots = (props) => {
  const {
    dot,
    index,
    spacePerOption,
    mounted,
    mousePosition,
    currentHandlerIndex,
    setCurrentHandlerIndex,
    optionsLength,
    setSelectedValue,
    handlerIsClicked,
    sliderIsClicked,
    rangeLeft,
  } = props;

  const dotRef = useRef();
  const dotPosition = mounted && dotRef.current.getBoundingClientRect().x;

  useEffect(() => {
    if (mousePosition > dotPosition - 40) {
      setCurrentHandlerIndex(index);
    }

    handlerIsClicked &&
      index === currentHandlerIndex &&
      window.addEventListener("mouseup", function () {
        setSelectedValue(dot.name);
      });

    sliderIsClicked &&
      index === currentHandlerIndex &&
      window.addEventListener("mouseup", () => setSelectedValue(dot.name));
  }, [mousePosition, currentHandlerIndex, handlerIsClicked, sliderIsClicked]);

  return (
    <div
      className={classes.dot}
      ref={dotRef}
      style={{
        left: index * spacePerOption + "%",
        opacity: index === 0 ? 0 : index === optionsLength - 1 ? 0 : 1,
      }}
      onMouseDown={() => setCurrentHandlerIndex(index)}
    ></div>
  );
};

export default Dots;

import React, { Fragment, useState } from "react";
import classes from "./index.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import WebsiteCalculator from "../../components/calculator-page/website-calculator/website-calculator";
import ComponentCalculator from "../../components/calculator-page/component-calculator/component-calculator";

const CalculatorPage = () => {
  const dispatch = useDispatch();
  const selectedCalculator = useSelector((state) => state.selectedCalculator);

  const [currentSlide, setCurrentSlide] = useState(0);
  const goBackHandler = () =>
    setCurrentSlide(currentSlide === 0 ? 0 : currentSlide - 1);
  const goNextHandler = () => setCurrentSlide(currentSlide + 1);

  const calculators_array = [
    {
      component: (
        <WebsiteCalculator
          goNextHandler={goNextHandler}
          currentSlide={currentSlide}
          setCurrentSlide={setCurrentSlide}
        />
      ),
      label: "website",
    },

    {
      component: (
        <ComponentCalculator
          goNextHandler={goNextHandler}
          currentSlide={currentSlide}
          setCurrentSlide={setCurrentSlide}
        />
      ),
      label: "component",
    },
  ];

  console.log(selectedCalculator);

  return (
    <main className={classes["calculator-page"]}>
      {/* //! <-- top go back */}
      {currentSlide >= 1 && (
        <div className={classes["go-back-wrapper"]}>
          <div className={classes["back-container"]} onClick={goBackHandler}>
            <BsFillArrowLeftCircleFill />
            <p>Back</p>
          </div>
        </div>
      )}
      {/* //! --> */}

      {calculators_array.map(
        (calculator, index) =>
          calculator.label === selectedCalculator && (
            <Fragment key={index}>{calculator.component}</Fragment>
          )
      )}
    </main>
  );
};

export default CalculatorPage;

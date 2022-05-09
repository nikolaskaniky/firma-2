import React, { useState, Fragment } from "react";
import Pagination from "../reusable/pagination/pagination";
import Calculator from "./calculator/calculator";
import classes from "./component-calculator.module.scss";
import Form from "../../send-request-page/form";
import Confirmation from "../reusable/confirmation/confirmation";

const ComponentCalculator = (props) => {
  const { currentSlide, setCurrentSlide, goNextHandler } = props;
  const [customComponentData, setCustomComponentData] = useState([
    {
      label: "Creation Element",
      selectedOption: "",
      options: [
        {
          name: "button",
          price: 100,
        },

        {
          name: "navbar",
          price: 200,
        },

        {
          name: "footer",
          price: 300,
        },

        {
          name: "mega-menu",
          price: 400,
        },
      ],
    },

    {
      label: "Animation",
      selectedOption: "",
      options: [
        {
          name: "hover",
          price: 100,
        },

        {
          name: "dropdown",
          price: 200,
        },

        {
          name: "focus",
          price: 300,
        },

        {
          name: "neon",
          price: 400,
        },
      ],
    },

    {
      label: "Shadow",
      selectedOption: "",
      options: [
        {
          name: "yes",
          price: 100,
        },

        {
          name: "no",
          price: 200,
        },
      ],
    },

    {
      label: "Styling Color",
      selectedOption: "",
      options: [
        {
          name: "gradient",
          price: 100,
        },

        {
          name: "normal",
          price: 200,
        },
      ],
    },

    {
      label: "Dynamic Functionality",
      selectedOption: "",
      options: [
        {
          name: "carousel",
          price: 100,
        },

        {
          name: "fade",
          price: 200,
        },
      ],
    },

    {
      label: "Alerts",
      selectedOption: "",
      options: [
        {
          name: "pop-up",
          price: 100,
        },

        {
          name: "normal",
          price: 200,
        },
      ],
    },
  ]);
  const data = customComponentData
    .map((item) => `${item.label}: ${item.selectedOption}`)
    .toString();
  const slides_array = [
    {
      name: "Calculator",
      component: (
        <Calculator
          customComponentData={customComponentData}
          setCustomComponentData={setCustomComponentData}
          goNextHandler={goNextHandler}
        />
      ),
    },

    {
      name: "Book a Call",
      component: (
        <Form
          data={customComponentData}
          goNextHandler={goNextHandler}
          style={classes["form-container"]}
        />
      ),
    },

    {
      name: "Confirm",
      component: <Confirmation />,
    },
  ];
  const componentsLength = slides_array.length;

  return (
    <div className={classes.box}>
      <Pagination
        slides_array={slides_array}
        componentsLength={componentsLength}
        currentSlide={currentSlide}
      />

      {slides_array.map((component, index) => (
        <Fragment key={index}>
          {currentSlide === index && component.component}
        </Fragment>
      ))}
    </div>
  );
};

export default ComponentCalculator;

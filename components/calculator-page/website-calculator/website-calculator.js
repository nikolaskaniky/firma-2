import React, { Fragment, useState } from "react";
import Confirmation from "../reusable/confirmation/confirmation";
import Calculator from "./calculator/calculator";
import PriceResults from "./price-results/price-results";
import Pagination from "../reusable/pagination/pagination";
import classes from "./website-calculator.module.scss";
import Form from "../../send-request-page/form";

const WebsiteCalculator = (props) => {
  const { currentSlide, goNextHandler, setCurrentSlide } = props;
  const [websiteCalculatorData, setWebsiteCalculatorData] = useState([
    {
      label: "Number of page",
      selectedOption: "",
      options: [
        {
          name: "1 - 12",
          minPrice: 100,
          maxPrice: 200,
        },

        {
          name: "12 - 33",
          minPrice: 200,
          maxPrice: 300,
        },

        {
          name: "33+",
          minPrice: 300,
          maxPrice: 400,
        },
      ],
    },

    {
      label: "Style of design",
      selectedOption: "",
      options: [
        {
          name: "None",
          minPrice: 100,
          maxPrice: 200,
        },

        {
          name: "Simple",
          minPrice: 200,
          maxPrice: 300,
        },

        {
          name: "Medium",
          minPrice: 300,
          maxPrice: 400,
        },

        {
          name: "Advanced",
          minPrice: 400,
          maxPrice: 500,
        },
      ],
    },

    {
      label: "Copywriting of pages",
      selectedOption: "",
      options: [
        {
          name: "None",
          minPrice: 100,
          maxPrice: 200,
        },

        {
          name: "3 - 9",
          minPrice: 200,
          maxPrice: 300,
        },

        {
          name: "9 - 21",
          minPrice: 300,
          maxPrice: 400,
        },

        {
          name: "21 - 33",
          minPrice: 400,
          maxPrice: 500,
        },
      ],
    },

    {
      label: "SEO W / Placement Guarantee",
      selectedOption: "",
      options: [
        {
          name: "None",
          minPrice: 100,
          maxPrice: 200,
        },

        {
          name: "30 keywords",
          minPrice: 200,
          maxPrice: 300,
        },

        {
          name: "90 keywords",
          minPrice: 300,
          maxPrice: 400,
        },

        {
          name: "150 keywords",
          minPrice: 400,
          maxPrice: 500,
        },
      ],
    },

    {
      label: "Responsive Design",
      selectedOption: "",
      options: [
        {
          name: "None",
          minPrice: 100,
          maxPrice: 200,
        },

        {
          name: "Yes",
          minPrice: 200,
          maxPrice: 300,
        },
      ],
    },

    {
      label: "Database integration",
      selectedOption: "",
      options: [
        {
          name: "None",
          minPrice: 100,
          maxPrice: 200,
        },

        {
          name: "Basic",
          minPrice: 200,
          maxPrice: 300,
        },

        {
          name: "Medium",
          minPrice: 300,
          maxPrice: 400,
        },

        {
          name: "Advanced",
          minPrice: 400,
          maxPrice: 500,
        },
      ],
    },

    {
      label: "e-Commerce Functionality",
      selectedOption: "",
      options: [
        {
          name: "None",
          minPrice: 100,
          maxPrice: 200,
        },

        {
          name: "Basic",
          minPrice: 200,
          maxPrice: 300,
        },

        {
          name: "Medium",
          minPrice: 300,
          maxPrice: 400,
        },

        {
          name: "Advanced",
          minPrice: 400,
          maxPrice: 500,
        },
      ],
    },

    {
      label: "Cms",
      selectedOption: "",
      options: [
        {
          name: "None",
          minPrice: 100,
          maxPrice: 200,
        },

        {
          name: "Basic",
          minPrice: 200,
          maxPrice: 300,
        },

        {
          name: "Medium",
          minPrice: 300,
          maxPrice: 400,
        },

        {
          name: "Advanced",
          minPrice: 400,
          maxPrice: 500,
        },
      ],
    },
  ]);

  const slides_array = [
    {
      name: "Calculator",
      component: (
        <Calculator
          websiteCalculatorData={websiteCalculatorData}
          setWebsiteCalculatorData={setWebsiteCalculatorData}
          goNextHandler={goNextHandler}
        />
      ),
    },

    {
      name: "Price Results",
      component: (
        <PriceResults
          websiteCalculatorData={websiteCalculatorData}
          setWebsiteCalculatorData={setWebsiteCalculatorData}
          goNextHandler={goNextHandler}
          setCurrentSlide={setCurrentSlide}
        />
      ),
      description: <h1>Price results, inca ceva de scris</h1>,
    },

    {
      name: "Book a call",
      component: (
        <Form
          data={websiteCalculatorData}
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
      {slides_array.map(
        (component, index) => currentSlide === index && component.description
      )}

      <Pagination
        slides_array={slides_array}
        currentSlide={currentSlide}
        componentsLength={componentsLength}
      />
      {slides_array.map((component, index) => (
        <Fragment key={index}>
          {currentSlide === index && component.component}
        </Fragment>
      ))}
    </div>
  );
};

export default WebsiteCalculator;

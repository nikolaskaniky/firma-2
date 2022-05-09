import React, { Fragment, useState } from "react";
import classes from "./pagination.module.scss";
import { AiOutlineCheck } from "react-icons/ai";

const Pagination = (props) => {
  const { slides_array, currentSlide, componentsLength } = props;
console.log(componentsLength, 'FROM PAGINATION')
  return (
    <ul className={classes.pagination}>
      {slides_array.map((slide, index) => (
        <Fragment key={index}>
          <li key={index}>
            <div className={classes.numerotation}>
              <div
                className={`${classes.circle} ${
                  currentSlide === index || index < currentSlide
                    ? classes.active
                    : undefined
                } ${currentSlide > index ? classes.finished : undefined} ${
                  currentSlide + 1 === componentsLength
                    ? classes.finished
                    : undefined
                }`}
              >
                {index < currentSlide ? (
                  <AiOutlineCheck className={classes.check} />
                ) : currentSlide + 1 === componentsLength ? (
                  <AiOutlineCheck className={classes.check} />
                ) : (
                  <p>{index + 1}</p>
                )}

                <h4>{slide.name}</h4>
              </div>

              <div
                className={`${classes.line} ${
                  index < currentSlide ? classes.active : undefined
                } ${index + 1 < currentSlide ? classes.finished : undefined} ${
                  currentSlide === componentsLength - 1 &&
                  index + 1 === componentsLength - 1
                    ? classes.finished
                    : undefined
                }`}
              ></div>
            </div>
          </li>
        </Fragment>
      ))}
    </ul>
  );
};

export default Pagination;

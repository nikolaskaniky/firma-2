import React, { useState, Fragment } from "react";
import { motion, AnimatePresence } from "framer-motion";
import classes from "../../styles/reusables/section-carousel.module.scss";

const SectionCarousel = (props) => {
  const { data, navigatorPagination } = props;
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <>
      {data.map((content, index) => (
        <Fragment key={index}>
          {currentIndex === index && (
            <motion.section
              className={classes.wrapper}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {content.component}
            </motion.section>
          )}
        </Fragment>
      ))}

      {props.children}

      <ul
        className={`${classes.navigation} ${
          navigatorPagination && classes.navigator
        }`}
      >
        {data.map((_, i) =>
          !navigatorPagination ? (
            <li
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`${classes.dot} ${
                i === currentIndex && classes.active
              }`}
            ></li>
          ) : (
            <li
            key={i}
              className={`${classes["navigator-li"]} ${
                i === currentIndex && classes.active
              }`}
              onClick={() => setCurrentIndex(i)}
            >
              {_.name}
            </li>
          )
        )}
      </ul>
    </>
  );
};

export default SectionCarousel;

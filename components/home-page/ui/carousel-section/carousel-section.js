import React, { useState, Fragment } from "react";
import Box from "../../../UI/box/box";
import Content from "../content/content";
import classes from "./carousel-section.module.scss";

const CarouselSection = (props) => {
  const { data } = props;

  const [current, setCurrent] = useState(0);

  return (
    <Box style={classes.box}>
      <Content>
        {data &&
          data.map(
            (item, index) =>
              index === current && (
                <Fragment key={index}>{item.component}</Fragment>
              )
          )}
      </Content>

      <ul className={classes.navigation}>
        {data.map((item, index) => (
          <li
            key={index}
            className={index === current ? classes.active : undefined}
            onClick={() => setCurrent(index)}
          >
            {item.name}
          </li>
        ))}
      </ul>
    </Box>
  );
};

export default CarouselSection;

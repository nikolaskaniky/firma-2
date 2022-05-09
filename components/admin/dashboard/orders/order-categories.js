import React from "react";
import Box from "../../../UI/box/box";
import classes from "./orders.module.scss";

const OrderCategories = (props) => {
  const { orderCategoriesHandler, array } = props;

  return (
    <Box style={classes["order-categories"]}>
      {array.map((item, index) => (
        <Box
          key={index}
          style={classes.card}
          onClick={() => orderCategoriesHandler(item.name)}
        >
          <h1>{item.name}</h1>
        </Box>
      ))}
    </Box>
  );
};

export default OrderCategories;

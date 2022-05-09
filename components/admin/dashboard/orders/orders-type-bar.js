import React from "react";
import Box from "../../../UI/box/box";
import classes from './orders.module.scss';

const OrdersTypeBar = (props) => {
  const { array, ordersTypeHandler, ordersType } = props;

  return (
    <Box style={classes['orders-type-bar']}>
      {array.map((item, index) => (
        <p
          key={index}
          onClick={() => ordersTypeHandler(item.name)}
          className={ordersType === item.name ? classes.active : undefined}
        >
          {item.name} orders
        </p>
      ))}
    </Box>
  );
};

export default OrdersTypeBar;

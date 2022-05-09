import React, { useEffect, useState } from "react";
import classes from "./category-details.module.scss";
import Box from "../../../../UI/box/box";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";

const CategoryDetails = (props) => {
  const { backHandler, data, ordersType, orderCategory, setData } = props;
  const [filteredArray, setFilteredArray] = useState([]);

  useEffect(() => {
    let results = data;
    if (ordersType)
      results = results.filter((item) => item.type === ordersType);
    if (orderCategory)
      results = results.filter((item) => item.category === orderCategory);
    setFilteredArray(results);
  }, [ordersType, orderCategory]);

  return (
    <Box style={classes["category-details"]}>
      <div className={classes.back} onClick={backHandler}>
        <BsFillArrowLeftCircleFill />
        <h4>Back</h4>
      </div>

      <div className={classes.title}>
        <h1>Orders</h1>
        <h4>{orderCategory}</h4>
      </div>

      {filteredArray.map((item, index) => (
        <div key={index}>
          <h1>{item.name}</h1>
          <h4>{item.type}</h4>
          <h4>{item.category}</h4>
        </div>
      ))}
    </Box>
  );
};

export default CategoryDetails;

import React, { useState } from "react";
import CategoryDetails from "./category-details/category-details";
import OrderCategories from "./order-categories";
import OrdersTypeBar from "./orders-type-bar";
import classes from "./orders.module.scss";

const orders_types = [
  {
    name: "personal",
  },

  {
    name: "enterpris",
  },
];

const order_categories = [
  {
    name: "simulator",
  },

  {
    name: "repair",
  },

  {
    name: "colaboration",
  },

  {
    name: "employment",
  },
];

const Orders = () => {
  const [data, setData] = useState([
    {
      type: "personal",
      name: "order 1",
      category: "simulator",
    },

    {
      type: "enterpris",
      name: "order 1",
      category: "repair",
    },

    {
      type: "personal",
      name: "order 2",
      category: "simulator",
    },
  ]);
  const [ordersType, setOrdersType] = useState(orders_types[0].name);
  const ordersTypeHandler = (type) => setOrdersType(type);

  const [orderCategory, setOrderCategory] = useState("");
  const orderCategoriesHandler = (category) => {
    setOrderCategory(category);
  };

  //! category details logic.
  const backHandler = () => setOrderCategory("");

  return (
    <div>
      {orderCategory === "" ? (
        <>
          <OrdersTypeBar
            array={orders_types}
            ordersTypeHandler={ordersTypeHandler}
            ordersType={ordersType}
          />

          <OrderCategories
            array={order_categories}
            orderCategoriesHandler={orderCategoriesHandler}
          />
        </>
      ) : (
        <CategoryDetails backHandler={backHandler} data={data} setData={setData} ordersType={ordersType} orderCategory={orderCategory} />
      )}
    </div>
  );
};

export default Orders;

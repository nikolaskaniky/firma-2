import React, { useState } from "react";
import Analytics from "./analytics";
import Bar from "./bar";
import Cards from "./cards";
import classes from "./main.module.scss";

const deposit_array = [
  {
    name: 'Personal Deposit',
    dashboards: []
  },

  {
    name: 'Entrepris',
    dashboards: []
  },
]

const Main = () => {
  const [deposit, setDeposit] = useState(deposit_array[0].name);
  const depositHandler = (name) => setDeposit(name)

  return (
    <>
      <Bar deposit_array={deposit_array} onListItemClick={depositHandler} deposit={deposit} />
      <Cards />
      <Analytics />
    </>
  );
};

export default Main;

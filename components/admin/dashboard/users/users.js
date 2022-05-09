import React, { useState } from "react";
import Statistic from "./statistic";
import Table from "./table";
import classes from "./users.module.scss";

const users_array = [
  {
    id: 0,
    email: "someemail@yahoo.com",
    date: "01.01.2021",
    name: "user 1",
    isActive: true,
    country: "france",
  },

  {
    id: 1,
    email: "someemail@yahoo.com",
    date: "01.01.2021",
    name: "user 2",
    isActive: true,
    country: "france",
  },

  {
    id: 2,
    email: "someemail@yahoo.com",
    date: "01.01.2021",
    name: "user 3",
    isActive: false,
    country: "romania",
  },

  {
    id: 3,
    email: "someemail@yahoo.com",
    date: "01.01.2021",
    name: "user 4",
    isActive: true,
    country: "romania",
  },

  {
    id: 4,
    email: "someemail@yahoo.com",
    date: "01.01.2021",
    name: "user 5",
    isActive: true,
    country: "romania",
  },

  {
    id: 5,
    email: "someemail@yahoo.com",
    date: "01.01.2021",
    name: "user 6",
    isActive: false,
    country: "romania",
  },
];

const Users = (props) => {
  const { usersData } = props;

  const [usersArray, setUsersArray] = useState(usersData);

  return (
    <>
      <h4 className={classes.title}>Users</h4>
      <Statistic usersArray={usersArray} />
      <Table usersArray={usersArray} />
    </>
  );
};

export default Users;

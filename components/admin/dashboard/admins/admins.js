import React from "react";
import classes from "./admins.module.scss";
import Statistic from "./statistic";
import Table from "./table";

const Admins = (props) => {
  const { usersData } = props;

  const adminUsers = usersData.filter((user) => user.isAdmin === true);
  return (
    <>
      <h1 className={classes.title}>Admins</h1>
      <Statistic />
      <Table adminUsers={adminUsers} />
    </>
  );
};

export default Admins;

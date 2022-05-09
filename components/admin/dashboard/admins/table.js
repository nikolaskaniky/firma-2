import React from "react";
import classes from "./admins.module.scss";

const Table = (props) => {
  const { adminUsers } = props;

  return (
    <ul className={classes.table}>
      <li className={classes.label}>
        <p>ID</p>
        <p>Name</p>
        <p>Email</p>
        <p>Type</p>
        <p>Date</p>
        <p>Action</p>
      </li>

      <div className={classes.wrapper}>
        {adminUsers.map((adminObj, index) => (
          <li key={index} className={classes.row}>
            <p>{adminObj.id}</p>
            <p>{adminObj.name}</p>
            <p>{adminObj.email}</p>
            <div
              className={`${classes["type-wrapper"]} ${
                adminObj.type === "admin"
                  ? classes.admin
                  : adminObj.type === "manager"
                  ? classes.manager
                  : adminObj.type === "contabil"
                  ? classes.contabil
                  : undefined
              }`}
            >
              <p>{adminObj.type}</p>
            </div>
            <p>{adminObj.date}</p>
          </li>
        ))}
      </div>
    </ul>
  );
};

export default Table;

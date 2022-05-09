import React from "react";
import classes from "./users.module.scss";

const Table = (props) => {
  const { usersArray } = props;
  return (
    <ul className={classes.table}>
      <li className={classes.label}>
        <p>ID</p>
        <p>Name</p>
        <p>Email</p>
        <p>Status</p>
        <p>Data</p>
        <p>Action</p>
      </li>

      <div className={classes.wrapper}>
        {usersArray.map((userObj, index) => (
          <li key={index} className={classes.row}>
            <p>{userObj.id}</p>
            <p>{userObj.name}</p>
            <p>{userObj.email}</p>
            <div
              className={`${classes["status-wrapper"]} ${
                userObj.isActive ? classes.active : classes.inactive
              }`}
            >
              <p>{userObj.isActive ? "Active" : "Inactive"}</p>
            </div>
            <p>{userObj.date}</p>
          </li>
        ))}
      </div>
    </ul>
  );
};

export default Table;

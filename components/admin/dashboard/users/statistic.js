import React, { useState, useEffect } from "react";
import classes from './users.module.scss';

const Statistic = (props) => {
  const { usersArray } = props;
  const length = usersArray.length;
  const activeUsers = usersArray.filter((user) => user.isActive).length;
  const inactiveUsers = length - activeUsers;
  const usersFromRomania = usersArray.filter(
    (user) => user.country === "romania"
  ).length;
  const usersFromRomaniaProcent = (usersFromRomania * 100) / length;

  return (
    <ul className={classes['statistic-list']}>
      <li>
        <h1>{length}</h1>
        <p>Online users</p>
      </li>

      <li>
        <h1>{usersFromRomaniaProcent.toFixed(1)} %</h1>
        <p>Romania</p>
      </li>

      <li>
        <h1>{inactiveUsers}</h1>
        <p>Online users</p>
      </li>

      <li>
        <h1>{usersFromRomania}</h1>
        <p>Online users</p>
      </li>
    </ul>
  );
};

export default Statistic;

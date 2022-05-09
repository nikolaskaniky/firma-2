import React from 'react';
import classes from './admins.module.scss';

const Statistic = () => {
  return (
      <div className={classes.statistic}>
          <div className={classes.card}>
              <h1>13</h1>
              <h4>Admin</h4>
          </div>

          <div className={classes.card}>
              <h1>14</h1>
              <h4>Manager</h4>
          </div>

          <div className={classes.card}>
              <h1>16</h1>
              <h4>Contabili</h4>
          </div>
      </div>
  )
};

export default Statistic;

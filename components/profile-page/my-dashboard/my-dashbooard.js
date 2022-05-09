import React from 'react';
import Left from './left-section/left';
import classes from './my-dashboard.module.scss';
import Right from './right-section/right';

const MyDashboard = () => {
  return (
    <section className={classes['my-dashboard']}>
        <Left />
        <Right />
    </section>
  )
}

export default MyDashboard
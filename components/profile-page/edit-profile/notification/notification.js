import React, { useState } from "react";
import classes from "./notification.module.scss";

const Notification = () => {
  const [isActive, setIsActive] = useState(false);
  const isActiveHandler = () => setIsActive((prev) => setIsActive(!prev));

  const [secondIsActive, setSecondIsActive] = useState(false);
  const secondIsActiveHandler = () => setSecondIsActive((prev) => setSecondIsActive(!prev));

  return (
    <div className={classes["notification-box"]}>
      <div className={classes.title}>
        <h4>Notification</h4>
      </div>

      <div className={classes.actions}>
        <div className={classes.row}>
          <p>Primeste email de la noi</p>
          <div className={classes.select}>
            <p>{isActive ? 'on' : 'off'}</p>
            <div className={`${classes.button} ${isActive ? classes.active : undefined}`} onClick={isActiveHandler}>
              <div className={`${classes.fill}`}></div>
            </div>
          </div>
        </div>

        <div className={classes.row}>
          <p>Primeste email de confirmare</p>
          <div className={classes.select}>
          <p>{secondIsActive ? 'on' : 'off'}</p>
            <div className={classes.button} onClick={secondIsActiveHandler}>
              <div className={classes.fill}></div>
            </div>
          </div>
        </div>
      </div>

      <button>SAVE</button>
    </div>
  );
};

export default Notification;

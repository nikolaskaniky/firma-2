import React from "react";
import classes from "./home-presentation.module.scss";

const HomePresentation = (props) => {
  const {
    nr,
    pre,
    main,
    sub,
    text,
    button,
    buttonText,
    buttonSubtext,
    textStyle,
  } = props;

  return (
    <div className={classes.presentation}>
      <div className={classes.nr}>
        <h1>{nr}</h1>
      </div>

      <div className={classes["title-wrapper"]}>
        <div className={classes.pre}>
          <div className={classes.line}></div>
          <p>{pre}</p>
        </div>

        <div className={classes.main}>{main}</div>

        {sub && <div className={classes.sub}>{sub}</div>}
      </div>

      <div className={`${classes.text} ${textStyle}`}>{text}</div>

      {button && (
        <div className={classes["button-wrapper"]}>
          <div className={classes.button}>
            <p>{buttonText}</p>
          </div>

          {buttonSubtext && buttonSubtext}
        </div>
      )}
    </div>
  );
};

export default HomePresentation;

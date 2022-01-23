import React from "react";
import classes from "../../../styles/home-page/nft/nft.module.scss";

const NFTPresentation = () => {
  return (
    <div className={classes.presentation}>
      <div className={classes.nr}>
        <h1>05</h1>
      </div>

      <div className={classes["title-wrapper"]}>
        <div className={classes.pre}>
          <div className={classes.line}></div>
          <p>Create your NFT</p>
        </div>

        <div className={classes.main}><h1>NFT</h1></div>

        <div className={classes.sub}>
          <h4>WEB 3.0</h4>
        </div>
      </div>
    </div>
  );
};

export default NFTPresentation;

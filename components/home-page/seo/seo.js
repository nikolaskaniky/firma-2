import React from "react";
import classes from "../../../styles/home-page/seo/seo.module.scss";
import SEOCTA from "./seo-cta";
import SEOPresentation from "./seo-presentation";

const SEO = () => {
  return (
    <div className={classes.seo}>
      <SEOPresentation />
      <SEOCTA />
    </div>
  );
};

export default SEO;

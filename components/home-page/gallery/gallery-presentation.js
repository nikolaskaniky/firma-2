import React from "react";
import classes from "../../../styles/home-page/gallery/gallery.module.scss";

const dummy_tags = [
  {
    name: "Landing Page",
    color: "#e0498f",
  },

  {
    name: "Ecommerce",
    color: "#00a7ff",
  },

  {
    name: "Blog",
    color: "#ff84d5",
  },

  {
    name: "Food",
    color: "#ff9d00",
  },

  {
    name: "Prototype Design",
    color: "#0aff30",
  },

  {
    name: "Bussiness",
    color: "#3544cb",
  },

  {
    name: "Sport",
    color: "#25db41",
  },
];

const GalleryPresentation = () => {
  return (
    <div className={classes.presentation}>
      <div className={classes.nr}>
        <h1>02</h1>
      </div>

      <div className={classes["title-wrapper"]}>
        <div className={classes.pre}>
          <div className={classes.line}></div>
          <p>Get inspired</p>
        </div>

        <div className={classes.main}>
          <h1>Gallery</h1>
        </div>

        <div className={classes.sub}>
          <h4>Website</h4>
        </div>
      </div>

      <div className={classes.text}>
        <div className={classes.line}></div>
        <div className={classes.content}>
          <p>
            We combine the client{"'"}s needs and our ideas <br />
            for an efficient design and coding result, <br />
            in order to achieve their business goal.
          </p>
        </div>
      </div>

      <div className={classes.tags}>
        {dummy_tags.map((tag, i) => (
          <div className={classes.container} key={i}
            style={{border: `1px solid ${tag.color}`}}
          >
              <span style={{color: tag.color}}>{'#'}</span>
              <p>{tag.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GalleryPresentation;

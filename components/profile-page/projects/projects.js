import React from "react";
import classes from "./projects.module.scss";

const FILES_ARRAY = [
  {
    name: "image",
    size: "113",
  },

  {
    name: "image",
    size: "113",
  },

  {
    name: "image",
    size: "113",
  },

  {
    name: "image",
    size: "113",
  },

  {
    name: "image",
    size: "113",
  },

  {
    name: "image",
    size: "113",
  },

  {
    name: "image",
    size: "113",
  },

  {
    name: "image",
    size: "113",
  },
];

const Projects = () => {
  return (
    <section className={classes.projects}>
      <div className={classes["upload-images-box"]}>
        <div className={classes.action}>upload</div>

        <div className={classes.results}>
          <header className={classes["tabel-label"]}>
            <p>Name</p>
            <p>{FILES_ARRAY.length}</p>
            <p>cancel</p>
          </header>
        </div>
      </div>
    </section>
  );
};

export default Projects;

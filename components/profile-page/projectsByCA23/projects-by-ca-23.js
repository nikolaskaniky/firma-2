import React from "react";
import classes from "./projects-by-ca-23.module.scss";

const ARRAY = [
  {
    name: "file-1.pdfaaaaaaaaaaaaaa",
    image: "img",
  },

  {
    name: "file-1.pdf",
    image: "img",
  },

  {
    name: "file-1.pdf",
    image: "img",
  },

  {
    name: "file-1.pdf",
    image: "img",
  },

  {
    name: "file-1.pdf",
    image: "img",
  },

  {
    name: "file-1.pdfaaaaaaaaaaaaaa",
    image: "img",
  },

  {
    name: "file-1.pdf",
    image: "img",
  },

  {
    name: "file-1.pdf",
    image: "img",
  },

  {
    name: "file-1.pdf",
    image: "img",
  },

  {
    name: "file-1.pdfaaaaaaaaaaaaaa",
    image: "img",
  },

  {
    name: "file-1.pdf",
    image: "img",
  },

  {
    name: "file-1.pdf",
    image: "img",
  },

  {
    name: "file-1.pdfaaaaaaaaaaaaaa",
    image: "img",
  },
];

const ProjectsByCA23 = () => {
  return (
    <section className={classes["projects-by-ca23"]}>
      <div className={classes.box}>
        <h4>Projects by CA 23</h4>

        <ul className={classes.content}>
          {ARRAY.map((file, index) => (
            <li key={index}>
              <div className={classes["image-box"]}>{file.image}</div>
              <div className={classes.title}>
                <p>{file.name}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ProjectsByCA23;

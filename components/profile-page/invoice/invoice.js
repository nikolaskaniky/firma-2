import React from "react";
import classes from "./invoice.module.scss";

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

const Invoice = () => {
  return (
    <section className={classes["invoice"]}>
      <div className={classes.box}>
        <h4>Invoice</h4>

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

export default Invoice;

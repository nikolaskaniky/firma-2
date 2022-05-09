import React from "react";
import classes from "./description.module.scss";

const UPLOADED_FILES = [
  {
    name: "lading-page.pdf",
    date: "10.12.1997",
  },

  {
    name: "lading-page.pdf",
    date: "10.12.1997",
  },

  {
    name: "lading-page.pdf",
    date: "10.12.1997",
  },

  {
    name: "lading-page.pdf",
    date: "10.12.1997",
  },

  {
    name: "lading-page.pdf",
    date: "10.12.1997",
  },

  {
    name: "lading-page.pdffffffff cel mai prost",
    date: "10.12.1997",
  },
];

const Description = () => {
  return (
    <section className={classes.description}>
      <div className={classes["description-box"]}>
        <h4>Description</h4>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum cum
          alias eius possimus quis impedit eos pariatur odio porro. Quaerat
          aperiam eum nam sunt tempore, porro ex voluptas. Assumenda voluptates
          necessitatibus excepturi ullam! Nesciunt cumque consequatur, nam dicta
          illo corporis molestiae odit omnis suscipit veniam perferendis!
          Ducimus eius deleniti optio consequuntur ullam laborum inventore rerum
          consequatur nemo error, atque quo.
        </p>

        <p className={classes["description-date"]}>10.12.1997</p>
      </div>

      <div className={classes["uploaded-files-wrapper"]}>
        <ul className={classes["uploaded-files"]}>
          <header className={classes["top-description"]}>
            <p>Name</p>
            <p>{UPLOADED_FILES.length} uploaded</p>
            <p>Date</p>
          </header>

          {UPLOADED_FILES.map((file, index) => (
            <li key={index}>
              <div className={classes.name}>
                <h4>svg</h4>
                <p title={file.name}>{file.name}</p>
              </div>

              <p>{index + 1}</p>

              <p>{file.date}</p>

              <p className={classes.view}>view</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Description;

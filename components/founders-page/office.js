import React from "react";
import Image from "next/image";
import classes from "../../styles/founders-page/founders-page.module.scss";

const Office = (props) => {
  const { founder } = props;

  return (
    <section className={classes.office}>
      <div className={classes.presentation}>
          <h1>{founder.office.title}</h1>
          <p>{founder.office.description}</p>
      </div>

      <div className={classes["image-wrapper"]}>
        <div className={classes.image}>
          <Image src={founder.office.image} />
        </div>
      </div>
    </section>
  );
};

export default Office;

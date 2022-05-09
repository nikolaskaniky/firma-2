import React from "react";
import Image from "next/image";
import classes from "./founders.module.scss";

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
          <Image layout="fill" src={founder.office.image} objectFit='contain' alt='img' />
        </div>
      </div>
    </section>
  );
};

export default Office;

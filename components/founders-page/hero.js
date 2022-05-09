import React from "react";
import Image from "next/image";
import Link from "next/link";
import classes from "./founders.module.scss";

const Hero = (props) => {
  const { founder } = props;

  return (
    <section className={classes.hero}>
      <div className={classes["image-wrapper"]}>
        <div className={classes.image}>
          <Image src={founder.image} layout="fill" alt="image" />
        </div>
      </div>

      <div className={classes.presentation}>
        <div className={classes.year}>
          <h1>
            2<span>0</span>22
          </h1>
        </div>

        <div className={classes.name}>
          <h1>{founder.name.toUpperCase()}</h1>
        </div>

        <div className={classes.specialization}>
          <h4>{founder.specialization}</h4>
        </div>

        <div className={classes.media}>
          {founder.media.map((media, index) => (
            <Link href={media.linkTo} key={index}>
              <a>
                  {media.image}
              </a>
            </Link>
          ))}
        </div>

        <div className={classes.description}>
            <p>{founder.description}</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;

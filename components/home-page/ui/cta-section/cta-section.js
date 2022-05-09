import React from "react";
import Image from "next/image";
import classes from "./cta-section.module.scss";
import { useRouter } from "next/router";

const CTASection = (props) => {
  const { image, buttonText, linkTo } = props;

  const router = useRouter();

  return (
    <div className={classes["cta-section"]}>
      <div className={classes.image}>
        <Image
          src={image}
          width={props.width}
          height={props.height}
          objectFit="contain"
          alt="image"
        />
      </div>

      <div className={classes.button} onClick={() => router.push(linkTo)}>
        <p>{buttonText}</p>
      </div>
    </div>
  );
};

export default CTASection;

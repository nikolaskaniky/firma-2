import React from "react";
import Image from "next/image";
import classes from "./home-cta.module.scss";
import { useRouter } from "next/router";

const HomeCTA = (props) => {
  const { image, buttonText, linkTo } = props;

  const router = useRouter();

  return (
    <div className={classes["home-cta"]}>
      <div className={classes.image}>
        <Image src={image} layout="responsive" alt="image" />
      </div>

      <div className={classes.button} onClick={() => router.push(linkTo)}>
        <p>{buttonText}</p>
      </div>
    </div>
  );
};

export default HomeCTA;

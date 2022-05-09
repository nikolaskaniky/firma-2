import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import classes from "./colaborations.module.scss";
import Box from '../../../UI/box/box';

const Colaborations = () => {
  const router = useRouter();

  return (
    <Box style={classes["collaborations-section"]}>
      <div className={classes.image}>
        {/* <Image src={} layout="fill" alt='img' /> */}
        <h1>some images</h1>
      </div>

      <div className={classes.cta}>
        <div
          className={classes.button}
          onClick={() => router.push("/colaborations/about")}
        >
          <p>About us</p>
        </div>

        <div className={classes.description}>
          <h4>
            You can take a look on our about us <br />
            section and discover our team skills and working tools.
          </h4>
        </div>
      </div>
    </Box>
  );
};

export default Colaborations;

import React from "react";
import classes from "./repair.module.scss";
import { useRouter } from "next/router";
import Box from '../../../UI/box/box';

const RepairCTA = (props) => {
  const { popHandler } = props;
  const router = useRouter();

  return (
    <Box style={classes.cta}>
      <div className={classes.title}>
        <h1>Repair website</h1>
      </div>

      <div className={classes.text}>
        <p>
          Website troubles ? <br />
          If you already have a website and it got slow and old, <br />
          well we offer mordern solutions and services to bring your business up
          to <br /> date.
        </p>
      </div>

      <div
        className={classes.button}
        onClick={() => router.push("/send-request")}
      >
        <p>repair</p>
      </div>
    </Box>
  );
};

export default RepairCTA;

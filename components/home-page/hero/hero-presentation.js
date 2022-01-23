import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";

import classes from "../../../styles/home-page/hero/hero.module.scss";
import create from "../../../assets/images/home-page/hero/create.svg";
import fix from "../../../assets/images/home-page/hero/fix.svg";
import deal from "../../../assets/images/home-page/hero/deal.svg";

const HeroPresentation = () => {
  const router = useRouter();

  return (
    <div className={classes.presentation}>
      <div className={classes.nr}>
        <h1>01</h1>
      </div>

      <div className={classes["title-wrapper"]}>
        <div className={classes.pre}>
          <div className={classes.line}></div>
          <p>Start today</p>
        </div>

        <div className={classes.main}>
          <h1>
            Create <br /> innovative <br /> Web{" "}
            <span className={classes.highlight}>Development</span>
          </h1>
        </div>

        <div className={classes.sub}>
          <h4>For your business fast {`&`} easy.</h4>
        </div>
      </div>

      <div className={classes.buttons}>
        <div className={classes.button} onClick={() => router.push("/create")}>
          <div className={classes["image"]}>
            <Image src={create} width={51} height={51} alt="create-img" />
          </div>
          <div className={classes.text}>
            <h4>Create</h4>
            <p>Website {"&"} Apps</p>
          </div>
        </div>

        <div className={classes.button} onClick={() => router.push("/repair")}>
          <div className={classes["image"]}>
            <Image src={fix} width={51} height={51} alt="fix-img" />
          </div>
          <div className={classes.text}>
            <h4>Fix</h4>
            <p>Website</p>
          </div>
        </div>

        <div
          className={classes.button}
          onClick={() => router.push("/colaborations")}
        >
          <div className={classes["image"]}>
            <Image src={deal} width={51} height={37} alt="deal-img" />
          </div>
          <div className={classes.text}>
            <h4>Colaborations</h4>
            <p>Team {"&"} Freelancers</p>
          </div>
        </div>
      </div>

      <div className={classes["get-a-quote--btn"]}>
        <h4>Get a Quote</h4>
        <p>Calculate estimated cost</p>
      </div>
    </div>
  );
};

export default HeroPresentation;

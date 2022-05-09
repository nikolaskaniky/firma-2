import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { actionPageAction } from "../../../redux/actions/actions-page-actions";

import classes from "./hero.module.scss";
import create from "../../../assets/images/home-page/hero/create.svg";
import fix from "../../../assets/images/home-page/hero/fix.svg";
import deal from "../../../assets/images/home-page/hero/deal.svg";

const BUTTONS = [
  {
    linkTo: "/actions",
    image: create,
    title: "Create",
    subtitle: "Website & Apps",
    labelFor: "create",
  },

  {
    linkTo: "/actions",
    image: fix,
    title: "Fix",
    subtitle: "Website",
    labelFor: "repair",
  },

  {
    linkTo: "/actions",
    image: deal,
    title: "Colaborations",
    subtitle: "Team & Freelancers",
    labelFor: "colaboration",
  },
];

const HeroPresentation = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const selectedCalculator = useSelector((state) => state.selectedCalculator);
  const getAQuoteReducer = () => {
    dispatch({ type: "WEBSITE" });
    router.push("/calculator");
  };
  const selectedPage = useSelector((state) => state.selectedPage);

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

      {/* //! buttons */}
      <div className={classes.buttons}>
        {BUTTONS.map((button, index) => (
          <div
            className={classes.button}
            key={index}
            onClick={() => {
              router.push(button.linkTo);
              dispatch(actionPageAction(button.labelFor));
            }}
          >
            <div className={classes["image"]}>
              <Image
                src={button.image}
                width={51}
                height={51}
                alt="create-img"
              />
            </div>

            <div className={classes.text}>
              <h4>{button.title}</h4>
              <p>{button.subtitle}</p>
            </div>
          </div>
        ))}
      </div>

      <div className={classes["get-a-quote--btn"]} onClick={getAQuoteReducer}>
        <h4>Get a Quote</h4>
        <p>Calculate estimated cost</p>
      </div>
    </div>
  );
};

export default HeroPresentation;

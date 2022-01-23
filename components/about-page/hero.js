import React, { useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import classes from "../../styles/about-page/hero.module.scss";
import { foundersData } from "../../data/founders-data";
import { useDispatch, useSelector } from "react-redux";
import { getPricingUserAction } from '../../redux/actions/pricing-actions';
import Portal from "../reusables/portal";
import AboutPop from "./about-pop";

const Hero = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const selectedPricingUser = useSelector(
    (state) => state.selectedPricingUserReducer
  );
  const [pop, setPop] = useState(false);
  const popHandler = () => setPop(prev => setPop(!prev))

  return (
    <section className={classes.hero}>
      <div className={classes.title}>
        <h1>ABOUT US</h1>
      </div>

      <ul className={classes["cards"]}>
        {foundersData.map((member, index) => (
          <li key={index}>
            <div className={classes.image}>
              <Image
                src={member.image}
                layout="fill"
                objectFit="cover"
                alt="member-img"
              />
            </div>

            <div className={classes.description}>
              <h4>{member.name.split(" ")[1].toUpperCase()}</h4>
              <p>{member.specialization}</p>
            </div>

            <div
              className={classes.button}
              onClick={() => {
                dispatch(getPricingUserAction(member.id))
                router.push("/colaborations/pricing")
              }}
            >
              <p>view pricing</p>
            </div>
          </li>
        ))}
      </ul>

      <div className={classes.text}>
        <p>
          Everyone in our team is specialized in a domain, so therefore when{" "}
          <br />
          we gather our forces good website projects are coming out. <br />
          Meet our team for more details and see everyone{"'"}s specialization.
        </p>
      </div>

      <div className={classes.cta}>
        <div className={classes.button} onClick={popHandler}>
          <p>Contact us</p>
        </div>
      </div>

      {pop && (
        <Portal>
          <AboutPop popHandler={popHandler} />
        </Portal>
      )}
    </section>
  );
};

export default Hero;

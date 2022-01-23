import React from "react";
import classes from "../../styles/pricing-page/pricing-page.module.scss";
import { foundersData } from "../../data/founders-data";
import { useSelector } from "react-redux";
import Image from "next/image";

const Hero = () => {
  const selectedPricingUser = useSelector((state) => state.selectedPricingUser);

  const member = foundersData.find(
    (member) => member.id === selectedPricingUser
  );
  0;
  return (
    <section className={classes.hero}>
      <div className={classes.presentation}>
        <div className={classes.name}>
          <h1>{member.name.split(" ")[0].toUpperCase()}</h1>
          <h2>
            {member.name
              .split(" ")
              .splice(1)
              .join()
              .replace(",", " ")
              .toUpperCase()}
          </h2>
          <div className={classes.line}></div>
        </div>

        <div className={classes.description}>
          <p>{member.description}</p>
        </div>
      </div>

      <div className={classes["image-wrapper"]}>
        <div className={classes.image}>
          <Image src={member.image} objectFit="cover" layout="fill" alt='image' />
        </div>
      </div>
    </section>
  );
};

export default Hero;

//! data de nastere: zi / luna / an
// 10 / 12 / 1998 = 31 => 4; 32 => 5 //* trebuie sa fie vizibil randul asta.
// 14 / 12 / 1997 = 34 ( 3 + 4 ) => 7;
// 2(trebuie aleasa) * 1(prima cifra din numarul din ziua de nastere) = 2;
// 34(rezultatul adunarii datii nasterii) - 2(calculul de mai sus) => 32;

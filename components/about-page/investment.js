import React from "react";
import Image from 'next/image';
import classes from "../../styles/about-page/investment.module.scss";
import investment from '../../assets/images/about-page/investment@3x.png';

const Investment = () => {
  return (
    <section className={classes.investment}>

      <div className={classes.presentation}>
        <div className={classes.title}>
          <h1>Investment</h1>
        </div>

        <div className={classes.text}>
          <p>Wanna become an investor?</p>
          <p>
            As you{"'"}ve noticed everything has switched to the internet world{" "}
            <br /> these days, let{"'"}s talk about the benefits of investing in
            our <br /> company.
          </p>
        </div>
      </div>

      <div className={classes['image-wrapper']}>
        <div className={classes.image}>
            <Image src={investment} layout="fill" alt='image' />
        </div>
      </div>
    </section>
  );
};

export default Investment;

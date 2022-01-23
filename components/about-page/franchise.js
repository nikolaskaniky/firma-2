import React from "react";
import Image from "next/image";
import classes from "../../styles/about-page/franchise.module.scss";
import franchise from '../../assets/images/about-page/franchise@3x.png';

const Franchise = () => {
  return (
    <section className={classes.franchise}>
      <div className={classes.presentation}>
        <div className={classes.title}>
          <h1>Franchise</h1>
        </div>

        <div className={classes.text}>
          <p>
            Wanna open a franchise ? <br />
            If you do, you can contact us and we{"'"}ll get back to you <br />
            and tell you more details about opening a franchise with us.
          </p>
        </div>
      </div>

      <div className={classes['image-wrapper']}>
          <div className={classes.image}>
              <Image src={franchise} layout="fill" alt='image' />
          </div>
      </div>
    </section>
  );
};

export default Franchise;

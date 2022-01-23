import React from "react";
import Image from "next/image";
import classes from "../../../styles/navbar/navbar.module.scss";

import flag from "../../../assets/images/navbar/flag.svg";

const Navbar = () => {
  return (
    <header className={classes.navbar}>
      {/* //? flag */}
      <section className={classes.flag}>
        <p>FR</p>
        <Image src={flag} width={24.4} height={16} alt="fr-flag" />
      </section>

      {/* //? logo */}
      <section className={classes.logo}>logo</section>

      {/* //?menu */}
      <section className={classes.menu}>
        <div className={classes["menu-box"]}>
          <div className={classes.line} />
          <div className={classes.line} />
          <div className={`${classes.line} ${classes.short}`} />
        </div>
      </section>
    </header>
  );
};

export default Navbar;

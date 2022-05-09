import React, { useState } from "react";
import Image from "next/image";
import classes from "./navbar.module.scss";

import flag from "../../../assets/images/navbar/flag.svg";
import Dropdown from "./dropdown/dropdown";
import { AnimatePresence, motion } from "framer-motion";

const Navbar = () => {
  const [dropdownIsActive, setDropdownIsActive] = useState(false);
  const dropdownHandler = () =>
    setDropdownIsActive((prev) => setDropdownIsActive(!prev));

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
        <div className={classes["menu-box"]} onClick={dropdownHandler}>
          <div className={classes.line} />
          <div className={classes.line} />
          <div className={`${classes.line} ${classes.short}`} />
        </div>
      </section>

      <AnimatePresence>
        {dropdownIsActive && (
          <Dropdown
            dropdownHandler={dropdownHandler}
            setDropdownIsActive={setDropdownIsActive}
            motion={motion}
          />
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;

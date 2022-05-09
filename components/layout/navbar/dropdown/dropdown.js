import React from "react";
import classes from "./dropdown.module.scss";
// import { IoClose } from "react-icons/io";
import { IoIosClose } from "react-icons/io";
import { BsDribbble, BsTwitter } from "react-icons/bs";
import { AiOutlineInstagram, AiFillYoutube } from "react-icons/ai";
import { FaBehance, FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { Router, useRouter } from "next/router";

const SERVICES_DATA = [
  {
    nr: "01",
    title: "create website",
    subtitle: "simulator",
    linkTo: "/create",
  },

  {
    nr: "02",
    title: "website",
    subtitle: "repair",
    linkTo: "/repair",
  },

  {
    nr: "03",
    title: "projects with us",
    subtitle: "colaboration",
    linkTo: "/colaborations",
  },

  {
    nr: "04",
    title: "work with us",
    subtitle: "jobs for you",
    linkTo: "/jobs",
  },
];

const PAGES_DATA = [
  {
    name: "gallery",
    linkTo: "/gallery",
  },

  {
    name: "website",
    linkTo: "/website",
  },

  {
    name: "apps",
    linkTo: "/apps",
  },

  {
    name: "crypto & nft",
    linkTo: "/nfs",
  },

  {
    name: "contact us",
    linkTo: "/contact-us",
  },
];

const Dropdown = (props) => {
  const { motion, dropdownHandler, setDropdownIsActive } = props;

  const router = useRouter();

  return (
    <>
      <motion.div
        className={classes.backdrop}
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 0.9,
        }}
        exit={{
          opacity: 0,
        }}
        transition={{ duration: 0.4 }}
      ></motion.div>
      <motion.main
        className={classes.dropdown}
        initial={{
          opacity: 0,
          top: "-100%",
        }}
        animate={{
          opacity: 1,
          top: "50%",
        }}
        exit={{
          opacity: 0,
          top: "-100%",
        }}
        transition={{ duration: 0.4 }}
      >
        {/* //! close */}
        <div className={classes.close} onClick={dropdownHandler}>
          <IoIosClose />
        </div>

        {/* //! grid 1 */}
        <div className={classes["our-services"]}>
          <div className={classes.container}>
            <div className={classes["main-title"]}>
              <h1>SERVICILE NOASTRE</h1>
            </div>

            <ul>
              {SERVICES_DATA.map((item, index) => (
                <li
                  key={index}
                  className={`${
                    item.linkTo === router.asPath ? classes.active : undefined
                  }`}
                  onClick={() => {
                    router.push(`${item.linkTo}`);
                    setDropdownIsActive(false);
                  }}
                >
                  <div className={classes.nr}>
                    <div className={classes.line}></div>
                    <p>{item.nr}</p>
                  </div>

                  <div className={classes.title}>
                    <h1>{item.title.toUpperCase()}</h1>
                    <h4>{item.subtitle.toUpperCase()}</h4>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* //! grid 2 */}
        <div className={classes["main-sections"]}>
          <div className={classes.menu}>
            <div className={classes.image}>
              <h4>some image</h4>
            </div>

            <ul>
              {PAGES_DATA.map((item, index) => (
                <li
                  key={index}
                  onClick={() => {
                    router.push(`${item.linkTo}`);
                    setDropdownIsActive(false);
                  }}
                  className={
                    item.linkTo === router.asPath ? classes.active : undefined
                  }
                >
                  <h1>{item.name.toUpperCase()}</h1>
                </li>
              ))}

              <li>
                <p>FAQ</p>
              </li>
              <li>
                <p>JOIN US</p>
              </li>
            </ul>
          </div>

          <div className={classes["course-cta"]}>
            <div className={classes.button}>
              <p>Curs Development {"&"} Design</p>
            </div>

            <div className={classes.subtext}>
              <p>
                Avem curs pentru cei care doresc sa devina Programator sau
                designer
              </p>
            </div>
          </div>

          <div className={classes.media}>
            <BsDribbble className={classes.dribble} />
            <AiOutlineInstagram className={classes.instagram} />
            <FaBehance className={classes.behance} />
            <FaFacebookF className={classes.facebook} />
            <AiFillYoutube className={classes.youtube} />
            <BsTwitter className={classes.twitter} />
            <FaLinkedinIn className={classes.linkedin} />
          </div>
        </div>
      </motion.main>
    </>
  );
};

export default Dropdown;

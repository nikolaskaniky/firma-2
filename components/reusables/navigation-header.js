import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import classes from "./navigation-header.module.scss";

const dummy_navigation = [
  {
    h4: "CREATE WEBSITE",
    p: "SIMULATOR",
    linkTo: "/create",
  },

  {
    h4: "WEBSITE",
    p: "REPAIR",
    linkTo: "/repair",
  },

  {
    h4: "PROJECT WITH US",
    p: "COLABORATION",
    linkTo: "/colaborations",
  },

  {
    h4: "WORK WITH US",
    p: "JOBS FOR YOU",
    linkTo: "/jobs",
  },
];

const NavigationHeader = () => {
  const router = useRouter();

  return (
    <ul className={classes.wrapper}>
      {dummy_navigation.map((item, index) => (
        <Link
          href={item.linkTo}
          key={index}
          
        >
          <a className={
            router.pathname === item.linkTo ? classes.active : undefined
          }>
            <li>
              <h4>{item.h4}</h4>
              <p>{item.p}</p>
            </li>
          </a>
        </Link>
      ))}
    </ul>
  );
};

export default NavigationHeader;

import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import classes from "../../../styles/home-page/hero/hero.module.scss";

const dummy_navigation = [
  {
    name: "Home",
    path: "/",
  },

  {
    name: "Sign in",
    path: "/sign-in",
  },

  {
    name: "Sign up",
    path: "/sign-up",
  },
];

const HeroNavigation = () => {
  const router = useRouter();

  return (
    <div className={classes.navigation}>
      {dummy_navigation.map((item, i) => (
        <Link href={item.path} key={i}>
          <a
            className={
              item.path === "/" && router.pathname === "/"
                ? classes.active
                : item.path === router.pathname
                ? classes.active
                : undefined
            }
          >
            {item.name}
          </a>
        </Link>
      ))}
    </div>
  );
};

export default HeroNavigation;

import React from "react";
import { useRouter } from "next/router";
import classes from "./page-navigation-bar.module.scss";

const PageNavigationBar = (props) => {
  const { data } = props;

  const router = useRouter();
  const location = router.pathname;

  return (
    <div className={classes.navigation}>
      {data.map((item, index) => (
        <p
          key={index}
          className={location === item.linkTo ? classes.active : undefined}
          onClick={() => router.push(item.linkTo)}
        >
          {item.name}
        </p>
      ))}
    </div>
  );
};

export default PageNavigationBar;

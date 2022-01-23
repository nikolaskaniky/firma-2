import React from "react";
import classes from "../../../styles/home-page/apps/apps.module.scss";
import SectionCarousel from "../../reusables/section-carousel";
import AppsNavigation from "./apps-navigation";
import AppsMain from "./slides/main/apps-main";
import AppsProjects from "./slides/projects/apps-projects";

const Apps = () => {
  const data = [
    {
      component: <AppsMain />,
    },

    {
      component: <AppsProjects />,
    },
  ];

  return (
    <div className={classes.apps}>
      <SectionCarousel data={data}>
        <AppsNavigation />
      </SectionCarousel>
    </div>
  );
};

export default Apps;

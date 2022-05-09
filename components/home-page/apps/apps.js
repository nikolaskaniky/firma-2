import React from "react";
import AppsMain from "./slides/main/apps-main";
import AppsProjects from "./slides/projects/apps-projects";
import CarouselSection from "../ui/carousel-section/carousel-section";

const Apps = () => {
  const data = [
    {
      name: "Apps",
      component: <AppsMain />,
    },

    {
      name: "Projects",
      component: <AppsProjects />,
    },
  ];

  return <CarouselSection data={data} />
};

export default Apps;

import React from "react";
import AboutMain from "./slides/main/about-main";
import AboutFounders from "./slides/founders/about-founders";
import AboutTeam from "./slides/team/about-team";
import AboutTools from "./slides/tools/about-tools";
import CarouselSection from '../ui/carousel-section/carousel-section';

const About = () => {
  const data = [
    {
      component: <AboutMain />,
      name: "About",
    },

    {
      component: <AboutFounders />,
      name: "Founders",
    },

    {
      component: <AboutTeam />,
      name: "Team",
    },

    {
      component: <AboutTools />,
      name: "Tools",
    },
  ];

  return <CarouselSection data={data} />
};

export default About;

import React from "react";
import classes from "../../../styles/home-page/about/about.module.scss";
import AboutNavigation from "./about-navigation";
import AboutMain from "./slides/main/about-main";
import SectionCarousel from "../../reusables/section-carousel";
import AboutFounders from "./slides/founders/about-founders";
import AboutTeam from "./slides/team/about-team";
import AboutTools from "./slides/tools/about-tools";

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

  return (
    <div className={classes.about}>
      <SectionCarousel data={data} navigatorPagination>
        {/* <AboutNavigation /> */}
      </SectionCarousel>
    </div>
  );
};

export default About;

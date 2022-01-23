import React from "react";
import WebsiteNavigation from "./website-navigation";
import classes from "../../../styles/home-page/website/website.module.scss";
import WebsiteMain from "./slides/main/website-main";
import WebsiteNavigator from "./slides/navigator/website-navigator";
import SectionCarousel from "../../reusables/section-carousel";
import WebsiteContent from "./slides/content/website-content";
import WebsiteAside from "./slides/aside/website-aside";
import WebsiteFooter from "./slides/footer/website-footer";
import WebsiteDashbord from "./slides/dashbord/website-dashbord";

const Website = (props) => {
  const { websiteRef } = props;
  const data = [
    {
      component: <WebsiteMain />,
    },

    {
      component: <WebsiteNavigator />,
    },

    {
      component: <WebsiteContent />,
    },
    {
      component: <WebsiteAside />,
    },

    {
      component: <WebsiteFooter />,
    },

    {
      component: <WebsiteDashbord />,
    },
  ];

  return (
    <div className={classes.website} ref={websiteRef}>
      <SectionCarousel data={data}>
        <WebsiteNavigation />
      </SectionCarousel>
    </div>
  );
};

export default Website;

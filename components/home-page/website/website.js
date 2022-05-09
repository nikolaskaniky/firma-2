import React from "react";

import WebsiteMain from "./slides/main/website-main";
import WebsiteNavigator from "./slides/navigator/website-navigator";
import WebsiteContent from "./slides/content/website-content";
import WebsiteAside from "./slides/aside/website-aside";
import WebsiteFooter from "./slides/footer/website-footer";
import WebsiteDashbord from "./slides/dashbord/website-dashbord";

import CarouselSection from "../ui/carousel-section/carousel-section";

const Website = (props) => {
  const { websiteRef } = props;
  const data = [
    {
      name: "Website",
      component: <WebsiteMain />,
    },

    {
      name: "Navigator",
      component: <WebsiteNavigator />,
    },

    {
      name: "Content",
      component: <WebsiteContent />,
    },

    {
      name: "Aside",
      component: <WebsiteAside />,
    },

    {
      name: "Footer",
      component: <WebsiteFooter />,
    },

    {
      name: "Dashboard",
      component: <WebsiteDashbord />,
    },
  ];

  return <CarouselSection data={data} />;
};

export default Website;

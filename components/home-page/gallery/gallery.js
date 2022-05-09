import React from "react";
import classes from "./gallery.module.scss";
import GalleryPresentation from "./gallery-presentation";

import Box from "../../UI/box/box";
import Content from "../ui/content/content";
import CTASection from "../ui/cta-section/cta-section";
import PageNavigationBar from "../../UI/page-navigation-bar/page-navigation-bar";
import gallery from "../../../assets/images/home-page/gallery/gallery@3x.png";

const Gallery = (props) => {
  const NAVIGATION_DATA = [
    {
      name: "Gallery",
      linkTo: "/",
    },

    {
      name: "Projects",
      linkTo: "/projects",
    },
  ];

  return (
    <Box style={classes.gallery}>
      <Content>
        <GalleryPresentation />
        <CTASection
          image={gallery}
          width="556"
          height="668"
          buttonText="See Gallery"
          linkTo="/gallery"
        />
      </Content>
      <PageNavigationBar data={NAVIGATION_DATA} />
    </Box>
  );
};

export default Gallery;

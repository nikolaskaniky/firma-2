import React from "react";
import classes from "./collabs.module.scss";
import CollabsPresentation from "./collabs-presentation";
import CTASection from "../ui/cta-section/cta-section";
import image from "../../../assets/images/home-page/collabs/collabs@3x.png";
import Box from "../../UI/box/box";
import Content from "../ui/content/content";

const Collabs = () => {
  return (
    <Box style={classes.collabs}>
      <Content>
        <CollabsPresentation />
        <CTASection
          image={image}
          width=""
          height=""
          buttonText="Hire us"
          linkTo="/hire-us"
        />
      </Content>
    </Box>
  );
};

export default Collabs;

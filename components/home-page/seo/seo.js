import React from "react";
import classes from "./seo.module.scss";
import SEOPresentation from "./seo-presentation";
import CTASection from "../ui/cta-section/cta-section";
import seo from "../../../assets/images/home-page/seo/seo@3x.png";
import Box from "../../UI/box/box";
import Content from "../ui/content/content";

const SEO = () => {
  return (
    <Box style={classes.seo}>
      <Content>
        <SEOPresentation />
        <CTASection
          image={seo}
          width="672"
          height="764"
          buttonText="See details"
          linkTo="/details"
        />
      </Content>
    </Box>
  );
};

export default SEO;

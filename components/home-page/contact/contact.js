import React from "react";
import classes from "./contact.module.scss";
import ContactPresentation from "./contact-presentation";
import CTASection from "../ui/cta-section/cta-section";
import Box from "../../UI/box/box";
import Content from "../ui/content/content";
import image from "../../../assets/images/home-page/contact/contact@3x.png";

const Contact = () => {
  return (
    <Box style={classes.contact}>
      <Content>
        <ContactPresentation />
        <CTASection
          image={image}
          width="605"
          height="613"
          buttonText="Contact us"
          linkTo="/contact"
        />
      </Content>
    </Box>
  );
};

export default Contact;

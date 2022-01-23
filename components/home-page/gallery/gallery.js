import React from "react";
import classes from "../../../styles/home-page/gallery/gallery.module.scss";
import GalleryCTA from "./gallery-cta";
import GalleryNavigation from "./gallery-navigation";
import GalleryPresentation from "./gallery-presentation";

const Gallery = (props) => {
  const { galleryRef } = props

  return (
    <section className={classes.gallery} ref={galleryRef} id="gallery">
      <GalleryPresentation />
      <GalleryCTA />
      <GalleryNavigation />
    </section>
  );
};

export default Gallery;

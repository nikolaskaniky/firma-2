import React, { useState } from "react";
import classes from "./gallery.module.scss";
import GalleryCards from "./gallery-cards";
import GalleryCTA from "./gallery-cta";
import GalleryPresentation from "./gallery-presentation";

const Gallery = (props) => {
  const { array } = props;
  const [selectedCategory, setSelectedCategory] = useState(0);
  const selectedCategoryHandler = (item) => setSelectedCategory(item);

  const filteredContent = array.find((item) => item.id === selectedCategory);
  console.log(filteredContent);

  return (
    <>

      <section className={classes.gallery}>
        <GalleryPresentation
          array={array}
          selectedCategoryHandler={selectedCategoryHandler}
          selectedCategory={selectedCategory}
        />
        <GalleryCards filteredContent={filteredContent} />
        <GalleryCTA />
      </section>
    </>
  );
};

export default Gallery;

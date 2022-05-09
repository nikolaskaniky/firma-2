import React from "react";
import Gallery from "../../components/gallery-page/gallery";
import classes from "./index.module.scss";

const GALLERY_ARRAY = [
  {
    id: 0,
    category: "Ecommerce",
    content: [
      {
        name: "Casino Berceni",
      },

      {
        name: "NFT FRIENDS",
      },

      {
        name: "Feng Shui Shop",
      },

      {
        name: "Bionems",
      },
    ],
  },
  {
    id: 1,
    category: "Blogs",
    content: [
      {
        name: "Blog 1",
      },

      {
        name: "Blog 2",
      },

      {
        name: "Blog 3",
      },

      {
        name: "Blog 4",
      },
    ],
  },
];

const GalleryPage = () => {
  return (
    <main className={classes["gallery-page"]}>
      <Gallery array={GALLERY_ARRAY} />
    </main>
  );
};

export default GalleryPage;

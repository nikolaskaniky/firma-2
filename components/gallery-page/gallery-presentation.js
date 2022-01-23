import React from "react";
import classes from "../../styles/gallery-page/gallery-page.module.scss";

const GalleryPresentation = (props) => {
  const { array, selectedCategoryHandler, selectedCategory } = props;

  return (
    <div className={classes.presentation}>
      <ul>
        {array.map((item, index) => (
          <li
            key={index}
            onClick={() => selectedCategoryHandler(item.id)}
            className={
              item.id === selectedCategory ? classes.active : undefined
            }
          >
            {item.category}
          </li>
        ))}
      </ul>

      <div className={classes.line}></div>
    </div>
  );
};

export default GalleryPresentation;

import React from "react";
import classes from "../../styles/gallery-page/gallery-page.module.scss";

const GalleryCards = (props) => {
  const { filteredContent } = props;

  return (
    <div className={classes.cards}>
      {filteredContent.content.map((item, index) => (
        <div key={index} className={classes.card}>
            <div className={classes['image-wrapper']}>

                <div className={classes.overdrop}>
                    <p>see now</p>
                </div>
            </div>

            <div className={classes.title}>
                <p>{item.name}</p>
            </div>
        </div>
      ))}
    </div>
  );
};

export default GalleryCards;

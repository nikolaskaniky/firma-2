import React, { useState, useEffect } from "react";
import classes from "./profile.module.scss";
import Box from "../../reusable/box";
import { user } from "../../../../data/users-data";
import Image from "next/image";

const AddPhoto = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [imageURL, setImageURL] = useState(null);
  const [preview, setPreview] = useState();
  const uploadFileHandler = () => {
    if (imageURL) {
      user.photo = preview;
    }
  };

  useEffect(() => {
    if (imageURL) {
      const reader = new FileReader();
      reader.onload = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(imageURL);
    } else {
      setPreview(null);
    }
  }, [imageURL]);

  return (
    <Box style={classes["add-photo-box"]}>
      <label className={classes["add-circle"]} htmlFor="add-photo-input">
        {!preview ? (
          <p>+</p>
        ) : (
          <Image src={preview} layout="fill" objectFit="cover" alt="img" />
        )}
        <input
          accept="image/*"
          type="file"
          id="add-photo-input"
          onChange={(e) => {
            const file = e.target.files[0];
            setSelectedFile(e.target.files[0]);
            if (file) {
              setImageURL(file);
            } else {
              setImageURL(null);
            }
            e.target.value = null;
          }}
        />
      </label>

      <div className={classes["upload-button"]} onClick={uploadFileHandler}>
        Upload new photo
      </div>

      <div
        className={classes["delete-button"]}
        onClick={() => {
          setSelectedFile(null);
          setImageURL(null);
        }}
      >
        Delete
      </div>
    </Box>
  );
};

export default AddPhoto;

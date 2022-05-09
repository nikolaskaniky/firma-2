import React, { useEffect, useState } from "react";
import Image from "next/image";
import file from "../../../assets/images/reusables/file@3x.png";
import { GrFormClose } from "react-icons/gr";
import { VscSymbolFile } from "react-icons/vsc";
import classes from "./upload-file.module.scss";

const UploadFile = (props) => {
  const { fileChangeHandler, files, setFiles } = props;

  // const [isFilePicked, setIsFilePicked] = useState(false);
  // const changeHandler = (event) => {
  //   setSelectedFile([...selectedFile, ...Array.from(event.target.files)]);
  //   setIsFilePicked(true);
  //   event.target.value = "";
  // };

  return (
    <section className={classes["upload-file"]}>
      <div className={classes["title-wrapper"]}>
        <div className={classes.title}>
          <h1>Upload your images</h1>
        </div>

        <div className={classes.subtitle}>
          <p>PNG, JPG , PDF , SVG files are allowed</p>
        </div>
      </div>
      {/* //! <-- upload button */}
      <label htmlFor="file-upload">
        <div className={classes.image}>
          <Image src={file} layout="fill" alt="img" />
        </div>
        <h4>Upload File</h4>
      </label>
      <input
        id="file-upload"
        type="file"
        onChange={(e) => fileChangeHandler(e)}
        multiple
      />
      {/* //! --> */}

      {/* //! <-- selected files list */}
      <ul className={classes["dropped-elements-list"]}>
        {files ? (
          files.map((item, index) => (
            <li key={index}>
              <p
                className={classes.delete}
                onClick={() => {
                  const list = [...files];
                  list.splice(index, 1);
                  setFiles(list);
                }}
              >
                <GrFormClose className={classes.close} />
              </p>
              <div className={classes.type}>
                <div className={classes["type-image-wrapper"]}>
                  {/* <h4>{item.name.split(".").pop()}</h4> */}
                  <VscSymbolFile className={classes["type-symbol"]} />
                </div>
              </div>
              <div className={classes.info}>
                <p>{item.name}</p>
                <p>
                  {item.size < 1000
                    ? item.size + " bytes"
                    : item.size < 1000000
                    ? (item.size / 1000).toFixed(2) + " kb"
                    : item.size > 1000000
                    ? (item.size / 1000000).toFixed(2) + " mb"
                    : ""}
                </p>
              </div>
            </li>
          ))
        ) : (
          <p>No files yet.</p>
        )}
      </ul>
      {/* //! --> */}
    </section>
  );
};

export default UploadFile;

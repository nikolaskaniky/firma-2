import React from "react";
import Image from "next/image";
import classes from "../../styles/reusables/info-form.module.scss";
import file from "../../assets/images/reusables/file@3x.png";
import { AiOutlineClose } from "react-icons/ai";
import Input from "./input";

const InfoForm = (props) => {
  const { onClosePortal } = props;

  return (
    <main className={classes["info-form"]}>
      <AiOutlineClose id={classes["close-pop"]} onClick={onClosePortal} />
      <section className={classes["upload-file"]}>
        <div className={classes["title-wrapper"]}>
          <div className={classes.title}>
            <h1>Upload your images</h1>
          </div>

          <div className={classes.subtitle}>
            <p>PNG, JPG , PDF , SVG files are allowed</p>
          </div>
        </div>

        <div className={classes["drop-area"]}>
          <div className={classes.image}>
            <Image src={file} layout="fill" alt="drop here img" />
          </div>

          <p>Drag and drop</p>
        </div>

        <ul className={classes["dropped-elements-list"]}></ul>
      </section>

      <form>
        <Input
          wrapperStyle={classes["input-wrapper"]}
          inputStyle={classes.input}
          placeholder="Category"
          type="text"
        />
        <Input
          wrapperStyle={classes["input-wrapper"]}
          inputStyle={classes.input}
          placeholder="Date"
          type="text"
        />
        <Input
          wrapperStyle={classes["input-wrapper"]}
          inputStyle={classes.input}
          placeholder="First name"
          type="text"
        />
        <Input
          wrapperStyle={classes["input-wrapper"]}
          inputStyle={classes.input}
          placeholder="Last name"
          type="text"
        />
        <Input
          wrapperStyle={classes["input-wrapper"]}
          inputStyle={classes.input}
          placeholder="Email"
          type="text"
        />
        <Input
          wrapperStyle={classes["input-wrapper"]}
          inputStyle={classes.input}
          placeholder="Company"
          type="text"
        />
        <Input
          wrapperStyle={classes["input-wrapper"]}
          inputStyle={classes.input}
          placeholder="Country"
          type="text"
        />
        <Input
          wrapperStyle={classes["input-wrapper"]}
          inputStyle={classes.input}
          placeholder="City"
          type="text"
        />
        <Input
          wrapperStyle={classes["input-wrapper"]}
          inputStyle={classes.input}
          placeholder="Phone"
          type="text"
        />
        <Input
          wrapperStyle={classes["input-wrapper"]}
          inputStyle={classes.input}
          placeholder="Zip code"
          type="text"
        />
        <Input
          wrapperStyle={`${classes["input-wrapper"]} ${classes.website}`}
          inputStyle={classes.input}
          placeholder="Link website: https://www.yoursite.com"
          type="text"
        />
        <textarea cols="30" rows="10"></textarea>
        <button>Send fix request</button>
      </form>
    </main>
  );
};

export default InfoForm;

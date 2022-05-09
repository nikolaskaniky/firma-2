import React, { useState } from "react";
import { BiShow } from "react-icons/bi";
import { AiFillEyeInvisible } from "react-icons/ai";
import classes from "./password-input.module.scss";

const PasswordInput = (props) => {
  const [isVisible, setIsVisible] = useState(false);
  const isVisibleHandler = () => setIsVisible((currentState) => !currentState);

  return (
    <div className={`${classes["input-wrapper"]} ${props.style}`}>
      <input {...props.input} type={isVisible ? "text" : "password"} />
      {!isVisible ? (
        <BiShow onClick={isVisibleHandler} />
      ) : (
        <AiFillEyeInvisible onClick={isVisibleHandler} />
      )}
    </div>
  );
};

export default PasswordInput;

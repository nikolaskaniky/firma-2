import React, { useState } from "react";
import classes from "./input.module.scss";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import { BiShow } from "react-icons/bi";

const Input = (props) => {
  const { wrapperStyle, placeholder, label, type, inputStyle, labelStyle } = props;
  const [visible, setVisible] = useState(false);

  return (
    <div className={`${classes["input-wrapper"]} ${wrapperStyle}`}>
      {label && <label className={labelStyle ? labelStyle : undefined}>{label}</label>}
      <input
      className={inputStyle ? inputStyle : undefined}
        placeholder={placeholder}
        type={
          type === "password" && visible
            ? "text"
            : type === "pasword" && !visible
            ? "password"
            : type
        }
      />

      {type === "password" && (
        <div
          className={classes.icon}
          onClick={() => setVisible((prev) => setVisible(!prev))}
        >
          {visible ? <AiOutlineEyeInvisible /> : <BiShow />}
        </div>
      )}
    </div>
  );
};

export default Input;

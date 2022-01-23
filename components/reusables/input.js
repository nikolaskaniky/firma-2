import React, { useState } from "react";
import classes from "../../styles/reusables/input.module.scss";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import { BiShow } from "react-icons/bi";

const Input = (props) => {
  const { wrapperStyle, placeholder, label, type, inputStyle } = props;
  const [visible, setVisible] = useState(false);

  return (
    <div className={`${classes["input-wrapper"]} ${wrapperStyle}`}>
      {label && <label>{label}</label>}
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

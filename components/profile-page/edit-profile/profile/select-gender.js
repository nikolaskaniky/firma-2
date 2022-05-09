import React, { useState } from "react";
import classes from "./profile.module.scss";
import { user } from "../../../../data/users-data";
import Box from "../../reusable/box";

const SelectGender = () => {
  const gender_array = [
    {
      name: "male",
    },

    {
      name: "female",
    },
  ];

  const [selectedGender, setSelectedGender] = useState(user.gender);
  const selectedGenderHandler = (name) => {
    setSelectedGender(name);
  };

  return (
    <Box style={classes["select-gender-box"]}>
      {gender_array.map((gender, index) => (
        <div
          key={index}
          className={classes.gender}
          onClick={() => selectedGenderHandler(gender.name)}
        >
          <div className={classes.select}>
            <div
              className={`${classes.fill} ${
                selectedGender === gender.name ? classes.active : undefined
              }`}
            ></div>
          </div>
          <p>{gender.name}</p>
        </div>
      ))}
    </Box>
  );
};

export default SelectGender;

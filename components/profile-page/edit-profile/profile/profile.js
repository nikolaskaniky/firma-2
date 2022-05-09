import React from "react";
import AddPhoto from "./add-photo";
import Address from "./address";
import NameBirth from "./name-birth";
import Phone from "./phone";
import classes from "./profile.module.scss";
import SelectGender from "./select-gender";

const Profile = () => {
  return (
    <div className={classes.profile}>
      <AddPhoto />
      <SelectGender />
      <NameBirth />
      <Phone />
      <Address />
    </div>
  );
};

export default Profile;

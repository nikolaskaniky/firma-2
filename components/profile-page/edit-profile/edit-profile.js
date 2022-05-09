import React, { useState } from "react";
import classes from "./edit-profile.module.scss";
import Header from "./header/header";
import useStickyState from "../../HOOKS/sticky-state";
import Profile from "./profile/profile";
import AccountSettings from "./account-settings/account-settings";
import Password from "./password/password";
import Notification from "./notification/notification";
import Link from "./link/link";

const EditProfile = () => {
  const editProfile_array = [
    {
      name: "Profile",
      component: <Profile />,
    },

    {
      name: "Account Settings",
      component: <AccountSettings />,
    },

    {
      name: "Password",
      component: <Password />,
    },

    {
      name: "Notification",
      component: <Notification />,
    },

    {
      name: "Link",
      component: <Link />,
    },
  ];
  const [selectedProfile, setSelectedProfile] = useStickyState(
    editProfile_array[0].name,
    "selectedProfile"
  );
  const selectedProfileHandler = (name) => setSelectedProfile(name);
  const filteredSelectedProfile = editProfile_array.find(
    (component) => component.name === selectedProfile
  );

  return (
    <section className={classes["edit-profile"]}>
      <Header
        editProfile_array={editProfile_array}
        selectedProfile={selectedProfile}
        selectedProfileHandler={selectedProfileHandler}
      />

      {filteredSelectedProfile.component}
    </section>
  );
};

export default EditProfile;

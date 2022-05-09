import React, { useEffect } from "react";
import Header from "../../components/profile-page/header/header";
import classes from "./index.module.scss";
import useStickyState from "../../components/HOOKS/sticky-state";
import MyDashboard from "../../components/profile-page/my-dashboard/my-dashbooard";
import EditProfile from "../../components/profile-page/edit-profile/edit-profile";
import Call from "../../components/profile-page/call/call";
import Messages from "../../components/profile-page/messages/messages";
import Description from "../../components/profile-page/description/description";
import Projects from "../../components/profile-page/projects/projects";
import ProjectsByCA23 from "../../components/profile-page/projectsByCA23/projects-by-ca-23";
import Payment from "../../components/profile-page/payment/payment";
import Invoice from "../../components/profile-page/invoice/invoice";

const profile_array = [
  {
    name: "My Dashboard",
    component: <MyDashboard />,
  },

  {
    name: "Edit Profile",
    component: <EditProfile />,
  },

  {
    name: "Call",
    component: <Call />,
  },

  {
    name: "Message",
    component: <Messages />,
  },

  {
    name: "Description",
    component: <Description />,
  },

  {
    name: "Projects",
    component: <Projects />,
  },

  {
    name: "Project by CA 23",
    component: <ProjectsByCA23 />,
  },

  {
    name: "Payment",
    component: <Payment />,
  },

  {
    name: "Invoice",
    component: <Invoice />,
  },
];

const ProfilePage = () => {
  const [selectedSection, setSelectedSection] = useStickyState(
    profile_array[0].name,
    "selectedSection"
  );
  const selectedSectionHandler = (name) => setSelectedSection(name);

  const filteredComponent = profile_array.find(
    (component) => component.name === selectedSection
  );

  //todo aici o sa trebuiasca sa obtin user-ul si datele user-ului. De aici le pot trece mai departe la componente.

  return (
    <main className={classes["profile-page"]}>
      {/* //! <-- title */}
      <div className={classes.title}>
        <h1>MY</h1>
        <p>DASHBOARD</p>
      </div>
      {/* //! --> */}

      {/* //! <-- header */}
      <Header
        profile_array={profile_array}
        selectedSectionHandler={selectedSectionHandler}
        selectedSection={selectedSection}
      />
      {/* //! --> */}

      {/* //! <-- content */}
      {filteredComponent.component}
      {/* //! --> */}
    </main>
  );
};

export default ProfilePage;

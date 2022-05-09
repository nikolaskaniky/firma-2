import React, { useState } from "react";
import fs from "fs";
import path from "path";

import Main from "../../../components/admin/dashboard/main/main";
import SideNavigation from "../../../components/admin/dashboard/side-navigation/side-navigation";
import classes from "./index.module.scss";

import Users from "../../../components/admin/dashboard/users/users";
import Admins from "../../../components/admin/dashboard/admins/admins";
import useStickyState from "../../../components/HOOKS/sticky-state";
import Orders from "../../../components/admin/dashboard/orders/orders";

import { AiFillAppstore } from "react-icons/ai";
import { GiWallet } from "react-icons/gi";
import { AiFillClockCircle } from "react-icons/ai";
import { BiTask } from "react-icons/bi";
import { RiAdminFill } from "react-icons/ri";
import { FaUsers } from "react-icons/fa";
import { GiEarthAmerica } from "react-icons/gi";
import { FaCalendarAlt } from "react-icons/fa";
import { AiFillMessage } from "react-icons/ai";
import { VscSettings } from "react-icons/vsc";
import { AiOutlinePoweroff } from "react-icons/ai";

const Index = (props) => {
  const { usersData } = props;

  const components_array = [
    {
      name: "Dashboard",
      image: <AiFillAppstore />,
      component: <Main />,
    },

    {
      name: "Wallet",
      image: <GiWallet />,
      component: "",
    },

    {
      name: "Schedule",
      image: <AiFillClockCircle />,
      component: "",
    },

    {
      name: "Orders",
      image: <BiTask />,
      component: <Orders />,
    },

    {
      name: "Admins",
      image: <RiAdminFill />,
      component: <Admins usersData={usersData} />,
    },

    {
      name: "Users",
      image: <FaUsers />,
      component: <Users usersData={usersData} />,
    },

    {
      name: "Maps",
      image: <GiEarthAmerica />,
      component: "",
    },

    {
      name: "Calendar",
      image: <FaCalendarAlt />,
      component: "",
    },

    {
      name: "Messages",
      image: <AiFillMessage />,
      component: "",
    },

    {
      name: "Settings",
      image: <VscSettings />,
      component: "",
    },

    {
      name: "Logout",
      image: <AiOutlinePoweroff />,
      component: "",
    },
  ];

  const [mounted, setMounted] = useState(false);
  const [selectedMenu, setSelectedMenu] = useStickyState(
    components_array[0].name,
    "selectedDashboardMenu"
  );
  const selectedMenuHandler = (name) => setSelectedMenu(name);

  return (
    <main className={classes["dashboard-page"]}>
      <SideNavigation
        array={components_array}
        onMenuItemClick={selectedMenuHandler}
        selectedMenu={selectedMenu}
      />
      {components_array.map(
        (obj, index) =>
          obj.name === selectedMenu && (
            <div key={index} className={classes["components-wrapper"]}>
              {obj.component}
            </div>
          )
      )}
    </main>
  );
};

export default Index;

export async function getStaticProps() {
  const usersPath = path.join(process.cwd(), "data", "backend", "users.json");
  const usersJSON = fs.readFileSync(usersPath);
  const usersData = await JSON.parse(usersJSON);

  return {
    props: {
      usersData: usersData,
    },
  };
}

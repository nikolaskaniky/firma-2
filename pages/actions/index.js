import React, { useState, Fragment } from "react";
import Header from "../../components/actions-page/header/header";
import classes from "./index.module.scss";
import CreateWebsite from "../../components/actions-page/sections/create-website/create-website";
import RepairWebsite from "../../components/actions-page/sections/repair-website/repair-website";
import Colaborations from "../../components/actions-page/sections/colaborations/colaborations";
import Jobs from "../../components/actions-page/sections/jobs-for-you/jobs";
import { useDispatch, useSelector } from "react-redux";
import { actionPageAction } from "../../redux/actions/actions-page-actions";

const COMPONENTS_ARRAY = [
  {
    label: "create",
    header: {
      h4: "CREATE WEBSITE",
      p: "SIMULATOR",
    },
    component: <CreateWebsite />,
  },

  {
    label: "repair",
    header: {
      h4: "WEBSITE",
      p: "REPAIR",
    },
    component: <RepairWebsite />,
  },

  {
    label: "colaboration",
    header: {
      h4: "PROJECT WITH US",
      p: "COLABORATION",
    },
    component: <Colaborations />,
  },

  {
    label: "jobs",
    header: {
      h4: "WORK WITH US",
      p: "JOBS FOR YOU",
    },
    component: <Jobs />,
  },
];

const Actions = () => {
  const dispatch = useDispatch();
  const selectedComponentHandler = (item) => dispatch(actionPageAction(item));

  const selectedPage = useSelector((state) => state.selectedPage);

  return (
    <main className={classes["actions-page"]}>
      <Header
        array={COMPONENTS_ARRAY}
        selectedPage={selectedPage}
        selectedComponentHandler={selectedComponentHandler}
      />

      {COMPONENTS_ARRAY.map(
        (item, index) =>
          item.label === selectedPage && (
            <Fragment key={index}>{item.component}</Fragment>
          )
      )}
    </main>
  );
};

export default Actions;

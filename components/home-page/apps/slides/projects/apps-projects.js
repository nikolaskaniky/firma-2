import React from "react";
import HomePresentation from "../../../../reusables/home-presentation";
import HomeCTA from "../../../../reusables/home-cta";
import projects from "../../../../../assets/images/home-page/apps/projects@3x.png";
import classes from "../../../../../styles/home-page/apps/projects.module.scss";

const AppsProjects = () => {
  return (
    <>
      <HomePresentation
        nr="04"
        pre="Get inspired from our"
        main={<h1>Projects</h1>}
        text={
          <p>
            We{"'"}ve designed and developed multiple types of apps for
            <br />
            our clients, have a look at the results of our creative team
            <br />
            ideas and implementations.
          </p>
        }
      />
      <HomeCTA
        src={projects}
        linkTo={"/apps"}
        buttonText={"Simulate app price"}
        containerStyle={classes["image-container"]}
        contentStyle={classes.content}
        ctaStyle={classes.cta}
      />
    </>
  );
};

export default AppsProjects;

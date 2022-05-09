import React from "react";
import HomePresentation from "../../../../reusables/home-presentation";
import projects from "../../../../../assets/images/home-page/apps/projects@3x.png";
import CTASection from '../../../ui/cta-section/cta-section';

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
      <CTASection image={projects} width="565" height="518" buttonText='App projects' linkTo='' />
    </>
  );
};

export default AppsProjects;

import React from "react";
import HomePresentation from "../../../../reusables/home-presentation";
import HomeCTA from "../../../../reusables/home-cta";
import team from "../../../../../assets/images/home-page/about/team@3x.png";
import classes from "../../../../../styles/home-page/about/team.module.scss";

const AboutTeam = () => {
  return (
    <>
      <HomePresentation
        nr="07"
        pre="Nice to meet you!"
        main={<h1>Our team</h1>}
        text={
          <p className={classes["p-text"]}>
            We are an enthusiastic and creative team who come <br />
            up with great ideas and solutions .<br />
            Here at CA23 we are not working, we do what we like <br />
            and that{"'"}s why we succeed.
          </p>
        }
      />
      <HomeCTA
        src={team}
        linkTo={"/about"}
        buttonText={"Details"}
        containerStyle={classes["image-container"]}
        contentStyle={classes.content}
        ctaStyle={classes.cta}
      />
    </>
  );
};

export default AboutTeam;

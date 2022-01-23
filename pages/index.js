import React, { useRef, useEffect, useState } from "react";
import About from "../components/home-page/about/about";
import Apps from "../components/home-page/apps/apps";
import Collabs from "../components/home-page/collabs/collabs";
import Contact from "../components/home-page/contact/contact";
import Gallery from "../components/home-page/gallery/gallery";
import Hero from "../components/home-page/hero/hero";
import NFT from "../components/home-page/nft/nft";
import SEO from "../components/home-page/seo/seo";
import Start from "../components/home-page/start/start";
import Website from "../components/home-page/website/website";
import classes from "../styles/home-page/home-page.module.scss";

const HomePage = () => {
  const homeRef = useRef();

  const galleryRef = useRef();
  const websiteRef = useRef();

  const [isRendered, setIsRendered] = useState(false);
  const [leftDistance, setLeftDistance] = useState();

  useEffect(() => {
    setLeftDistance(homeRef.current.offsetLeft);
    setIsRendered(true);
  }, []);

  isRendered &&
    window.addEventListener("resize", () => {
      setLeftDistance(homeRef.current.offsetLeft);
    });

  return (
    <main className={classes["home-page"]} ref={homeRef}>
      <Hero />
      <h1 className={classes["section-name"]}>Gallery</h1>
      <Gallery galleryRef={galleryRef} />
      <h1 className={classes["section-name"]}>Website</h1>
      <Website websiteRef={websiteRef} />
      <h1 className={classes["section-name"]}>Apps</h1>
      <Apps />
      <h1 className={classes["section-name"]}>Token {"&"} NFT</h1>
      <NFT />
      <h1 className={classes["section-name"]}>SEO {"&"} Copywriting</h1>
      <SEO />
      <h1 className={classes["section-name"]}>About</h1>
      <About />
      <h1 className={classes["section-name"]}>Collabs</h1>
      <Collabs />
      <h1 className={classes["section-name"]}>Contact</h1>
      <Contact />
      <h1 className={classes["section-name"]}>Start a project with CA23</h1>
      <Start />
      <h1 className={classes["section-name"]}>Footer</h1>

      {/* <div
        className={classes["side-navigator"]}
        style={{
          left: leftDistance - 120 + "px",
          display: "flex",
          flexDirection: "column",
          gap: "20px",
        }}
      >
      </div> */}
    </main>
  );
};

export default HomePage;

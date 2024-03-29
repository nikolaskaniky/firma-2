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
import classes from "./index.module.scss";

const HomePage = () => {
  const homeRef = useRef();

  const galleryRef = useRef();
  const websiteRef = useRef();

  const [isRendered, setIsRendered] = useState(false);
  const [leftDistance, setLeftDistance] = useState();

  const myArray = [
    {
      name: "Adidasi",
      category: "haine",
    },

    {
      name: "hanorac",
      category: "haine",
    },

    {
      name: "laptop",
      category: "electrocasnice",
    },
  ];

  const categories = myArray.reduce((acc, cur) => {
    acc[cur.category] = (acc[cur.category] || 0) + 1;
    return acc
  }, {})

  console.log(categories)

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
    </main>
  );
};

export default HomePage;

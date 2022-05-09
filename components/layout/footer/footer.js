import React from "react";
import Image from "next/image";
import Link from "next/link";
import classes from "./footer.module.scss";

import fb from "../../../assets/images/footer/fb.svg";
import yt from "../../../assets/images/footer/yt.svg";
import tw from "../../../assets/images/footer/tw.svg";
import ig from "../../../assets/images/footer/ig.svg";

const dummy_social = [
  {
    image: fb,
    link: "/some-url",
    w: 20,
    h: 26,
    alt: "fb-image",
  },

  {
    image: yt,
    link: "/some-url",
    w: 28,
    h: 26,
    alt: "yt-image",
  },

  {
    image: tw,
    link: "/some-url",
    w: 26,
    h: 26,
    alt: "tw-image",
  },

  {
    image: ig,
    link: "/some-url",
    w: 24,
    h: 26,
    alt: "ig-image",
  },
];

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <ul className={classes.general}>
        <h4>RESEAUX SOCIAUX</h4>
        <li>Recherche</li>
        <li>Effectier un retour</li>
        <li>Conditions generales de vente</li>
        <li>Politique de confidentialite</li>
        <li>Mentions ledales</li>
        <li>Nous contacter</li>
      </ul>

      <form className={classes.newsletter}>
        <div className={classes.box}>
          <h4>NEWSLETTER</h4>

          <p>
            Inscrivez-vous pour être alerté{"(e)"} en avant- <br />
            première des exclusivités de CA 23 D{"&"}D!
          </p>

          <input type="text" placeholder="Entrez votre email" />

          <button>S{"'"}inscrire</button>
        </div>
      </form>

      <div className={classes.social}>
        <h4>RESEAUX SOCIAUX</h4>
        <div className={classes.images}>
          {dummy_social.map((item, i) => (
            <Link href={item.link} key={i}>
              <a>
                <Image
                  src={item.image}
                  width={item.w}
                  height={item.h}
                  alt={item.alt}
                />
              </a>
            </Link>
          ))}
        </div>
      </div>

      <div className={classes.copyright}>
        <h4>CA23 Desing {"&"} Development</h4>
        <p>Realise par Best of Both Worlds</p>
      </div>
    </footer>
  );
};

export default Footer;

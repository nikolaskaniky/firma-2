import React from "react";
import Image from "next/image";
import thunder from "../../assets/images/founders-page/thunder.svg";
import classes from "./founders.module.scss";

const Certificates = (props) => {
  const { founder } = props;

  return (
    <section className={classes.certificates}>
      <h1>Certificates</h1>
      <ul className={classes.list}>
        {founder.certificates.map((certificate, index) => (
          <li key={index}>
            <Image src={thunder} width={21} height={32} alt="image" />
            <p>{certificate.name}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Certificates;

import React, { Fragment } from "react";
import Navbar from "./navbar/navbar";
import Footer from "./footer/footer";

const Layout = (props) => {
    const { children } = props

  return (
      <Fragment>
          <Navbar />
          {children}
          <Footer />
      </Fragment>
  );
};

export default Layout;

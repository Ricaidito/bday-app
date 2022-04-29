import React from "react";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer
      id="sticky-footer"
      className="d-flex flex-shrink-0 py-4 bg-dark text-white-50 fixed-bottom justify-content-around"
    >
      <p className="ft-text text-center">
        Created by Ricardo, Fernando & Carlos
      </p>
      <p className="ft-text text-center">
        LeafSoftware🍃© All rights reserved | 2022
      </p>
    </footer>
  );
};

export default Footer;

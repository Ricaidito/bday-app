import React from "react";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer
      id="sticky-footer"
      className="flex-shrink-0 py-4 bg-dark text-white-50 fixed-bottom"
    >
      <p className="text-center">
        LeafSoft © Todos los derechos reservados | 2022
      </p>
    </footer>
  );
};

export default Footer;

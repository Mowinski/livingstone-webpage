import React from "react";
import logo from "../images/logo.webp";

const Header = () => (
  <h1 className="site-heading text-center text-white d-none d-lg-block">
    <span className="site-heading-upper text-primary mb-3">
      <img src={logo} alt="Game logo" />
    </span>
  </h1>
);

export default Header;

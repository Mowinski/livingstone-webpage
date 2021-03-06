import React from "react";
import vulpesoft from "../images/logo_vulpesoft.png";

const Footer = () => (
  <footer className="footer text-faded text-center py-5">
    <div className="container">
      <p className="m-0 small">
        Powered by <img src={vulpesoft} alt="Studio Logo" />
      </p>
      <p className="m-0 small">Copyright &copy; Vulpesoft 2019</p>
    </div>
  </footer>
);

export default Footer;

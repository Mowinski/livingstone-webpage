import React from "react";
import { NavLink, Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark py-lg-4" id="mainNav">
      <div className="container">
        <Link
          to="/"
          className="navbar-brand text-uppercase text-expanded font-weight-bold d-lg-none"
        >
          Dr Livingstone, I Presume?
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarResponsive"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item px-lg-4">
              <NavLink
                exact
                to="/"
                className="nav-link text-uppercase text-expanded"
                activeClassName="active"
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item px-lg-4">
              <NavLink
                exact
                to="/about"
                className="nav-link text-uppercase text-expanded"
                activeClassName="active"
              >
                About
              </NavLink>
            </li>
            <li className="nav-item px-lg-4">
              <NavLink
                exact
                to="/gallery"
                className="nav-link text-uppercase text-expanded"
                activeClassName="active"
              >
                Gallery
              </NavLink>
            </li>
            <li className="nav-item px-lg-4">
              <NavLink
                exact
                to="/team"
                className="nav-link text-uppercase text-expanded"
                activeClassName="active"
              >
                Team
              </NavLink>
            </li>
            <li className="nav-item px-lg-4">
              <NavLink
                exact
                to="/contact"
                className="nav-link text-uppercase text-expanded"
                activeClassName="active"
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;

import React from "react";
import { Link } from "react-router";

const Navbar = () => (
  <nav style={{ marginBottom: 0 }} className="navbar navbar-inverse">
    <div className="container-fluid">
      <div className="navbar-header">
        <Link className="navbar-brand" to="/">Mood App</Link>
      </div>
      <ul className="nav navbar-nav navbar-left">
        <li className={location.pathname === "/" && "active"}>
          <Link to="/">Home</Link>
        </li>
        <li className={location.pathname === "/favorites" && "active"}>
          <Link to="/favorites">Favorites</Link>
        </li>
      </ul>
      <ul className="nav navbar-nav navbar-right">
        <li className={location.pathname === "/sign_out" && "active"}>
          <Link to="/favorites">Sign Out</Link>
        </li>
      </ul>
    </div>
  </nav>
);

export default Navbar;

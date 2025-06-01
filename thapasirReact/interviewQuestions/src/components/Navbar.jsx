import React from "react";
import { NavLink } from "react-router-dom";
import "../App.css";  // We'll add simple CSS here

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">MovieSeriesApp</div>
      <ul className="navbar-links">
        <li>
          <NavLink to="/" exact activeClassName="active-link">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/movies" activeClassName="active-link">
            Movies
          </NavLink>
        </li>
        <li>
          <NavLink to="/series" activeClassName="active-link">
            Series
          </NavLink>
        </li>
        <li>
          <NavLink to="/favorites" activeClassName="active-link">
            Favorites
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" activeClassName="active-link">
            About
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faViadeo } from "@fortawesome/free-brands-svg-icons";
import "../Navbar.css";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm fixed-top">
      <div className="container-fluid">
        <Link className="navbar-brand text-warning fw-bold d-flex align-items-center" to="/">
          onionMovies <FontAwesomeIcon icon={faViadeo} className="ms-2" />
        </Link>

        <button
          className="navbar-toggler border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto align-items-center gap-3">
            <li className="nav-item">
              <Link className="nav-link text-light" to="/videos">
                Movies
              </Link>
            </li>

            

            <li className="nav-item">
              <Link className="btn btn-warning fw-semibold px-3" to="/upload">
                + Upload Now
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

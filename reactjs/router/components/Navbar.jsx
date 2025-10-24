import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3">
      <div className="container-fluid">
        <Link className="navbar-brand fw-bold" to="/">
          🛒 Amazon
        </Link>

        <div className="d-flex gap-3">
          <Link className="nav-link text-white" to="/">Home</Link>
          <Link className="nav-link text-white" to="/about">About</Link>
          <Link className="nav-link text-white" to="/contact">Contact</Link>
          <Link className="nav-link text-white" to="/products">Products</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

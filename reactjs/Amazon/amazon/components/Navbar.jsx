import React from "react";

function Navbar() {
  return (
    <div>
      <div className="container-fluid bg-black">
        <a className="navbar-brand text-white text-bold p-2 " href="#" >
          Amazon
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">home</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;

import React from "react";

import { Link } from "react-router-dom";
const NavbarComponents = () => {
  let linkStyle =
    "text-decoration-none text-white font-bold fs-5 px-3 py-2 rounded hover-bg-secondary";
  return (
    <div className="d-flex bg-black p-2 justify-content-center gap-2">
      <p className="text-white gap-3 m-2">Todo App</p>
      {/* navigate the page here */}
      {/* home page */}
      <Link className={linkStyle} to="/">
        Home
      </Link>
      {/* about page */}
      <Link className={linkStyle} to="/about">
        About
      </Link>

      {/* todo page */}
      <Link className={linkStyle} to="/todo">
        todo
      </Link>
    </div>
  );
};

export default NavbarComponents;

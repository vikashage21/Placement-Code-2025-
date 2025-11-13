import React from "react";

function Footer() {
  return (
    <footer className="bg-dark text-white py-3 mt-5">
      <div className="container text-center">
        <p className="mb-1">© {new Date().getFullYear()} VideoTube by Vikash Sharma</p>
        <small className="text-secondary">
          Built with ❤️ using React & Bootstrap
        </small>
      </div>
    </footer>
  );
}

export default Footer;

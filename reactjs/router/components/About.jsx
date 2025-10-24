import React from "react";

function About() {
  return (
    <div
      className="d-flex align-items-center justify-content-center text-center text-white"
      style={{
        height: "100vh",
        background:
          "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      }}
    >
      <div className="container">
        <h1 className="display-4 fw-bold mb-3">About Us</h1>
        <p className="lead mx-auto" style={{ maxWidth: "700px" }}>
          Welcome to <strong>Amazon Store</strong> 🛒 — your one-stop shop for
          high-quality products at unbeatable prices. We’re passionate about
          delivering the best online shopping experience with a wide range of
          items you’ll love.
        </p>
      </div>
    </div>
  );
}

export default About;

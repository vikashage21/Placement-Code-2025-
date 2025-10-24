import React from "react";

function Home() {
  const bgStyle = {
    backgroundImage:
      "url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1920&q=80')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
    textShadow: "2px 2px 8px rgba(0,0,0,0.8)",
  };

  return (
    <div style={bgStyle}>
      <div className="text-center">
        <h1 className="fw-bold display-3">Welcome to Amazon Store 🛒</h1>
        <p className="lead mt-3">
          Discover amazing products at unbeatable prices.
        </p>
        <button className="btn btn-warning btn-lg mt-3">Shop Now</button>
      </div>
    </div>
  );
}

export default Home;

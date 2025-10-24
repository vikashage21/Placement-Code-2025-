import React from "react";

function Contact() {
  return (
    <div
      className="text-white d-flex align-items-center"
      style={{
        minHeight: "100vh",
        backgroundImage:
          "url('https://images.unsplash.com/photo-1525186402429-b4ff38bedbec?auto=format&fit=crop&w=1920&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container text-center">
        <h1 className="fw-bold mb-4">Contact Us</h1>
        <p className="lead mb-5">
          Have questions or feedback? We’d love to hear from you!
        </p>

        <form className="mx-auto" style={{ maxWidth: "500px" }}>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Your Name"
            />
          </div>
          <div className="mb-3">
            <input
              type="email"
              className="form-control"
              placeholder="Your Email"
            />
          </div>
          <div className="mb-3">
            <textarea
              className="form-control"
              rows="4"
              placeholder="Your Message"
            ></textarea>
          </div>
          <button className="btn btn-warning w-100">Send Message</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;

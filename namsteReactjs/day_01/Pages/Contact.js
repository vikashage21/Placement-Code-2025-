import '../AboutContact.css'
function Contact() {
  return (
    <div className="container py-5">
      <h2 className="text-center mb-4">Contact Us</h2>
      <p className="text-center mb-5">
        Have any questions or feedback? We’d love to hear from you!
      </p>

      <div className="row justify-content-center">
        <div className="col-md-8">
          <form className="shadow p-4 rounded bg-light">
            <div className="mb-3">
              <label htmlFor="name" className="form-label fw-bold">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="form-control"
                placeholder="Enter your name"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="email" className="form-label fw-bold">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="form-control"
                placeholder="Enter your email"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="message" className="form-label fw-bold">
                Message
              </label>
              <textarea
                id="message"
                className="form-control"
                rows="5"
                placeholder="Type your message..."
              ></textarea>
            </div>

            <button type="submit" className="btn btn-primary w-100">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;

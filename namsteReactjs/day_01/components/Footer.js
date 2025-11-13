export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Brand Section */}
        <div className="footer-brand">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/7/75/Zomato_logo.png"
            alt="Logo"
            className="footer-logo"
          />
          <h3>Zomato Clone</h3>
          <p>Discover the best food & drinks around you.</p>
        </div>

        {/* Links Section */}
        <div className="footer-links">
          <h4>About Zomato</h4>
          <ul>
            <li>Who We Are</li>
            <li>Blog</li>
            <li>Careers</li>
            <li>Report Fraud</li>
            <li>Contact</li>
          </ul>
        </div>

        <div className="footer-links">
          <h4>For Restaurants</h4>
          <ul>
            <li>Partner With Us</li>
            <li>Apps For You</li>
            <li>Advertise</li>
            <li>Corporate Info</li>
          </ul>
        </div>

        <div className="footer-links">
          <h4>Learn More</h4>
          <ul>
            <li>Privacy</li>
            <li>Security</li>
            <li>Terms</li>
            <li>Sitemap</li>
          </ul>
        </div>

        {/* Social Section */}
        <div className="footer-social">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <i className="fa-brands fa-facebook"></i>
            <i className="fa-brands fa-instagram"></i>
            <i className="fa-brands fa-x-twitter"></i>
            <i className="fa-brands fa-linkedin"></i>
          </div>
        </div>

      </div>

      {/* Bottom Text */}
      <div className="footer-bottom">
        <p>© 2025 Zomato Clone by Vikash Kumar | Made with ❤️ using React</p>
      </div>
    </footer>
  );
}

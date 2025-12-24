import "./Footer.css";
import { FaLinkedin, FaTwitter, FaEnvelope, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <h2>𝐄𝐌𝐈𝐥𝐲</h2>
          <p>
            Making premium purchases affordable with smart, secure, and
            interest-free EMI solutions.
          </p>
        </div>

        <div className="footer-links">
          <h4>Product</h4>
          <a href="#">EMI Calculator</a>
          <a href="#">How it Works</a>
          <a href="#">Benefits</a>
          <a href="#">Categories</a>
        </div>

        <div className="footer-links">
          <h4>Company</h4>
          <a href="#">About Us</a>
          <a href="#">Careers</a>
          <a href="#">Contact</a>
          <a href="#">Blog</a>
        </div>

        <div className="footer-links">
          <h4>Legal</h4>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms & Conditions</a>
          <a href="#">Refund Policy</a>
          <a href="#">Security</a>
        </div>

        <div className="footer-newsletter">
          <h4>Stay Updated</h4>
          <p>Subscribe for latest offers and EMI updates</p>
          <div className="newsletter-box">
            <input type="email" placeholder="Enter your email" />
            <button>Subscribe</button>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} EMIly. All rights reserved.</p>
        <div className="socials">
          <a
            href="https://www.linkedin.com/in/harshit-chaudhary-992971286/?originalSubdomain=in"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>

          <a
            href="https://twitter.com/hritikgulia"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter />
          </a>

          <a href="mailto:support@moneyscope.com">
            <FaEnvelope />
          </a>

          <a
            href="https://wa.me/7668622899"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;

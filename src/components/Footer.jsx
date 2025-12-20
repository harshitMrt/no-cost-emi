import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <h2>MoneyScope</h2>
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
        <p>© {new Date().getFullYear()} MoneyScope. All rights reserved.</p>
        <div className="socials">
          <span>🌐</span>
          <span>🐦</span>
          <span>📘</span>
          <span>📸</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;

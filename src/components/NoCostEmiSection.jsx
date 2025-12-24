import "../styles/NoCostEmiSection.css";
import phone from "../images/phone.jpeg";
import paper from "../images/paper.jpeg";
import house from "../images/house.jpeg";

const NoCostEmiSection = () => {
  return (
    <div id="what-is-nocost" className="emi-container">
      {/* WHAT IS NO-COST EMI */}
      <section className="emi-intro">
        <h1>What is No-Cost EMI?</h1>
        <p>
          No-cost EMI (Equated Monthly Installment) is a payment option that
          lets you buy products without paying any extra interest. The product
          cost is divided equally across your chosen tenure, making premium
          purchases affordable and budget-friendly.
        </p>

        <div className="emi-features">
          <div className="feature-card">
            <span className="icon">💳</span>
            <h3>Zero Interest</h3>
            <p>Pay only the product price, with no hidden charges</p>
          </div>

          <div className="feature-card">
            <span className="icon">⚡</span>
            <h3>Instant Approval</h3>
            <p>Quick verification and approval process</p>
          </div>

          <div className="feature-card">
            <span className="icon">🔒</span>
            <h3>Secure Process</h3>
            <p>Bank-grade security for all transactions</p>
          </div>
        </div>
      </section>

      {/* POPULAR CATEGORIES */}
      <section className="emi-categories">
        <h2>Popular Categories Available</h2>
        <p className="subtitle">
          Discover amazing deals across various product categories
        </p>

        <div className="category-grid">
          <div className="category-card">
            <img src={phone} alt="Smartphones" />

            <h3>Smartphones & Accessories</h3>
            <p>Phones, earbuds and tech accessories</p>
            <div className="tags">
              <span>Zero Interest</span>
              <span>Instant Approval</span>
            </div>
          </div>

          <div className="category-card">
            <img src={paper} alt="Electronics" />

            <h3>Electronics & Appliances</h3>
            <p>TVs, laptops, appliances, and gadgets</p>
            <div className="tags">
              <span>No Processing Fee</span>
              <span>Flexible Terms</span>
            </div>
          </div>

          <div className="category-card">
            <img src={house} alt="Furniture" />

            <h3>Furniture & Home Decor</h3>
            <p>furniture, decor items, and essentials</p>
            <div className="tags">
              <span>Easy Returns</span>
              <span>Quality Assured</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NoCostEmiSection;

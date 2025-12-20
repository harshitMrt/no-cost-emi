import "./NoCostEmiSection.css";

const NoCostEmiSection = () => {
  return (
    <div className="emi-container">
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
            <img
              src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9"
              alt="Smartphones"
            />

            <h3>Smartphones & Accessories</h3>
            <p>Phones, earbuds and tech accessories</p>
            <div className="tags">
              <span>Zero Interest</span>
              <span>Instant Approval</span>
            </div>
          </div>

          <div className="category-card">
            <img
              src="https://images.unsplash.com/photo-1581291518857-4e27b48ff24e"
              alt="Electronics"
            />

            <h3>Electronics & Appliances</h3>
            <p>TVs, laptops, appliances, and gadgets</p>
            <div className="tags">
              <span>No Processing Fee</span>
              <span>Flexible Terms</span>
            </div>
          </div>

          <div className="category-card">
            <img
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
              alt="Furniture"
            />

            <h3>Furniture & Home Decor</h3>
            <p>furniture, decor items, and essentials</p>
            <div className="tags">
              <span>Easy Returns</span>
              <span>Quality Assured</span>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="emi-steps">
        <h2>How Does It Work?</h2>

        <div className="steps-grid">
          <div className="step">
            <div className="step-circle">1</div>
            <h4>Choose Your Product</h4>
            <p>Select any eligible product and choose no-cost EMI</p>
          </div>

          <div className="step">
            <div className="step-circle">2</div>
            <h4>Select Tenure</h4>
            <p>Pick your preferred repayment period (3–24 months)</p>
          </div>

          <div className="step">
            <div className="step-circle">3</div>
            <h4>Instant Approval</h4>
            <p>Get instant approval with minimal documentation</p>
          </div>

          <div className="step">
            <div className="step-circle">4</div>
            <h4>Start Shopping</h4>
            <p>Receive your product and pay EMIs monthly</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NoCostEmiSection;

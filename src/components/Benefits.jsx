import "./Benefits.css";

export default function Benefits() {
  return (
    <section id="benefits" className="benefits-wrapper">
      <div className="benefits-container">
        {/* Header */}
        <header className="benefits-header">
          <h2>Why Choose No-Cost EMI?</h2>
          <p>
            No-Cost EMI helps you manage expenses smartly without increasing
            your financial burden.
          </p>
        </header>

        {/* Benefits Grid */}
        <div className="benefits-grid">
          <div className="benefit-card">
            <h3>💰 Zero Interest Burden</h3>
            <p>
              The interest charged by the bank is fully absorbed by the seller
              through an upfront discount. You pay only the product price.
            </p>
          </div>

          <div className="benefit-card">
            <h3>📊 Predictable Monthly Payments</h3>
            <p>
              Your EMI amount remains fixed throughout the tenure, making
              budgeting simple and stress-free.
            </p>
          </div>

          <div className="benefit-card">
            <h3>🛍 Buy Now, Pay Gradually</h3>
            <p>
              Purchase high-value products instantly and spread the cost over
              multiple months without delaying your purchase.
            </p>
          </div>

          <div className="benefit-card">
            <h3>🧾 Transparent Cost Breakdown</h3>
            <p>
              You clearly see processing fees, applicable GST, and final payable
              amounts upfront — no hidden surprises.
            </p>
          </div>

          <div className="benefit-card">
            <h3>🏦 Bank-Backed & Secure</h3>
            <p>
              No-Cost EMI is offered through regulated banks and financial
              institutions, ensuring safe and compliant transactions.
            </p>
          </div>

          <div className="benefit-card">
            <h3>🌍 Globally Trusted Payment Model</h3>
            <p>
              Widely used across e-commerce and retail platforms worldwide for
              electronics, appliances, education, and travel purchases.
            </p>
          </div>
        </div>

        {/* Footer Note */}
        <footer className="benefits-footer">
          <p>
            <strong>Note:</strong> Processing fees and applicable taxes may
            still apply based on bank and seller policies.
          </p>
        </footer>
      </div>
    </section>
  );
}

import React from "react";
import "../styles/ExampleNCE.css";

export default function Example() {
  return (
    <section id="how-it-works" className="example-wrapper">
      <div className="example-container">
        {/* HEADER */}
        <header className="example-header">
          <h2>How No-Cost EMI Actually Works</h2>
          <p>
            A transparent breakdown of interest, discounts, processing fees,
            GST, and what you really pay.
          </p>
        </header>

        {/* FLOW SECTION */}
        <div className="flow-grid">
          <div className="flow-card">
            <h3>🏦 Bank Charges Interest</h3>
            <p>
              The bank applies interest on the principal amount as with any
              regular EMI. This interest is real and calculated internally.
            </p>
          </div>

          <div className="flow-card">
            <h3>🏷 Seller Gives Discount</h3>
            <p>
              The seller provides an upfront discount equal to the total
              interest amount, cancelling out the interest charged by the bank.
            </p>
          </div>

          <div className="flow-card">
            <h3>💳 You Pay Only Product Price</h3>
            <p>
              Because interest and discount cancel each other, your EMI total
              equals the original product price.
            </p>
          </div>
        </div>

        {/* EXAMPLE */}
        <div className="example-box">
          <h3>📘 Real Purchase Example</h3>

          <div className="example-grid">
            <div>
              <p>Product Price</p>
              <strong>₹50,000</strong>
            </div>
            <div>
              <p>Tenure</p>
              <strong>12 Months</strong>
            </div>
            <div>
              <p>Bank Interest</p>
              <strong>13% (Seller-paid)</strong>
            </div>
            <div>
              <p>Monthly EMI</p>
              <strong>₹4,167</strong>
            </div>
          </div>

          <div className="emi-highlight">
            ₹50,000 ÷ 12 = ₹4,167 per month
            <span>No extra interest added</span>
          </div>
        </div>

        {/* CHARGES */}
        <div className="charges-section">
          <h3 className="heading-charges">⚠ Charges That Still Apply</h3>

          <div className="charges-grid">
            <div className="charge-card warning">
              <h4>Processing Fee</h4>
              <p>Bank service charge for EMI setup</p>
              <strong>₹500</strong>
            </div>

            <div className="charge-card warning">
              <h4>GST on Processing Fee</h4>
              <p>18% GST as per government rules</p>
              <strong>₹90</strong>
            </div>

            <div className="charge-card warning">
              <h4>GST on Interest</h4>
              <p>
                May be charged depending on bank and seller agreement. Often
                misunderstood as a “hidden charge”.
              </p>
            </div>
          </div>
        </div>

        {/* FOOT NOTE */}
        <footer className="example-footer">
          <p>
            <strong>Important:</strong> No-Cost EMI removes the interest burden
            but does not waive bank service fees or applicable taxes. Always
            review the final payable amount before confirming EMI.
          </p>
        </footer>
      </div>
    </section>
  );
}

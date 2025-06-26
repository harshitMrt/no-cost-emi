import React from "react";
import "./example.css";

export default function Example() {
  return (
    <div className="example-container">
      <h2>Example Calculation</h2>
      <p>
        Suppose you purchase a laptop worth ₹50,000 with a 12-month EMI and
        no-cost EMI offer.
      </p>
      <ul>
        <li>Cost of Asset: ₹50,000</li>
        <li>Tenure: 12 months</li>
        <li>Interest Rate: 13% (Covered by the seller)</li>
        <li>GST on Interest: 18%</li>
        <li>Processing Fee: ₹500 (if applicable)</li>
      </ul>
      <p>
        Your monthly EMI will be ₹4,167 (₹50,000 ÷ 12). The seller will bear the
        interest cost.
      </p>
      <p>
        You only pay the total asset cost without extra charges (except
        processing fee, interest and GST applied on them, if applicable).
      </p>
    </div>
  );
}

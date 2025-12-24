import React from "react";
import "./EMIComparison.css";

export default function EMIComparison({
  costOfAsset,
  updatedCostOfAsset,
  tenure,
  rate,
  processingFee,
  gst,
  interest,
  GSTInterest,
  GSTProcessingFee,
}) {
  const format = (num) =>
    new Intl.NumberFormat("en-IN", {
      maximumFractionDigits: 2,
    }).format(num || 0);

  const P = Number(costOfAsset || 0);
  const N = Number(tenure || 0);
  const annualRate = Number(rate || 0);

  // Monthly interest rate
  const R = annualRate / (12 * 100);

  // EMI calculation
  let emi = 0;

  if (P > 0 && R > 0 && N > 0) {
    emi = (P * R * Math.pow(1 + R, N)) / (Math.pow(1 + R, N) - 1);
  }

  // Total payable in normal EMI
  const normalEmiTotal = emi * N;

  const noCostTotal =
    // Number(costOfAsset || 0) +
    // Number(processingFee || 0) +
    // (Number(processingFee || 0) * Number(gst || 0)) / 100;
    parseFloat(updatedCostOfAsset) +
    parseFloat(interest) +
    parseFloat(GSTInterest) +
    (processingFee
      ? parseFloat(processingFee) + parseFloat(GSTProcessingFee)
      : 0);

  const savings = normalEmiTotal - noCostTotal;
  let amount = costOfAsset;
  const interestt = Number.isNaN(amount - updatedCostOfAsset)
    ? 0
    : (amount - updatedCostOfAsset).toFixed(2);

  return (
    <div className="comparison-wrapper">
      {/* Header */}
      <div className="comparison-header">
        <h2>EMI Comparison</h2>
      </div>

      {/* STACKED BLOCKS */}
      <div className="comparison-stack">
        {/* No Cost EMI */}
        <div className="comparison-card">
          <h3>🟢 No-Cost EMI</h3>
          <p>
            <strong>Cost of Asset:</strong> ₹{format(costOfAsset - interest)}
          </p>
          <p>
            <strong>Interest/No Cost Emi Discount</strong> ₹{format(interestt)}
          </p>
          <p>
            <strong>Processing Fee:</strong> ₹{format(processingFee)}
          </p>

          <p>
            <strong>GST on Fee:</strong> ₹{format((processingFee * gst) / 100)}
          </p>

          <p>
            <strong>GST on Interest:</strong> ₹{format((interest * gst) / 100)}
          </p>
          <p className="highlight">
            <strong>Total Payable:</strong> ₹{format(noCostTotal)}
          </p>
        </div>

        {/* Normal EMI */}
        <div className="comparison-card">
          <h3>🔵 Normal EMI</h3>
          <p>
            <strong>Cost of Asset:</strong> ₹{format(costOfAsset)}
          </p>
          <p>
            <strong>Tenure:</strong> {tenure || 0} months
          </p>
          <p>
            <strong>Interest Rate:</strong> {rate || 0} %
          </p>
          <p>
            <strong>Monthly EMI:</strong> ₹{format(emi)}
          </p>
          <p className="highlight">
            <strong>Total Payable:</strong> ₹{format(normalEmiTotal)}
          </p>
        </div>
      </div>

      {/* Savings */}
      <div className="savings-box">
        <span>
          💰 Save ₹{format(savings > 0 ? savings : 0)} with No-Cost EMI
        </span>
      </div>
    </div>
  );
}

import React from "react";
import "../styles/NoCostEMI.css";

export default function NoCostEMI({
  costOfAsset,
  setCostOfAsset,
  gst,
  setGST,
  tenure,
  setTenure,
  rate,
  setRate,
  processingFee,
  setProcessingFee,
  setUpdatedCostOfAsset,
  downPayment,
  setDownPayment,
}) {
  const calculateEMI = () => {
    if (!costOfAsset || !tenure || !rate) {
      alert("Please enter Cost of Asset, Tenure, and Rate of Interest");
      return;
    }

    if (tenure > 999) {
      alert("Tenure must not be greater than 999");
      return;
    }

    let amount = costOfAsset;

    if (downPayment > 0) {
      amount = costOfAsset - downPayment;
    }

    const monthlyRate = rate / (12 * 100);
    const emi = amount / tenure;

    const newUpdatedCost =
      (emi * (Math.pow(1 + monthlyRate, tenure) - 1)) /
      (monthlyRate * Math.pow(1 + monthlyRate, tenure));

    setUpdatedCostOfAsset(newUpdatedCost.toFixed(2));
  };

  return (
    <section id="calculator" className="calculator-section">
      <div className="InputFieldsDiv">
        <div>
          <label>Cost of Asset:</label>
          <input
            type="number"
            className="input"
            min={1}
            value={costOfAsset}
            onChange={(e) => setCostOfAsset(Number(e.target.value))}
          />
        </div>

        <div>
          <label>Down Payment:</label>
          <input
            type="number"
            className="input"
            min={0}
            value={downPayment}
            onChange={(e) => setDownPayment(Number(e.target.value))}
          />
        </div>

        <div>
          <label>GST (%):</label>
          <input
            type="number"
            className="input"
            min={0}
            value={gst}
            onChange={(e) => setGST(Number(e.target.value))}
          />
        </div>

        <div>
          <label>Tenure (Months):</label>
          <input
            type="number"
            className="input"
            min={1}
            max={999}
            value={tenure}
            onChange={(e) => setTenure(Number(e.target.value))}
          />
        </div>

        <div>
          <label>Rate of Interest (%):</label>
          <input
            type="number"
            className="input"
            min={0}
            value={rate}
            onChange={(e) => setRate(Number(e.target.value))}
          />
        </div>

        <div>
          <label>Processing Fee:</label>
          <input
            type="number"
            className="input"
            min={0}
            value={processingFee}
            onChange={(e) => setProcessingFee(Number(e.target.value))}
          />
        </div>

        <div className="button-container">
          <button onClick={calculateEMI}>Calculate EMI</button>
        </div>
      </div>
    </section>
  );
}

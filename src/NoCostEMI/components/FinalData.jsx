import React from "react";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import "../styles/FinalData.css";

export default function FinalData({
  costOfAsset,
  processingFee,
  updatedCostOfAsset,
  downPayment,
  tenure,
  rate,
  gst,
  emiTable,
}) {
  let amount = costOfAsset;

  if (downPayment > 0) {
    amount = costOfAsset - downPayment;
  }

  let interest = (amount - updatedCostOfAsset).toFixed(2);
  let GSTInterest = ((18 * interest) / 100).toFixed(2);

  // Only calculate GST on Processing Fee if it's provided
  let GSTProcessingFee = processingFee
    ? ((18 * processingFee) / 100).toFixed(2)
    : 0;

  // Calculate total amount dynamically
  let totalAmount =
    parseFloat(updatedCostOfAsset) +
    parseFloat(interest) +
    parseFloat(GSTInterest) +
    (processingFee
      ? parseFloat(processingFee) + parseFloat(GSTProcessingFee)
      : 0);

  const formatNumber = (value) =>
    new Intl.NumberFormat("en-IN", {
      minimumFractionDigits: 0,
      maximumFractionDigits: 2,
    }).format(Number(value) || 0);

  // Generate shareable link
  const generateShareableLink = () => {
    const params = new URLSearchParams({
      costOfAsset,
      downPayment,
      tenure,
      rate,
      gst,
      processingFee,
      updatedCostOfAsset,
    });
    const link = `${window.location.origin}${
      window.location.pathname
    }?${params.toString()}`;
    navigator.clipboard.writeText(link);
    alert("Shareable link copied to clipboard!");
  };

  // Generate WhatsApp summary
  const shareOnWhatsApp = () => {
    const summary = `EMI Report Summary:
Cost of Asset: ₹${formatNumber(costOfAsset)}
Down Payment: ₹${formatNumber(downPayment)}
Tenure: ${tenure} months
Interest Rate: ${rate}%
GST: ${gst}%
Processing Fee: ₹${formatNumber(processingFee)}
Total Amount: ₹${formatNumber(totalAmount.toFixed(2))}

Check out this EMI calculator: ${window.location.href}`;
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(summary)}`;
    window.open(whatsappUrl, "_blank");
  };

  // Generate PDF report
  const downloadPDFReport = () => {
    const doc = new jsPDF();

    // Add title
    doc.text("EMI Report Summary", 14, 10);

    // Summary data
    const summaryData = [
      ["Cost of Asset", `₹${formatNumber(costOfAsset)}`],
      ["Down Payment", `₹${formatNumber(downPayment)}`],
      ["Tenure", `${tenure} months`],
      ["Interest Rate", `${rate}%`],
      ["GST", `${gst}%`],
      ["Processing Fee", `₹${formatNumber(processingFee)}`],
      ["Total Amount", `₹${formatNumber(totalAmount.toFixed(2))}`],
    ];

    autoTable(doc, {
      startY: 20,
      head: [["Item", "Value"]],
      body: summaryData,
    });

    // Add EMI schedule if available
    if (emiTable && emiTable.length > 0) {
      doc.addPage();
      doc.text("EMI Schedule", 14, 10);

      const columns = [
        "Month",
        "Remaining Balance",
        "Principal Repaid",
        "Interest Paid",
        "GST on Interest",
        "GST + Processing Fee",
        "Total Monthly Payment",
      ];

      const rows = emiTable.map((row) => [
        row.month,
        `₹${formatNumber(row.remainingBalance)}`,
        `₹${formatNumber(row.principalRepaid)}`,
        `₹${formatNumber(row.interestPaid)}`,
        `₹${formatNumber(row.gstOnInterest)}`,
        `₹${formatNumber(row.gstProcessingFee)}`,
        `₹${formatNumber(row.totalMonthlyPayment)}`,
      ]);

      autoTable(doc, {
        startY: 20,
        head: [columns],
        body: rows,
      });
    }

    doc.save("EMI_Report.pdf");
  };

  return (
    <div className="EMITable">
      <h2>Final Expenses & Share Report</h2>
      <table border={1}>
        <thead>
          <tr>
            <th>No-Cost EMI Discount / Interest</th>
            <th>GST on Interest</th>
            {processingFee > 0 && <th>Processing Fee</th>}
            {processingFee > 0 && <th>GST on Processing Fee</th>}
            <th>Total Cost of Asset</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>₹ {formatNumber(interest)}</td>
            <td>₹ {formatNumber(GSTInterest)}</td>
            {processingFee > 0 && <td>₹ {formatNumber(processingFee)}</td>}
            {processingFee > 0 && <td>₹ {formatNumber(GSTProcessingFee)}</td>}
            <td>₹ {formatNumber(totalAmount.toFixed(2))}</td>
          </tr>
        </tbody>
      </table>
      <div className="share-buttons">
        <button onClick={generateShareableLink} className="share-btn">
          🔗 Copy Shareable Link
        </button>
        <button onClick={shareOnWhatsApp} className="share-btn whatsapp-btn">
          📱 Share on WhatsApp
        </button>
        <button onClick={downloadPDFReport} className="share-btn pdf-btn">
          📄 Download PDF Report
        </button>
      </div>
    </div>
  );
}

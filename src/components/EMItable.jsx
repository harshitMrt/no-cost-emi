import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import React, { useEffect } from "react";
import * as XLSX from "xlsx";
import { saveAs } from "file-saver";
import "./EMITable.css";

export default function EmiTable({
  downPayment,
  costOfAsset,
  updatedCostOfAsset,
  tenure,
  rate,
  gst,
  processingFee,
  emiTable,
  setEmiTable,
}) {
  const options = { maximumFractionDigits: 2 };
  // Intl.NumberFormat("en-US", options).format(balance);
  let amount = costOfAsset;

  if (downPayment > 0) {
    amount = costOfAsset - downPayment;
  }

  useEffect(() => {
    const parsedCostOfAsset = Number(amount) || 0;
    const parsedUpdatedCostOfAsset = Number(updatedCostOfAsset) || 0;
    const parsedTenure = Number(tenure) || 1;
    const parsedRate = Number(rate) || 0;
    const parsedGst = Number(gst) || 0;
    const parsedProcessingFee = Number(processingFee) || 0;

    if (parsedUpdatedCostOfAsset > 0 && parsedTenure > 0) {
      const monthlyRate = parsedRate / (12 * 100);
      let balance = parsedUpdatedCostOfAsset;

      let newEmiTable = [];

      for (let i = 0; i < parsedTenure; i++) {
        const interestPaid = balance * monthlyRate;
        const principalRepaid = parsedCostOfAsset / parsedTenure - interestPaid;
        const gstOnInterest = (interestPaid * parsedGst) / 100;
        const gstProcessingFee = i === 0 ? parsedProcessingFee * 1.18 : 0;

        const totalMonthlyPayment =
          principalRepaid + interestPaid + gstProcessingFee + gstOnInterest;

        newEmiTable.push({
          month: i + 1,
          remainingBalance: balance.toFixed(2),
          principalRepaid: principalRepaid.toFixed(2),
          interestPaid: interestPaid.toFixed(2),
          gstOnInterest: gstOnInterest.toFixed(2),
          gstProcessingFee: gstProcessingFee.toFixed(2),
          totalMonthlyPayment: totalMonthlyPayment.toFixed(2),
        });

        balance -= principalRepaid;
      }

      setEmiTable([...newEmiTable]);
    }
  }, [costOfAsset, updatedCostOfAsset, tenure, rate, gst, processingFee]);

  // 📌 Function to Download as Excel
  const downloadExcel = () => {
    const worksheet = XLSX.utils.json_to_sheet(emiTable);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "EMI Schedule");

    const excelBuffer = XLSX.write(workbook, {
      bookType: "xlsx",
      type: "array",
    });
    const data = new Blob([excelBuffer], {
      type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    });
    saveAs(data, "EMI_Schedule.xlsx");
  };

  // 📌 Function to Download as PDF
  const downloadPDF = () => {
    const doc = new jsPDF(); // Create a new jsPDF instance

    // Define table columns and rows
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
      row.remainingBalance,
      row.principalRepaid,
      row.interestPaid,
      row.gstOnInterest,
      row.gstProcessingFee,
      row.totalMonthlyPayment,
    ]);

    // Add title
    doc.text("EMI Schedule", 14, 10);

    // Add table to PDF
    autoTable(doc, {
      startY: 20,
      head: [columns],
      body: rows,
    });

    // Save the PDF
    doc.save("EMI_Schedule.pdf");
  };

  const formatNumber = (value) =>
    new Intl.NumberFormat("en-IN", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(Number(value) || 0);

  return (
    <div className="EMITable">
      <h2>EMI Schedule</h2>
      <table className="EmiTable" border="1">
        <thead>
          <tr>
            <th>Month</th>
            <th>Remaining Balance</th>
            <th>Principal Repaid</th>
            <th>Interest Paid</th>
            <th>GST on Interest</th>
            <th>GST + Processing Fee</th>
            <th>Total Monthly Payment</th>
          </tr>
        </thead>
        <tbody>
          {emiTable.map((row, index) => (
            <tr key={index}>
              <td>{row.month}</td>
              <td>₹ {formatNumber(row.remainingBalance)}</td>
              <td>₹ {formatNumber(row.principalRepaid)}</td>
              <td>₹ {formatNumber(row.interestPaid)}</td>
              <td>₹ {formatNumber(row.gstOnInterest)}</td>
              <td>₹ {formatNumber(row.gstProcessingFee)}</td>
              <td>₹ {formatNumber(row.totalMonthlyPayment)}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div class="center-container">
        <div class="button-group">
          <button onClick={downloadExcel} className="download-btn">
            📥 Download Excel
          </button>
          <button onClick={downloadPDF} className="download-btn pdf-btn">
            📥 Download PDF
          </button>
        </div>
      </div>
    </div>
  );
}

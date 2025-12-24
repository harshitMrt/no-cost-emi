// import "./FinalData.css";

// export default function FinalTable({
//   costOfAsset,
//   processingFee,
//   updatedCostOfAsset,
//   downPayment,
// }) {
//   let amount = costOfAsset;

//   if (downPayment > 0) {
//     amount = costOfAsset - downPayment;
//   }

//   let interest = (amount - updatedCostOfAsset).toFixed(2);
//   let GSTInterest = ((18 * interest) / 100).toFixed(2);

//   // Only calculate GST on Processing Fee if it's provided
//   let GSTProcessingFee = processingFee
//     ? ((18 * processingFee) / 100).toFixed(2)
//     : 0;

//   // Calculate total amount dynamically
//   let totalAmount =
//     parseFloat(updatedCostOfAsset) +
//     parseFloat(interest) +
//     parseFloat(GSTInterest) +
//     (processingFee
//       ? parseFloat(processingFee) + parseFloat(GSTProcessingFee)
//       : 0);

//   const formatNumber = (value) =>
//     new Intl.NumberFormat("en-IN", {
//       minimumFractionDigits: 0,
//       maximumFractionDigits: 2,
//     }).format(Number(value) || 0);

//   return (
//     <div className="EMITable">
//       <h2>Final Expenses</h2>
//       <table border={1}>
//         <thead>
//           <tr>
//             <th>No-Cost Emi Discount / Interest</th>
//             <th>GST on Interest</th>
//             {processingFee > 0 && <th>Processing Fee</th>}
//             {processingFee > 0 && <th>GST on Processing Fee</th>}
//             <th>Total Cost of Asset</th>
//           </tr>
//         </thead>
//         <tbody>
//           <tr>
//             <td>₹ {formatNumber(interest)}</td>
//             <td>₹ {formatNumber(GSTInterest)}</td>
//             {processingFee > 0 && <td>₹ {formatNumber(processingFee)}</td>}
//             {processingFee > 0 && <td>₹ {formatNumber(GSTProcessingFee)}</td>}
//             <td>₹ {formatNumber(totalAmount.toFixed(2))}</td>
//           </tr>
//         </tbody>
//       </table>
//     </div>
//   );
// }

import React, { useState } from "react";
import NoCostEMI from "./components/NoCostEMI";
import EmiTable from "./components/EMItable";
import FinalTable from "./components/FinalData";
import Description from "./components/description";
import Example from "./components/example";
import Comparison from "./components/nocostVcost";
import "./App.css";
import { useEffect } from "react";
import LandingPage from "./components/LandingPage";
import Header from "./components/Header";
import NoCostEmiSection from "./components/NoCostEmiSection";
import Footer from "./components/Footer";

function App() {
  const [costOfAsset, setCostOfAsset] = useState();
  const [gst, setGST] = useState(18);
  const [tenure, setTenure] = useState();
  const [rate, setRate] = useState();
  const [processingFee, setProcessingFee] = useState();
  const [updatedCostOfAsset, setUpdatedCostOfAsset] = useState();
  const [totalAmt, setTotalAmt] = useState();
  const [emiTable, setEmiTable] = useState([]);
  const [downPayment, setDownPayment] = useState();
  const [show, setShow] = useState(true);

  const [savings, setSavings] = useState(0);

  const isFullyPaid = downPayment && costOfAsset && downPayment >= costOfAsset;

  const calculateInterestBasedEMI = () => {
    if (!costOfAsset || !rate || !tenure) return;

    const principal = costOfAsset;
    const monthlyRate = rate / 12 / 100;

    const emi =
      (principal * monthlyRate * Math.pow(1 + monthlyRate, tenure)) /
      (Math.pow(1 + monthlyRate, tenure) - 1);

    const totalWithInterest = emi * tenure;

    const rounded = Math.round(totalWithInterest);
    console.log(rounded, emi, updatedCostOfAsset);

    const savings = (rounded - updatedCostOfAsset - downPayment).toFixed(2);
    setSavings(savings);
  };

  useEffect(() => {
    if (updatedCostOfAsset > 0) {
      calculateInterestBasedEMI();
    }
  }, [updatedCostOfAsset, costOfAsset, tenure, rate]);

  return (
    <div className="maindiv">
      <Header />
      <div>
        <LandingPage />
      </div>
      <NoCostEMI
        setCostOfAsset={setCostOfAsset}
        costOfAsset={costOfAsset}
        gst={gst}
        setGST={setGST}
        tenure={tenure}
        setTenure={setTenure}
        rate={rate}
        setRate={setRate}
        processingFee={processingFee}
        setProcessingFee={setProcessingFee}
        setUpdatedCostOfAsset={setUpdatedCostOfAsset}
        downPayment={downPayment}
        setDownPayment={setDownPayment}
      />

      {savings > 0 && (
        <div
          style={{
            backgroundColor: "#d4edda",
            padding: "12px",
            margin: "16px 0",
            borderRadius: "8px",
            color: "#155724",
            fontWeight: "bold",
          }}
        >
          🎉 You save ₹{savings} by choosing No-Cost EMI instead of
          Interest-Based EMI!
        </div>
      )}

      {isFullyPaid ? (
        <p style={{ color: "red", fontWeight: "bold" }}>
          You already paid the full cost of the asset as Down Payment. No EMI
          required.
        </p>
      ) : (
        show &&
        updatedCostOfAsset > 0 && (
          <>
            <Comparison />
            <FinalTable
              downPayment={downPayment}
              costOfAsset={costOfAsset}
              gst={gst}
              tenure={tenure}
              rate={rate}
              processingFee={processingFee}
              updatedCostOfAsset={updatedCostOfAsset}
              emiTable={emiTable}
            />
            <EmiTable
              downPayment={downPayment}
              costOfAsset={costOfAsset}
              updatedCostOfAsset={updatedCostOfAsset}
              tenure={tenure}
              rate={rate}
              gst={gst}
              totalAmt={totalAmt}
              setTotalAmt={setTotalAmt}
              emiTable={emiTable}
              processingFee={processingFee}
              setEmiTable={setEmiTable}
            />
          </>
        )
      )}

      <NoCostEmiSection />

      {/* {show && <Description />}
      {show && <Example />} */}
      <Footer />
    </div>
  );
}

export default App;

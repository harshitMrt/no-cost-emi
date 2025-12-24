import React, { useState } from "react";
import NoCostEMI from "./NoCostEMI/components/NoCostEMI";
import EmiTable from "./NoCostEMI/components/NoCostEmiTable";
// import FinalTable from "./components/FinalData";
import Example from "./NoCostEMI/components/ExampleNCE";
import Comparison from "./NoCostEMI/components/NoCostVsCost";
import "./App.css";
import { useEffect } from "react";
import LandingPage from "./NoCostEMI/components/LandingPage";
import Header from "./NoCostEMI/components/Header";
import NoCostEmiSection from "./NoCostEMI/components/NoCostEmiSection";
import Footer from "./NoCostEMI/components/Footer";
import EMIComparison from "./NoCostEMI/components/EMIComparison";
import Benefits from "./NoCostEMI/components/Benefits";
import HowItWorks from "./NoCostEMI/components/HowItWorks";

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
  const [loanAmount, setLoanAmount] = useState(0);
  const [emi, setEmi] = useState(0);

  const [savings, setSavings] = useState(0);

  const isFullyPaid = downPayment && costOfAsset && downPayment >= costOfAsset;

  let GSTProcessingFee = processingFee
    ? ((18 * processingFee) / 100).toFixed(2)
    : 0;

  let amount = costOfAsset;
  let interest = (amount - updatedCostOfAsset).toFixed(2);
  let GSTInterest = ((18 * interest) / 100).toFixed(2);

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

      <main>
        <LandingPage />
      </main>

      {/* 1️⃣ What is No-Cost EMI */}
      <NoCostEmiSection />

      {/* 2️⃣ Calculator */}
      <div className="top-section">
        <NoCostEMI
          costOfAsset={costOfAsset}
          setCostOfAsset={setCostOfAsset}
          downPayment={downPayment}
          setDownPayment={setDownPayment}
          gst={gst}
          setGST={setGST}
          tenure={tenure}
          setTenure={setTenure}
          rate={rate}
          setRate={setRate}
          processingFee={processingFee}
          setProcessingFee={setProcessingFee}
          updatedCostOfAsset={updatedCostOfAsset}
          setUpdatedCostOfAsset={setUpdatedCostOfAsset}
          isFullyPaid={isFullyPaid}
          setShow={setShow}
        />

        <EMIComparison
          costOfAsset={costOfAsset}
          updatedCostOfAsset={updatedCostOfAsset}
          tenure={tenure}
          rate={rate}
          processingFee={processingFee}
          gst={gst}
          interest={interest}
          GSTInterest={GSTInterest}
          GSTProcessingFee={GSTProcessingFee}
        />
      </div>

      {/* 3️⃣ Results */}
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

      {/* 4️⃣ How it works */}
      <Example />
      <HowItWorks />

      {/* 5️⃣ Benefits */}
      <Benefits />
      <Footer />
    </div>
  );
}

export default App;

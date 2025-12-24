import React from "react";
import calImg from "../images/cal 2.jpg";
import "../styles/LandingPage.css";

export default function LandingPage() {
  return (
    <div className="landing-page">
      <h4>NO COST EMI CALCULATOR</h4>
      <h1>
        Smart EMI Planning Starts Here
        <br />
        Plan Your Purchase with No-Cost EMI
      </h1>

      <div className="image-wrapper">
        <img src={calImg} alt="Calculator" />
      </div>
    </div>
  );
}

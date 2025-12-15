import React from "react";
import calImg from "../calculator_image.jpg";
import "./LandingPage.css";

export default function LandingPage() {
  return (
    <div className="landing-page">
      <h4>NO COST EMI CALCULATOR</h4>
      <h1>
        What does no-cost EMI mean ? <br />
        Know how to use it and calculate it.
      </h1>

      <div className="image-wrapper">
        <img src={calImg} alt="Calculator" />
      </div>
    </div>
  );
}

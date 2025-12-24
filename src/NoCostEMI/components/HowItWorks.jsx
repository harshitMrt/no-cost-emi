import "../styles/HowItWorks.css";

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="emi-steps">
      <h2>How Does No-Cost EMI Work?</h2>

      <div className="steps-grid">
        <div className="step">
          <div className="step-circle">1</div>
          <h4>Choose Your Product</h4>
          <p>
            Select any eligible product and opt for No-Cost EMI at checkout.
          </p>
        </div>

        <div className="step">
          <div className="step-circle">2</div>
          <h4>Select EMI Tenure</h4>
          <p>
            Choose a repayment period that suits you — usually between 3 to 24
            months.
          </p>
        </div>

        <div className="step">
          <div className="step-circle">3</div>
          <h4>Instant Approval</h4>
          <p>
            Your EMI request is approved instantly with minimal verification.
          </p>
        </div>

        <div className="step">
          <div className="step-circle">4</div>
          <h4>Pay Monthly EMIs</h4>
          <p>
            The product is delivered, and you pay equal EMIs every month without
            interest.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;

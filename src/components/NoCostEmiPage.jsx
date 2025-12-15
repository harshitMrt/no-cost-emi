import React from "react";
import "./NoCostEmiPage.css";
import image from "../pexels-karola-g-4968391.jpg";
import smartphone from "../smartphones.jpg";
import electronics from "../electronics .jpg";
import furniture from "../homedecor.jpg";

export default function NoCostEMIPages() {
  return (
    <div className="pages-container">
      {/* PAGE 1 */}
      <div className="page hero-page">
        <div className="hero-content">
          <h1>
            Unleash the power of
            <br />
            no-cost EMI.
          </h1>

          <p>
            The no-cost EMI option is undoubtedly a popular choice among
            consumers as it eliminates the need for any additional payment. The
            concept of no-cost EMI (Equated Monthly Instalment) has become a
            groundbreaker in the Indian market.
          </p>

          <p>
            No-cost EMI offers a solution for consumers who want to spread their
            payments over a fixed period without incurring additional interest
            charges. Let us begin by understanding what is a no-cost EMI.
          </p>
        </div>

        <div className="image-wrapper">
          <img src={image} alt="image"></img>
        </div>
      </div>

      <div className="page info-page">
        <h2>What is no-cost EMI?</h2>
        <p>
          No-cost EMI is a financing option offered by retailers and financial
          institutions. It lets consumers purchase goods and services while
          paying in monthly instalments, without any additional interest
          charges. In this payment method, the total cost of the product is
          divided into equated monthly instalments (EMIs) over a predetermined
          period. It typically ranges from three to twenty-four months. Unlike
          traditional EMIs, which charge interest on the principal amount,
          no-cost EMIs eliminate this additional expense. This speciality makes
          them an attractive option for budget-conscious consumers.
        </p>

        <h2>How does no-cost EMI work?</h2>
        <p>
          Once you have gained an understanding of what no-cost EMI means, it is
          important to understand how it works. Retailers or financial
          institutions bear the expense of interest on behalf of customers to
          implement no-cost EMI plans. The interest amount is discounted from
          the product price, which results in equal monthly instalments without
          any added interest burden. This arrangement encourages higher consumer
          spending and stimulates economic growth by lowering the cost of
          high-value goods, making them more accessible to a larger consumer
          base.
        </p>
      </div>

      {/* PAGE 3 */}
      <div className="page benefits-page">
        <h2>Top 3 reasons why no-cost EMI is a game changer.</h2>

        <div className="card-grid">
          <div className="card">
            <h3>Affordability</h3>
            <p>
              No-cost EMI enables consumers to purchase goods and services
              without straining their daily finances.
            </p>
          </div>

          <div className="card">
            <h3>Accessibility</h3>
            <p>
              It provides an alternative financing option for individuals
              without access to traditional credit facilities.
            </p>
          </div>

          <div className="card">
            <h3>Convenience</h3>
            <p>
              With flexible repayment terms and minimal documentation, consumers
              enjoy a hassle-free purchasing experience.
            </p>
          </div>
        </div>

        <h2 className="products-title">
          Popular products available on no-cost EMI.
        </h2>

        <div className="product-grid">
          <div className="product-card">
            <img src={smartphone} alt="Smartphones" />
            <span>Smartphones</span>
          </div>

          <div className="product-card">
            <img src={electronics} alt="Electronics" />
            <span>Electronics & Appliances</span>
          </div>

          <div className="product-card">
            <img src={furniture} alt="Furniture" />
            <span>Furniture & Home Decor</span>
          </div>
        </div>
      </div>
    </div>
  );
}

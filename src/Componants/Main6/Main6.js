import React from "react";
import "./Main6.css";

export function Main6() {
  return (
    <div className="Main6Container">
      <div className="headerContainer">
        <h2 className="Main6Header">Pricing</h2>
        <h4 className="Main6Subheader">
          Most calendars are designed for teams. Slate is designed for
          freelancers
        </h4>
      </div>
      <div className="cardsContainer">
        <div className="card1Container">
          <h3 className="c1Heading">FREE</h3>
          <h5 className="c1Subheading">Organize across all apps by hand</h5>
          <div className="c1">
            <h1 className="c1Price">0</h1>
            <div className="c1PriceContainer">
              <h3>$</h3>
              <h5>Per Month</h5>
            </div>
          </div>
          <div>
            <p className="feature1">Pricing Feature</p>
            <p className="feature1">Pricing Feature</p>
            <p className="feature1">Pricing Feature</p>
            <p className="feature1">Pricing Feature</p>
            <p className="featureLast">Pricing Feature</p>
          </div>
          <button>Order Now</button>
        </div>
        <div className="card2Container">
          <h3 className="c2Heading">STANDARD</h3>
          <h5 className="c2Subheading">Organize across all apps by hand</h5>
          <div className="c2">
            <h1 className="c2Price">10</h1>
            <div className="c1PriceContainer">
              <h3>$</h3>
              <h5>Per Month</h5>
            </div>
          </div>
          <div>
            <p className="feature2">Pricing Feature</p>
            <p className="feature2">Pricing Feature</p>
            <p className="feature2">Pricing Feature</p>
            <p className="feature2">Pricing Feature</p>
            <p className="featureLast">Pricing Feature</p>
          </div>
          <button>Order Now</button>
        </div>
        <div className="card1Container">
          <h3 className="c1Heading">Business</h3>
          <h5 className="c1Subheading">Organize across all apps by hand</h5>
          <div className="c1">
            <h1 className="c1Price">99</h1>
            <div className="c1PriceContainer">
              <h3>$</h3>
              <h5>Per Month</h5>
            </div>
          </div>
          <div>
            <p className="feature1">Pricing Feature</p>
            <p className="feature1">Pricing Feature</p>
            <p className="feature1">Pricing Feature</p>
            <p className="feature1">Pricing Feature</p>
            <p className="featureLast">Pricing Feature</p>
          </div>
          <button>Order Now</button>
        </div>
      </div>
    </div>
  );
}

import React from "react";
import "./Main.css";

export function Main() {
  return (
    <div>
      <h2 className="featureHead">Features</h2>
      <h4 className="featureSub">
        Most calendars are designed for teams. Slate is designed for freelancers
      </h4>
      <div className="featureRow">
        <div className="Main1Feature1">
          <img src="Images/vector2.png" alt="vector" />
          <h3>OpenType features Variable fonts</h3>
          <p>
            Slate helps you see how many more days you need to work to reach
            your financial goal.
          </p>
        </div>
        <div className="Main1Feature2">
          <img src="Images/vector1.png" alt="vector" />
          <h3>Design with real data</h3>
          <p>
            Slate helps you see how many more days you need to work to reach
            your financial goal.
          </p>
        </div>
        <div className="Main1Feature3">
          <img src="Images/vector2.png" alt="vector" />
          <h3>Fastest way to take action</h3>
          <p>
            Slate helps you see how many more days you need to work to reach
            your financial goal.
          </p>
        </div>
      </div>
    </div>
  );
}

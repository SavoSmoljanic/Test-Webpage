import React from "react";
import "./Main3.css";

export function Main3() {
  return (
    <div className="Main3Content">
      <div className="Main3ImgContainer">
        <img src="./Images/Main3img.png" alt="email logo" />
      </div>
      <div className="Main3FormContainer">
        <h3>At your fingertips</h3>
        <h2>Lightning fast prototyping </h2>
        <h3>Subscribe to our Newsletter</h3>
        <p>Available exclusivery on Figmaland</p>
        <div className="inputButton">
          <input
            className="emailInput"
            type="email"
            placeholder="Your Email"
          ></input>
          <button>Subscribe</button>
        </div>
      </div>
    </div>
  );
}

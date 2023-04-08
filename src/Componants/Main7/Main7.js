import React from "react";
import "./Main7.css";

export function Main7() {
  return (
    <div>
      <h2 className="Main7Header">Contact Us</h2>
      <h4 className="Main7Subheader">
        Most calendars are designed for teams. Slate is designed for freelancers
      </h4>
      <div className="Main7ContentContainer">
        <div className="contactCard">
          <h3 className="cardHeader">Contact Us</h3>
          <input className="nameInput" placeholder="Your Name" type="text" />
          <input
            className="emailInputMain7"
            placeholder="Your Email"
            type="email"
          />
          <input
            className="messageInput"
            placeholder="Your Message"
            type="text"
          />
          <div className="Main7ButtonContainer">
            <button className="Main7CardButton">Send</button>
          </div>
        </div>
        <div>
          <div className="contactInfoContainer">
            <div>
              <img src="./Images/location.png" alt="location vector" />
              <h5>
                6386 Spring St undefined Anchorage, Georgia 12473 United States
              </h5>
            </div>
            <div>
              <img src="./Images/miniemail.png" alt="phone" />
              <h5>(843) 555-0130</h5>
            </div>
            <div>
              <img src="./Images/miniphone.png" alt="email" />
              <h5>willie.jennings@example.com</h5>
            </div>
          </div>
          <div className="mapImg">
            <img src="./Images/mapScreen.png" alt="map" />
          </div>
          <div className="companyLogosContainer">
            <img src="./Images/twittervector.png" alt="twitter" />
            <img src="./Images/facebookvector.png" alt="facebook" />
            <img src="./Images/linkedinvector.png" alt="linkedin" />
          </div>
        </div>
      </div>
    </div>
  );
}

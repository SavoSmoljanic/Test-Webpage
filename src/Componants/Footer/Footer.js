import React from "react";
import "./Footer.css";

export function Footer() {
  return (
    <div className="footerContainer">
      <div className="rowsContainer">
        <div>
          <h3>Pages</h3>
          <p>Home</p>
          <p>Product</p>
          <p>Pricing</p>
          <p>About</p>
          <p>Contact</p>
        </div>
        <div>
          <h3>Tomothy </h3>
          <p>Eleanor Edwards</p>
          <p>Ted Robertson</p>
          <p>Annette Russell</p>
          <p>Jennie Mckinney</p>
          <p>Gloria Richards</p>
        </div>
        <div>
          <h3>Jane Black</h3>
          <p>Gloria Richards</p>
          <p>Product</p>
          <p>Colleen Russell</p>
          <p>Marvin Hawkins</p>
          <p>Bruce Simmmons</p>
        </div>
      </div>
      <div className="footerInfoContainer">
        <div className="footerLocationInfo">
          <img src="./Images/footlocation.png" alt="location" />
          <p>7480 Mockingbird Hill undefined </p>
        </div>
        <div className="footerPhoneInfo">
          <img src="./images/footphone.png" alt="phone" />
          <p>(239) 555-0108</p>
        </div>
        <div className="footerCompanyLogos">
          <img src="./Images/foottwitter.png" alt="twitter" />
          <img src="./Images/footfacebook.png" alt="facebook" />
          <img src="./Images/footlinkedin.png" alt="linkedin" />
        </div>
      </div>
    </div>
  );
}

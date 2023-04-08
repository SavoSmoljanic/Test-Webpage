import React from "react";
import "./Main5.css";

export function Main5() {
  return (
    <div className="Main5Container">
      <h2 className="testimonialsTitle">Testimonials</h2>
      <div className="ibmImage">
        <img src="./Images/IBM.png" alt="IBM logo" />
      </div>
      <h4 className="testimonialsSubtitle">
        Most calendars are designed for teams. Slate is designed for freelancers
        who want a simple way to plan their schedule.
      </h4>
      <div className="profilecontainer">
        <img src="./Images/profile.png" alt="profile" />
        <div className="profileTitles">
          <h5 className="profileTitle">Organize across</h5>
          <a href="/">Ui designer</a>
        </div>
      </div>
      <button className="buttonLargeText">More Testimonials</button>
    </div>
  );
}

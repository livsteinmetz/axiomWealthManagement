import React from "react";
import "./Landing.scss";

export default function Landing() {
  return (
    <div id="Landing">
      <h1>
        It's not just business, <br />
        it's personal
      </h1>

      <div id="LandingInfo">
        <img src="/5star.png" alt="5 Star Advisor" />
        <div id="Name">
          <h4>Seth McHenry, CRPC</h4>
          <p>LPL Financial Advisor</p>
          <p>LPL Registered Principal</p>
        </div>
      </div>

      <div id="LandingButtons">
        <button>About Axiom</button>
        <button>Schedule a Meeting</button>
      </div>
    </div>
  );
}

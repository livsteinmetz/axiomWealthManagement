import React from "react";
import "./Footer.scss";

export default function Footer() {
  return (
    <div id="Footer">
      <p>
        © 2020 Axiom Wealth Management. All rights reserved.{" "}
        <a href="/">Terms of use.</a>
      </p>
      <a
        href="https://brokercheck.finra.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div id="BrokerCheck">
          <img src="/brokercheck.png" alt="Broker Check" />
        </div>
      </a>
    </div>
  );
}

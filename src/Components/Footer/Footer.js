import React from "react";
import "./Footer.scss";

export default function Footer() {
  return (
    <div id="Footer">
      {window.innerWidth > 600 && (
        <p>
          © 2020 Axiom Wealth Management. {window.innerWidth < 600 && <br />}
          All rights reserved. <a href="/legal.html">Terms of use.</a>
        </p>
      )}
      <a
        href="https://brokercheck.finra.org/individual/summary/1956203"
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

import React from "react";
import "./Media.scss";

export default function Media() {
  return (
    <div id="Media">
      <div id="Twitter">
        <a
          className="twitter-timeline"
          href="https://twitter.com/AxiomWealthMgmt?ref_src=twsrc%5Etfw"
        >
          Tweets by AxiomWealthMgmt
        </a>
      </div>
      <div id="MediaContent">
        <h3>Stay Up to Date</h3>
        <p>
          Follow @AxiomWealthMgmt on Twitter to learn more about the insights,
          advice, and data that keeps our investing practice up to date and
          built to last.
        </p>
        <a
          href="https://twitter.com/AxiomWealthMgmt"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button>Follow Axiom on Twitter</button>
        </a>
      </div>
    </div>
  );
}

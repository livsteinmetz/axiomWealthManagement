import React from "react";
import "./Header.scss";

export default function Header() {
  return (
    <div id="Header">
      <img src="/logo_white.png" alt="Axiom Wealth Management" />
      <div id="HeaderLinks">
        <div>About</div>
        <div>Services</div>
        <div>Media</div>
        <div>Contact</div>
      </div>
    </div>
  );
}

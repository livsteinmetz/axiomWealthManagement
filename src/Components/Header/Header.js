import React, { useState } from "react";
import "./Header.scss";

export default function Header({ scrollTo }) {
  const [expanded, setExpanded] = useState(false);
  const toggleExpanded = () => setExpanded(!expanded);

  return (
    <div id="Header" className={expanded ? "expanded" : ""}>
      <img
        src="/logo_white.png"
        alt="Axiom Wealth Management"
        onClick={() => scrollTo("Landing")}
      />
      <div id="HeaderLinks" onClick={toggleExpanded}>
        {window.innerWidth < 600 && (
          <div onClick={() => scrollTo("Home")}>Home</div>
        )}
        <div onClick={() => scrollTo("About")}>About</div>
        <div onClick={() => scrollTo("Services")}>Services</div>
        <div onClick={() => scrollTo("Media")}>Media</div>
        <div onClick={() => scrollTo("Contact")}>Contact</div>
      </div>
      {window.innerWidth < 600 && (
        <>
          <img id="Menu" src="/menu.png" alt="Menu" onClick={toggleExpanded} />

          <p>
            © 2020 Axiom Wealth Management.
            {window.innerWidth < 600 && <br />}
            All rights reserved. <a href="/legal.html">Terms of use.</a>
          </p>
        </>
      )}
    </div>
  );
}

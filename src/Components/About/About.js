import React from "react";
import "./About.scss";

export default function About() {
  return (
    <div id="About">
      <div id="AboutAxiom">
        <img src="/icon_white.png" alt="Pillars" />
        <div id="Definition">
          <h3>Axiom (n.)</h3>
          <h4>an established rule, principle or self-evident truth</h4>
          <h4>a principle or foundation upon which all else is built</h4>
          <p>
            Axiom is an independent financial planning and investment management
            practice built on the established pillars of integrity, value and
            education. Here, the priorities are simple:
          </p>
          <ul>
            <li>Identify, clarify, and accomplish your financial goals</li>
            <li>Simplify the complexities of a dynamic financial climate</li>
            <li>
              Develop plans to provide you with agency and confidence in your
              financial future
            </li>
          </ul>
          <p>
            With an average client relationship exceeding 20 years – and two or
            more generations of the families we serve representing more than
            half our client base – clearly, clients value the work and advice
            provided to help make their financial goals clear and attainable,
            their families financially secure and their dreams become a reality.
          </p>
          <p>
            <strong>
              Axiom Wealth Management and Seth McHenry have been recognized as a
              Philadelphia Magazine Five-Star Wealth Manager every year the
              award has been granted.
            </strong>
          </p>
        </div>
      </div>
      <div id="AboutSethMcHenry">
        <img src="/seth.png" alt="Seth McHenry" />
        <div>
          <h3>Seth McHenry, CRPC</h3>
          <h4>LPL Financial Advisor</h4>
          <h4>LPL Registered Principal</h4>
          <p>
            Seth, a 30-year veteran of the financial services industry, and his
            wife Nancy live in Yardley, PA where they raised their three
            children Scott, Shannon and Ryan. Fourth-generation Bucks County
            residents, they celebrated their 33rd anniversary in June, 2020.
          </p>
          <p>
            As a Life Member of the National Eagle Scout Association, Seth has
            served in many Scout leadership roles, and currently serves his
            church as the Treasurer, member of the Board of Trustees and Chair
            of the Finance Committee. In his spare time, Seth can be found
            reading, swimming, running with his dogs, and enjoying weekends at
            the beach in Barnegat Light, NJ.
          </p>
          <div>
            <strong>
              Bucknell University, B.A., History and Classics, 1987
              <br />
              Merrill Lynch School of Financial Management, CFM, 1992
              <br />
              The College for Financial Planning, CRPC, 2005
              <br />
              Merrill Lynch University, CSNA, 2006
              <br />
              Securities Licenses: Series 7, 24, 63 and 65
            </strong>
          </div>
        </div>
      </div>
    </div>
  );
}

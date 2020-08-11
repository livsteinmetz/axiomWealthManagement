import React, { useState, useEffect } from "react";
import "./Services.scss";

export default function Services() {
  const [showModal, setModal] = useState(false);

  const Modal = () => {
    useEffect(() => {
      document.body.style.overflow = showModal ? "hidden" : "auto";
    });

    const handleClick = (e) => {
      e.target.id === "Modal" && close(e);
    };
    const close = (e) => {
      e.stopPropagation();
      setModal(false);
    };
    return showModal ? (
      <div id="Modal" onClick={handleClick}>
        <div id="ServicesModal">
          <img src="/close.png" alt="Close" id="CloseModal" onClick={close} />
          <h3>Comprehensive Financial Services</h3>
          <p>
            There are many different specific services we provide. We rarely
            utilize all these skills and service for every client but will use a
            selection of them to help you as needed.
          </p>
          <h4>Personal Financial Planning</h4>
          <ul>
            <li>
              Determining clients’ financial status by analyzing financial
              statements, special needs, investments, taxation, employee
              benefits etc.
            </li>
            <li>
              Importance of saving (dollar cost average, compound interest)
            </li>
            <li>Education on mortgage options and financing analysis</li>
            <li>Major purchase goal analysis and funding options</li>
            <li>
              Advice in change of lifestyle or major life event (Marriage,
              divorce, children, job, education)
            </li>
            <li>Stock option planning</li>
            <li>
              Discussion of various mortgage options/real estate purchases
            </li>
            <li>
              Net present value calculations for comparison purposes including
              time value analysis (NPV, FVA, PVA, PVAD)
            </li>
            <li>
              Provide financial guidance/planning for special circumstances
              including death, disability, job loss, monetary windfall, divorce,
              etc.
            </li>
          </ul>
          <h4>Investment Planning/Asset Allocation</h4>
          <ul>
            <li>Asset allocation analysis</li>
            <li>
              Risk and reward (risk tolerance and risk capacity analysis)  
            </li>
            <li>Diversification analysis  </li>
            <li>Analysis and research on individual securities  </li>
            <li>Investment policy statement development</li>
          </ul>
          <h4>Cash Flow/Budgeting</h4>
          <ul>
            <li>Creation of personal and/or business budgets</li>
            <li>
              Provide guidance and analysis on cash flow management, budgeting,
              and
            </li>
            emergency <li>fund planning</li>
            <li>
              Explain various components of cash flow (income, taxes, expenses)
            </li>
            <li>Savings strategies</li>
            <li>Debt management strategies</li>
            <li>Personal financing strategies</li>
            <li>
              Analysis of personal statement of financial position and statement
              of cash
            </li>
            flows
          </ul>
          <h4>Education Planning</h4>
          <ul>
            <li>Discussion of qualified tuition/college saving plans</li>
            <li>College costs and inflation analysis</li>
            <li>Individual needs analysis</li>
            <li>Development of funding strategies</li>
            <li>
              Provide direction on asset transfer and individual ownership of
              assets
            </li>
            <li>Financial aid strategies</li>
            <li>
              Gift tax limits and trust usage strategies for education funding{" "}
            </li>
          </ul>
          <h4>Retirement Planning</h4>
          <ul>
            <li>Retirement needs analysis</li>
            <li>Retirement plans analysis and education</li>
            <li>Savings planning to help clients meet their goal</li>
            <li>Contribution limits planning</li>
            <li>Employer plans vs. self-directed plans analysis</li>
            <li>
              Coordinate retirement plan service providers, product sponsors,
              and vendors
            </li>
            <li>RMD or 72t calculations and analysis</li>
            <li>Beneficiary designation planning</li>
            <li>Social Security and Medicare health care cost planning</li>
          </ul>
          <h4>Estate Planning</h4>
          <ul>
            <li>General estate planning and gifting strategies </li>
            <li>
              General estate tax planning and education of trusts and estates
            </li>
            <li>
              General trust planning and education – types, features, and
              taxation 
            </li>
            <li>
              Explanation of estate planning structures/documents – wills, POA,
              Trusts, etc. 
            </li>
            <li>
              Explanation of types/treatment of trust income – accounting,
              taxable, distributable
            </li>
            <li>Sources of estate liquidity planning</li>
            <li>Ownership titles and titling of assets planning</li>
            <li>
              Discussing impact of account and trust beneficiary designations
            </li>
          </ul>
          <h4>Tax Planning</h4>
          <ul>
            <li>Identifying AMT issues</li>
            <li>General discussion of deductions and income recognition</li>
            <li>Answer questions about investment tax issues</li>
            <li>Discuss statement of personal financial position</li>
            <li>Analyze personal cash flow statement</li>
            <li>
              Review employee stock options basics, ISOs, NSOs, planning
              strategies, etc.
            </li>
              
            <li>
              Tax implications of various stock plans – Restricted, phantom,
              SARs, ESPP
            </li>
            <li>Non-qualified deferred compensation programs</li>
            <li>Income taxation of life insurance and annuity products</li>
            <li>Investment cost basis research and reporting</li>
          </ul>
          <h4>Insurance Needs Planning</h4>
          <ul>
            <li>
              Insurance gap/needs analysis for life, disability, or long-term
              care
            </li>
            <li>Health care, including Medicare, expense planning</li>
            <li>Analysis and planning for estate liquidity</li>
            <li>
              Planning for policy ownership issues and beneficiary designations
            </li>
            <li>
              Asset allocation, diversification, and securities research for
              variable life and/or annuities (provided advisor is not rep/agent
              of record)
            </li>
            <li>
              Education on types of insurance, i.e. term vs. permanent, nursing
              home vs.home care, indemnity vs. reimbursement
            </li>
          </ul>
          <h4>Business Planning</h4>
          <ul>
            <li>Cash flow analysis</li>
            <li>Retirement planning</li>
            <li>Succession planning</li>
            <li>Cash management</li>
            <li>Employee benefits planning</li>
            <li>Financing strategies</li>
            <li>Business use of insurance analysis</li>
            <li>Intra-family and other business transfer techniques</li>
          </ul>
        </div>
      </div>
    ) : null;
  };

  return (
    <div id="Services">
      <Modal />
      <div id="ServicesAxiom">
        <img src="/icon_white.png" alt="Pillars" />
        <div id="Definition">
          <h3>Our Services</h3>
          <p>
            New clients come to Axiom for guidance on all of life's financial
            challenges. With 30 years experience in family financial planning,
            Axiom is well versed in handling all investment planning and
            financial management needs: general saving and investing, changes in
            employment, college, divorce, retirement, inheritance, estates, and
            anything else that life brings your way.
          </p>
          <p>
            Read more <strong onClick={() => setModal(true)}>here</strong> for
            an overwhelmingly comprehensive list of complete services &
            offerings.
          </p>
          <h3>Our Guiding Principles</h3>
          <ul>
            <li>
              The best business model is one based on relationships, not
              transactions.
            </li>
            <li>
              Listening to and communicating clearly, openly, and honestly with
              clients is of the utmost importance.
            </li>
            <li>
              ​Peaks and valleys don't count. An advisor is not a genius when
              markets rise and is not incompetent when they fall.
            </li>
            <li>
              The relentless long-term upward trajectory of the global equities
              markets is an economic axiom; but so is economic cyclicality. The
              event that some call a "bear market" is in fact a regular,
              cyclical "big sale" that is consistent with the nature of global
              markets.
            </li>
            <li>
              Trying to "beat the market" with market timing or frequent trading
              is a waste of time and effort.
            </li>
            <li>
              Making tactical investment decisions based on emotions or outside
              the context of a strategic investment plan is damaging to the
              creation of generational wealth.
            </li>
          </ul>
          <p>
            Regardless of the challenges you face, the core processes Axiom uses
            will help you achieve financial confidence: defining your values,
            needs, goals and dreams, evaluating what tools you have in place,
            developing the tools you need to develop, and building a plan
            resilient to the challenges of risk and time. We will always work
            together to achieve your goals, because at Axiom, it's not just
            business. It's personal.
          </p>
        </div>
      </div>
    </div>
  );
}

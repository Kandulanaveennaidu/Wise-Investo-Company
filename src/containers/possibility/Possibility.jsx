import React from "react";
import possibilityImage from "../../assets/possibility.png";
import "./possibility.css";

const Possibility = () => (
  <div className="gpt3__possibility section__padding" id="possibility">
    <div className="gpt3__possibility-image">
      <img src={possibilityImage} alt="possibility" />
    </div>
    <div className="gpt3__possibility-content">
      <h4>Request Early Access to Get Started</h4>
      <h1 className="gradient__text">
        The possibilities are <br /> beyond your imagination Mutual funds
      </h1>
      <p>
        At Wise Investo Investments, we believe that the possibilities for
        growth and success with mutual funds are truly limitless. With a diverse
        range of investment options and the potential for strong returns, mutual
        funds offer investors the opportunity to achieve their financial goals
        and build wealth for the future.
      </p>
      <h4>Request Early Access to Get Started</h4>
    </div>
  </div>
);

export default Possibility;

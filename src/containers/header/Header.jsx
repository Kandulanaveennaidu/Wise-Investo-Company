import React from "react";
import people from "../../assets/people.png";
import ai from "../../assets/1 (5).jpg";
import "./header.css";

const Header = () => (
  <div className="gpt3__header section__padding" id="home">
    <div className="gpt3__header-content">
      <h1 className="gradient__text">
        Let&apos;s Build Something amazing with Life Insurnce Policy's{" "}
      </h1>
      <p>
        Life insurance is a financial product that provides a payout to your
        beneficiaries in the event of your unexpected death. It is designed to
        provide financial security to your loved ones in your absence, and can
        help cover expenses such as funeral costs, outstanding debts, and
        ongoing living expenses.
      </p>

      <div className="gpt3__header-content__input">
        <input type="email" placeholder="Your Email Address" />
        <button type="button">Get Started</button>
      </div>

      <div className="gpt3__header-content__people">
        <img src={people} />
        <p>1,600 people requested access a visit in last 24 hours</p>
      </div>
    </div>

    <div className="gpt3__header-image">
      <img src={ai} />
    </div>
  </div>
);

export default Header;

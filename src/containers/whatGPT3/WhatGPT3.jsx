import React from "react";
import Feature from "../../components/feature/Feature";
import "./whatGPT3.css";

const WhatGPT3 = () => (
  <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
    <div className="gpt3__whatgpt3-feature">
      <Feature
        title="Life insurance"
        text="There are several types of life insurance policies available, including term life insurance, whole life insurance, and universal life insurance. Term life insurance is the most affordable option, and provides coverage for a specific period of time, such as 10, 20, or 30 years. Whole life insurance and universal life insurance are permanent policies that provide coverage for your entire lifetime, and also have a cash value component that can accumulate over time."
      />
    </div>
    <div className="gpt3__whatgpt3-heading">
      <h1 className="gradient__text">
        The possibilities are beyond your imagination
      </h1>
      <p>Explore the Library</p>
    </div>
    <div className="gpt3__whatgpt3-container">
      <Feature
        title="Health"
        text="Protect your health and financial well-being with a health insurance policy from ABC Insurance. Our policies are designed to provide you with comprehensive coverage for a range of medical expenses, from routine doctor's visits to emergency hospitalizations. With a variety of plans to choose from, you can find coverage that fits your needs and budget. Our policies also offer access to a network of healthcare providers, so you can choose the doctors and hospitals that are right for you. Don't let medical bills derail your financial goals - get the coverage you need to stay healthy and financially secure with a health insurance policy from Wise Investo Insurance"
      />
      <Feature
        title="life Terms Invest"
        text="A life term insurance policy from Wise Investo Insurance provides you with peace of mind knowing that your loved ones will be financially protected in the event of your unexpected passing. With a life term policy, you choose the length of coverage that best suits your needs - whether it's 10, 20, or 30 years - and pay a fixed premium throughout that time. If something were to happen to you during the coverage period, your beneficiaries would receive a tax-free death benefit that can be used to pay for expenses like funeral costs, outstanding debts, and living expenses. Protect your family's financial future with a life term insurance policy from Wise Investo Insurance."
      />
      <Feature
        title="Education"
        text="At Wise Investo Insurance, we believe in helping you secure not just your family's financial future, but also their educational future. That's why our life insurance policies offer an optional education benefit rider that can provide funds for your children's education in the event of your unexpected passing. With this rider, your beneficiaries can receive a lump sum payment that can be used for tuition, books, room and board, or other education-related expenses. This benefit can help ensure that your children have the resources they need to pursue their educational goals, even if you're no longer there to provide for them. Invest in your family's future with a life insurance policy from Wise Investo Insurance."
      />
    </div>
  </div>
);

export default WhatGPT3;

import React from "react";
import Feature from "../../components/feature/Feature";
import "./features.css";

const featuresData = [
  {
    title: "Improving end distrusts instantly",
    text: "Wise Investo Insurance, we understand that life insurance can be a sensitive and complex topic. We're committed to providing our clients with the knowledge and support they need to make informed decisions about their coverage. Our policies are transparent and easy to understand, with no hidden fees or surprises.",
  },
  {
    title: "Become the tended active",
    text: "We also know that trust is essential when it comes to life insurance. That's why we work hard to build long-lasting relationships with our clients, providing personalized service and support every step of the way. Our team of experienced professionals is dedicated to helping you find the right coverage for your unique needs and budget.",
  },
  {
    title: "Message or am nothing",
    text: "With Wise Investo Insurance, you can have peace of mind knowing that your loved ones will be taken care of if something unexpected happens. We believe in being there for our clients when they need us most, and we'll always be just a phone call away. Contact us today to learn more about how we can help protect your family's future.",
  },
  {
    title: "Health Insurance county",
    text: "Your health is your most valuable asset, and at Wise Investo Insurance, we're committed to helping you protect it. Our life insurance policies provide you and your loved ones with peace of mind knowing that you have coverage in case the unexpected happens.",
  },
];

const Features = () => (
  <div className="gpt3__features section__padding" id="features">
    <div className="gpt3__features-heading">
      <h1 className="gradient__text">
        The Future is Now and You Just Need to Realize It. Step into Future
        Today. & Make it Happen.
      </h1>
      <p>Request Early Access to Get Started</p>
    </div>
    <div className="gpt3__features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default Features;

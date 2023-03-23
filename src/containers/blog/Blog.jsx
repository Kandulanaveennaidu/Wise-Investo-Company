import React from "react";
import Article from "../../components/article/Article";
import { blog01, blog02, blog03, blog04, blog05 } from "./imports";
import "./blog.css";

const Blog = () => (
  <div className="gpt3__blog section__padding" id="blog">
    <div className="gpt3__blog-heading">
      <h1 className="gradient__text">
        A lot is happening, <br /> We are Mutual fund's about it.
      </h1>
    </div>
    <div className="gpt3__blog-container">
      <div className="gpt3__blog-container_groupA">
        <Article
          imgUrl={blog01}
          date="Sep 26, 2021"
          text="Are you ready to take your finances to the next level? Mutual funds offer endless possibilities for growth and success. With our expertly-managed portfolio and powerful online investment tools, you can unlock your financial potential and build the future you've always dreamed of. Contact us today to start exploring the possibilities with mutual funds."
        />
      </div>
      <div className="gpt3__blog-container_groupB">
        <Article
          imgUrl={blog02}
          date="Sep 26, 2021"
          text="Looking to save money and achieve your financial goals? Mutual funds can help. At Wise Investments, we offer a range of investment options designed to help you grow your wealth over time."
        />
        <Article
          imgUrl={blog03}
          date="Sep 26, 2021"
          text="Who says you can't save money and love your life? With mutual funds from Wise Investo Investments, you can do both"
        />
        <Article
          imgUrl={blog04}
          date="Sep 26, 2021"
          text="At Wise Investo Investments, we believe that every parent wants to give their children the best possible start in life."
        />
        <Article
          imgUrl={blog05}
          date="Sep 26, 2021"
          text="At Wise Investo Investments, we believe that your financial future is worth investing in. "
        />
      </div>
    </div>
  </div>
);

export default Blog;

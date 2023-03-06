import React, { useState } from "react";

import "./portfolio.css";

const Portfolio = () => {
  const [tab, setTab] = useState(0);

  return (
    <div className="section__right_content_description_portfolio">
      <div className="section__right_content_description_portfolio_header">
        <a
          style={{ color: tab === 0 ? "rgb(250, 191, 48)" : "#000" }}
          className="section__right_content_description_portfolio_header_tag"
          onClick={() => setTab(0)}
        >
          REACT
        </a>
        <a
          style={{ color: tab === 1 ? "rgb(250, 191, 48)" : "#000" }}
          className="section__right_content_description_portfolio_header_tag"
          onClick={() => setTab(1)}
        >
          JAVASCRIPT
        </a>
        <a
          style={{ color: tab === 2 ? "rgb(250, 191, 48)" : "#000" }}
          className="section__right_content_description_portfolio_header_tag"
          onClick={() => setTab(2)}
        >
          HTML + CSS
        </a>
      </div>
      <div className="section__right_content_description_portfolio_details">
        <div className="section__right_content_description_portfolio_details_box">
          <img
            className="section__right_content_description_portfolio_details_box_photo"
            src="/src/assets/html_css_1.png"
            alt="project-image"
          />
          <div class="section__right_content_description_portfolio_details_box_overlay"></div>
          <div className="section__right_content_description_portfolio_details_box_description">
            <h3>Hair Styling</h3>
            <div className="section__right_content_description_portfolio_details_box_description_divider"></div>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
          </div>
        </div>
        <div className="section__right_content_description_portfolio_details_box">
          <img
            className="section__right_content_description_portfolio_details_box_photo"
            src="/src/assets/html_css_1.png"
            alt="project-image"
          />
          <div class="section__right_content_description_portfolio_details_box_overlay"></div>
          <div className="section__right_content_description_portfolio_details_box_description">
            <h3>Hair Styling</h3>
            <div className="section__right_content_description_portfolio_details_box_description_divider"></div>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
          </div>
        </div>
        <div className="section__right_content_description_portfolio_details_box">
          <img
            className="section__right_content_description_portfolio_details_box_photo"
            src="/src/assets/html_css_1.png"
            alt="project-image"
          />
          <div class="section__right_content_description_portfolio_details_box_overlay"></div>
          <div className="section__right_content_description_portfolio_details_box_description">
            <h3>Hair Styling</h3>
            <div className="section__right_content_description_portfolio_details_box_description_divider"></div>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;

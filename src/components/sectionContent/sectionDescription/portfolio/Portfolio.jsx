import React, { useState } from "react";

import { portfolioData } from "../../../../utils/data";
import "./portfolio.css";

const allTabs = new Set(portfolioData.map((item) => item.category));

const Portfolio = () => {
  const [tab, setTab] = useState(1);

  return (
    <div className="section__right_content_description_portfolio">
      <div className="section__right_content_description_portfolio_header">
        {Array.from(allTabs).map((item, index) => (
          <a
            key={index}
            style={{ color: tab === index ? "rgb(250, 191, 48)" : "#000" }}
            className="section__right_content_description_portfolio_header_tag"
            onClick={() => setTab(index)}
          >
            {item}
          </a>
        ))}
      </div>
      <div className="section__right_content_description_portfolio_details">
        {portfolioData.map(
          (item) =>
            Array.from(allTabs)[tab] === item.category && (
              <a
                href={item.url}
                target="_blank"
                key={item.id}
                className="section__right_content_description_portfolio_details_box"
              >
                <img
                  className="section__right_content_description_portfolio_details_box_photo"
                  src={item.img}
                  alt={item.title}
                />
                <div className="section__right_content_description_portfolio_details_box_overlay"></div>
                <div className="section__right_content_description_portfolio_details_box_description">
                  <h3>{item.title}</h3>
                  <div className="section__right_content_description_portfolio_details_box_description_divider"></div>
                  <p>{item.description}</p>
                </div>
              </a>
            )
        )}
      </div>
    </div>
  );
};

export default Portfolio;

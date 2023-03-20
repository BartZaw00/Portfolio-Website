import React, { useState } from "react";
import { VscGithub } from "react-icons/vsc";

import { portfolioData } from "../../../../utils/data";
import "./portfolio.css";

const allTabs = new Set(portfolioData.map((item) => item.category));

const Portfolio = () => {
  const [tab, setTab] = useState(0);

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
              <div
                key={item.id}
                className="section__right_content_description_portfolio_details_box"
              >
                <a href={item.url} target="_blank">
                  <img
                    className="section__right_content_description_portfolio_details_box_photo"
                    src={item.img}
                    alt={item.title}
                  />
                  <div className="section__right_content_description_portfolio_details_box_overlay"></div>
                  <div className="section__right_content_description_portfolio_details_box_description">
                    <h3>{item.title}</h3>
                    <div className="section__right_content_description_portfolio_details_box_description_divider"></div>
                    <div className="section__right_content_description_portfolio_details_box_description_technologies">
                      {item.technologies.map((technology, index) => {
                        let colorBg;
                        switch (technology) {
                          case "REACT":
                            colorBg = "#61DBFB";
                            break;
                          case "JAVASCRIPT":
                            colorBg = "#EBA834";
                            break;
                          case "HTML":
                            colorBg = "#E34C26";
                            break;
                          case "CSS":
                            colorBg = "#264DE4";
                            break;
                          case "SCSS":
                            colorBg = "#CC6699";
                            break;
                          case "REST API":
                            colorBg = "#222222";
                            break;
                          case "TAILWIND":
                            colorBg = "#38BDF8";
                            break;
                          case ".NET":
                            colorBg = "#512BD4";
                            break;
                          case "SQL":
                            colorBg = "#20BF55";
                            break;
                          default:
                            colorBg = "#000";
                        }

                        return (
                          <span
                            key={index}
                            className="section__right_content_description_portfolio_details_box_description_technologies_technology"
                            style={{ backgroundColor: colorBg }}
                          >
                            {technology}
                          </span>
                        );
                      })}
                    </div>
                  </div>
                </a>
                <a
                  href={item.github_url}
                  target="_blank"
                  className="section__right_content_description_portfolio_details_box_github"
                >
                  <VscGithub />
                </a>
              </div>
            )
        )}
      </div>
    </div>
  );
};

export default Portfolio;

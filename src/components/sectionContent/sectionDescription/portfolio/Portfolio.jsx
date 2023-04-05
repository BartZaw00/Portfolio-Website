import React, { useEffect, useState } from "react";
import { VscGithub } from "react-icons/vsc";

import { portfolioData } from "../../../../utils/data";
import "./portfolio.css";
import Tooltip from "../../../tooltip/Tooltip";

const allTabs = new Set(portfolioData.map((item) => item.category));

const Portfolio = () => {
  const [tab, setTab] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [activeTooltipContent, setActiveTooltipContent] = useState("");
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setPosition({
      x: mousePosition.x + 10,
      y: mousePosition.y - 150,
    });
  }, [mousePosition]);

  useEffect(() => {
    let timeoutId;
    if (isVisible) {
      timeoutId = setTimeout(() => setIsVisible(false), 3000);
    }
    return () => clearTimeout(timeoutId);
  }, [isVisible, activeTooltipContent]);

  const handleMouseEnter = (e, description) => {
    setPosition({ x: e.clientX + 10, y: e.clientY + 10 });
    setIsVisible(true);
    setActiveTooltipContent(description);
  };

  const handleMouseLeave = () => {
    setIsVisible(false);
    setActiveTooltipContent("");
  };

  const handleMouseMove = (e) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  return (
    <div className="c-portfolio" onMouseMove={handleMouseMove}>
      <div className="c-portfolio__header">
        {Array.from(allTabs).map((item, index) => (
          <a
            key={index}
            style={{ color: tab === index ? "rgb(250, 191, 48)" : "#000" }}
            className="c-portfolio__tag"
            onClick={() => setTab(index)}
          >
            {item}
          </a>
        ))}
      </div>
      <div className="c-portfolio__details">
        {portfolioData.map(
          (item) =>
            Array.from(allTabs)[tab] === item.category && (
              <React.Fragment key={item.id}>
                <div
                  className="c-portfolio__box"
                  onMouseEnter={(event) =>
                    handleMouseEnter(event, item.description)
                  }
                  onMouseLeave={handleMouseLeave}
                >
                  <a href={item.url} target="_blank">
                    <img
                      className="c-portfolio__box-photo"
                      src={item.img}
                      alt={item.title}
                    />
                    <div className="c-portfolio__overlay"></div>
                    <div className="c-portfolio__box-description">
                      <h3 className="c-portfolio__box-title">{item.title}</h3>
                      <div className="c-portfolio__box-divider"></div>
                      <div className="c-portfolio__box-technologies">
                        {item.technologies.map((technology) => {
                          let colorBg;
                          switch (technology.name) {
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
                              key={technology.id}
                              className="c-portfolio__box-technology"
                              style={{ backgroundColor: colorBg }}
                            >
                              {technology.name}
                            </span>
                          );
                        })}
                      </div>
                    </div>
                  </a>
                  <a
                    href={item.github_url}
                    target="_blank"
                    className="c-portfolio__box-github"
                  >
                    <VscGithub />
                  </a>
                </div>
                {isVisible && (
                  <Tooltip content={activeTooltipContent} position={position} />
                )}
              </React.Fragment>
            )
        )}
      </div>
    </div>
  );
};

export default Portfolio;

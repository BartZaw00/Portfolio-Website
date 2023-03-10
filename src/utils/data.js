import html_css_1 from "../assets/html_css_1.png";
import html_css_2 from "../assets/html_css_2.png";
import html_css_3 from "../assets/html_css_3.png";
import js_1 from "../assets/js_1.png";
import js_2 from "../assets/js_2.png";
import js_3 from "../assets/js_3.png";
import react_1 from "../assets/react_1.png";
import html_logo from "../assets/html_logo.svg";
import css_logo from "../assets/css_logo.svg";
import js_logo from "../assets/js_logo.svg";
import scss_logo from "../assets/scss_logo.svg";
import react_logo from "../assets/react_logo.svg";
import tailwind_logo from "../assets/tailwind_logo.svg";
import figma_logo from "../assets/figma_logo.svg";
import git_logo from "../assets/git_logo.svg";
import english_logo from "../assets/english_logo.svg";
import sql_logo from "../assets/sql_logo.svg";
import wordpress_logo from "../assets/wordpress_logo.svg"
import cplusplus_logo from "../assets/cplusplus_logo.svg"

export const categories = [
  { id: 0, name: "HOME", icon: "" },
  { id: 1, name: "ABOUT ME", icon: "" },
  { id: 2, name: "RESUME", icon: "" },
  { id: 3, name: "PORTFOLIO", icon: "" },
  { id: 4, name: "CONTACT", icon: "" },
];

export const skillsData = [
  {
    id: 1,
    category: "Skills",
    details: [
      { id: 1, skill: "HTML", img: html_logo },
      { id: 2, skill: "CSS", img: css_logo },
      { id: 3, skill: "SCSS", img: scss_logo },
      { id: 4, skill: "JavaScript", img: js_logo },
      { id: 5, skill: "React ", img: react_logo },
      { id: 6, skill: "Tailwind ", img: tailwind_logo },
      { id: 7, skill: "Figma", img: figma_logo },
      { id: 8, skill: "GIT", img: git_logo },
    ],
  },
  {
    id: 2,
    category: "Other Skills",
    details: [
      { id: 1, skill: "English (B2/C1)", img: english_logo },
      { id: 2, skill: "SQL", img: sql_logo },
      { id: 3, skill: "WordPress", img: wordpress_logo },
      { id: 4, skill: "C++", img: cplusplus_logo },
    ],
  },
];

export const resumeData = [
  {
    id: 1,
    title: "EDUCATION",
    details: [
      {
        id: 1,
        time: "October 2019 - now",
        position: "Applied Computer Science",
        organization: "Lodz University of Technology",
      },
    ],
  },
  {
    id: 2,
    title: "EXPERIENCE",
    details: [
      {
        id: 1,
        time: "August 2021 - October 2022",
        position: "Sales and Customer Service Consultant",
        organization: "Tutore",
        skills: ["High sales results", "Developing soft skills"],
      },
      {
        id: 2,
        time: "January 2019 - August 2021",
        position: "Wordpress Developer",
        organization: "freelancing",
        skills: ["Web design in WordPress and WooCommerce"],
      },
    ],
  },
  {
    id: 3,
    title: "VOLUNTEERING",
    details: [
      {
        id: 1,
        time: "September 2021 - June 2022",
        position: "Academy Scout",
        organization: "Widzew Lodz",
        skills: [
          "Working in a group",
          "Searching for football talents in my area",
          "Preparation of match reports",
        ],
      },
    ],
  },
];

export const portfolioData = [
  {
    id: 1,
    category: "REACT",
    img: react_1,
    title: "Portfolio Website",
    description: "A portfolio website containing my current projects",
    technologies: ["REACT", "JAVASCRIPT", "HTML", "CSS"],
    url: "https://bzawadka-portfolio.netlify.app",
    github_url: "https://github.com/BartZaw00/Portfolio-Website",
  },
  {
    id: 2,
    category: "JAVASCRIPT",
    img: js_1,
    title: "Covid in USA",
    description:
      "Data visualization about COVID-19 cases and deaths in USA depending on chosen date.",
    technologies: ["JAVASCRIPT", "HTML", "CSS"],
    url: "https://covid19-in-usa.netlify.app",
    github_url: "https://github.com/BartZaw00/Covid-In-Usa",
  },
  {
    id: 3,
    category: "HTML + CSS",
    img: html_css_1,
    title: "AI Areas Section",
    description: "A section of a page with 4 boxes containing AI areas",
    technologies: ["HTML", "SCSS"],
    url: "https://ai-areas-section.netlify.app/",
    github_url: "https://github.com/BartZaw00/ai-areas-section",
  },
  {
    id: 4,
    category: "JAVASCRIPT",
    img: js_2,
    title: "Quiz App",
    description: "A quiz containing 10 questions about football knowledge",
    technologies: ["JAVASCRIPT", "HTML", "CSS"],
    url: "https://quiz-app-football.netlify.app/",
    github_url: "https://github.com/BartZaw00/JS-Projects/tree/main/quiz-app",
  },
  {
    id: 5,
    category: "JAVASCRIPT",
    img: js_3,
    title: "Calculator App",
    description: "A calculator that allows to do several math operations",
    technologies: ["JAVASCRIPT", "HTML", "CSS"],
    url: "https://calculator-app-bartzaw00.netlify.app",
    github_url: "https://github.com/BartZaw00/JS-Projects/tree/main/calculator",
  },
  {
    id: 6,
    category: "HTML + CSS",
    img: html_css_2,
    title: "Three Benefits Section",
    description: "A section of a page with 3 boxes containing benefits",
    technologies: ["HTML", "SCSS"],
    url: "https://three-benefits-section.netlify.app",
    github_url: "https://github.com/BartZaw00/Three-Benefits-Section",
  },
  {
    id: 7,
    category: "HTML + CSS",
    img: html_css_3,
    title: "Order Summary Section",
    description: "A section of an order summary page",
    technologies: ["HTML", "SCSS"],
    url: "https://order-summary-section.netlify.app",
    github_url: "https://github.com/BartZaw00/Order-Summary",
  },
];

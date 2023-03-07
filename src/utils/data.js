export const categories = [
  { id: 0, name: "HOME", icon: "" },
  { id: 1, name: "ABOUT ME", icon: "" },
  { id: 2, name: "RESUME", icon: "" },
  { id: 3, name: "PORTFOLIO", icon: "" },
  { id: 4, name: "CONTACT", icon: "" },
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
  },
  {
    id: 2,
    category: "JAVASCRIPT",
    img: "/src/assets/js_1.png",
    title: "Covid in USA",
    description:
      "Data visualization about COVID-19 cases and deaths in USA depending on chosen date.",
    url: "https://covid19-in-usa.netlify.app",
    github_url: "https://github.com/BartZaw00/Covid-In-Usa",
  },
  {
    id: 3,
    category: "HTML + CSS",
    img: "/src/assets/html_css_1.png",
    title: "AI Areas Section",
    description: "A section of a page with 4 boxes containing AI areas",
    url: "https://ai-areas-section.netlify.app/",
    github_url: "https://github.com/BartZaw00/ai-areas-section",
  },
  {
    id: 4,
    category: "JAVASCRIPT",
    img: "/src/assets/js_2.png",
    title: "Quiz App",
    description: "A quiz containing 10 questions about football knowledge",
    url: "https://quiz-app-football.netlify.app/",
    github_url: "https://github.com/BartZaw00/JS-Projects/tree/main/quiz-app",
  },
  {
    id: 5,
    category: "JAVASCRIPT",
    img: "/src/assets/js_3.png",
    title: "Calculator App",
    description: "A calculator that allows to do several math operations",
    url: "https://calculator-app-bartzaw00.netlify.app",
    github_url: "https://github.com/BartZaw00/JS-Projects/tree/main/calculator",
  },
];

import codder from "../../assest/codder.svg";
export const homeObjOne = {
  primary: true,
  padding: true,
  topLine: "Hello I am,",
  headline: "Codder Rayhan",
  description: "MERN Stack Developer",
  buttonLabel: "Get Resume",
  imgStart: false,
  img: codder,
  alt: "Credit Card",
  start: false,
  subtitle: true,
  headlineText: true,
};

export const homeObjTwo = {
  primary: true,
  lightBg: false,
  topLine: "",
  headline: "About Me",
  description:
    "Hello! I'm Codder Rayhan, a passionate Front-end developer. I develop web applications, I also have experience working with Reactjs and Node js. Able to do any web and programming related task by handling difficulties smoothly in any given time. Have a reasonable skill on Front-End and Back-End development",
  buttonLabel: "See Resume",
  buttonLabel2: "My Skills",
  imgStart: true,
  img: require("../../assest/profile (3).jpg"),
  alt: "Credit Card",
  start: true,
  subtitle: false,
};

// ========= Skills Data ===========
export const SkillData = [
  {
    id: 1,
    skill: "Html/Css",
    done: `${85}%`,
  },
  { id: 2, skill: "Responsive Design", done: `${90}%` },
  { id: 3, skill: "Javascript", done: `${75}%` },
  { id: 4, skill: "React Js", done: `${90}%` },
  { id: 5, skill: "MongoDB", done: `${60}%` },
  { id: 6, skill: "Node Js", done: `${65}%` },
  { id: 7, skill: "Express Js", done: `${70}%` },
];

// Portfolio
export const portfolioData = [
  {
    id: 1,
    liveLink: "https://blog24.vercel.app/",
    code: "https://github.com/Rayhan-abdullha/blog24-FullStack-Client",
    title: "MERN Stack Blog-24",
    img: require("../../assest/blog.png"),
  },
  {
    id: 2,
    liveLink: "https://determined-cray-3ea7bb.netlify.app/",
    code: "https://github.com/Rayhan-abdullha/addmin-panel",
    title: "Admin Panel",
    img: require("../../assest/admin.png"),
  },
  {
    id: 3,
    liveLink: "https://quirky-goldstine-b529cd.netlify.app/",
    code: "https://github.com/Rayhan-abdullha/creative-agency-bd",
    title: "creative agency",
    img: require("../../assest/creative.png"),
  },
  {
    id: 4,
    liveLink: "https://reviewsapp2.netlify.app/",
    code: "https://github.com/Rayhan-abdullha/Feedback-App-2022",
    title: "Feedback App",
    img: require("../../assest/feedback.png"),
  },
  
  {
    id: 5,
    liveLink: "https://add-calender.vercel.app/",
    code: "https://github.com/Rayhan-abdullha/calender-app",
    title: "Add Calender",
    img: require("../../assest/calender.png"),
  },
  {
    id: 6,
    liveLink: "https://stupefied-wozniak-46f7a0.netlify.app/",
    code: "https://github.com/Rayhan-abdullha/dream-11",
    title: "Dream 11",
    img: require("../../assest/portfolio.png"),
  },
  {
    id: 7,
    liveLink: "https://easybankbd.netlify.app/",
    code: "https://github.com/Rayhan-abdullha/bank-bd",
    title: "Easy Bank",
    img: require("../../assest/bank.png"),
  },
  {
    id: 8,
    liveLink: "https://weather-api-lime-rho.vercel.app/",
    code: "https://github.com/Rayhan-abdullha/Weather-API",
    title: "Weather API",
    img: require("../../assest/weather.png"),
  },
  {
    id: 9,
    liveLink: "https://single-portfolio1.vercel.app/",
    code: "https://github.com/Rayhan-abdullha/SinglePortfolio1",
    title: "Portfolio",
    img: require("../../assest/portfolio2.png"),
  },
  {
    id: 10,
    liveLink: "https://copa-america-official.vercel.app/",
    code: "https://github.com/Rayhan-abdullha/Copa-america-official",
    title: "Compa america official",
    img: require("../../assest/banner.png"),
  },
  
];

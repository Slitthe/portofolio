import projectThumbnail from "../assets/project_thumbnail_2.png";
import halartProjectThumbnail from "../assets/halart.png";
import red2ImgProjectThumbnail from "../assets/red2img.png";
import fotovoltaiceProjectThumbnail from "../assets/fotovoltaice.png";
import ticTacToeProjectThumbnail from "../assets/tictac.png";

const projects = [
  {
    image: halartProjectThumbnail,
    title: {
      href: "https://halart.fun/front-page/",
      name: "HalArt",
    },
    sourceHref: "https://github.com/Slitthe/halart",
    description:
      "Fully features Wordpress website, built as a custom theme. Built for a small theater group (mock data is used for the demo website). Responsible for all parts of the website (design, hosting, development, SEO).",
    skills: ["JavaScript", "CSS/SCSS", "HTML", "Wordpress", "PHP", "jQuery"],
  },
  {
    image: red2ImgProjectThumbnail,
    title: {
      href: "https://slitthe.github.io/red2img/",
      name: "Red2Img",
    },
    sourceHref: "https://github.com/Slitthe/red2img",
    description:
      "Reddit image gallery viewer with the ability to customize your own subreddits feeds",
    skills: ["HTML", "CSS", "JavaScript", "jQuery", "APIs"],
  },
  {
    image: fotovoltaiceProjectThumbnail,
    title: {
      href: "https://fotovoltaice.energobit.com/",
      name: "Fotovoltaice",
    },
    sourceHref: "",
    description:
      "Landing website build to present the solar panel offerings for a big player in Romania's energy sector.",
    skills: ["Wordpress", "Elementor", "HTML/CSS"],
  },
  {
    image: ticTacToeProjectThumbnail,
    title: {
      href: "https://slitthe.github.io/freecodecamp-front-end/06-advanced-front-end-projects/tic-tac-toe/index.html/",
      name: "Tic Tac Toe",
    },
    sourceHref:
      "https://github.com/Slitthe/freecodecamp-front-end/tree/master/06-advanced-front-end-projects/tic-tac-toe",
    description:
      "The classic Tic Tac Toe, with a bit of a twist. Contains a min-max algorithm which gives the computer the ability to play against a player locally (and also never lose). Fully built with vanilla CSS/HTML/JS",
    skills: ["HTML", "CSS", "JavaScript"],
  },
];

/*
 *
 *
 * */

const titles = [
  "Front-end engineer",
  "React specialist",
  "Node.js hobbyist",
  "JavaScript generalist",
  "Full-stack tinkerer",
  "TypeScript Tactician",
  "CSS Connoisseur",
];

const experienceItems = [
  {
    title: "Front End Developer",
    content: `Worked on a web-based platform used internally by the employees of one of the biggest online and offline retailers of tech goods in Romania, which is designed to help people compare loans offered by different credit institutions (basically a credit broker). The app included a strong dose of multi-step forms, validations, role-based renderings, email/sms confirmations. Beside implementing features, and fixing bugs, was also involved in discussion with stakeholders in order to implement the right bussiness logic`,
    skills: ["React", "Redux", "Tailwind", "Git/GitLab", "HTML", "CSS"],
    sideInfoItems: ["2022 - 2023", "Axsys", "Romania (Remote)"],
  },
  {
    title: "Front-End Developer",
    content:
      "Worked on a web-based data-migration platform, used by key players in the automotive and pharma industry (such as Volkswagen). The notable features of this app was it's dashboard section, in which I had a role in making it more interactive and responsive, and displaying the imported/exported migration data in tables, which at times also contains editable elements, and a such was responsible for improving and implementing these features in a performant and scalable way.",
    skills: [
      "JavaScript",
      "TypeScript",
      "React",
      "Material UI",
      "HTML",
      "CSS",
      "Redux",
      "Git",
    ],
    sideInfoItems: ["2020 - 2022", "FME", "Romania (Remote)"],
  },
  {
    title: "Front-end developer",
    content: `Part of a team responsible for creating of new interactive, dynamic, and customizable charts for a key player in the connected planning services (best analogy would be a supercharged excel). Our team collaborated closely with the client teams, code quality and rigorous testing was of a high priority because of the size of the project`,
    skills: [
      "JavaScript",
      "React",
      "TypeScript",
      "Jest",
      "Puppeteer",
      "Highcharts",
      "HTML",
      "CSS",
      "Git",
    ],
    sideInfoItems: ["2019 - 2020", "Zenitech", "Cluj (Hybrid)"],
  },
  {
    title: "Junior Full Stack Developer",
    content: `In this role I was exposed to a huge variety of technologies, projects, working styles, collaboration. From being a part of a grenfield project, to creating detailed prototypes and mockups, to the maintanance of existing projects. In addition to the tehnical side, I was also invovled in the internship process (creating tests, mentoring, holding technical presentations .etc)`,
    skills: [
      "C#",
      ".NET/.NET Core",
      "SQL",
      "JavaScript",
      "React",
      "CSS",
      "HTML",
      "jQuery",
      "SCSS",
      "Git",
    ],
    sideInfoItems: ["2018 - 2019", "Wirtek", "Cluj"],
  },
];

const archiveItems = [
  {
    year: 2018,
    projectName: "Currency Converter",
    codeUrl: "https://github.com/Slitthe/WinFormsCurrencyConvert",
    skills: ["C#", ".NET Core", "WinForms"],
    description: "Windows WinForms currency convertor using the fixer.io API",
  },
  {
    year: 2023,
    projectName: "Personal Portfolio (this)",
    codeUrl: "https://github.com/Slitthe/portofolio",
    skills: ["React", "SCSS", "React Springs (animations)"],
  },
  {
    year: 2023,
    projectName: "Scrimba's Advanced React Course",
    deployedUrl: "https://slitthe.github.io/scrimba-advanced-react/",
    codeUrl: "https://github.com/Slitthe/scrimba-advanced-react",
    skills: ["React", "SCSS", "Storybooks"],

    description:
      "A collection of small reusable UI elements as part of the challenge for the scrimba.com's Advanced React course",
  },
  {
    year: 2022,
    projectName: "Battleships",
    deployedUrl: "https://slitthe.github.io/battleships/",
    codeUrl: "https://github.com/Slitthe/battleships",
    skills: ["React"],

    description: "Battleships game, built as part of a take home assignment",
  },
  {
    year: 2022,
    projectName: "Chat Client",
    deployedUrl: "https://slitthe.github.io/web-chat-client/",
    codeUrl: "https://github.com/Slitthe/web-chat-client",
    skills: ["React", "Redux", "TypeScript", "Bootstrap", "React Router"],

    description:
      "Mock up of a chat application, built as part of a take home assignment",
  },
  {
    year: 2022,
    projectName: "Rick and Morty Character List",
    codeUrl: "https://github.com/Slitthe/ram-characters-list",
    skills: ["React", "Redux", "TypeScript", "Styled Components"],

    description:
      "Rick and Morty character list display using the Rick and Morty's API, part of a take home assignment",
  },
  {
    year: 2019,
    projectName: ".bmp Color to Grayscale convertor",
    codeUrl: "https://github.com/Slitthe/BMPImageGrayscale",
    skills: ["C#", ".NET"],

    description:
      "Small script which converts a .bmp image from color to a grayscale intensity",
  },
  {
    year: 2018,
    projectName: "Jobs Gatherer",
    codeUrl: "https://github.com/Slitthe/jobs-gatherer",
    skills: [
      "JavaScript",
      "Node.js",
      "Server Sent Events",
      "EJS",
      "Express",
      "MongoDB",
      "Mongoose",
    ],

    description:
      "Full-stack application for aggregating jobs listing from multiple sources.",
  },
  {
    year: 2018,
    projectName: "Pomodoro Clock",
    codeUrl:
      "https://github.com/Slitthe/freecodecamp-front-end/tree/master/06-advanced-front-end-projects/pomodoro-clock",
    deployedUrl:
      "https://slitthe.github.io/freecodecamp-front-end/06-advanced-front-end-projects/pomodoro-clock/",
    skills: ["HTML", "CSS", "JS"],
  },
  {
    year: 2018,
    projectName: "Wikipedia Viewer",
    codeUrl:
      "https://github.com/Slitthe/freecodecamp-front-end/tree/master/03-intermediate-front-end-projects/03-wikipedia-viewer",
    deployedUrl:
      "https://slitthe.github.io/freecodecamp-front-end/03-intermediate-front-end-projects/03-wikipedia-viewer/index.html",
    skills: ["HTML", "CSS", "JS", "APIs", "jQuery"],
  },
  {
    year: 2018,
    projectName: "Score Keeper",
    codeUrl:
      "https://github.com/Slitthe/front-end-projects-archive/tree/master/score-keeper",
    deployedUrl:
      "https://slitthe.github.io/front-end-projects-archive/score-keeper/index.html",
    skills: ["HTML", "CSS", "JS", "Bootstrap"],
    description: "Two player in-browser score-keeper",
  },
  {
    year: 2018,
    projectName: "To-do list",
    codeUrl:
      "https://github.com/Slitthe/front-end-projects-archive/tree/master/to-do-list",
    deployedUrl:
      "https://slitthe.github.io/front-end-projects-archive/to-do-list/index.html",
    skills: ["HTML", "CSS", "JS", "jQuery"],
    description: "To-do list with local storage",
  },
  {
    year: 2018,
    projectName: "Targets Clicker",
    codeUrl:
      "https://github.com/Slitthe/front-end-projects-archive/tree/master/target-clicker",
    deployedUrl:
      "https://slitthe.github.io/front-end-projects-archive/target-clicker/index.html",
    skills: ["HTML", "CSS", "JS"],
    description:
      "Simple JavaScript game. The goal is to click as many targets as possible while at the same time avoiding hitting some targets.",
  },
  {
    year: 2018,
    projectName: "D2Filter",
    codeUrl:
      "https://github.com/Slitthe/front-end-projects-archive/tree/master/d2filter",
    deployedUrl:
      "https://slitthe.github.io/front-end-projects-archive/d2filter/index.html",
    skills: ["HTML", "CSS", "JS"],
    description:
      "Filter for DOTA2's items based on certain attributes. As a beginner DOTA2 player was frustrated by the lack of in-game items filter so I decided to build one myself.",
  },
];

export { projects, titles, experienceItems, archiveItems };

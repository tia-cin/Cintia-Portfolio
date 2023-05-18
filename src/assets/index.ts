import bootstrap from "./images/bootstrap.png";
import git from "./images/git-icon.png";
import expressJs from "./images/expressJs-icon.png";
import javascript from "./images/javascript-icon.png";
import materialUi from "./images/materialUi-icon.png";
import mongodb from "./images/mongodb-icon.png";
import nextJs from "./images/nextJs-icon.png";
import nodeJs from "./images/nodeJs-icon.png";
import postgreSQL from "./images/postgresql.png";
import react from "./images/react-icon.png";
import redux from "./images/redux-icon.png";
import tailwind from "./images/tailwindcss.png";
import less from "./images/less.png";
import sass from "./images/sass.png";
import angular from "./images/angular.png";
import vue from "./images/vue.png";
import graphql from "./images/graphql.png";
import django from "./images/django.png";
import typescript from "./images/typescript.png";
import python from "./images/python.png";

import photoshop from "./images/photoshop.png";
import illustrator from "./images/illustrator.png";
import premiere from "./images/premiere.png";
import figma from "./images/figma.png";
import canva from "./images/canva.png";

import google from "./images/google.png";
import microsoft from "./images/microsoft.png";
import harvard from "./images/harvard.png";
import freecodecamp from "./images/freecodecamp.png";
import ibmSkillbuild from "./images/ibm-skillbuild.jpg";
import linkedin from "./images/linkedin.png";

import project1 from "./images/project-1.png";
import project2 from "./images/project-2.png";
import project3 from "./images/project-3.png";
import project4 from "./images/project-4.png";

export const profile = {
  topText: "Hi, I'm Cintia Arce",
  middleText: "Full Stack Developer",
  bottomText: "Showcasing My Passion for Software Engineering and Design",
  about:
    "This software engineer is an independent student with a strong background in full-stack web development and design. They have experience in developing real projects, including an e-commerce platform for comic book chapters with innovative tools. They also have a passion for design and have honed their skills in design programs such as Photoshop, Illustrator, and Premiere. They are looking to make an impact in the industry and are eager to learn and demonstrate their skills.",
  techStack:
    "The main tech stack consists of widely-used programming languages, frameworks, and databases. These technologies allow me to build robust web applications and APIs. Version control systems like Git help teams collaborate effectively and manage code efficiently.",
  tools:
    "In addition to the core tech stack, I often utilize various tools to enhance their workflow. Tools like Redux provide a predictable state management solution for JavaScript applications, while Next.js, Angular, and Vue are frameworks that streamline the development of scalable and performant web applications. Express.js is a popular backend framework for creating APIs, and GraphQL offers a flexible way to query and manipulate data.",
  style:
    "Focusing on the visual appearance and user interface of applications. Frameworks like Bootstrap, Tailwind CSS, and Material-UI to create responsive and attractive designs. Additionally, CSS preprocessors like Sass and Less help streamline the styling process by offering advanced features such as variables, mixins, and nesting.",
  design:
    "Design tools creates visually appealing and engaging user experiences. Figma is a collaborative design tool that enables to create and prototype interfaces. Canva provides an easy-to-use platform for creating graphics, presentations, and marketing materials. Adobe Photoshop and Illustrator are powerful software for creating and editing images, while Adobe Premiere is widely used for video editing and post-production tasks.  ",
};

export const colors = ["#51ABB2", "#F7B9A1", "#FFCE6D", "#6D8CAE"];

export const technologies = {
  style: [
    {
      link: "https:/mui.com",
      logo: materialUi,
      alt: "Material-UI",
    },
    {
      link: "https://getbootstrap.com",
      logo: bootstrap,
      alt: "Bootstrap",
    },
    {
      link: "https://tailwind.com",
      logo: tailwind,
      alt: "Tailwind",
    },
    {
      link: "https://sass-lang.com/",
      logo: sass,
      alt: "Sass",
    },
    {
      link: "https://lesscss.org/",
      logo: less,
      alt: "Less",
    },
  ],
  design: [
    {
      alt: "Photoshop",
      logo: photoshop,
      link: "https://www.photoshop.com/",
    },
    {
      alt: "Illustrator",
      logo: illustrator,
      link: "https://www.adobe.com/products/illustrator/free-trial-download.html",
    },
    {
      alt: "Premiere",
      logo: premiere,
      link: "https://www.adobe.com/products/premiere.html",
    },
    {
      alt: "Figma",
      logo: figma,
      link: "https://www.figma.com/",
    },
    {
      alt: "Canva",
      logo: canva,
      link: "https://canva.com/",
    },
  ],
  tools: [
    {
      link: "https://redux.js.org/",
      logo: redux,
      alt: "Redux",
    },
    {
      link: "https://expressjs.com",
      logo: expressJs,
      alt: "Express",
    },
    {
      link: "https://nextjs.org/",
      logo: nextJs,
      alt: "NextJS",
    },
    {
      link: "https://angular.io.org/",
      logo: angular,
      alt: "Angular",
    },
    {
      link: "https://vuejs.org/",
      logo: vue,
      alt: "Vue JS",
    },
    {
      link: "https://graphql.org/",
      logo: graphql,
      alt: "GraphQL",
    },
  ],
  main: [
    {
      link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
      logo: javascript,
      alt: "Javascript",
    },
    {
      link: "https://www.typescriptlang.org/",
      logo: typescript,
      alt: "Typescript",
    },
    {
      link: "https://www.python.org/",
      logo: python,
      alt: "Python",
    },
    {
      link: "https://reactjs.org/",
      logo: react,
      alt: "React JS",
    },
    {
      link: "https://nodejs.org",
      logo: nodeJs,
      alt: "Nodejs",
    },
    {
      link: "https://www.djangoproject.com/",
      logo: django,
      alt: "Django",
    },
    {
      link: "https://www.postgresql.org",
      logo: postgreSQL,
      alt: "PostgreSQL",
    },
    {
      link: "https://www.mongodb.com/",
      logo: mongodb,
      alt: "MongoDB",
    },
    {
      link: "https://git-scm.com/",
      logo: git,
      alt: "Git",
    },
  ],
};

export const social = [
  {
    link: "https://linkedin.com/in/cintia-arce-profile",
    alt: "LinkedIn",
  },
  {
    link: "https://github.com/tia-cin",
    alt: "Github",
  },
];

export const projects = [
  {
    link: "https://dashboard-shoppy.vercel.app/",
    landing: project2,
    alt: "react-icon",
    title: "Dashboard",
    description: "Organize your team and projects",
  },
  {
    link: "https://techvibe-ecommerce.vercel.app/",
    landing: project4,
    alt: "ecommerce-store-icon",
    description: "Buy tech products in this ecommerce website",
    title: "TechVibe",
  },
  {
    link: "https://nft-langing.vercel.app/",
    landing: project3,
    alt: "landing-plane",
    description: "Landing Pages Templates for business",
    title: "Landing Plane",
  },
  {
    link: "https://nft-langing.vercel.app/",
    landing: project1,
    alt: "nft-market-landing",
    description: "Landing Page for NFT Market React Native App",
    title: "ProNef",
  },
];

export const certifications = [
  {
    title: "Web Development Fundamentals",
    from: "IBM SkillsBuild",
    img: ibmSkillbuild,
  },
  {
    title: "Data Analysis Fundamentals",
    from: "Microsoft & LinkdIn",
    img: microsoft,
  },
  {
    title: "Mobile Development",
    from: "Google Learning",
    img: google,
  },
  {
    title: "Front End Development Libraries",
    from: "freeCodeCamp",
    img: freecodecamp,
  },
  {
    title: "Web Programming with Python & JavaScript",
    from: "CS50 Harvard",
    img: harvard,
  },
  {
    title: "",
    from: "LinkedIn Learning",
    img: linkedin,
  },
];

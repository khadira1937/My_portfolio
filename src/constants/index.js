import {
  mobile,
  ofppt,
  pets,
  weather,
  absnc,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  alx,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Laravel Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Software Engineer (12 Month Bootcamp)",
    company_name: "Holberton School in collaboration with ALX Africa",
    icon: alx,
    iconBg: "#383E56",
    date: "February 2023 - April 2024",
    points: [
      "Developed full-stack web applications using HTML, CSS, JavaScript, React, Next.js, Node.js, and Express.js",
      "Built and deployed server-side applications with Python frameworks like Django and Flask.",
      "Designed and maintained relational databases using SQL, including schema design, query optimization, and performance tuning",
      "Implemented NoSQL databases to handle unstructured and semi-structured data.",
      "Developed frontend app that communicates with RESTful APIs to fetch and manipulate data. ",
      "Implemented GraphQL queries and mutations to optimize data fetching and management.",
      "Honed critical thinking, problem-solving, collaboration, communication, and independent learning skills",
    ],
  },
  {
    title: "Absence Managment",
    company_name: "ISTA Nado",
    icon: ofppt,
    iconBg: "#E6DEDD",
    date: "March2024 - june 2022",
    points: [
      "Developed an absence management application using Laravel, Bootstrap, MySQL.",
      "Features include student management, absence recording, and reporting.",
    ],
  },


];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Pets Marketplace",
    description:
      "Envision a vibrant online space dedicated to connecting pet lovers with their furry companions. This Pets Marketplace, built using Next.js and Tailwind CSS",
    tags: [
      {
        name: "Next",
        color: "blue-text-gradient",
      },
      {
        name: "react",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
    ],
    image: pets,
    source_code_link: "https://github.com/khadira1937/Pets-Zoo",
  },
  {
    name: "Weather and forecast website",
    description:
      "This project highlights my expertise in ing data-driven web applications using Python and Django.      ",
    tags: [
      {
        name: "Django",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: weather,
    source_code_link: "https://github.com/khadira1937/Winter_is_coming",
  },
  {
    name: "Absence Management",
    description:
      "An efficient application designed to manage student absences. Built with Laravel, Bootstrap, and MySQL, it provides features for student management, absence recording, error validation, and report generation.",
    tags: [
      {
        name: "laravel",
        color: "blue-text-gradient",
      },
      {
        name: "mysql",
        color: "green-text-gradient",
      },
      {
        name: "bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: absnc, 
    source_code_link: "https://github.com/khadira1937/Absence-Managmetn", 
  },
];


export { services, technologies, experiences, testimonials, projects };

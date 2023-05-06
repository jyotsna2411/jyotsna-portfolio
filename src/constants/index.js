import {
  mobile,
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
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  skeepimg,
  idutorimg,
  mpsimg,
  notarizeimg,
  skeeplogo,
  idutorlogo,
  mpslogo,
  ahcflogo,
  notarizelogo,
  adobe,
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
    title: "Reactjs Developer",
    icon: creator,
  },
  {
    title: "Graphic Designer",
    icon: backend,
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
    name: "Adobe Photoshop",
    icon: adobe,
  },
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "MPS Infotech",
    icon: mpslogo,
    iconBg: "#fff",
    date: "April 2022 - Present",
    points: [
      "Headed multiple projects comprising the brand management system and online notary.",
      "Delivered complex UI logic and organized code efficiently.",
      "Assembled the code following advanced react design patterns.",
      "Designed and implemented animations and graphics",
      "Debugged the code and implemented remote error handling.	",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Idutor",
    icon: idutorlogo,
    iconBg: "#E6DEDD",
    date: "Feb 2021 - Sep 2022",
    points: [
      "Created REST-API structure in Nest-Js.",
      "Undertook the SEO optimization of the website.",
      "Developed comprehensive application testing procedures.",
      "Worked closely with the management, marketing, and back-end developer to develop a strategy and plan website releases.",
    ],
  },
  {
    title: "Graphic Designer",
    company_name: "AHCF Foundation",
    icon: ahcflogo,
    iconBg: "#fff",
    date: "July 2021 - July 2022",
    points: [
      "Prepared rough drafts and presented ideas",
      "Developed illustrations, logos, and other designs using software or by hand",
      "Tested graphics across various media devices",
      "Amended designs after feedback",
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
    name: "skeep.io",
    description:
      "An AI-based system that automatically generates interactive and personalized eCommerce experiences, to guide shoppers to the right products and increase conversion dramatically ",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "redux",
        color: "green-text-gradient",
      },
      {
        name: "react-native",
        color: "green-text-gradient",
      },
    ],
    image: skeepimg,
    icon: skeeplogo,
    source_code_link: "https://www.skeep.io/",
  },
  {
    name: "Notarize Genie",
    description:
      "Web application that enablesRemote Online Notarization connects signers to notaries via LIVE audio/video technology on a computer, tablet or mobile device.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nestjs",
        color: "green-text-gradient",
      },
      {
        name: "typescript",
        color: "pink-text-gradient",
      },
    ],
    icon: notarizelogo,
    image: notarizeimg,
    source_code_link: "https://www.notarizegenie.com/",
  },

  {
    name: "idutor",
    description:
      "A comprehensive web application providing online education through  for LIVE Face-to-Face Online Tuitions.",
    tags: [
      {
        name: "rest-api",
        color: "blue-text-gradient",
      },
      {
        name: "SEO",
        color: "green-text-gradient",
      },
      {
        name: "graphics",
        color: "pink-text-gradient",
      },
    ],
    icon: idutorlogo,
    image: idutorimg,
    source_code_link: "https://idutor.com/",
  },

  {
    name: "mpsinfotech.in",
    description:
      "An IT solution company that provides services like custom software development and mobile app development  to web development and cloud computing solutions, we offer a full range of services to meet the unique needs of our clients. . ",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "figma",
        color: "green-text-gradient",
      },
      {
        name: "wordpress",
        color: "pink-text-gradient",
      },
      {
        name: "AdobePhotoshop",
        color: "blue-text-gradient",
      },
    ],
    image: mpsimg,
    icon: mpslogo,
    source_code_link: "https://mpsinfotech.in/",
  },
];

export { services, technologies, experiences, testimonials, projects };

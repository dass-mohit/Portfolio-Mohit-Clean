
import {
  logo,
  backend,
  creator,
  mobile,
  web,
  github,
  menu,
  close,
  css,
  gearXpert,
  project2,
  project3,
  mysql,
  express,
  aws,
  mui,
  maruti,
  gsap,
  framer,
  figma,
  git,
  html,
  javascript,
  mongodb,
  nodejs,
  reactjs,
  redux,
  tailwind,
  threejs,
  firstTestimonial,
  secondTestimonial,
  thirdTestimonial,
} from '../assets'


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
    title: "Full-Stack Developer",
    icon: web,
  },
  {
    title: "Frontend Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Ui UX Designer",
    icon: creator,
  },
  {
    title: "Video Editor & Photographer",
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
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "gsap",
    icon: gsap,
  },
  {
    name: "framer",
    icon: framer,
  },


  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "figma",
    icon: figma,
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
    name: "Material Ui",
    icon: mui,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Express Js",
    icon: express,
  },
  {
    name: "AWS",
    icon: aws,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "MySql",
    icon: mysql,
  },

  {
    name: "git",
    icon: git,
  },


];

const experiences = [
  {
    title: "Junior Engineer",
    company_name: "Maruti Suzuki India Limited",
    icon: maruti,
    iconBg: "#383E56",
    date: "2021 - 2023",
    points: [
      "Gained extensive experience in problem-solving and programming.",
      "Developed strong leadership, team-building, communication, and project management skills.",
      "Installed a Device-Net communication network to facilitate communication between robots.",
      "Worked across multiple locations: Bhubaneswar (2018-2021), Gurugram (2021-2023), Bhubaneswar (2023-2026).",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Mohit proved me wrong.",
    name: "MD Mustaqeem",
    designation: "Ecommerce",
    company: "QuickMart",
    image: firstTestimonial,
  },
];

const projects = [
  {
    name: "Employee Management System",
    description:
      "A comprehensive employee management system that allows organizations to manage employee data, track attendance, handle payroll, and streamline HR processes efficiently.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "white-text-gradient",
      },
      {
        name: "node",
        color: "pink-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },

    ],
    image: project2,
    source_code_link: "https://github.com/dass-mohit/Employee-Management-System",
  },

  {
    name: "AI Resume and JD Match",
    description:
      "An intelligent system that analyzes resumes and job descriptions to provide matching scores and recommendations, helping job seekers optimize their applications and recruiters find the best candidates.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "AI/ML",
        color: "green-text-gradient",
      },
      {
        name: "NLP",
        color: "pink-text-gradient",
      },
    ],
    image: project3,
    source_code_link: "https://github.com/dass-mohit/Ai-rusume-and-JD-match",
  },
];

export { services, technologies, experiences, testimonials, projects };

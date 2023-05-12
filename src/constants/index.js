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
  dream,
  garden,
  dms,
  cc0,
  dust,
  svelte,
  threlte,
  globe, 
  car
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
    title: "3D Web Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Svelte Developer",
    icon: backend,
  },
  {
    title: "Shader Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Svelte",
    icon: svelte,
  },
  {
    name: "Threlte",
    icon: threlte,
  },
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
    name: "git",
    icon: git,
  }
];

const experiences = [
  {
    title: "Frontend Engineer",
    company_name: "Tripletech",
    icon: starbucks,
    iconBg: "#383E56",
    date: "February 2012 - October 2014",
    points: [
      "Created several React components with D3 charts that support interactive visualizations of market data projections and analysis.",
      "Implemented client-side data transformations to map, filter, reduce, etc. large datasets for display in interactive SVG charts.",
      "Created dynamically populated data filters as dropdowns, checkbox groups, input fields, sliders, etc. in order to evaluate and pivot market data analysis charts.",
      "Used Chrome DevTools to investigate and fix front-end rendering performance issues and computationally intensive bottlenecks.",
    ],
  },
  {
    title: "WebGL/Three.js Developer",
    company_name: "Sitnplay Games",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "February 2015 - May 2022",
    points: [
      "Connected a 3D engine to a React component so that it is in sync with the Redux state and reacts to state changes.",
      "Built an application engine that uses Three.js for a 3D workspace which contained cameras, controls, event system, and all of the custom 3D object classes and their interactions.",
      "Implemented the drawing of objects that snap on top of 3D models using raycasting and vertices manipulation.",
      "Create a client-side calculation for volumes of a 3D file (.stl).",
    ],
  },
  {
    title: "Web3 Engineer",
    company_name: "Freelancer work",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "February 2018 - March 2020",
    points: [
      "Developing and maintaining 3D character Creator project with Three.js and Web3.js.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create Metaverse project",
      "Implementing responsive design and ensuring cross-browser compatibility in web3 platform.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "WebGL/Three.js/React/Svelte Engineer",
    company_name: "Upwork Freelancing",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "June 2021 ~",
    points: [
      "Developing a data-visualization web app for Geo-location data using  Sveltekit, Threlet and Golang",
      "Created backend APIs to render GLB object in Node server using Puppeteer and Three.js",
      "Developing CALI project(Life Coaching Website) with React, React-Flow and yFiles.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Guilherme  was super professional and quick communicator. Helped us a lot in the delivery of this part of our project on a tight deadline",
    name: "Olga Zippa",
    designation: "COO",
    company: "MacDougall Technology",
    image: "https://randomuser.me/api/portraits/women/5.jpg",
  },
  {
    testimonial:
      " Guilherme is a skilled React Developer",
    name: "James Weatherly",
    designation: "Developer",
    company: "CALI",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
  },
  {
    testimonial:
    "Amazing job on a very unique/challenging task!",
    name: "Taylor MacDougall",
    designation: "CTO",
    company: "MacDougall Technology",
    image: "https://randomuser.me/api/portraits/men/6.jpg",
  },
];

const projects = [
  {
    name: "3D Character Creator",
    description:
      "3D Character creator that enables users to create and customize their characters, for Metaverse",
    tags: [
      {
        name: "Three.js",
        color: "blue-text-gradient",
      },
      {
        name: "React",
        color: "green-text-gradient",
      },
      {
        name: "GSAP",
        color: "pink-text-gradient",
      },
    ],
    image: cc0,
    source_code_link: "https://github.com/",
  },
  
  {
    name: "3D Car configurator",
    description:
      "User can customize their cars. Built with React-three-fiber",
    tags: [
      {
        name: "React three fiber",
        color: "blue-text-gradient",
      }
    ],
    image: car,
    source_code_link: "https://github.com/",
  },
  {
    name: "DMS Project",
    description:
      "A 3D Data visualization that allows users to CRUD action to Geo-location databased",
      tags: [
        {
          name: "Sveltekit",
          color: "blue-text-gradient",
        },
      {
        name: "Three.js",
        color: "green-text-gradient",
      },
      {
        name: "Tailwindcss",
        color: "pink-text-gradient",
      }
    ],
    image: dms,
    source_code_link: "https://github.com/",
  },
  {
    name: "3D Garden Configurator",
    description:
      "A 3D Configurator that allows users to design their graden around home",
    tags: [
      {
        name: "Three.js",
        color: "blue-text-gradient",
      },
      {
        name: "React.js",
        color: "green-text-gradient",
      },
      {
        name: "TailwindCSS",
        color: "pink-text-gradient",
      },
    ],
    image: garden,
    source_code_link: "https://github.com/",
  },
  {
    name: "3D Dream world",
    description:
      "Dream world that you have seen while dreaming.",
      tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "Three.js",
        color: "green-text-gradient",
      },
      {
        name: "Mysql",
        color: "pink-text-gradient",
      },
    ],
    image: dream,
    source_code_link: "https://github.com/",
  },
  {
    name: "Dust to Image Effect",
    description:
      "Cosmic dust becomes an image.",
    tags: [
      {
        name: "Three.js",
        color: "blue-text-gradient",
      },
      {
        name: "GLSL",
        color: "green-text-gradient",
      },
      {
        name: "Post-Processing",
        color: "pink-text-gradient",
      },
    ],
    image: dust,
    source_code_link: "https://github.com/",
  },
  {
    name: "3D Globe",
    description:
      "Fork Github Globe with three.js, React and Globe.gl",
    tags: [
      {
        name: "Three.js",
        color: "blue-text-gradient",
      },
      {
        name: "React",
        color: "green-text-gradient",
      },
      {
        name: "Globe.gl",
        color: "pink-text-gradient",
      },
    ],
    image: globe,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };

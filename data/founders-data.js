import ionela from "../assets/images/team/ionela.jpg";
import sample from "../assets/images/team/sample@3x.png";
import office from '../assets/images/founders-page/office@3x.png';

import {
  FaLinkedinIn,
  FaInstagram,
  FaDribbble,
  FaBehance,
} from "react-icons/fa";

import robert from "../assets/images/founders-page/robert-profil@3x.png";

export const foundersData = [
  {
    id: 0,
    name: "Pascu George Nicolae",
    specialization: "FRONTEND",
    image: sample,
    isFounder: true,
    description:
      "ndustry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type. And scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting.",
  },

  {
    id: 1,
    name: "Niculae Robert",
    specialization: "DESIGNER / UX / UI",
    image: sample,
    isFounder: true,
    description:
      "ndustry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type. And scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting.",
  },

  {
    id: 2,
    name: "Niculae Stefanel",
    specialization: "BACKEND",
    image: sample,
    isFounder: true,
    description:
      "ndustry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type. And scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting.",
  },

  {
    id: 3,
    name: "Dobra Ionela",
    specialization: "SEO & COPYWRITING",
    image: ionela,
    isFounder: false,
    description:
      "ndustry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type. And scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting.",
  },
];

export const main_founders = [
  {
    name: "robert",
    image: robert,
    specialization: "UI / UX Web Designer & Developer",
    description:
      "I’m a certified UI/UX Web Designer, who likes to help you and your business improve and create new features that drives the final product on higher place on the market.",
    media: [
      {
        image: <FaLinkedinIn />,
        linkTo: "/linked",
      },

      {
        image: <FaInstagram />,
        linkTo: "/insta",
      },

      {
        image: <FaDribbble />,
        linkTo: "/dribbble",
      },

      {
        image: <FaBehance />,
        linkTo: "/behance",
      },
    ],
    office: {
      title: "My Office Paris",
      description:
        "With knowledge in implementing HTML , CSS and JavaScript into websites using React js Framework.",
      image: office,
    },
    certificates: [
      {
        name: "primul",
      },

      {
        name: "al doilea",
      },

      {
        name: "al treilea",
      },

      {
        name: "al patrulea",
      },
    ],
    skills: [
      {
        name: "Web Design",
        content: [
          {
            name: "Sketch",
            procent: 80,
          },

          {
            name: "Adove XD",
            procent: 80,
          },

          {
            name: "Photoshop",
            procent: 50,
          },

          {
            name: "Illustrator",
            procent: 50,
          },
        ],
      },

      {
        name: "Web Deveopment",
        content: [
          {
            name: "HTML",
            procent: 80,
          },

          {
            name: "CSS / SASS",
            procent: 80,
          },

          {
            name: "Javascript",
            procent: 50,
          },

          {
            name: "React js",
            procent: 50,
          },
        ],
      },

      {
        name: "Languages",
        content: [
          {
            name: "Romanian",
            procent: 100,
          },

          {
            name: "English",
            procent: 80,
          },

          {
            name: "French",
            procent: 80,
          },
        ],
      },
    ],
  },

  {
    name: "alexandru",
    image: ionela,
    specialization: "UI / UX Web Designer & Developer",
    description:
      "I’m a certified UI/UX Web Designer, who likes to help you and your business improve and create new features that drives the final product on higher place on the market.",
      media: [
        {
          image: <FaLinkedinIn />,
          linkTo: "/linked",
        },
  
        {
          image: <FaInstagram />,
          linkTo: "/insta",
        },
  
        {
          image: <FaDribbble />,
          linkTo: "/dribbble",
        },
  
        {
          image: <FaBehance />,
          linkTo: "/behance",
        },
      ],
    office: {
      title: "My Office Paris",
      description:
        "With knowledge in implementing HTML , CSS and JavaScript into websites using React js Framework.",
      image: office,
    },
    certificates: [
      {
        name: "primul",
      },

      {
        name: "al doilea",
      },

      {
        name: "al treilea",
      },

      {
        name: "al patrulea",
      },
    ],
    skills: [
      {
        name: "Web Design",
        content: [
          {
            name: "Sketch",
            procent: 80,
          },

          {
            name: "Adove XD",
            procent: 80,
          },

          {
            name: "Photoshop",
            procent: 50,
          },

          {
            name: "Illustrator",
            procent: 50,
          },
        ],
      },

      {
        name: "Web Deveopment",
        content: [
          {
            name: "HTML",
            procent: 80,
          },

          {
            name: "CSS / SASS",
            procent: 80,
          },

          {
            name: "Javascript",
            procent: 50,
          },

          {
            name: "React js",
            procent: 50,
          },
        ],
      },

      {
        name: "Languages",
        content: [
          {
            name: "Romanian",
            procent: 100,
          },

          {
            name: "English",
            procent: 80,
          },

          {
            name: "French",
            procent: 80,
          },
        ],
      },
    ],
  },

  {
    name: "george",
    image: ionela,
    specialization: "UI / UX Web Designer & Developer",
    description:
      "I’m a certified UI/UX Web Designer, who likes to help you and your business improve and create new features that drives the final product on higher place on the market.",
    media: [
      {
        image: <FaLinkedinIn />,
        linkTo: "/linked",
      },

      {
        image: <FaInstagram />,
        linkTo: "/insta",
      },

      {
        image: <FaDribbble />,
        linkTo: "/dribbble",
      },

      {
        image: <FaBehance />,
        linkTo: "/behance",
      },
    ],
    office: {
      title: "My Office Paris",
      description:
        "With knowledge in implementing HTML , CSS and JavaScript into websites using React js Framework.",
      image: office,
    },
    certificates: [
      {
        name: "primul",
      },

      {
        name: "al doilea",
      },

      {
        name: "al treilea",
      },

      {
        name: "al patrulea",
      },
    ],
    skills: [
      {
        name: "Web Design",
        content: [
          {
            name: "Sketch",
            procent: 80,
          },

          {
            name: "Adove XD",
            procent: 80,
          },

          {
            name: "Photoshop",
            procent: 50,
          },

          {
            name: "Illustrator",
            procent: 50,
          },
        ],
      },

      {
        name: "Web Deveopment",
        content: [
          {
            name: "HTML",
            procent: 80,
          },

          {
            name: "CSS / SASS",
            procent: 80,
          },

          {
            name: "Javascript",
            procent: 50,
          },

          {
            name: "React js",
            procent: 50,
          },
        ],
      },

      {
        name: "Languages",
        content: [
          {
            name: "Romanian",
            procent: 100,
          },

          {
            name: "English",
            procent: 80,
          },

          {
            name: "French",
            procent: 80,
          },
        ],
      },
    ],
  },
];

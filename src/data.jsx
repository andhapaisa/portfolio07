import {
  FaHome,
  FaUser,
  FaFolderOpen,
  FaEnvelopeOpen,
  FaBriefcase,
  FaGraduationCap,
  FaCode,
} from 'react-icons/fa';
import { FiFileText, FiUser, FiExternalLink } from 'react-icons/fi';

import Work1 from './assets/curry-g5ff3af663_1280.jpg';
import Work2 from './assets/project-2.jpg';
import Work3 from './assets/project-3.jpeg';
import Work4 from './assets/project-4.jpeg';
import Work5 from './assets/project-5.jpg';
import Work6 from './assets/project-6.jpg';

import Theme1 from './assets/purple.png';
import Theme2 from './assets/red.png';
import Theme3 from './assets/blueviolet.png';
import Theme4 from './assets/blue.png';
import Theme5 from './assets/goldenrod.png';
import Theme6 from './assets/magenta.png';
import Theme7 from './assets/yellowgreen.png';
import Theme8 from './assets/orange.png';
import Theme9 from './assets/green.png';
import Theme10 from './assets/yellow.png';

export const links = [
  {
    id: 1,
    name: 'Home',
    icon: <FaHome className='nav__icon' />,
    path: '/',
  },

  {
    id: 2,
    name: 'About',
    icon: <FaUser className='nav__icon' />,
    path: '/about',
  },

  {
    id: 3,
    name: 'Portfolio',
    icon: <FaFolderOpen className='nav__icon' />,
    path: '/portfolio',
  },


  {
    id: 4,
    name: 'Contact',
    icon: <FaEnvelopeOpen className='nav__icon' />,
    path: '/contact',
  },
];

export const personalInfo = [
  {
    id: 1,
    title: 'First Name : ',
    description: 'Aman',
  },

  {
    id: 2,
    title: 'Last Name : ',
    description: 'Kasaudhan',
  },
   {
    id:3,
    title:'Birthday : ',
    description:'11 Jan 2004'
   },
  {
    id: 4,
    title: 'Age : ',
    description: '20 Years',
  },

  {
    id: 5,
    title: 'Studying : ',
    description: 'B.Tech. (Mech. Eng.)',
  },

  {
    id: 6,
    title: 'Address : ',
    description: 'Ayodhya,UP',
  },

  {
    id: 7,
    title: 'Phone : ',
    description: '8471022320',
  },

  {
    id: 8,
    title: 'Email : ',
    description: 'amankasaudhanak07@gmail.com',
  },

];





export const skills = [
  {
    id: 1,
    title: 'Html',
    percentage: '60',
  },

  {
    id: 2,
    title: 'Javascript',
    percentage: '89',
  },

  {
    id: 3,
    title: 'Css',
    percentage: '70',
  },

  {
    id: 4,
    title: 'MongoDB',
    percentage: '66',
  },

  {
    id: 5,
    title: 'PostgreSQL',
    percentage: '85',
  },

  {
    id: 6,
    title: 'React',
    percentage: '55',
  },

  {
    id: 7,
    title: 'C,C++',
    percentage: '85',
  },

  {
    id: 8,
    title: 'DSA',
    percentage: '15',
  },
];

export const portfolio = [
  {
    id: 1,
    img: Work1,
    title: 'Recipe Finder',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Website',
      },
      {
        icon: <FiUser />,
        title: 'Client : ',
        desc: 'Dribble',
      },
      {
        icon: <FaCode />,
        title: 'Languages : ',
        desc: 'HTML,CSS,JS,MongoDB',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'www.google.com',
      },
    ],
  },
  // {
  //   id: 2,
  //   img: Work2,
  //   title: 'Recipe Finder',
  //   details: [
  //     {
  //       icon: <FiFileText />,
  //       title: 'Project : ',
  //       desc: 'Website',
  //     },
  //     {
  //       icon: <FiUser />,
  //       title: 'Client : ',
  //       desc: 'Dribble',
  //     },
  //     {
  //       icon: <FaCode />,
  //       title: 'Language : ',
  //       desc: 'ReactJS',
  //     },
  //     {
  //       icon: <FiExternalLink />,
  //       title: 'Preview : ',
  //       desc: 'www.dribble.com',
  //     },
  //   ],
  // },
];

export const themes = [
  {
    id: 1,
    img: Theme1,
    color: 'hsl(252, 35%, 51%)',
  },

  {
    id: 2,
    img: Theme2,
    color: 'hsl(4, 93%, 54%)',
  },

  {
    id: 3,
    img: Theme3,
    color: 'hsl(271, 76%, 53%)',
  },

  {
    id: 4,
    img: Theme4,
    color: 'hsl(225, 73%, 57%)',
  },

  {
    id: 5,
    img: Theme5,
    color: 'hsl(43, 74%, 49%)',
  },

  {
    id: 6,
    img: Theme6,
    color: 'hsl(339, 81%, 66%)',
  },

  {
    id: 7,
    img: Theme7,
    color: 'hsl(80, 61%, 50%)',
  },

  {
    id: 8,
    img: Theme8,
    color: 'hsl(19, 96%, 52%)',
  },

  {
    id: 9,
    img: Theme9,
    color: 'hsl(88, 65%, 43%)',
  },

  {
    id: 10,
    img: Theme10,
    color: 'hsl(42, 100%, 50%)',
  },
];

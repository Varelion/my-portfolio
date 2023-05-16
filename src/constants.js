let theStack = [
  {
    name: 'VS Code',
    link: 'https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/visualstudio/visualstudio-plain.svg',
  },

  {
    name: 'TypeScript',
    link: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg',
  },
  {
    name: 'Express',
    link: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg',
  },

  {
    name: 'NodeJS',
    link: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg',
  },
  {
    name: 'Postman',
    link: 'https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg',
  },

  {
    name: 'Nginx',
    link: 'https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/nginx/nginx-original.svg',
  },
  {
    name: 'AWS',
    link: 'https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/amazonwebservices/amazonwebservices-original.svg',
  },
  {
    name: 'Azure',
    link: 'https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/azure/azure-original.svg',
  },
  {
    name: 'React Native',
    link: 'https://pagepro.co/blog/wp-content/uploads/2020/03/react-native-logo-884x1024.png',
  },
  {
    name: 'HTML',
    link: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
  },
  {
    name: 'CSS',
    link: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain.svg',
  },
  {
    name: 'Photoshop',
    link: 'https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/photoshop/photoshop-plain.svg',
  },
  {
    name: 'Redux',
    link: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg',
  },
  {
    name: 'Postgresql',
    link: 'https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/postgresql/postgresql-plain.svg',
  },

  {
    name: 'Javascript',
    link: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
  },
  {
    name: 'Tailwind CSS',
    link: 'https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg',
  },
  {
    name: 'React',
    link: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg',
  },
  {
    name: 'MySQl',
    link: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-plain.svg',
  },
  {
    name: 'Mongo DB',
    link: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-plain.svg',
  },
  {
    name: 'Python',
	  link: 'https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/python/python-original.svg',
  },
  {
    name: 'Github',
    link: 'https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/github/github-original.svg',
  },

  {
    name: 'Firebase',
    link: 'https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg',
  },

  {
    name: 'Bash',
    link: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg',
  },
  {
    name: 'Sequelize',
    link: 'https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/sequelize/sequelize-original.svg',
  },
  {
    name: 'Eslint',
    link: 'https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/eslint/eslint-original.svg',
  },
];

export const techStack = theStack.sort((a, b) => {
  const nameA = a.name.toUpperCase(); // ignore upper and lowercase
  const nameB = b.name.toUpperCase(); // ignore upper and lowercase

  if (nameA < nameB) {
    return -1;
  }

  if (nameA > nameB) {
    return 1;
  }

  // names must be equal
  return 0;
});

export const contactLinks = [
  {
    name: 'Stack Overflow',
    url: 'https://img.icons8.com/external-tal-revivo-color-tal-revivo/40/000000/external-stack-overflow-is-a-question-and-answer-site-for-professional-logo-color-tal-revivo.png',
    link: 'https://stackoverflow.com/users/14245018/vonvolion',
  },
  {
    name: 'Instagram',
    url: 'https://img.icons8.com/doodle/40/000000/instagram-new--v2.png',
    link: 'https://www.instagram.com/vonvolion/',
  },
  {
    name: 'Github',
    url: 'https://img.icons8.com/doodle/40/000000/github--v1.png',
    link: 'https://github.com/Varelion',
  },
  {
    name: 'LinkedIn',
    url: 'https://img.icons8.com/doodle/40/000000/linkedin--v2.png',
    link: 'https://www.linkedin.com/in/ighor-rodrigues/',
  },
];

export const serviceData = [
  {
    name: 'Web Application Development',
    desc: "From conception to deployment, a full stack developer carries the skills necessary to bring any vision to life. That's my job. Alongside front-end development — the aesthetics, intuitive navigation, and general user experience, and the back-end — data storage, security, and general information flow, I bring the knowledge of cloud deployment and management.",
    img: 'https://img.icons8.com/external-kiranshastry-lineal-color-kiranshastry/64/000000/external-web-development-coding-kiranshastry-lineal-color-kiranshastry.png',
  },
  {
    name: 'Mobile Application Development',
    desc: `As a React Native developer, my specialty is crafting high-performance mobile apps that deliver exceptional user experiences. Whether building from scratch or enhancing an existing app, I possess the expertise to create stunning and responsive interfaces optimized for both Android and iOS devices. Let me help you achieve your mobile app goals with a fully functional and highly performant solution.`,
    img: 'https://img.icons8.com/external-justicon-lineal-color-justicon/64/000000/external-app-development-responsive-web-design-justicon-lineal-color-justicon.png',
  },

  {
    name: 'Cloud Management',
    desc: `As a cloud developer, I possess the expertise to design, develop, and deploy applications and services in a cloud computing environment. With my full stack development background, I can offer end-to-end cloud solutions that are scalable, secure, and highly available. Let me help you achieve your cloud computing goals and take your applications to the next level.`,
    img: 'https://img.icons8.com/external-flaticons-lineal-color-flat-icons/64/external-cloud-computing-data-analytics-flaticons-lineal-color-flat-icons-3.png',
  },
];

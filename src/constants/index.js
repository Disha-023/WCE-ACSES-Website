export const navLinks = [
  {
    id: 1,
    name: 'Home',
    href: '#home',
  },
  {
    id: 2,
    name: 'About',
    href: '#about',
  },
  {
    id: 3,
    name: 'Teams',
    href: '#teams',
  },
  {
    id: 4,
    name: 'Contact',
    href: '#contact',
  },
];

export const EventsData = [

  {
    title: 'GENERAL INTEREST MEET(GIM)',
    desc: 'Objective: General Interest Meet conducted by the assistant board for FY students to introduce them to the club',
    subdesc: " GIM acts like an introductory event for FY students in computer science branch, what they will be doing in it, and the great technical and nontech opportunities they are going to get in the future. This event majorly focuses on introducing them to the club activities and give them a free environment to communicate with their classmates as well as seniors by taking several non technical fun events.",
    logo: '/assets/project-logo2.png',
    image: "https://res.cloudinary.com/dpjpnqcnw/image/upload/GIM_2_bfx8vu.jpg",
    logoStyle: {
      backgroundColor: '#13202F',
      border: '0.2px solid #17293E',
      boxShadow: '0px 0px 60px 0px #2F6DB54D',
    },
    spotlight: '/assets/spotlight2.png',

  },

  {
    title: 'TECHUMEN',
    desc: ' Objective: To reach out to the students from other colleges and provide a platform for the students of all domains to compete, learn and nurture their skills on a National Level',
    subdesc: " TECHUMEN is the annual national-level mega event organized by ACSES, attracting over a thousand participants. It provides students from across the country an opportunity to compete, learn, and grow together as a community.",
    image: "https://res.cloudinary.com/dpjpnqcnw/image/upload/TECHUMEN_1_t1j4d9.jpg",
    logo: '/assets/project-logo1.png',
    logoStyle: {
      backgroundColor: '#2A1816',
      border: '0.2px solid #36201D',
      boxShadow: '0px 0px 60px 0px #AA3C304D',
    },
    spotlight: '/assets/spotlight1.png',

  },

  

  {
    title: 'CPP BOOTCAMP',
    desc: 'Objective: To give students a clear understanding of C++ and OOP concepts for coding efficiency and problem-solving.',
    subdesc: "This 2-day bootcamp is a collaborative event by WCE ACSES and the WCE CodeChef . Participants will learn core C++ concepts, gain clarity on OOP, compete in quizzes with exciting prizes, and receive certificates upon completion.",
    logo: '/assets/project-logo3.png',
    image: "https://res.cloudinary.com/dpjpnqcnw/image/upload/CPP_BOOTCAMP_3_lgrpv0.jpg",
    logoStyle: {
      backgroundColor: '#60f5a1',
      background:
        'linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)',
      border: '0.2px solid rgba(208, 213, 221, 1)',
      boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
    },
    spotlight: '/assets/spotlight3.png',
  },

  {
    title: 'SITECH',
    desc: 'To give bright but underprivileged school students exposure to new technologies and guide them toward future study options.',
    subdesc: " ACSES started the SITAC initiative in 2006 with the Collector Office, Sangli, to bring basic computer knowledge and IT awareness to remote schools. It’s a highly anticipated event, with enthusiastic participation from students and staff every year, reflecting their keen interest and potential.",
    image: "https://res.cloudinary.com/dpjpnqcnw/image/upload/SITECH_4_xbbqcp.jpg",
    logo: '/assets/project-logo1.png',
    logoStyle: {
      backgroundColor: '#2A1816',
      border: '0.2px solid #36201D',
      boxShadow: '0px 0px 60px 0px #AA3C304D',
    },
    spotlight: '/assets/spotlight1.png',

  },

  {
    title: 'UNLOCK MORE',
    desc: '',
    subdesc: "There are more exclusive intra-club events only for ACSES members. Join the club to unlock these experiences, enhance your technical and soft skills, and become the best version of yourself!",
    image: "https://res.cloudinary.com/dpjpnqcnw/image/upload/Join_acses_5_ps3dgc.jpg",
    logo: '/assets/project-logo1.png',
    logoStyle: {
      backgroundColor: '#2A1816',
      border: '0.2px solid #36201D',
      boxShadow: '0px 0px 60px 0px #AA3C304D',
    },
    spotlight: '/assets/spotlight1.png',

  },

  
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
    reactLogoPosition: isSmall ? [3, 3, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
    ringPosition: isSmall ? [-5, 5, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-22, 10, 0],
    targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
  };
};

export const BoardPositions = [
  {
    id: 1,
    name: 'Main Board',
    pos: 'Board Assistant',
    duration: '2023 - Present',
    title: "The Main Board supervises all the important tasks and manages the overall functioning of the club.",
    icon: '/assets/figma.svg',
    animation: 'thinking',
  },
  {
    id: 2,
    name: 'Assistant Board',
    pos: 'Member Board',
    duration: '2022 - 2023',
    title: "The Assistant Board organizes exciting events and also takes the special role of training the Member Board.",
    icon: '/assets/framer.svg',
    animation: 'wave',
  },
  {
    id: 3,
    name: 'Member Board',
    pos: 'Member',
    duration: '2021 - 2022',
    title: "The Member Board consists of freshers who actively participate in club activities, work on projects, and learn from the Assistant Board.",
    icon: '/assets/notion.svg',
    animation: 'thumbsup',
  },
];


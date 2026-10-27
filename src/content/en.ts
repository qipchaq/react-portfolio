import type { Content } from './types'
import meta from './meta.json'

const en: Content = {
  meta: meta.en,
  ui: {
    skipToContent: 'Skip to content',
    nav: {
      about: 'About',
      experience: 'Experience',
      projects: 'Projects',
      skills: 'Skills',
      contact: 'Contact',
    },
    navLabel: 'Sections',
    languageLabel: 'Language',
    themeToLight: 'Switch to light theme',
    themeToDark: 'Switch to dark theme',
    social: { github: 'GitHub', linkedin: 'LinkedIn', email: 'Email' },
    openLink: '(opens in a new tab)',
  },
  person: {
    name: 'Adil Nurkaliyev',
    role: 'Senior Fullstack Engineer',
    tagline:
      'I build complex enterprise web applications: scalable React and TypeScript front ends backed by Node.js services.',
    location: 'Almaty, Kazakhstan · UTC+5',
    photoAlt: 'Portrait of Adil Nurkaliyev',
  },
  about: {
    heading: 'About',
    paragraphs: [
      "I'm a senior fullstack engineer with **5+ years of commercial experience** building web applications for education, healthcare, finance and FinTech companies. I specialise in complex enterprise systems on **React** and **TypeScript**: front-end architecture, performance, and interfaces that stay easy to maintain as they grow.",
      'At **Avenga** I designed the architecture of six micro-frontends, shipped 55+ major business features and mentor other developers through code review. I also work on the back end with **Node.js**, **NestJS**, **PostgreSQL** and **RabbitMQ**, and I like to own a feature end to end, from the database schema and API contract to the UI.',
      "Before software I spent **more than six years in the space industry**, first at the national Aerospace Committee and then as an engineer at Kazakhstan Gharysh Sapary, and I hold two master's degrees in aerospace engineering. I still prefer engineering solutions to just interfaces: things that scale, are easy to support and keep evolving.",
    ],
    metrics: [
      {
        value: 12,
        suffix: '+',
        label: 'years in engineering, space and software',
      },
      { value: 5, suffix: '+', label: 'years of commercial web development' },
      { value: 6, suffix: '', label: 'micro-frontends architected' },
      { value: 55, suffix: '+', label: 'major business features shipped' },
    ],
  },
  experience: {
    heading: 'Experience',
    software: {
      label: 'Software engineering',
      items: [
        {
          period: 'Nov 2020 — Present',
          title: 'Senior Frontend / Fullstack Engineer',
          company: 'Avenga',
          url: 'https://www.avenga.com/',
          summary:
            'Build and evolve enterprise web products for clients in education, healthcare, finance and FinTech, on both the front end and the back end.',
          highlights: [
            'Architected six micro-frontends and shipped 55+ major business features.',
            'Built admin panels with complex tables and forms (React, Redux Toolkit, Ant Design) and a real-time chat messenger (RTK Query, WebSocket).',
            'Developed Node.js microservices with NestJS and Express: REST APIs, PostgreSQL with TypeORM, RabbitMQ and BullMQ queues, JWT authentication and role-based access control, containerised with Docker.',
            'Improved the performance of large applications with virtualisation, lazy loading and code splitting; run code reviews and mentor developers.',
          ],
          tags: [
            'React',
            'TypeScript',
            'Redux Toolkit',
            'RTK Query',
            'Ant Design',
            'single-spa',
            'Node.js',
            'NestJS',
            'PostgreSQL',
            'RabbitMQ',
            'BullMQ',
            'Docker',
          ],
        },
        {
          period: 'Feb 2020 — Nov 2020',
          title: 'Freelance Web Developer',
          company: 'Self-employed',
          summary:
            'Built responsive, dynamic websites from scratch through to deployment, for both end users and business needs.',
          tags: ['HTML', 'CSS', 'JavaScript', 'React'],
        },
      ],
    },
    aerospace: {
      label: 'Earlier career: aerospace',
      items: [
        {
          period: 'Jul 2019 — Oct 2020',
          title: 'Engineer',
          company: 'Kazakhstan Gharysh Sapary (national company)',
          summary: 'Delivered projects in the field of space activities.',
        },
        {
          period: 'Apr 2014 — Jun 2019',
          title: 'Chief Specialist',
          company: 'Aerospace Committee, Kazakhstan',
          summary: 'Supported projects in the field of space activities.',
        },
      ],
    },
  },
  projects: {
    heading: 'Projects',
    intro:
      "Client work isn't public, so here are personal projects I built to explore tools beyond my day job.",
    live: 'Live demo',
    code: 'Source code',
    items: [
      {
        title: 'E-commerce store',
        description:
          'Online store with a product catalogue and Stripe checkout, with content managed in Sanity CMS.',
        image: 'ecommerce',
        liveUrl: 'https://react-ecommerce-bice.vercel.app/',
        codeUrl: 'https://github.com/qipchaq/react-ecommerce',
        tags: ['Next.js', 'Sanity', 'Stripe'],
      },
      {
        title: 'Cryptoverse',
        description:
          'Cryptocurrency dashboard with market statistics, coin details, price charts and crypto news.',
        image: 'cryptoverse',
        liveUrl: 'https://react-app-cryptoverse.netlify.app/',
        codeUrl: 'https://github.com/qipchaq/cryptoverse',
        tags: ['React', 'Redux Toolkit', 'Ant Design', 'Chart.js'],
      },
      {
        title: 'Realtor',
        description:
          'Property search app for buying and renting, with data from an external real estate API.',
        image: 'real-estate',
        liveUrl: 'https://real-estate-swart.vercel.app/',
        codeUrl: 'https://github.com/qipchaq/real-estate',
        tags: ['Next.js', 'Chakra UI', 'Framer Motion'],
      },
      {
        title: 'Travel Adviser',
        description:
          'Map-based guide to restaurants, hotels and attractions around the world, built on Google Maps.',
        image: 'travel-adviser',
        liveUrl: 'https://frolicking-kelpie-8130e2.netlify.app/',
        codeUrl: 'https://github.com/qipchaq/travel-advisor',
        tags: ['React', 'Material UI', 'Google Maps API'],
      },
      {
        title: 'GPT-3 landing page',
        description:
          'Responsive landing page for an AI product, built as a pure front-end exercise.',
        image: 'open-ai',
        liveUrl: 'https://master--bejewelled-taiyaki-4065bf.netlify.app/',
        codeUrl: 'https://github.com/qipchaq/open-ai',
        tags: ['React', 'CSS'],
      },
      {
        title: 'Online Zoo',
        description:
          'Multi-page responsive website about a zoo, hand-built with semantic HTML, CSS and vanilla JavaScript.',
        image: 'zoo',
        liveUrl: 'https://online-zoopark.netlify.app/',
        tags: ['HTML', 'CSS', 'JavaScript'],
      },
    ],
  },
  skills: {
    heading: 'Skills',
    groups: [
      {
        title: 'Front end',
        items: [
          'TypeScript',
          'JavaScript',
          'React',
          'Next.js',
          'Redux Toolkit',
          'RTK Query',
          'React Query',
          'HTML5 / CSS3',
          'SCSS',
          'Tailwind CSS',
          'Ant Design',
          'shadcn/ui',
        ],
      },
      {
        title: 'Back end',
        items: [
          'Node.js',
          'NestJS',
          'Express',
          'PostgreSQL',
          'TypeORM',
          'RabbitMQ',
          'BullMQ',
        ],
      },
      {
        title: 'Architecture',
        items: [
          'Micro-frontends (single-spa)',
          'Microservices',
          'REST API design',
          'JWT / RBAC',
        ],
      },
      {
        title: 'Tooling',
        items: ['Vite', 'Webpack', 'Vitest', 'Docker', 'Git', 'CI/CD'],
      },
    ],
    educationHeading: 'Education',
    education: [
      {
        period: '2017',
        degree: "Master's degree",
        school: 'L.N. Gumilyov Eurasian National University, Nur-Sultan',
        field: 'Space Engineering and Technology',
      },
      {
        period: '2013',
        degree: "Master's degree",
        school: 'Moscow Aviation Institute (National Research University)',
        field: 'Aircraft; Aircraft Testing',
      },
    ],
    coursesHeading: 'Courses',
    courses: [{ period: '2020', title: 'Web development', provider: 'Udemy' }],
    languagesHeading: 'Languages',
    languages: [
      { name: 'Kazakh', level: 'Native' },
      { name: 'English', level: 'C1 · Advanced' },
      { name: 'Russian', level: 'C2 · Fluent' },
    ],
  },
  contact: {
    heading: 'Contact',
    text: "I'm based in Almaty and work remotely or in a hybrid format. If you have a project, a role or just a question, email is the fastest way to reach me.",
    cta: 'Say hello',
    copy: 'Copy email',
    copied: 'Copied',
  },
  footer: {
    built:
      'Designed and built by me with React, TypeScript and Tailwind CSS. Set in Inter and JetBrains Mono.',
    inspired: 'Layout inspired by brittanychiang.com.',
  },
}

export default en

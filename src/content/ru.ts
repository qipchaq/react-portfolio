import type { Content } from './types'
import meta from './meta.json'

const ru: Content = {
  meta: meta.ru,
  ui: {
    skipToContent: 'Перейти к содержимому',
    nav: {
      about: 'Обо мне',
      experience: 'Опыт',
      projects: 'Проекты',
      skills: 'Навыки',
      contact: 'Контакты',
    },
    navLabel: 'Разделы',
    languageLabel: 'Язык',
    themeToLight: 'Включить светлую тему',
    themeToDark: 'Включить тёмную тему',
    social: { github: 'GitHub', linkedin: 'LinkedIn', email: 'Почта' },
    openLink: '(откроется в новой вкладке)',
  },
  person: {
    name: 'Адиль Нуркалиев',
    role: 'Senior Fullstack-разработчик',
    tagline:
      'Создаю сложные корпоративные веб-приложения: масштабируемые интерфейсы на React и TypeScript и сервисы на Node.js.',
    location: 'Алматы, Казахстан · UTC+5',
  },
  about: {
    heading: 'Обо мне',
    paragraphs: [
      'Я senior fullstack-разработчик с **более чем 5-летним коммерческим опытом**: делаю веб-приложения для компаний из сфер образования, медицины, финансов и FinTech. Специализируюсь на сложных корпоративных системах на **React** и **TypeScript**: архитектура фронтенда, производительность и интерфейсы, которые остаются удобными в поддержке по мере роста.',
      'В **Avenga** я спроектировал архитектуру шести микрофронтендов, реализовал более 55 крупных бизнес-функций, менторю разработчиков и провожу code review. Работаю и с бэкендом: **Node.js**, **NestJS**, **PostgreSQL**, **RabbitMQ**. Люблю вести фичу от начала до конца: от схемы базы данных и контракта API до интерфейса.',
      'До разработки я **более шести лет проработал в космической отрасли**: сначала в Аэрокосмическом комитете, затем инженером в «Қазақстан Ғарыш Сапары». У меня две магистерских степени в авиакосмической области. Мне по-прежнему ближе инженерные решения, чем просто интерфейсы: то, что масштабируется, легко поддерживается и продолжает развиваться.',
    ],
    metrics: [
      { value: 12, suffix: '+', label: 'лет в инженерии: космос и разработка' },
      { value: 5, suffix: '+', label: 'лет коммерческой веб-разработки' },
      { value: 6, suffix: '', label: 'микрофронтендов спроектировано' },
      { value: 55, suffix: '+', label: 'крупных бизнес-функций реализовано' },
    ],
  },
  experience: {
    heading: 'Опыт работы',
    software: {
      label: 'Разработка программного обеспечения',
      items: [
        {
          period: 'ноя 2020 — наст. время',
          title: 'Senior Frontend / Fullstack-разработчик',
          company: 'Avenga',
          url: 'https://www.avenga.com/',
          summary:
            'Разрабатываю и развиваю корпоративные веб-продукты для клиентов из образования, медицины, финансов и FinTech — и на фронтенде, и на бэкенде.',
          highlights: [
            'Спроектировал архитектуру шести микрофронтендов и реализовал более 55 крупных бизнес-функций.',
            'Разработал админ-панели со сложными таблицами и формами (React, Redux Toolkit, Ant Design) и real-time чат-мессенджер (RTK Query, WebSocket).',
            'Писал микросервисы на Node.js (NestJS, Express): REST API, PostgreSQL с TypeORM, очереди RabbitMQ и BullMQ, аутентификация на JWT и ролевая модель доступа, контейнеризация в Docker.',
            'Повышал производительность больших приложений: виртуализация, lazy loading, code splitting; провожу code review и менторю разработчиков.',
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
          period: 'фев 2020 — ноя 2020',
          title: 'Фриланс-разработчик',
          company: 'Частный предприниматель',
          summary:
            'Создавал адаптивные динамичные сайты с нуля и до развёртывания — под потребности и пользователей, и бизнеса.',
          tags: ['HTML', 'CSS', 'JavaScript', 'React'],
        },
      ],
    },
    aerospace: {
      label: 'Ранняя карьера: космическая отрасль',
      items: [
        {
          period: 'июл 2019 — окт 2020',
          title: 'Инженер',
          company: 'Национальная компания «Қазақстан Ғарыш Сапары»',
          summary: 'Реализация проектов в области космической деятельности.',
        },
        {
          period: 'апр 2014 — июн 2019',
          title: 'Главный специалист',
          company: 'Аэрокосмический комитет, Казахстан',
          summary: 'Сопровождение проектов в области космической деятельности.',
        },
      ],
    },
  },
  projects: {
    heading: 'Проекты',
    intro:
      'Клиентские проекты не публичны, поэтому здесь личные проекты: я делал их, чтобы осваивать инструменты, которых нет в основной работе.',
    live: 'Демо',
    code: 'Исходный код',
    items: [
      {
        title: 'Интернет-магазин',
        description:
          'Онлайн-магазин с каталогом товаров и оплатой через Stripe, контент управляется в Sanity CMS.',
        image: 'ecommerce',
        liveUrl: 'https://react-ecommerce-bice.vercel.app/',
        codeUrl: 'https://github.com/qipchaq/react-ecommerce',
        tags: ['Next.js', 'Sanity', 'Stripe'],
      },
      {
        title: 'Cryptoverse',
        description:
          'Панель криптовалют: рыночная статистика, страницы монет, графики цен и новости.',
        image: 'cryptoverse',
        liveUrl: 'https://react-app-cryptoverse.netlify.app/',
        codeUrl: 'https://github.com/qipchaq/cryptoverse',
        tags: ['React', 'Redux Toolkit', 'Ant Design', 'Chart.js'],
      },
      {
        title: 'Realtor',
        description:
          'Поиск недвижимости для покупки и аренды, данные подтягиваются из внешнего API.',
        image: 'real-estate',
        liveUrl: 'https://real-estate-swart.vercel.app/',
        codeUrl: 'https://github.com/qipchaq/real-estate',
        tags: ['Next.js', 'Chakra UI', 'Framer Motion'],
      },
      {
        title: 'Travel Adviser',
        description:
          'Путеводитель на карте: рестораны, отели и достопримечательности по всему миру на базе Google Maps.',
        image: 'travel-adviser',
        liveUrl: 'https://frolicking-kelpie-8130e2.netlify.app/',
        codeUrl: 'https://github.com/qipchaq/travel-advisor',
        tags: ['React', 'Material UI', 'Google Maps API'],
      },
      {
        title: 'Лендинг GPT-3',
        description:
          'Адаптивный лендинг AI-продукта, сделанный как чисто фронтенд-упражнение.',
        image: 'open-ai',
        liveUrl: 'https://master--bejewelled-taiyaki-4065bf.netlify.app/',
        codeUrl: 'https://github.com/qipchaq/open-ai',
        tags: ['React', 'CSS'],
      },
      {
        title: 'Online Zoo',
        description:
          'Многостраничный адаптивный сайт о зоопарке, вручную написанный на семантическом HTML, CSS и чистом JavaScript.',
        image: 'zoo',
        liveUrl: 'https://online-zoopark.netlify.app/',
        tags: ['HTML', 'CSS', 'JavaScript'],
      },
    ],
  },
  skills: {
    heading: 'Навыки',
    groups: [
      {
        title: 'Фронтенд',
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
        title: 'Бэкенд',
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
        title: 'Архитектура',
        items: [
          'Микрофронтенды (single-spa)',
          'Микросервисы',
          'Проектирование REST API',
          'JWT / RBAC',
        ],
      },
      {
        title: 'Инструменты',
        items: ['Vite', 'Webpack', 'Vitest', 'Docker', 'Git', 'CI/CD'],
      },
    ],
    educationHeading: 'Образование',
    education: [
      {
        period: '2017',
        degree: 'Магистр',
        school:
          'Евразийский национальный университет имени Л. Н. Гумилёва, Нур-Султан',
        field: 'Космическая техника и технологии',
      },
      {
        period: '2013',
        degree: 'Магистр',
        school:
          'Московский авиационный институт (национальный исследовательский университет)',
        field: 'Летательные аппараты; испытание летательных аппаратов',
      },
    ],
    coursesHeading: 'Курсы',
    courses: [{ period: '2020', title: 'Web development', provider: 'Udemy' }],
    languagesHeading: 'Языки',
    languages: [
      { name: 'Казахский', level: 'родной' },
      { name: 'Английский', level: 'C1 · продвинутый' },
      { name: 'Русский', level: 'C2 · в совершенстве' },
    ],
  },
  contact: {
    heading: 'Контакты',
    text: 'Я живу в Алматы и работаю удалённо или в гибридном формате. Если у вас есть проект, вакансия или просто вопрос — быстрее всего написать мне на почту.',
    cta: 'Написать',
    copy: 'Копировать адрес',
    copied: 'Скопировано',
  },
  footer: {
    built:
      'Спроектирован и написан мной на React, TypeScript и Tailwind CSS. Шрифты: Inter и JetBrains Mono.',
    inspired: 'Композиция вдохновлена сайтом brittanychiang.com.',
  },
}

export default ru

const navLinks = [
  {
    id: 1,
    name: "Projects",
    type: "finder",
  },
  {
    id: 2,
    name: "Contact",
    type: "contact",
  },
  {
    id: 3,
    name: "Resume",
    type: "resume",
  },
];

const navIcons = [
  {
    id: 1,
    img: "/icons/wifi.svg",
  },
  {
    id: 2,
    img: "/icons/search.svg",
  },
  {
    id: 3,
    img: "/icons/user.svg",
  },
  {
    id: 4,
    img: "/icons/mode.svg",
  },
];

const dockApps = [
  {
    id: "finder",
    name: "Portfolio",
    icon: "finder.png",
    canOpen: true,
  },
  {
    id: "safari",
    name: "Blogs",
    icon: "safari.png",
    canOpen: true,
  },
  {
    id: "contact",
    name: "Contact",
    icon: "contact.png",
    canOpen: true,
  },
  {
    id: "terminal",
    name: "Skills",
    icon: "terminal.png",
    canOpen: true,
  },
  {
    id: "trash",
    name: "Trash",
    icon: "trash.png",
    canOpen: false,
  },
];

const posts = [
  {
    id: 1,
    date: "July 14, 2026",
    title: "AI Workflow Builder",
    image: "/images/workflow.png",
    status: "Coming Soon",
    statusColor: "yellow",
    link: "https://github.com/Lakshya123-cyber",
  },
  {
    id: 2,
    date: "May 15, 2026",
    title: "EasyCode",
    image: "/images/easycode.png",
    status: "Production Ready",
    statusColor: "green",
    link: "https://github.com/Lakshya123-cyber/easycode.git",
  },
  {
    id: 3,
    date: "Jan 10, 2026",
    title: "Valkyrie AI",
    image: "/images/valkyrie.png",
    status: "Production Ready",
    statusColor: "green",
    link: "https://github.com/Lakshya123-cyber/valkyrie-agent.git",
  },
];

const techStack = [
  {
    category: "Languages",
    items: ["Python", "TypeScript", "C++", "SQL", "JavaScript"],
  },
  {
    category: "Frontend",
    items: ["React", "Next.js", "OpenTUI", "React Native"],
  },
  {
    category: "Styling",
    items: ["CSS", "Tailwind CSS", "Sass"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Bun", "Hono", "Express"],
  },
  {
    category: "AI/ML",
    items: ["PyTorch", "TensorFlow", "Pandas", "NumPy"],
  },
  {
    category: "Database",
    items: ["PostgreSQL", "MongoDB", "Neon", "Prisma"],
  },
  {
    category: "Cloud & DevOps",
    items: ["Docker", "Git", "GitHub", "Vercel"],
  },
];

const socials = [
  {
    id: 1,
    text: "Github",
    icon: "/icons/github.svg",
    bg: "#666363",
    link: "https://github.com/Lakshya123-cyber",
  },
  {
    id: 2,
    text: "LinkedIn",
    icon: "/icons/linkedin.svg",
    bg: "#05b6f6",
    link: "https://www.linkedin.com/in/lakshya-raikwal",
  },
];

export { navLinks, navIcons, dockApps, posts, techStack, socials };

const WORK_LOCATION = {
  id: 1,
  type: "work",
  name: "Work",
  icon: "/icons/work.svg",
  kind: "folder",
  children: [
    // ▶ Project 1
    {
      id: 5,
      name: "EasyCode",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-10 left-5", // icon position inside Finder
      windowPosition: "top-[5vh] right-15",
      children: [
        {
          id: 1,
          name: "EasyCode.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "The EasyCode project is a terminal-based AI coding assistant designed to simplify and accelerate modern software development.",
            "Instead of switching between your editor, browser, and AI chat, it brings planning, coding, file management, and AI assistance together in one unified terminal experience.",
            "Think of it as your own AI development workspace where intelligent coding assistance, project context, and developer tools work seamlessly together.",
            "It's built with TypeScript, Bun, React, OpenTUI, Hono, Prisma, PostgreSQL, and the AI SDK, with a focus on speed, modular architecture, and an intuitive developer experience.",
          ],
        },
        {
          id: 2,
          name: "easycode.git",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://github.com/Lakshya123-cyber/easycode",
          position: "top-10 right-20",
        },
        {
          id: 3,
          name: "easycode.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 right-80",
          imageUrl: "/images/project-1.png",
        },
      ],
    },

    // ▶ Project 2
    {
      id: 6,
      name: "Telemetry Analysis",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-52 right-80",
      windowPosition: "top-[20vh] right-8",
      children: [
        {
          id: 1,
          name: "Telemetry Analysis.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 right-10",
          description: [
            "The Telemetry Driver Performance Analysis project is an AI-powered analytics platform that transforms raw racing telemetry into meaningful performance insights.",
            "Instead of displaying raw data, it processes lap telemetry, compares racing lines, and visualizes driver performance through interactive graphs and automated analysis.",
            "Think of it as a virtual race engineer helping drivers understand their strengths, identify mistakes, and improve lap times using data-driven feedback.",
            "It's built with Python, Pandas, NumPy, Matplotlib, and machine learning techniques as part of my Bachelor's thesis in Artificial Intelligence (Data Engineering).",
          ],
        },
        {
          id: 2,
          name: "telemetry-analyzer.git",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://github.com/Lakshya123-cyber/telemetry-driver-performance-analysis",
          position: "top-20 left-20",
        },
        {
          id: 3,
          name: "telemetry-analyzer.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 left-80",
          imageUrl: "/images/project-2.png",
        },
      ],
    },

    {
      id: 7,
      name: "Valkyrie AI",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-50 left-80",
      windowPosition: "top-[46vh] right-17",
      children: [
        {
          id: 1,
          name: "Valkyrie_AI.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "Valkyrie AI is an autonomous software engineering agent built to tackle complex development tasks from start to finish.",
            "Rather than simply answering prompts, it understands your codebase, plans its own approach, executes actions, and collaborates with specialized AI agents to deliver real results.",
            "With long-term memory, intelligent context management, MCP integrations, and self-improving workflows, Valkyrie AI transforms AI from an assistant into a true engineering partner.",
          ],
        },
        {
          id: 2,
          name: "valkyrie.git",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://github.com/Lakshya123-cyber/valkyrie-agent",
          position: "top-10 right-20",
        },
        {
          id: 3,
          name: "valkyrie.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 right-80",
          imageUrl: "/images/project-3.png",
        },
      ],
    },

    // ▶ Project 3
    {
      id: 8,
      name: "AI Workflow Platform",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-10 left-80",
      windowPosition: "top-[33vh] right-8",
      children: [
        {
          id: 1,
          name: "AI_Workflow_Platform.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "The AgentFlow project is a full-stack AI workflow automation platform currently in development.",
            "It will enable users to visually create AI-powered workflows by connecting LLMs, APIs, browser automation, and custom nodes in a collaborative canvas.",
            "Think of it as an AI-native workflow builder inspired by tools like n8n, built for developers and teams who want to automate complex tasks.",
            "Coming Soon! Building with TypeScript, Next.js, Trigger.dev, Liveblocks, Browserbase, PostgreSQL, and modern cloud infrastructure.",
          ],
        },
        {
          id: 2,
          name: "ai-workflow-platform.git",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://github.com/Lakshya123-cyber",
          position: "top-10 right-20",
        },
        {
          id: 3,
          name: "ai-workflow.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 right-80",
          imageUrl: "/images/project-4.png",
        },
      ],
    },
  ],
};

const ABOUT_LOCATION = {
  id: 2,
  type: "about",
  name: "About me",
  icon: "/icons/info.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "about-me.txt",
      icon: "/images/txt.png",
      kind: "file",
      fileType: "txt",
      position: "top-30 left-5",
      subtitle: "Meet the Developer Behind the Code",
      image: "/images/profile_pic.jpg",
      description: [
        "Hey! I'm Lakshya 👋, a software developer focused on AI-powered applications, developer tools, and modern full-stack development.",
        "I enjoy building products that combine intelligent automation with clean, scalable software, from terminal-based AI coding assistants to machine learning systems and interactive web applications.",
        "I'm constantly learning new technologies, experimenting with AI-assisted development, and turning ambitious ideas into real projects.",
        "When I'm not coding, you'll probably find me sim racing, cooking something new, at the gym, or sketching out the next project I want to build ☕",
      ],
    },
  ],
};

const RESUME_LOCATION = {
  id: 3,
  type: "resume",
  name: "Resume",
  icon: "/icons/file.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "cv.pdf",
      icon: "/images/pdf.png",
      kind: "file",
      fileType: "pdf",
    },
  ],
};

export const locations = {
  work: WORK_LOCATION,
  about: ABOUT_LOCATION,
  resume: RESUME_LOCATION,
};

const INITIAL_Z_INDEX = 1000;

const WINDOW_CONFIG = {
  finder: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  contact: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  resume: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  safari: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  photos: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  terminal: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  txtfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  imgfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
};

export { INITIAL_Z_INDEX, WINDOW_CONFIG };

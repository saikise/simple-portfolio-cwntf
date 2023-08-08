import { v4 as uuidv4 } from "uuid";
import { DEMO_ICON } from "./constants/icons";
import { Project } from "./lib/types";

export const projects: Project[] = [
  // Web Projects
  {
    id: uuidv4(),
    pinned: true,
    title: "Todo List App",
    description: "A simple and elegant app to manage your tasks and goals.",
    image: "/images/study.jpeg",
    series: {
      id: uuidv4(),
      code: "web-projects",
      title: "Web Projects",
    },
    demo: {
      id: uuidv4(),
      name: "Live Demo",
      url: "/demo", // Use your demo url here
      svg: DEMO_ICON,
    },
  },
  {
    id: uuidv4(),
    title: "Weather App",
    description:
      "A beautiful and responsive app to check the weather forecast for any location.",
    image: "/images/weather.jpeg",
    series: {
      id: uuidv4(),
      code: "web-projects",
      title: "Web Projects",
    },
    demo: {
      id: uuidv4(),
      name: "Live Demo",
      url: "/demo", // Use your demo url here
      svg: DEMO_ICON,
    },
  },
  {
    id: uuidv4(),
    title: "Calculator App",
    description:
      "A simple and functional app to perform basic arithmetic operations.",
    image: "/images/calculator.jpeg",
    series: {
      id: uuidv4(),
      code: "web-projects",
      title: "Web Projects",
    },
    demo: {
      id: uuidv4(),
      name: "Live Demo",
      url: "/demo", // Use your demo url here
      svg: DEMO_ICON,
    },
  },
  {
    id: uuidv4(),
    title: "Quiz App",
    description:
      "A fun and interactive app to test your knowledge on various topics.",
    image: "/images/exam.jpeg",
    series: {
      id: uuidv4(),
      code: "web-projects",
      title: "Web Projects",
    },
    demo: {
      id: uuidv4(),
      name: "Live Demo",
      url: "/demo", // Use your demo url here
      svg: DEMO_ICON,
    },
  },
  {
    id: uuidv4(),
    title: "Blog App",
    description:
      "A modern and minimalist app to create and share your own blog posts.",
    image: "/images/typewriter.jpeg",
    series: {
      id: uuidv4(),
      code: "web-projects",
      title: "Web Projects",
    },
    demo: {
      id: uuidv4(),
      name: "Live Demo",
      url: "/demo", // Use your demo url here
      svg: DEMO_ICON,
    },
  },
  {
    id: uuidv4(),
    title: "Chat App",
    description:
      "A real-time and secure app to chat with your friends and family.",
    image: "/images/telephone.jpeg",
    series: {
      id: uuidv4(),
      code: "web-projects",
      title: "Web Projects",
    },
    demo: {
      id: uuidv4(),
      name: "Live Demo",
      url: "/demo", // Use your demo url here
      svg: DEMO_ICON,
    },
  },
  {
    id: uuidv4(),
    title: "E-commerce App",
    description:
      "A sleek and user-friendly app to browse and buy products online.",
    image: "/images/container.jpeg",
    series: {
      id: uuidv4(),
      code: "web-projects",
      title: "Web Projects",
    },
    demo: {
      id: uuidv4(),
      name: "Live Demo",
      url: "/demo", // Use your demo url here
      svg: DEMO_ICON,
    },
  },
  {
    id: uuidv4(),
    title: "Music Player App",
    description:
      "A stylish and intuitive app to listen to your favorite songs and playlists.",
    image: "/images/headphones.jpeg",
    series: {
      id: uuidv4(),
      code: "web-projects",
      title: "Web Projects",
    },
    demo: {
      id: uuidv4(),
      name: "Live Demo",
      url: "/demo", // Use your demo url here
      svg: DEMO_ICON,
    },
  },
  {
    id: uuidv4(),
    title: "Movie App",
    description:
      "A cool and informative app to discover and rate movies and TV shows.",
    image: "/images/cinema.jpeg",
    series: {
      id: uuidv4(),
      code: "web-projects",
      title: "Web Projects",
    },
    demo: {
      id: uuidv4(),
      name: "Live Demo",
      url: "/demo", // Use your demo url here
      svg: DEMO_ICON,
    },
  },
  {
    id: uuidv4(),
    title: "Todo List App",
    description: "A simple and elegant app to manage your tasks and goals.",
    image: "/images/team.jpeg",
    series: {
      id: uuidv4(),
      code: "web-projects",
      title: "Web Projects",
    },
    demo: {
      id: uuidv4(),
      name: "Live Demo",
      url: "/demo", // Use your demo url here
      svg: DEMO_ICON,
    },
  },
  // Mobile Projects
  {
    id: uuidv4(),
    pinned: true,
    title: "Spotify Clone",
    description: "A modern and responsive clone of the Spotify Mobile Player.",
    image: "/images/spotify.jpeg",
    series: {
      id: uuidv4(),
      code: "mobile-projects",
      title: "Mobile Projects",
    },
    demo: {
      id: uuidv4(),
      name: "Live Demo",
      url: "/demo", // Use your demo url here
      svg: DEMO_ICON,
    },
  },
  {
    id: uuidv4(),
    pinned: true,
    title: "Instagram Clone",
    description:
      "A clone of the popular social media app to share photos and videos with your followers.",
    image: "/images/model.jpeg",
    series: {
      id: uuidv4(),
      code: "mobile-projects",
      title: "Mobile Projects",
    },
    demo: {
      id: uuidv4(),
      name: "Live Demo",
      url: "/demo", // Use your demo url here
      svg: DEMO_ICON,
    },
  },
  {
    id: uuidv4(),
    title: "TikTok Clone",
    description:
      "A clone of the viral video-sharing app to create and watch short-form videos with music and effects.",
    image: "/images/tiktok.jpeg",
    series: {
      id: uuidv4(),
      code: "mobile-projects",
      title: "Mobile Projects",
    },
    demo: {
      id: uuidv4(),
      name: "Live Demo",
      url: "/demo",
      svg: DEMO_ICON,
    },
  },
  {
    id: uuidv4(),
    title: "Uber Clone",
    description:
      "A clone of the popular ride-hailing app to book and track your trips with drivers.",
    image: "/images/uber.jpeg",
    series: {
      id: uuidv4(),
      code: "mobile-projects",
      title: "Mobile Projects",
    },
    demo: {
      id: uuidv4(),
      name: "Live Demo",
      url: "/demo", // Use your demo url here
      svg: DEMO_ICON,
    },
  },
  // Desktop projects
  {
    id: uuidv4(), //uuid
    pinned: true,
    title: "Todo List",
    description:
      "A simple desktop app that lets you create and manage your tasks.",
    image: "/images/penpaper.jpeg",
    series: {
      id: uuidv4(), //uuid
      code: "desktop-projects", // web-projects, mobile-projects, desktop-projects
      title: "Desktop Projects", // Web Projects, Mobile Projects, Desktop Projects
    },
    demo: {
      id: uuidv4(), //uuid
      name: "Live Demo",
      url: "/demo", // Use your demo url here
      svg: DEMO_ICON,
    },
  },
  {
    id: uuidv4(), //uuid
    pinned: false,
    title: "Calculator",
    description: "A desktop app that performs basic arithmetic operations.",
    image: "/images/calculator.jpeg",
    series: {
      id: uuidv4(), //uuid
      code: "desktop-projects", // web-projects, mobile-projects, desktop-projects
      title: "Desktop Projects", // Web Projects, Mobile Projects, Desktop Projects
    },
    demo: {
      id: uuidv4(), //uuid
      name: "Live Demo",
      url: "/demo", // Use your demo url here
      svg: DEMO_ICON,
    },
  },
  {
    id: uuidv4(), //uuid
    pinned: false,
    title: "Text Editor",
    description: "A desktop app that allows you to create and edit text files.",
    image: "/images/vscode.jpeg",
    series: {
      id: uuidv4(), //uuid
      code: "desktop-projects", // web-projects, mobile-projects, desktop-projects
      title: "Desktop Projects", // Web Projects, Mobile Projects, Desktop Projects
    },
    demo: {
      id: uuidv4(), //uuid
      name: "Live Demo",
      url: "/demo", // use # for now
      svg: DEMO_ICON, // use DEMO_ICON
    },
  },
  {
    id: uuidv4(), //uuid
    pinned: false,
    title: "Music Player",
    description:
      "A desktop app that plays your favorite songs from your local library or online sources.",
    image: "/images/dj.jpeg",
    series: {
      id: uuidv4(), //uuid
      code: "desktop-projects", // web-projects, mobile-projects, desktop-projects
      title: "Desktop Projects", // Web Projects, Mobile Projects, Desktop Projects
    },
    demo: {
      id: uuidv4(), //uuid
      name: "Live Demo",
      url: "/demo", // Use your demo url here
      svg: DEMO_ICON,
    },
  },
  {
    id: uuidv4(), //uuid
    pinned: false,
    title: "Image Viewer",
    description:
      "A desktop app that displays images from your local folder or online sources.",
    image: "/images/dslr.jpeg",
    series: {
      id: uuidv4(), //uuid
      code: "desktop-projects", // web-projects, mobile-projects, desktop-projects
      title: "Desktop Projects", // Web Projects, Mobile Projects, Desktop Projects
    },
    demo: {
      id: uuidv4(), //uuid
      name: "Live Demo",
      url: "/demo", // Use your demo url here
      svg: DEMO_ICON,
    },
  },
  {
    id: uuidv4(), //uuid
    pinned: false,
    title: "Weather App",
    description:
      "A desktop app that shows the current weather and forecast for any location.",
    image: "/images/sun.jpeg",
    series: {
      id: uuidv4(), //uuid
      code: "desktop-projects", // web-projects, mobile-projects, desktop-projects
      title: "Desktop Projects", // Web Projects, Mobile Projects, Desktop Projects
    },
    demo: {
      id: uuidv4(), //uuid
      name: "Live Demo",
      url: "/demo", // Use your demo url here
      svg: DEMO_ICON,
    },
  },
  {
    id: uuidv4(), //uuid
    pinned: false,
    title: "Chat App",
    description:
      "A desktop app that lets you chat with other users in real-time using sockets.",
    image: "/images/meeting.jpeg",
    series: {
      id: uuidv4(), //uuid
      code: "desktop-projects", // web-projects, mobile-projects, desktop-projects
      title: "Desktop Projects", // Web Projects, Mobile Projects, Desktop Projects
    },
    demo: {
      id: uuidv4(), //uuid
      name: "Live Demo",
      url: "/demo", // Use your demo url here
      svg: DEMO_ICON,
    },
  },
  {
    id: uuidv4(), //uuid
    pinned: false,
    title: "Paint App",
    description:
      "A desktop app that lets you draw and edit images using various tools and effects.",
    image: "/images/paintbrush.jpeg",
    series: {
      id: uuidv4(), //uuid
      code: "desktop-projects", // web-projects, mobile-projects, desktop-projects
      title: "Desktop Projects", // Web Projects, Mobile Projects, Desktop Projects
    },
    demo: {
      id: uuidv4(), //uuid
      name: "Live Demo",
      url: "/demo", // Use your demo url here
      svg: DEMO_ICON,
    },
  },
  {
    id: uuidv4(), //uuid
    pinned: false,
    title: "Clock App",
    description:
      "A desktop app that shows the current time and date in different time zones.",
    image: "/images/hourglass.jpeg",
    series: {
      id: uuidv4(), //uuid
      code: "desktop-projects", // web-projects, mobile-projects, desktop-projects
      title: "Desktop Projects", // Web Projects, Mobile Projects, Desktop Projects
    },
    demo: {
      id: uuidv4(), //uuid
      name: "Live Demo",
      url: "/demo", // Use your demo url here
      svg: DEMO_ICON,
    },
  },
  {
    id: uuidv4(), //uuid
    pinned: false,
    title: "Game App",
    description:
      "A desktop app that lets you play a simple arcade game with keyboard controls.",
    image: "/images/controller.jpeg",
    series: {
      id: uuidv4(), //uuid
      code: "desktop-projects", // web-projects, mobile-projects, desktop-projects
      title: "Desktop Projects", // Web Projects, Mobile Projects, Desktop Projects
    },
    demo: {
      id: uuidv4(), //uuid
      name: "Live Demo",
      url: "/demo", // Use your demo url here
      svg: DEMO_ICON,
    },
  },
];

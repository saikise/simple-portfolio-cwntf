import { projects } from "../projects";

export const SERIES = [
  {
    code: "all",
    title: "All",
  },
  {
    code: "web-projects",
    title: "Web Projects",
  },
  {
    code: "mobile-projects",
    title: "Mobile Projects",
  },
  {
    code: "desktop-projects",
    title: "Desktop Projects",
  },
];
export const PINNED = projects.filter((project) => project.pinned).slice(0, 4);
export const WEB_PROJECTS = projects
  .filter((project) => project.series.code === "web-projects")
  .slice(0, 4);
export const MOBILE_PROJECTS = projects
  .filter((project) => project.series.code === "mobile-projects")
  .slice(0, 4);
export const DESKTOP_PROJECTS = projects
  .filter((project) => project.series.code === "desktop-projects")
  .slice(0, 4);
export const TOP_SEARCHES = [
  {
    title: "Clone",
    url: "/search?q=Clone",
  },
  {
    title: "Todo",
    url: "/search?q=Todo",
  },
  {
    title: "Weather",
    url: "/search?q=Weather",
  },
  {
    title: "Chat",
    url: "/search?q=Chat",
  },
  {
    title: "E-commerce",
    url: "/search?q=E-commerce",
  },
];

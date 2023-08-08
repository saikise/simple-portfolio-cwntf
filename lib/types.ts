export interface Project {
  id: string; //uuid
  pinned?: boolean;
  title: string;
  description: string;
  image: string;
  series: {
    id: string; //uuid
    code: string; // web-projects, mobile-projects, desktop-projects
    title: string; // Web Projects, Mobile Projects, Desktop Projects
  };
  demo: {
    id: string; //uuid
    name: string;
    url: string; // your own domain or codepen
    svg: JSX.Element; // use DEMO_ICON
  };
}
